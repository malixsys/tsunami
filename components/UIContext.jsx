'use client';

import React, {useState} from "react";

const UIContext = React.createContext();

export const useUI = () => React.useContext(UIContext);

export function UIContextProvider({children}) {
    const [spin, setSpin] = useState(true);
    const [animate, setAnimate] = useState(false);
    const context = {spin, setSpin, animate, setAnimate};
    return (
        <UIContext.Provider value={context}>
            {children}
        </UIContext.Provider>
    );
}