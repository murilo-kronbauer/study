export function executionTimeLogger(useSeconds: boolean = false) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: Array<any>) {
      const start = performance.now();
      const methodReturn = originalMethod.apply(this, args);
      const end = performance.now();
      useSeconds
        ? console.log(`${propertyKey}: ${(end - start) / 1000} seconds`)
        : console.log(`${propertyKey}: ${end - start} miliseconds`);
      return methodReturn;
    };
    return descriptor;
  };
}
