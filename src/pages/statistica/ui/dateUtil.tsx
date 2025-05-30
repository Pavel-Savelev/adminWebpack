export function parseDDMMYYYY(dateStr: string): Date | null {
  const [day, month, year] = dateStr.split("/").map(Number);
  const isValid = day > 0 && day <= 31 && month > 0 && month <= 12 && year > 1000;
  if (!isValid) return null;
  return new Date(year, month - 1, day);
}
