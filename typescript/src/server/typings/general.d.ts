interface ModuleConfigEntry {
    configId: string;
    data: Record<string, any>;
}

interface MainConfig {
    payoutFactor: number;
    characterLimit: number;
    progression: any;
    restartLength: number;
    [key: string]: any;
}

declare const RPC: any;
declare const SQL: any;


declare function CacheableMap(func: Function, options: { timeToLive: number }): any;

interface Vector3 {
    x: number;
    y: number;
    z: number;
}

interface Vector4 extends Vector3 {
    h: number;
}
