export function formatHourOfDay(hourDate: Date) {
  let formattedHour = String(new Date(hourDate).getHours());
  let hour = `${formattedHour.padStart(2, '0')}:00`;
  return hour;
}