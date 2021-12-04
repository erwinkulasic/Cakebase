
declare interface CakebaseProvider {
    /**
     * Add an object to the json file.
     * @param data the object.
     */
    set(data: object) : Promise<void>;

    /**
     * Get objects that match the prediction.
     * @param prediciton the prediction to find the objects.
     */
    get(prediciton: void) : Promise<object[]>

    /**
     * Delete objects that match the prediction.
     * @param prediciton the prediction to find the objects
     */
    remove(prediciton: void) : Promise<void>;

    /**
     * Update objects that match the prediction.
     * @param prediciton the prediction to find the objects
     * @param data Data you want to edit or add.
     */
    update(prediciton: void, data : object) : Promise<void>;

    /**
     * Delete all objects in the json file.
     */
    clear() : Promise<void>;
}

/**
 * Initalize our database.
 * @param root The json file location where our objects are stored.
 */
declare function _CakebaseInstance(root : string) : CakebaseProvider;

export = _CakebaseInstance;
