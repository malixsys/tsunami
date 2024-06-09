import React from 'react';
import Link from 'next/link';
import Presentation from '@/components/Presentation';

export default function Demo() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center min-h-screen py-2">
      <Presentation />
      <Link
        prefetch
        className={
          'absolute bottom-20 right-4 text-lg flex items-center gap-2 py-2 px-4 rounded-lg border-2 hover:bg-blue-100 bg-white/80 hover:shadow'
        }
        href={'/demo'}
      >
        Voir démo
      </Link>
    </div>
  );
}
