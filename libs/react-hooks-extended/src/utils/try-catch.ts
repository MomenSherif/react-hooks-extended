export type Callback<T> = () => T | void;

export default function tryCatch<T>(
  callbackFn: Callback<T>,
  fallbackFn: Callback<T>
): T | void {
  try {
    return callbackFn();
  } catch (error) {
    return fallbackFn();
  }
}
