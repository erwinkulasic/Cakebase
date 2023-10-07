
/**
 * Defines a CakebaseObject for structured data.
 * 
 * The object can have any string keys, and the values must adhere to JSON-compatible 
 * types, allowing for various data structures while ensuring type safety and JSON convertibility.
 *
 * @example
 * const exampleObj: CakebaseObject = {
 *   key1: "value",
 *   key2: {
 *     nestedKey: [true, null]
 *   }
 * };
 */
interface CakebaseObject {
    [key: string]: string | number | boolean | CakebaseObject | CakebaseObject[] | null;
}

interface Functions {
    /**
     * Inserts an object into the database.
     * @param data The object that is to be inserted.
     * @returns A promise that resolves once the insertion is complete.
     */
    set(data: CakebaseObject): Promise<void>;

    /**
     * Retrieves objects from the database based on the provided predicate.
     * @param predicate A function that determines whether an object should be retrieved.
     * @returns A promise that resolves to an array of retrieved objects.
     */
    get(predicate: (obj: CakebaseObject) => boolean): Promise<CakebaseObject[]>;

    /**
     * Removes objects from the database that satisfy the provided predicate.
     * @param predicate A function that determines whether an object should be removed.
     * @returns A promise that resolves once the removal is complete.
     */
    remove(predicate: (obj: CakebaseObject) => boolean): Promise<void>;

    /**
     * Updates objects in the database that satisfy the provided predicate.
     * @param predicate A function that determines whether an object should be updated.
     * @param data The new data that will be updated in the objects.
     * @returns A promise that resolves once the update is complete.
     */
    update(predicate: (obj: CakebaseObject) => boolean, data: CakebaseObject): Promise<void>;

    /**
     * Deletes all objects from the database.
     * @returns A promise that resolves once all objects are deleted.
     */
    clear(): Promise<void>;
}

/**
 * Initializes Cakebase with a specified path to your JSON file.
 * Cakebase provides a set of features for interacting with the database file, 
 * such as inserting, retrieving, removing, and updating objects.
 * 
 * @param path A string representing the path to the JSON database file.
 * @returns An object containing methods to interact with the database.
 */
declare function cakebase(path: string): Functions;

export = cakebase;