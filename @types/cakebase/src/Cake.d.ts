declare function _exports(path: string): Promise<{
    set: (data: any) => any;
    get: (predicate: any) => any;
    remove: (data: any) => any;
    update: (predicate: any, data: any) => any;
    getAll: () => any;
    clear: () => any;
}>;
export = _exports;
