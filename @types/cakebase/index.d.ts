declare function _exports(path: string): {
    set: (data: any) => void;
    get: (predicate: any) => any;
    remove: (data: any) => void;
    update: (predicate: any, data: any) => void;
    getAll: () => any;
    clear: () => void;
};
declare namespace _exports {
    function Async(path: string): Promise<{
        set: (data: any) => any;
        get: (predicate: any) => any;
        remove: (data: any) => any;
        update: (predicate: any, data: any) => any;
        getAll: () => any;
        clear: () => any;
    }>;
}
export = _exports;
