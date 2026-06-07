import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Import data (using type annotation to avoid TypeScript issues)
interface Team {
  id: string;
  name: string;
  tier: 1 | 2 | 3 | 4;
}

const friends = [
  'Ali DT',
  'Ali MG',
  'Bernie',
  'Bryan',
  'Chino',
  'Diego',
  'Genaro',
  'Ivan',
  'Roman',
  'Luis',
  'Ramiro',
  'Toño',
  'Moz',
] as const;

export const teams: Team[] = [
  // Tier 1 - Top 13 ranked teams (Favoritos)
  { id: 'ES', name: 'España', tier: 1 },
  { id: 'FR', name: 'Francia', tier: 1 },
  { id: 'GB-ENG', name: 'Inglaterra', tier: 1 },
  { id: 'BR', name: 'Brasil', tier: 1 },
  { id: 'PT', name: 'Portugal', tier: 1 },
  { id: 'AR', name: 'Argentina', tier: 1 },
  { id: 'DE', name: 'Alemania', tier: 1 },
  { id: 'NL', name: 'Países Bajos', tier: 1 },
  { id: 'BE', name: 'Bélgica', tier: 1 },
  { id: 'CO', name: 'Colombia', tier: 1 },
  { id: 'MA', name: 'Marruecos', tier: 1 },
  { id: 'UY', name: 'Uruguay', tier: 1 },
  { id: 'HR', name: 'Croacia', tier: 1 },

  // Tier 2 - Next 13 ranked teams (Caballos Negros)

  { id: 'NO', name: 'Noruega', tier: 2 },
  { id: 'JP', name: 'Japón', tier: 2 },
  { id: 'US', name: 'Estados Unidos', tier: 2 },
  { id: 'MX', name: 'México', tier: 2 },
  { id: 'CH', name: 'Suiza', tier: 2 },
  { id: 'TR', name: 'Turquía', tier: 2 },
  { id: 'EC', name: 'Ecuador', tier: 2 },
  { id: 'AT', name: 'Austria', tier: 2 },
  { id: 'SN', name: 'Senegal', tier: 2 },
  { id: 'SE', name: 'Suecia', tier: 2 },
  { id: 'CA', name: 'Canadá', tier: 2 },
  { id: 'CI', name: 'Costa de Marfil', tier: 2 },
  { id: 'GB-SCT', name: 'Escocia', tier: 2 },

  // Tier 3 - Next 13 ranked teams (Sorpresas)
  { id: 'PY', name: 'Paraguay', tier: 3 },
  { id: 'DZ', name: 'Argelia', tier: 3 },
  { id: 'BA', name: 'Bosnia y Herzegovina', tier: 3 },
  { id: 'GH', name: 'Ghana', tier: 3 },
  { id: 'EG', name: 'Egipto', tier: 3 },
  { id: 'KR', name: 'Corea del Sur', tier: 3 },
  { id: 'CZ', name: 'República Checa', tier: 3 },
  { id: 'IR', name: 'Irán', tier: 3 },
  { id: 'AU', name: 'Australia', tier: 3 },
  { id: 'DRC', name: 'Congo', tier: 3 },
  { id: 'TN', name: 'Túnez', tier: 3 },
  { id: 'SA', name: 'Arabia Saudita', tier: 3 },
  { id: 'NZ', name: 'Nueva Zelanda', tier: 3 },

  // Tier 4 - Last 9 teams (in the World Cup, NOT used in the pool)
  { id: 'QA', name: 'Catar', tier: 4 },
  { id: 'CV', name: 'Cabo Verde', tier: 4 },
  { id: 'UZ', name: 'Uzbekistán', tier: 4 },
  { id: 'ZA', name: 'Sudáfrica', tier: 4 },
  { id: 'IQ', name: 'Irak', tier: 4 },
  { id: 'JO', name: 'Jordania', tier: 4 },
  { id: 'PA', name: 'Panamá', tier: 4 },
  { id: 'CW', name: 'Curazao', tier: 4 },
  { id: 'HT', name: 'Haití', tier: 4 },
];

/**
 * Fisher-Yates shuffle algorithm
 */
