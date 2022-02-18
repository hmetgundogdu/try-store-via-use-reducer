import React, { memo, useContext, useMemo, useReducer } from 'react';

// Init all the reducers
import * as App from './App'
import * as Settings from './Settings'

// Define reducers
export function useStore() {
    const app = useReducer(App.reducer, App.INITIAL_STATE);
    const settings = useReducer(Settings.reducer, Settings.INITIAL_STATE);

    return {
        app,
        settings,
    };
}

// State Library
type UseStoreReturnType = ReturnType<typeof useStore>;

const StoreContext = React.createContext<UseStoreReturnType>({} as UseStoreReturnType);

export function useStoreState<StateType extends UseStoreReturnType[StateKey][0], StateKey extends keyof UseStoreReturnType>(stateKey: StateKey) {
    const store = useContext(StoreContext);

    return useMemo(() => store[stateKey][0] as StateType, [store[stateKey][0]]);
}

export function useStoreDispatch<DispatchType extends UseStoreReturnType[StateKey][1], StateKey extends keyof UseStoreReturnType>(stateKey: StateKey) {
    const store = useContext(StoreContext);

    return useMemo(() => store[stateKey][1] as DispatchType, [store[stateKey][1]]);
}

export const Provider = memo(({children} : any) => {
    const store = useStore();
    
    return (
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    );
});