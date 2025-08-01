const sharedEncoder = new TextEncoder(); // encoder reutilizado

declare global {
  interface String {
    readonly utf8Count: number;
  }
}

if (!Object.prototype.hasOwnProperty.call(String.prototype, "utf8Count")) {
  Object.defineProperty(String.prototype, "utf8Count", {
    get() {
      return sharedEncoder.encode(this as string).length;
    },
    enumerable: false,
    configurable: false,
  });
}

export {};
