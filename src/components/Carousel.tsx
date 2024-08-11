import { useEffect, useState } from "react";
import { Carousel } from "flowbite-react";
import "./carousel.css"

interface Product {
  id: number;
  title: string;
  image: string;
}

function Countries() {
  const [products, setProducts] = useState<Product[]>([]);

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
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="relative h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        {products.map((p) => (
          <div key={p.id} className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg overflow-hidden">
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
      </Carousel>
    </div>
  );
}

export default Countries;
