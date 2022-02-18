type SettingsModes = 'production' | 'development' | 'test';

export const INITIAL_STATE = {
   mode: 'test' as SettingsModes,
};

export type SettingsState = typeof INITIAL_STATE;

interface SET_MODE { type: 'SET_MODE', payload: SettingsModes };

type Action = SET_MODE;

export function reducer(state: SettingsState, action: Action) {
    switch (action.type) {
        case 'SET_MODE':
            return {
                ...state,
                mode: action.payload,
            };
        default:
            return state;
    }
}