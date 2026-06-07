import type { Friend } from './friends';

export interface Assignment {
  friend: Friend;
  tier1Team: string; // Team ID from Tier 1
  tier2Team: string; // Team ID from Tier 2
  tier3Team: string; // Team ID from Tier 3
}

export const assignments: Assignment[] = [
  {
    "friend": "Ali DT",
    "tier1Team": "DE",
    "tier2Team": "CH",
    "tier3Team": "BA"
  },
  {
    "friend": "Ali MG",
    "tier1Team": "NL",
    "tier2Team": "AT",
    "tier3Team": "NZ"
  },
  {
    "friend": "Bernie",
    "tier1Team": "FR",
    "tier2Team": "SN",
    "tier3Team": "GH"
  },
  {
    "friend": "Bryan",
    "tier1Team": "MA",
    "tier2Team": "EC",
    "tier3Team": "DZ"
  },
  {
    "friend": "Chino",
    "tier1Team": "BE",
    "tier2Team": "NO",
    "tier3Team": "IR"
  },
  {
    "friend": "Diego",
    "tier1Team": "PT",
    "tier2Team": "TR",
    "tier3Team": "AU"
  },
  {
    "friend": "Genaro",
    "tier1Team": "BR",
    "tier2Team": "CI",
    "tier3Team": "TN"
  },
  {
    "friend": "Ivan",
    "tier1Team": "ES",
    "tier2Team": "JP",
    "tier3Team": "DRC"
  },
  {
    "friend": "Roman",
    "tier1Team": "GB-ENG",
    "tier2Team": "CA",
    "tier3Team": "PY"
  },
  {
    "friend": "Luis",
    "tier1Team": "UY",
    "tier2Team": "GB-SCT",
    "tier3Team": "SA"
  },
  {
    "friend": "Ramiro",
    "tier1Team": "AR",
    "tier2Team": "SE",
    "tier3Team": "KR"
  },
  {
    "friend": "Toño",
    "tier1Team": "CO",
    "tier2Team": "US",
    "tier3Team": "EG"
  },
  {
    "friend": "Moz",
    "tier1Team": "HR",
    "tier2Team": "MX",
    "tier3Team": "CZ"
  }
];
