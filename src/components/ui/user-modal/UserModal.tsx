'use client';

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import UserModalDesktop from "./Desktop/UserModalDesktop";
import UserModalMobile from "./Mobile/UserModalMobile";

interface Props {
    isActive: boolean;
}

export default function UserModal({ isActive }: Props) {
    const [isMounted,setIsMounted] = useState<boolean>(false);

    useEffect(() => {
        setIsMounted(true);
    },[]);

    if (!isMounted) return null;

    if (window.innerWidth < 1024) return ReactDOM.createPortal(
        <UserModalMobile isActive={isActive} />,document.body
    );

    return ReactDOM.createPortal(
        <UserModalDesktop isActive={isActive} /> ,document.body
    );
 
}
