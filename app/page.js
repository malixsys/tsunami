// import { redirect } from 'next/navigation'
// redirect('/Presentation/index.html')
import Link from 'next/link';

import dynamic from 'next/dynamic';
import { Preload } from '@/components/Preload';

const Presentation = dynamic(() => import('@/components/Presentation'), { ssr: false });

export default function Home() {
  return (
    <div>
      <Presentation />
      <Link
        prefetch
        style={{ background: '#00000020' }}
        className={'absolute top-12 right-2 text-lg flex items-center gap-2 m-1 py-2 px-4 rounded-lg'}
        href={'/demo'}
      >
        Voir démo
      </Link>
      <Preload />
    </div>
  );
}
