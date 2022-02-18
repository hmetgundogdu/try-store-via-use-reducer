export const INITIAL_STATE = {
    init: false,
    network: false,
    errors: [] as Error[],
};

export type AppState = typeof INITIAL_STATE;

interface INIT_STATE_TYPE { type: 'INIT_STATE' };
interface NETWORK_DOWN { type: 'NETWORK_DOWN' };
interface NETWORK_UP { type: 'NETWORK_UP' };
interface PUT_ERROR { type: 'PUT_ERROR', payload: Error };

type Action = INIT_STATE_TYPE | NETWORK_DOWN | NETWORK_UP | PUT_ERROR;

export function reducer(state: AppState, action: Action) {
    switch (action.type) {
        case 'INIT_STATE':
            return {
                ...state,
                init: true,
            };
        case 'NETWORK_DOWN':
            return {
                ...state,
                network: false,
            };
        case 'NETWORK_UP':
            return {
                ...state,
                network: true,
            };
        case 'PUT_ERROR':
            return {
                ...state,
                errors: [...state.errors, action.payload],
            };
        default:
            return state;
    }
}