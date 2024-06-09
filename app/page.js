// import { redirect } from 'next/navigation'
// redirect('/Presentation/index.html')
import Link from 'next/link';

import dynamic from 'next/dynamic';

const Presentation = dynamic(() => import('@/components/Presentation'), { ssr: false });

export default function Home() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center min-h-screen py-2">
      <Link
        href={'/presentation'}
        className={'py-2 px-4 rounded-lg border-2 hover:bg-blue-100 bg-white/80 hover:shadow text-3xl'}
      >
        Présentation
      </Link>
      <Link
        href={'/demo'}
        className={'py-2 px-4 rounded-lg border-2 hover:bg-blue-100 bg-white/80 hover:shadow text-3xl'}
      >
        Démo
      </Link>
    </div>
  );
}
