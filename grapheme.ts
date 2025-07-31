declare global {
  interface String {
    readonly count: number;
  }
}

if (!Object.prototype.hasOwnProperty.call(String.prototype, "count")) {
  Object.defineProperty(String.prototype, "count", {
    get() {
      return [
        ...new Intl.Segmenter(undefined, { granularity: "grapheme" }).segment(
          this as string,
        ),
      ].length;
    },
    enumerable: false,
    configurable: false,
  });
}

export {}; // Torna este arquivo um módulo para que o `declare global` funcione
