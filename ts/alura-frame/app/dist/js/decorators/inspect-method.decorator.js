export function inspectMethod() {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`Method: ${propertyKey}\nTarget: ${JSON.stringify(target)}\nArgs: ${JSON.stringify(args)}}\nDescriptor: ${JSON.stringify(descriptor)}`);
            const methodReturn = originalMethod.apply(this, args);
            return methodReturn;
        };
        return descriptor;
    };
}
