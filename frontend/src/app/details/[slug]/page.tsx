type Params = {
  params: {
    slug: string
  }
}

export default function DetailPage({ params }: Params) {
  const { slug } = params

  // For now: use random/dummy content
  const randomData = {
    title: slug.toUpperCase(),
    description: `This is a random detail page for ${slug}.`,
    features: [
      'Feature 1: Fast and Secure',
      'Feature 2: Scalable Architecture',
      'Feature 3: Real-time Support',
    ],
    image: '/images/placeholder.png',
  }

  return (
    <div className="max-w-3x5 mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4 text-center">{randomData.title}</h1>
      <p className="text-lg text-white mb-6 text-center">{randomData.description}</p>

      {/* <img
        src={randomData.image}
        alt="Placeholder"
        className="w-full max-h-64 object-cover rounded-lg shadow mb-6"
      /> */}

      <h2 className="text-2xl font-semibold mb-3">Features</h2>
      <ul className="list-disc list-inside text-white space-y-1">
        {randomData.features.map((feature, i) => (
          <li key={i}>{feature}</li>
        ))}
      </ul>
    </div>
  )
}
