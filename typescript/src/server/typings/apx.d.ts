//export declare const APX: APXType;

interface APXType {
    Events: {
        on(event: string, callback: Function): void;
        onNet(event: string, callback: Function): void;
        emit(event: string, ...args: any[]): void;
        emitNet(event: string, ...args: any[]): void;
        remove(event: string, callback: Function): void;
    };
    Procedures: {
        register(name: string, callback: Function): void;
        execute(name: string, ...args: any[]): void;
    };
    Utils: {
        cache(callback: Function, options: any): void;
        cacheableMap(callback: Function, options: { timeToLive: number }): any;
        waitForCondition(condition: Function, timeout: number): Promise<void>;
        getMapRange(p1: any, p2: any, p3: any): any;
        getDistance: ([x1, y1, z1]: number[], [x2, y2, z2]: number[]) => number;
        getRandomNumber(min: number, max: number): number;
    };
}