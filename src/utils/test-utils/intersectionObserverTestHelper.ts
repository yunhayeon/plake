const observerMap = new Map();
const instanceMap = new Map();

beforeEach(() => {
  // @ts-expect-error for unit test
  global.IntersectionObserver = jest.fn((cb, options = {}) => {
    const instance = {
      threshold: Array.isArray(options.threshold)
        ? options.threshold
        : [options.threshold],
      root: options.root,
      rootMargin: options.rootMargin,
      onIntersect: jest.fn(),
      observe: jest.fn((element: Element) => {
        instanceMap.set(element, instance);
        observerMap.set(element, cb);
      }),
      unobserve: jest.fn((element: Element) => {
        instanceMap.delete(element);
        observerMap.delete(element);
      }),
      disconnect: jest.fn(),
    };
    return instance;
  });
});

afterEach(() => {
  // @ts-expect-error for unit test
  global.IntersectionObserver.mockReset();
  instanceMap.clear();
  observerMap.clear();
});

export function intersect(element: Element, isIntersecting: boolean) {
  const cb = observerMap.get(element);

  if (isIntersecting) {
    cb([
      {
        isIntersecting,
        target: element,
        intersectionRatio: isIntersecting ? 1 : -1,
      },
    ]);
  }
}

export function getObserverOf(element: Element): IntersectionObserver {
  return instanceMap.get(element);
}
