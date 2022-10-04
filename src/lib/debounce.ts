export default function debounce<T extends Array<unknown>, R>(
  func: (...args: T) => R,
  wait: number,
  immediate: boolean,
): (...args: T) => void {
  let timeout;

  // eslint-disable-next-line func-names
  return function (...args: T): void {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this;
    const later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
