import '@testing-library/jest-dom'

// Basic IntersectionObserver mock for scrollspy tests
class IO {
  callback: IntersectionObserverCallback
  constructor(cb: IntersectionObserverCallback) { this.callback = cb }
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords(): IntersectionObserverEntry[] { return [] }
  root = null
  rootMargin = ''
  thresholds = []
}
// @ts-ignore
global.IntersectionObserver = IO
