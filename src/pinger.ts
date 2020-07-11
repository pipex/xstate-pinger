import { createMachine, Actor, spawn, assign, send } from 'xstate';
import { PongContext, PongEvent, ponger } from './ponger';

export interface PingContext {
  pongs: number;
  ponger?: Actor<PongContext, PongEvent>;
}

export type PingEvent = {
  type: 'START' | 'PING' | 'PONG';
};

export type PingState =
  | {
      value: 'idle';
      context: PingContext;
    }
  | {
      value: 'ready' | 'pinging';
      context: PingContext & {
        ponger: Actor<PongContext, PongEvent>;
      };
    };

export const pinger = createMachine<PingContext, PingEvent, PingState>({
  id: 'pinger',
  context: {
    pongs: 0,
  },
  initial: 'idle',
  states: {
    idle: {
      on: {
        START: {
          target: 'ready',
          actions: assign((ctx) => ({
            ...ctx,
            ponger: spawn(ponger) as Actor,
          })),
        },
      },
    },
    ready: {
      on: {
        PING: {
          target: 'pinging',
          actions: send('PING', {
            to: ({ ponger }) => ponger,
          }),
        },
      },
    },
    pinging: {
      on: {
        PONG: {
          target: 'ready',
          actions: assign({ pongs: (ctx) => ctx.pongs + 1 }),
        },
      },
    },
  },
});
