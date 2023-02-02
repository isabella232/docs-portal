type withKeys<T> = T & {
  [key: string]: unknown;
};
const isObject = <T>(data: T): data is withKeys<T> =>
  !!data && typeof data === "object";
const isArray = <T>(data: T | T[]): data is T[] => Array.isArray(data);
// recursively traverse through nested objects
export function applyDataOverrides<T>(data: withKeys<T>): T;
export function applyDataOverrides<T>(data: T[]): T[];
export function applyDataOverrides<T>(data: T): T | T[] {
  if (!isObject(data)) {
    return data;
  }
  if (isArray<withKeys<T>>(data)) {
    return data.map((item) => applyDataOverrides(item));
  }
  let updatedData = { ...data };
  // exists in the parent object. This will make sure default values are set,
  // and also help catch unwanted typos.
  Object.getOwnPropertyNames(updatedData).forEach((propName) => {
    const dataToUpdate = updatedData[propName];
    if (isObject(dataToUpdate)) {
      updatedData = {
        ...updatedData,
        [propName]: applyDataOverrides(dataToUpdate),
      };
    }
  });
  return updatedData;
}
