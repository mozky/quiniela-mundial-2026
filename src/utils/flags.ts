/**
 * Convert ISO 3166-1 alpha-2 country code to emoji flag
 * @param countryCode - Two-letter country code (e.g., 'US', 'BR', 'AR')
 * @returns Unicode emoji flag (e.g., '🇺🇸', '🇧🇷', '🇦🇷')
 */
export function getCountryFlag(countryCode: string): string {
  // Special handling for England and Wales
  const flagMap: Record<string, string> = {
    'GB-ENG': '🏴󠁧󠁢󠁥󠁮󠁧󠁿', // England flag
    'GB-SCT': '🏴󠁧󠁢󠁳󠁣󠁴󠁿', // Wales flag
    'DRC': '🇨🇩', // Congo flag
  };

  // Check if it's a special case
  if (flagMap[countryCode]) {
    return flagMap[countryCode];
  }

  // Convert ISO 3166-1 alpha-2 code to regional indicator symbols
  // Each letter is converted to a Regional Indicator Symbol (U+1F1E6 - U+1F1FF)
  // Formula: 0x1F1E6 + (letter.charCodeAt(0) - 'A'.charCodeAt(0))
  // Simplified: 127397 + letter.charCodeAt(0)
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt(0));

  return String.fromCodePoint(...codePoints);
}
