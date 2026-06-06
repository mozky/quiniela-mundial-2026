export const friends = [
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

export type Friend = typeof friends[number];
