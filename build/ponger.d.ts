export interface PongContext {
    pings: number;
}
export declare type PongEvent = {
    type: 'PING';
};
export declare type PongState = {
    value: 'ready' | 'ponging';
    context: PongContext;
};
export declare const ponger: import("xstate").StateMachine<PongContext, any, PongEvent, PongState>;
