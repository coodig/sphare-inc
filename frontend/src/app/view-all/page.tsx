'use client'

import { useSearchParams } from 'next/navigation';

import ProductCard from '@/src/components/ProductCard';
import {
  products,
  projects,
  tools,
} from '@/src/lib/data';

export default function ViewAllPage() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type');

    let add = [...products];
  add = [];
  let title = '';

  switch (type) {
    case 'products':
      add = products;
      title = 'All Products';
      break;
    case 'projects':
      add = projects;
      title = 'All Projects';
      break;
    case 'tools':
      add = tools;
      title = 'All Tools';
      break;
    default:
      title = 'Invalid type';
  }

  return (
    <div className="px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {add.map((item) => (
          <ProductCard
            key={item.name}
            name={item.name}
            description={item.description}
            // logo={item.logo}
            // url={item.url}
          />
        ))}
      </div>
    </div>
  );
}
