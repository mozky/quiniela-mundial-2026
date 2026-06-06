export interface Team {
  id: string;           // ISO 3166-1 alpha-2 country code
  name: string;         // Display name
  tier: 1 | 2 | 3 | 4; // Ranking tier
}

export const teams: Team[] = [
  // Tier 1 - Top 13 ranked teams
  { id: 'AR', name: 'Argentina', tier: 1 },
  { id: 'FR', name: 'Francia', tier: 1 },
  { id: 'ES', name: 'España', tier: 1 },
  { id: 'GB-ENG', name: 'Inglaterra', tier: 1 },
  { id: 'BR', name: 'Brasil', tier: 1 },
  { id: 'BE', name: 'Bélgica', tier: 1 },
  { id: 'NL', name: 'Países Bajos', tier: 1 },
  { id: 'PT', name: 'Portugal', tier: 1 },
  { id: 'IT', name: 'Italia', tier: 1 },
  { id: 'DE', name: 'Alemania', tier: 1 },
  { id: 'CO', name: 'Colombia', tier: 1 },
  { id: 'UY', name: 'Uruguay', tier: 1 },
  { id: 'HR', name: 'Croacia', tier: 1 },

  // Tier 2 - Next 13 ranked teams
  { id: 'MA', name: 'Marruecos', tier: 2 },
  { id: 'MX', name: 'México', tier: 2 },
  { id: 'US', name: 'Estados Unidos', tier: 2 },
  { id: 'CH', name: 'Suiza', tier: 2 },
  { id: 'DK', name: 'Dinamarca', tier: 2 },
  { id: 'JP', name: 'Japón', tier: 2 },
  { id: 'SN', name: 'Senegal', tier: 2 },
  { id: 'KR', name: 'Corea del Sur', tier: 2 },
  { id: 'IR', name: 'Irán', tier: 2 },
  { id: 'AU', name: 'Australia', tier: 2 },
  { id: 'PL', name: 'Polonia', tier: 2 },
  { id: 'EC', name: 'Ecuador', tier: 2 },
  { id: 'CA', name: 'Canadá', tier: 2 },

  // Tier 3 - Next 13 ranked teams
  { id: 'GB-WLS', name: 'Gales', tier: 3 },
  { id: 'RS', name: 'Serbia', tier: 3 },
  { id: 'AT', name: 'Austria', tier: 3 },
  { id: 'UA', name: 'Ucrania', tier: 3 },
  { id: 'SE', name: 'Suecia', tier: 3 },
  { id: 'TN', name: 'Túnez', tier: 3 },
  { id: 'CL', name: 'Chile', tier: 3 },
  { id: 'PE', name: 'Perú', tier: 3 },
  { id: 'CR', name: 'Costa Rica', tier: 3 },
  { id: 'EG', name: 'Egipto', tier: 3 },
  { id: 'NG', name: 'Nigeria', tier: 3 },
  { id: 'CM', name: 'Camerún', tier: 3 },
  { id: 'SA', name: 'Arabia Saudita', tier: 3 },

  // Tier 4 - Last 9 teams (not used in pool)
  { id: 'IQ', name: 'Irak', tier: 4 },
  { id: 'JM', name: 'Jamaica', tier: 4 },
  { id: 'QA', name: 'Catar', tier: 4 },
  { id: 'PA', name: 'Panamá', tier: 4 },
  { id: 'HN', name: 'Honduras', tier: 4 },
  { id: 'DZ', name: 'Argelia', tier: 4 },
  { id: 'GH', name: 'Ghana', tier: 4 },
  { id: 'NZ', name: 'Nueva Zelanda', tier: 4 },
  { id: 'PY', name: 'Paraguay', tier: 4 },
];

// Helper function to get team by ID
export function getTeamById(id: string): Team | undefined {
  return teams.find(team => team.id === id);
}

// Get teams by tier
export function getTeamsByTier(tier: 1 | 2 | 3 | 4): Team[] {
  return teams.filter(team => team.tier === tier);
}
