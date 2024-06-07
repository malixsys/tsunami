// import { redirect } from 'next/navigation'
// redirect('/Presentation/index.html')
import Link from 'next/link';

import dynamic from 'next/dynamic';

const Presentation = dynamic(() => import('@/components/Presentation'), { ssr: false });

export default function Home() {
  return (
    <div>
      <Presentation />
      <Link
        prefetch
        className={
          'absolute top-12 right-2 text-lg flex items-center gap-2 py-2 px-4 rounded-lg border-2 hover:bg-blue-100 bg-white/80 hover:shadow'
        }
        href={'/demo'}
      >
        Voir démo
      </Link>
    </div>
  );
}
