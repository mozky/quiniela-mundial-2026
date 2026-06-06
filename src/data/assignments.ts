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
    "tier1Team": "GB-ENG",
    "tier2Team": "PL",
    "tier3Team": "RS"
  },
  {
    "friend": "Ali MG",
    "tier1Team": "NL",
    "tier2Team": "US",
    "tier3Team": "CR"
  },
  {
    "friend": "Bernie",
    "tier1Team": "ES",
    "tier2Team": "MX",
    "tier3Team": "TN"
  },
  {
    "friend": "Bryan",
    "tier1Team": "FR",
    "tier2Team": "JP",
    "tier3Team": "CL"
  },
  {
    "friend": "Chino",
    "tier1Team": "UY",
    "tier2Team": "EC",
    "tier3Team": "EG"
  },
  {
    "friend": "Diego",
    "tier1Team": "BR",
    "tier2Team": "CA",
    "tier3Team": "CM"
  },
  {
    "friend": "Genaro",
    "tier1Team": "PT",
    "tier2Team": "DK",
    "tier3Team": "GB-WLS"
  },
  {
    "friend": "Ivan",
    "tier1Team": "IT",
    "tier2Team": "MA",
    "tier3Team": "AT"
  },
  {
    "friend": "Roman",
    "tier1Team": "HR",
    "tier2Team": "SN",
    "tier3Team": "PE"
  },
  {
    "friend": "Luis",
    "tier1Team": "AR",
    "tier2Team": "KR",
    "tier3Team": "UA"
  },
  {
    "friend": "Ramiro",
    "tier1Team": "DE",
    "tier2Team": "CH",
    "tier3Team": "SE"
  },
  {
    "friend": "Toño",
    "tier1Team": "BE",
    "tier2Team": "IR",
    "tier3Team": "NG"
  },
  {
    "friend": "Moz",
    "tier1Team": "CO",
    "tier2Team": "AU",
    "tier3Team": "SA"
  }
];
