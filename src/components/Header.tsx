import { memo } from "react";
import { useStoreDispatch, useStoreState } from "../store";

export interface HeaderProps {
}

function Header(props: HeaderProps) {
    const dispatch = useStoreDispatch('app');

    const handleTitleClick = () => {
        dispatch({
            type: 'PUT_ERROR',
            payload: Error('Title error'),
        });
    };

    return (
        <div className="header">
            <h1 onClick={handleTitleClick}>
                Title 
            </h1>
            <div className="header-right">
                <a href="#/">
                    <button className="btn btn-primary">Home</button>
                </a>
                <a href="#/about">
                    <button className="btn btn-primary">About</button>
                </a>
                <a href="#/contact">
                    <button className="btn btn-primary">Contact</button>
                </a>
            </div>
        </div>
    );
}

export default memo(Header);