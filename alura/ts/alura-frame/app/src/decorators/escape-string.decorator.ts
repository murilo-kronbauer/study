export function escapeString(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    let methodReturn = originalMethod.apply(this, args);
    if (typeof methodReturn === "string") {
      methodReturn = methodReturn.replace(/<script>[\s\S]*?<\/script>/, "");
    }
  };

  return descriptor;
}
