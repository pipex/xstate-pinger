"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ponger = void 0;
const xstate_1 = require("xstate");
exports.ponger = xstate_1.createMachine({
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
                    actions: xstate_1.assign({ pings: (ctx) => ctx.pings + 1 }),
                },
            },
        },
        ponging: {
            after: {
                3000: {
                    target: 'ready',
                    actions: xstate_1.sendParent('PONG'),
                },
            },
        },
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9uZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Bvbmdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBMkQ7QUFlOUMsUUFBQSxNQUFNLEdBQUcsc0JBQWEsQ0FBb0M7SUFDckUsRUFBRSxFQUFFLFFBQVE7SUFDWixPQUFPLEVBQUUsT0FBTztJQUNoQixPQUFPLEVBQUU7UUFDUCxLQUFLLEVBQUUsQ0FBQztLQUNUO0lBQ0QsTUFBTSxFQUFFO1FBQ04sS0FBSyxFQUFFO1lBQ0wsRUFBRSxFQUFFO2dCQUNGLElBQUksRUFBRTtvQkFDSixNQUFNLEVBQUUsU0FBUztvQkFDakIsT0FBTyxFQUFFLGVBQU0sQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQztpQkFDbkQ7YUFDRjtTQUNGO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsS0FBSyxFQUFFO2dCQUNMLElBQUksRUFBRTtvQkFDSixNQUFNLEVBQUUsT0FBTztvQkFDZixPQUFPLEVBQUUsbUJBQVUsQ0FBQyxNQUFNLENBQUM7aUJBQzVCO2FBQ0Y7U0FDRjtLQUNGO0NBQ0YsQ0FBQyxDQUFDIn0=