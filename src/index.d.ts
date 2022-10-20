
declare interface features {
    /**
    * Insert an object.
    * @param data the object.
    */
    set(data: object): Promise<void>;

    /**
     * Retrieve for objects.
     * @param prediciton the prediction to find the objects.
     */
    get(prediciton: void): Promise<object[]>

    /**
     * Remove objects that match the prediction.
     * @param prediciton The prediction to find the objects.
     */
    remove(prediciton: void): Promise<void>;

    /**
     * Update objects that match the prediction.
     * @param prediciton The prediction to find the objects.
     * @param data Data you want to change or to insert.
     */
    update(prediciton: void, data: object): Promise<void>;

    /**
     * Delete all objects.
     */
    clear(): Promise<void>;
}

declare function cakebase(path: string): features;

export = cakebase;