export function executionRuntimeLogger() {
    return function (target, propertyKey, descriptor) {
        return descriptor;
    };
}
