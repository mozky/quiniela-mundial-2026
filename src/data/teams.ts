export interface Team {
  id: string;           // ISO 3166-1 alpha-2 country code
  name: string;         // Display name
  tier: 1 | 2 | 3 | 4; // Ranking tier
}

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
  { id: 'NO', name: 'Noruega', tier: 1 },
  { id: 'CO', name: 'Colombia', tier: 1 },
  { id: 'JP', name: 'Japón', tier: 1 },
  { id: 'US', name: 'Estados Unidos', tier: 1 },

  // Tier 2 - Next 13 ranked teams (Caballos Negros)
  { id: 'MA', name: 'Marruecos', tier: 2 },
  { id: 'UY', name: 'Uruguay', tier: 2 },
  { id: 'MX', name: 'México', tier: 2 },
  { id: 'CH', name: 'Suiza', tier: 2 },
  { id: 'HR', name: 'Croacia', tier: 2 },
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

// Helper function to get team by ID
export function getTeamById(id: string): Team | undefined {
  return teams.find(team => team.id === id);
}

// Get teams by tier
export function getTeamsByTier(tier: 1 | 2 | 3 | 4): Team[] {
  return teams.filter(team => team.tier === tier);
}