import React, { useEffect, useState } from 'react';

interface RefObject<T> {
  readonly current: T | null;
}

export default function useModal<t>(wrapperRef: RefObject<HTMLElement>) {
  const [modalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    function handleClickOutside(event: { target: any }) {
      if (modalOpen && wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setModalOpen(false);
        document.body.classList.remove('blockScroll');
      }
    }
    function closeModalESC(e:any) {
      if (e.key == 'Escape') {
        setModalOpen(false);
        document.body.classList.remove('blockScroll');
      }
    }

    window.addEventListener('keydown', closeModalESC);
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [modalOpen]);

  return [modalOpen, setModalOpen] as const;
}
