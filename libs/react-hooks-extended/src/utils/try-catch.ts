export type Callback<T> = () => T;

export default function tryCatch<T>(
  callbackFn: Callback<T>,
  fallbackFn: Callback<T>
): T {
  try {
    return callbackFn();
  } catch (error) {
    return fallbackFn();
  }
}
