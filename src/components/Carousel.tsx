import { useEffect, useState } from "react";
import { Carousel } from "flowbite-react";
import Loading from "./Loading"; 

interface Product {
  id: number;
  title: string;
  image: string;
}

function Countries() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true); 

  useEffect(() => {
    async function fetchProducts(): Promise<void> {
      try {
        const response: Response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  const chunkProducts = (products: Product[], chunkSize: number) => {
    const chunks = [];
    for (let i = 0; i < products.length; i += chunkSize) {
      chunks.push(products.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const productChunks = chunkProducts(products, 4);

  console.log("Loading state:", loading); 
  console.log("Products:", products); 

  return (
    <div className="relative h-56 sm:h-64 xl:h-80 2xl:h-96">
      {loading ? (
        <Loading /> // Show the loading component
      ) : (
        <Carousel>
          {productChunks.map((chunk, index) => (
            <div key={index} className="grid grid-cols-4 gap-4">
              {chunk.map((p) => (
                <div
                  key={p.id}
                  className="flex col-span-1 flex-col items-center p-4 bg-white shadow-md rounded-lg overflow-hidden"
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-48 object-cover rounded-md"
                  />
                  <div className="p-4 text-center">
                    <h1 className="text-lg font-semibold mb-2 truncate">{p.title}</h1>
                    <p className="text-sm text-gray-600">{p.title}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
}

export default Countries;
