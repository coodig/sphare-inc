interface ProductCardProps{
    name: string;
    description?: string;
    logo?: string;
    url?: string;
}

export default function ProductCard({ name, description, logo, url}: ProductCardProps){
    return(
        <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition mb-5 w-3xs">
            {/* {logo && <img src={logo} alt={name} className="w-16 h-16 object-contain mb-2" />} */}
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-sm text-gray-400">{description}</p>
            <a href="https://www.github.com/coodig" target="_blank" className="text-sm ">Visit sites</a>

            {/* {url && (
                <a href={url} target="_blank" className="text-blue-600 text-sm underline mt-2 inline-block">Visit Site</a>
            )} */}
        </div>
    );
}