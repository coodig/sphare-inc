interface ProductCardProps {
  name: string;
  description?: string;
  logo?: string;
  url?: string;
}

export default function ProductCard({
  name,
  description,
  logo,
  url,
}: ProductCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-200 w-full">
      {logo && (
        <div className="w-full flex justify-center mb-4">
          <img
            src={logo}
            alt={name}
            className="w-16 h-16 object-contain"
          />
        </div>
      )}

      <h3 className="text-lg sm:text-xl font-semibold mb-1">{name}</h3>

      {description && (
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3">
          {description}
        </p>
      )}

      <a
        href={url || "https://www.github.com/coodig"}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-sm sm:text-base text-blue-600 dark:text-blue-400 hover:underline"
      >
        Visit Site →
      </a>
    </div>
  );
}
