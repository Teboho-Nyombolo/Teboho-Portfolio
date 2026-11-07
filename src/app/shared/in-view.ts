export function whenVisible(element: Element, callback: () => void, threshold = 0.2): () => void {
  if (typeof IntersectionObserver === 'undefined') {
    callback();
    return () => {};
  }
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        observer.disconnect();
        callback();
      }
    },
    { threshold },
  );
  observer.observe(element);
  return () => observer.disconnect();
}

export function prefersReducedMotion(): boolean {
  return typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;
}
