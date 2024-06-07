'use client';

import React from "react";
import {useUI} from "@/components/UIContext";

export function UI() {
    const {spin, setSpin, animate, setAnimate} = useUI();
    return <>
        <div
            style={{ background: '#FFFFFF80'}}
            className={'absolute top-2 left-2 text-3xl m-1 p-3 rounded-lg'}>Merci de m'avoir écouté<br/>
            – Anthony
        </div>
        <div
            style={{background: '#FFFFFF80'}}
            className={'absolute top-2 right-2 text-lg flex items-center gap-2 m-1 p-2 rounded-lg'}

        >
            <span className={'cursor-pointer'}
                  onClick={() => setSpin(old => !old)}>[ {spin ? 'TOURNE 🟢' : 'TOURNE 🔴'} ]</span>
            <span className={'cursor-pointer'}
                  onClick={() => setAnimate(old => !old)}>[ {animate ? 'VAGUE 🟢' : 'VAGUE 🔴'} ]</span>
        </div>
    </>;
}