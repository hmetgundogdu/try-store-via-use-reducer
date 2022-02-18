import { memo, useEffect } from "react";
import { useStoreDispatch, useStoreState } from "../store";

export interface ContentProps {
}

function Content(props: ContentProps) {
    const state = useStoreState('settings');
    const dispatch = useStoreDispatch('settings');

    const handleModeButtonClick = () => {
        dispatch({
            type: 'SET_MODE',
            payload: 'production'
        });
    };

    useEffect(() => {
        dispatch({
            type: 'SET_MODE',
            payload: 'test',
        });
    }, [])

    return (
        <div className="header" onClick={handleModeButtonClick}>
            {state.mode}
        </div>
    );
}

export default memo(Content);