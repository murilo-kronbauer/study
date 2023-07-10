export function inspectMethod(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(
      `Method: ${propertyKey}\nTarget: ${JSON.stringify(
        target
      )}\nArgs: ${JSON.stringify(args)}}\nDescriptor: ${JSON.stringify(
        descriptor
      )}`
    );

    const methodReturn = originalMethod.apply(this, args);
    return methodReturn;
  };

  return descriptor;
}
