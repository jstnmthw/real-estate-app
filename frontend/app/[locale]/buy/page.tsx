import React from 'react';
import fetcher from '@/lib/fetcher';

async function getData() {
  return fetcher('/api/property/search');
}

export default async function Page() {
  const data = await getData();
  return (
    <div>
      <pre className="h-96 w-96 overflow-scroll bg-black text-xs text-lime-400">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}
