'use client';
import React, { useEffect, useRef, useState } from 'react';
import { User } from 'lucide-react';
import Overlay from '../background-overlay/Overlay';
import UserModal from '../user-modal/UserModal';

export default function UserIcon() {
    const [isOpenModal, setOpenModal] = useState<boolean>(false);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutSideModal = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setOpenModal(false);
            }

            if (isOpenModal) document.addEventListener('mousedown', handleClickOutSideModal);
            else document.removeEventListener('mousedown', handleClickOutSideModal);
        }
    }, [isOpenModal]);

  return (
    <>
        <Overlay onClick={() => setOpenModal(false)} isModalOpen={isOpenModal} />
        <div className='relative' ref={modalRef}>
            <div 
                className="user__icon bg-slate-200 w-[40px] aspect-square rounded-full flex items-center justify-center cursor-pointer"
                onClick={() => setOpenModal((prev) => !prev)}
                >
                <User />
            </div>
            <UserModal isActive={isOpenModal}/>
        </div>
    </>
  )
}
