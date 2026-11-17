/** An element's position in the document, independent of the current scroll offset. */
export type Box = { top: number; height: number };

/**
 * Keeps `boxes[i]` equal to `els[i]`'s document-space box. It measures once now and again only
 * when the page's layout changes (the body resizes), so per-frame scroll math is plain
 * arithmetic on `scrollY` with no layout reads. The elements must not be transformed.
 */
export function trackBoxes(els: Element[], onChange?: () => void) {
  const boxes: Box[] = [];
  const measure = () => {
    els.forEach((el, i) => {
      const rect = el.getBoundingClientRect();
      boxes[i] = { top: rect.top + scrollY, height: rect.height };
    });
    onChange?.();
  };
  measure();
  const observer = new ResizeObserver(measure);
  observer.observe(document.body);
  return { boxes, stop: () => observer.disconnect() };
}
