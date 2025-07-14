// 'use client'

// import { useState } from 'react';

// import ProductCard from '../components/ProductCard';

// const dummyProducts = [
//   {
//     id: 1,
//     name: 'SphareDocs',
//     description: 'Collaborative document editor like Google Docs.',
//     logo: '/images/docs.png',
//   },
//   {
//     id: 2,
//     name: 'SphareChat',
//     description: 'Secure internal team chat app.',
//     logo: '/images/chat.png',
//   },
//   {
//     id: 3,
//     name: 'SphareCRM',
//     description: 'Customer Relationship Management System.',
//     logo: '/images/crm.png',
//   },
//   {
//     id: 4,
//     name: 'SphareCRM',
//     description: 'Customer Relationship Management System.',
//     logo: '/images/crm.png',
//   },
// ]

// export default function HomePage() {
//   const [products, setProducts] = useState<any[]>([]);

//   // useEffect(() => {
//     // fetchProducts()
//       // .then(setProducts)
//       // .catch((err) => console.error('Error fetching products:', err));
//   // }, []);

//   return (
//     <section>
//       <div className='items-center justify-between flex p-0'>
//         <h2 className="text-3xl font-bold mb-6 mt-4">Our Products</h2>
//         <button className='border rounded-lg text-sm p-1'>view all</button>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-between">

//          {dummyProducts.map((product) => (
//           <ProductCard
//             key={product.id}
//             name={product.name}
//             description={product.description}
//             logo={product.logo}
//             // url={product.url}
//           />
//         ))}
//       </div>

//       <div className='items-center justify-between flex'>
//         <h2 className="text-3xl font-bold mb-6 mt-4">Our Projects</h2>
//         <button className='border rounded-lg text-sm p-1'>view all</button>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

//          {dummyProducts.map((product) => (
//           <ProductCard
//             key={product.id}
//             name={product.name}
//             description={product.description}
//             logo={product.logo}
//             // url={product.url}
//           />
//         ))}
//       </div>

//       <div className='items-center justify-between flex'>
//         <h2 className="text-3xl font-bold mb-6 mt-4">Our Tools</h2>
//         <button className='border rounded-lg text-sm p-1'>view all</button>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

//          {dummyProducts.map((product) => (
//           <ProductCard
//             key={product.id}
//             name={product.name}
//             description={product.description}
//             logo={product.logo}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

'use client'

import { useState } from 'react';

import Link from 'next/link';

import ProductCard from '../components/ProductCard';

// import { fetchProducts } from '@/lib/api';

const dummyProducts = [
  {
    id: 1,
    name: 'SphareDocs',
    description: 'Collaborative document editor like Google Docs.',
    logo: '/images/docs.png',
  },
  {
    id: 2,
    name: 'SphareChat',
    description: 'Secure internal team chat app.',
    logo: '/images/chat.png',
  },
  {
    id: 3,
    name: 'SphareCRM',
    description: 'Customer Relationship Management System.',
    logo: '/images/crm.png',
  },
  {
    id: 4,
    name: 'SphareHR',
    description: 'Human Resource Management System.',
    logo: '/images/hr.png',
  },
]

export default function HomePage() {
  const [products, setProducts] = useState<any[]>([])

  return (
    <section className="px-2 py-6 sm:px-6 lg:px-10">
      {/* SECTION: Products */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
        <h2 className="text-2xl sm:text-3xl font-bold">Our Products</h2>
        <Link href="/view-all?type=products">
        <button className="border border-white px-4 py-1 rounded-md text-sm hover:bg-white hover:text-black transition cursor-pointer">
          View All
        </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
        {dummyProducts.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            description={product.description}
            logo={product.logo}
          />
        ))}
      </div>

      {/* SECTION: Projects */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
        <h2 className="text-2xl sm:text-3xl font-bold">Our Projects</h2>
         <Link href="/view-all?type=projects">
        <button className="border border-white px-4 py-1 rounded-md text-sm hover:bg-white hover:text-black transition cursor-pointer">
          View All
        </button>
         </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
        {dummyProducts.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            description={product.description}
            logo={product.logo}
          />
        ))}
      </div>

      {/* SECTION: Tools */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
        <h2 className="text-2xl sm:text-3xl font-bold">Our Tools</h2>
        <Link href="/view-all?type=tools">
        <button className="border border-white px-4 py-1 rounded-md text-sm hover:bg-white hover:text-black transition cursor-pointer">
          View All
        </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
        {dummyProducts.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            description={product.description}
            logo={product.logo}
          />
        ))}
      </div>
    </section>
  )
}
