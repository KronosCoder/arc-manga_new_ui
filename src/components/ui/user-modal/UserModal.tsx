'use client';

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import UserModalDesktop from "./Desktop/UserModalDesktop";
import UserModalMobile from "./Mobile/UserModalMobile";

interface Props {
    isOpenModal: boolean;
    toggleUserModal: () => void;
}

export default function UserModal({ isOpenModal, toggleUserModal }: Props) {
    const [isMounted,setIsMounted] = useState<boolean>(false);

    useEffect(() => {
        setIsMounted(true);
    },[]);

    if (!isMounted) return null;

    if (window.innerWidth < 1024) return ReactDOM.createPortal(
        <UserModalMobile isOpenModal={isOpenModal} toggleUserModal={toggleUserModal} />,document.body
    );

    return ReactDOM.createPortal(
        <UserModalDesktop isOpenModal={isOpenModal} /> ,document.body
    );
 
}
