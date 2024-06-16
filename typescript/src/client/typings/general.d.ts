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

declare const RPC: { 
    register(name: string, callback: Function): any;
    execute(name: string, ...args: any): any;
};

declare const RegisterInterfaceCallback: (name: string, callback: Function) => void;

declare function CacheableMap(func: Function, options: { timeToLive: number }): any;

interface Vector3 {
    x: number;
    y: number;
    z: number;
}

interface PeekContext {
    flags: string[],
    model: number,
    type: number,
    isDead: boolean,
    zones: any
}

interface Vector4 extends Vector3 {
    h: number;
}

type CallbackFn<T> = (data: T, cb: Function) => void;