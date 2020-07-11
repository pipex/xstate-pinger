import { Actor } from 'xstate';
import { PongContext, PongEvent } from './ponger';
export interface PingContext {
    pongs: number;
    ponger?: Actor<PongContext, PongEvent>;
}
export declare type PingEvent = {
    type: 'START' | 'PING' | 'PONG';
};
export declare type PingState = {
    value: 'idle';
    context: PingContext;
} | {
    value: 'ready' | 'pinging';
    context: PingContext & {
        ponger: Actor<PongContext, PongEvent>;
    };
};
export declare const pinger: import("xstate").StateMachine<PingContext, any, PingEvent, PingState>;
