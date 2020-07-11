import { createMachine, sendParent, assign } from 'xstate';

export interface PongContext {
  pings: number;
}

export type PongEvent = {
  type: 'PING';
};

export type PongState = {
  value: 'ready' | 'ponging';
  context: PongContext;
};

export const ponger = createMachine<PongContext, PongEvent, PongState>({
  id: 'ponger',
  initial: 'ready',
  context: {
    pings: 0,
  },
  states: {
    ready: {
      on: {
        PING: {
          target: 'ponging',
          actions: assign({ pings: (ctx) => ctx.pings + 1 }),
        },
      },
    },
    ponging: {
      after: {
        3000: {
          target: 'ready',
          actions: sendParent('PONG'),
        },
      },
    },
  },
});
