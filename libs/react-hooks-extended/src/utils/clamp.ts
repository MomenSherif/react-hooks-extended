export default function clamp(number: number, lower: number, upper: number) {
  return Math.max(lower, Math.min(number, upper));
}
