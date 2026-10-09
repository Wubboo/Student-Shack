/**
 * 
 * @param this JSON
 * @param key string key of the object
 * @param value the object itself
 * @returns `any`, but this function should transform any custom class instances to a string representation. 
 */
function replacer(this: any, key: string, value: any): any {
    
}

/**
 * 
 * @param value anything. It should convert all in-house datatypes and classes to a string using the replacer function.
 * @returns `string` representation of the given data.
 */
export function toJson(value: any): string {
    return JSON.stringify(value, replacer, 4);
}
