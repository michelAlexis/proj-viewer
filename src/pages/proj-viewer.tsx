"use client"

import Link from 'next/link';
import SourceInput from '~/pages/source-input';

export default function ProjViewer() {
  return <>
    <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
        <div className="bg-white/10 p-4 text-white rounded-xl">
          <SourceInput proj='EPSG:31370'/>
        </div>
        <Link
          className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
          href="https://create.t3.gg/en/introduction"
          target="_blank"
        >
          <h3 className="text-2xl font-bold">Documentation →</h3>
          <div className="text-lg">
            Learn more about Create T3 App, the libraries it uses, and how
            to deploy it.
          </div>
        </Link>
      </div>
    </div>
  </>;
}
