'use client'

import { useState } from 'react';

import ProductCard from '../components/ProductCard';

// import { fetchProducts } from '@/lib/api';

const dummyProducts = [
  {
    id: 1,
    name: 'SphareDocs',
    description: 'Collaborative document editor like Google Docs.',
    logo: '/images/docs.png',
    // url: 'https://docs.spharecorp.com'
  },
  {
    id: 2,
    name: 'SphareChat',
    description: 'Secure internal team chat app.',
    logo: '/images/chat.png',
    // url: 'https://chat.spharecorp.com'
  },
  {
    id: 3,
    name: 'SphareCRM',
    description: 'Customer Relationship Management System.',
    logo: '/images/crm.png',
    // url: 'https://crm.spharecorp.com'
  },
  {
    id: 4,
    name: 'SphareCRM',
    description: 'Customer Relationship Management System.',
    logo: '/images/crm.png',
    // url: 'https://crm.spharecorp.com'
  },
]

export default function HomePage() {
  const [products, setProducts] = useState<any[]>([]);

  // useEffect(() => {
    // fetchProducts()
      // .then(setProducts)
      // .catch((err) => console.error('Error fetching products:', err));
  // }, []);

  return (
    <section>
      <div className='items-center justify-between flex p-0'>
        <h2 className="text-3xl font-bold mb-6 mt-4">Our Products</h2>
        <button className='border rounded-lg text-sm p-1'>view all</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-between">

         {dummyProducts.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            description={product.description}
            logo={product.logo}
            // url={product.url}
          />
        ))}
      </div>

      <div className='items-center justify-between flex'>
        <h2 className="text-3xl font-bold mb-6 mt-4">Our Projects</h2>
        <button className='border rounded-lg text-sm p-1'>view all</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

         {dummyProducts.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            description={product.description}
            logo={product.logo}
            // url={product.url}
          />
        ))}
      </div>

      <div className='items-center justify-between flex'>
        <h2 className="text-3xl font-bold mb-6 mt-4">Our Tools</h2>
        <button className='border rounded-lg text-sm p-1'>view all</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

         {dummyProducts.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            description={product.description}
            logo={product.logo}
            // url={product.url}
          />
        ))}
      </div>
    </section>
  );
}
