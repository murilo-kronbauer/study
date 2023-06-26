export function executionTimeLogger(useSeconds = false) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
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
