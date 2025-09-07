'use client';

import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom";

interface Props {
  onClick: () => void;
  isModalOpen: boolean;
}

export default function Overlay({ onClick, isModalOpen }: Props) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return ReactDOM.createPortal(
    <div
      className={`overlay__bg ${isModalOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} overlay fixed w-screen h-screen bg-black/50 top-0 left-0 z-50 transition-opacity duration-100 ease-in-out`}
      onClick={onClick}
    />,
    document.body
  );
}
