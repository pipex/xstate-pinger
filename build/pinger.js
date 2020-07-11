"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pinger = void 0;
const xstate_1 = require("xstate");
const ponger_1 = require("./ponger");
exports.pinger = xstate_1.createMachine({
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
                    actions: xstate_1.assign((ctx) => ({
                        ...ctx,
                        ponger: xstate_1.spawn(ponger_1.ponger),
                    })),
                },
            },
        },
        ready: {
            on: {
                PING: {
                    target: 'pinging',
                    actions: xstate_1.send('PING', {
                        to: ({ ponger }) => ponger,
                    }),
                },
            },
        },
        pinging: {
            on: {
                PONG: {
                    target: 'ready',
                    actions: xstate_1.assign({ pongs: (ctx) => ctx.pongs + 1 }),
                },
            },
        },
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGluZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Bpbmdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBbUU7QUFDbkUscUNBQTBEO0FBdUI3QyxRQUFBLE1BQU0sR0FBRyxzQkFBYSxDQUFvQztJQUNyRSxFQUFFLEVBQUUsUUFBUTtJQUNaLE9BQU8sRUFBRTtRQUNQLEtBQUssRUFBRSxDQUFDO0tBQ1Q7SUFDRCxPQUFPLEVBQUUsTUFBTTtJQUNmLE1BQU0sRUFBRTtRQUNOLElBQUksRUFBRTtZQUNKLEVBQUUsRUFBRTtnQkFDRixLQUFLLEVBQUU7b0JBQ0wsTUFBTSxFQUFFLE9BQU87b0JBQ2YsT0FBTyxFQUFFLGVBQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQzt3QkFDeEIsR0FBRyxHQUFHO3dCQUNOLE1BQU0sRUFBRSxjQUFLLENBQUMsZUFBTSxDQUFVO3FCQUMvQixDQUFDLENBQUM7aUJBQ0o7YUFDRjtTQUNGO1FBQ0QsS0FBSyxFQUFFO1lBQ0wsRUFBRSxFQUFFO2dCQUNGLElBQUksRUFBRTtvQkFDSixNQUFNLEVBQUUsU0FBUztvQkFDakIsT0FBTyxFQUFFLGFBQUksQ0FBQyxNQUFNLEVBQUU7d0JBQ3BCLEVBQUUsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUFDLE1BQU07cUJBQzNCLENBQUM7aUJBQ0g7YUFDRjtTQUNGO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsRUFBRSxFQUFFO2dCQUNGLElBQUksRUFBRTtvQkFDSixNQUFNLEVBQUUsT0FBTztvQkFDZixPQUFPLEVBQUUsZUFBTSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDO2lCQUNuRDthQUNGO1NBQ0Y7S0FDRjtDQUNGLENBQUMsQ0FBQyJ9