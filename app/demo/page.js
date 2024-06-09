import React from 'react';
import { MainCanvas } from '@/components/MainCanvas';
import { UI } from '@/components/UI';
import { UIContextProvider } from '@/components/UIContext';
import Link from 'next/link';

export default function Demo() {
  return (
    <UIContextProvider>
      <MainCanvas />
      <UI />
      <Link
        prefetch
        className={
          'absolute bottom-20 right-4 text-lg flex items-center gap-2 py-2 px-4 rounded-lg border-2 hover:bg-blue-100 bg-white/80 hover:shadow'
        }
        href={'/presentation'}
      >
        Voir présentation
      </Link>
    </UIContextProvider>
  );
}