function shuffle<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

interface Assignment {
  friend: string;
  tier1Team: string;
  tier2Team: string;
  tier3Team: string;
}

/**
 * Generate random team assignments
 */
function generateAssignments(): Assignment[] {
  // Separate teams by tier
  const tier1Teams = teams.filter(t => t.tier === 1);
  const tier2Teams = teams.filter(t => t.tier === 2);
  const tier3Teams = teams.filter(t => t.tier === 3);

  // Validate we have exactly 13 teams per tier
  if (tier1Teams.length !== 13 || tier2Teams.length !== 13 || tier3Teams.length !== 13) {
    throw new Error('Each tier must have exactly 13 teams');
  }

  // Shuffle each tier
  const shuffledTier1 = shuffle(tier1Teams);
  const shuffledTier2 = shuffle(tier2Teams);
  const shuffledTier3 = shuffle(tier3Teams);

  // Assign one team from each tier to each friend
  const assignments: Assignment[] = friends.map((friend, index) => ({
    friend,
    tier1Team: shuffledTier1[index].id,
    tier2Team: shuffledTier2[index].id,
    tier3Team: shuffledTier3[index].id,
  }));

  return assignments;
}

/**
 * Validate assignments
 */
function validateAssignments(assignments: Assignment[]): void {
  // Check we have exactly 13 assignments
  if (assignments.length !== 13) {
    throw new Error('Must have exactly 13 assignments');
  }

  // Track all assigned teams
  const allTeams = new Set<string>();

  // Validate each assignment
  for (const assignment of assignments) {
    // Check friend exists
    if (!friends.includes(assignment.friend as any)) {
      throw new Error(`Invalid friend: ${assignment.friend}`);
    }

    // Check each team and track
    [assignment.tier1Team, assignment.tier2Team, assignment.tier3Team].forEach(teamId => {
      if (allTeams.has(teamId)) {
        throw new Error(`Duplicate team assignment: ${teamId}`);
      }
      allTeams.add(teamId);

      // Verify team exists
      const team = teams.find(t => t.id === teamId);
      if (!team) {
        throw new Error(`Invalid team ID: ${teamId}`);
      }
    });
  }

  // Verify we used exactly 39 teams (13 × 3)
  if (allTeams.size !== 39) {
    throw new Error(`Expected 39 teams, got ${allTeams.size}`);
  }

  console.log('✅ Validation passed!');
  console.log(`   - 13 friends with assignments`);
  console.log(`   - 39 unique teams assigned (13 per tier)`);
  console.log(`   - No duplicate teams`);
}

/**
 * Generate TypeScript file content
 */
function generateFileContent(assignments: Assignment[]): string {
  return `import type { Friend } from './friends';

export interface Assignment {
  friend: Friend;
  tier1Team: string; // Team ID from Tier 1
  tier2Team: string; // Team ID from Tier 2
  tier3Team: string; // Team ID from Tier 3
}

export const assignments: Assignment[] = ${JSON.stringify(assignments, null, 2)};
`;
}

/**
 * Main execution
 */
function main() {
  console.log('🎲 Generating World Cup 2026 pool assignments...\n');

  // Generate assignments
  const assignments = generateAssignments();

  // Validate assignments
  validateAssignments(assignments);

  // Generate file content
  const fileContent = generateFileContent(assignments);

  // Write to file
  const outputPath = join(__dirname, '..', 'src', 'data', 'assignments.ts');
  writeFileSync(outputPath, fileContent, 'utf-8');

  console.log(`\n✅ Assignments written to: src/data/assignments.ts`);
  console.log('\n📋 Summary:');
  assignments.forEach(({ friend, tier1Team, tier2Team, tier3Team }) => {
    const t1 = teams.find(t => t.id === tier1Team)?.name;
    const t2 = teams.find(t => t.id === tier2Team)?.name;
    const t3 = teams.find(t => t.id === tier3Team)?.name;
    console.log(`   ${friend.padEnd(10)} → ${t1} | ${t2} | ${t3}`);
  });
  console.log('\n🎉 Done! Ready to build your pool page.');
}

main();
