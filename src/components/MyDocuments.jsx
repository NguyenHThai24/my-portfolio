import { useEffect, useState } from "react";

const MyDocuments = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState(1);

  // modal image
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetch("/data/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));

    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const filteredProducts = products.filter(
    (p) => p.categoryId === activeCategory,
  );

  return (
    <section className="mx-auto w-full max-w-7xl bg-[#2f2f2f] py-6 text-white">
      <div className="my-6 flex items-center justify-center gap-4">
        <div className="h-0.5 w-24 bg-linear-to-r from-white to-yellow-400 md:w-full"></div>

        <h1 className="w-full text-center text-2xl font-bold md:text-3xl lg:text-4xl">
          <span className="bg-linear-to-r from-yellow-400 to-white bg-clip-text text-transparent">
            My Projects
          </span>
        </h1>

        <div className="h-0.5 w-20 rounded-full bg-linear-to-r from-white to-yellow-400 md:w-full"></div>
      </div>

      {/* CATEGORIES */}
      <nav className="mt-4 flex flex-wrap justify-center gap-7">
        {categories.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveCategory(item.id)}
            className={`transition ${
              activeCategory === item.id
                ? "text-yellow-400"
                : "hover:text-yellow-400"
            }`}
          >
            {item.name}
          </button>
        ))}
      </nav>

      {/* PRODUCTS */}
      <div className="mx-auto mt-8 grid w-fit grid-cols-2 gap-4 px-4 sm:grid-cols-3 md:grid-cols-3">
        {filteredProducts.map((product) => (
          <button
            key={product.id}
            onClick={() => setSelectedImage(product.image)}
            className="block aspect-square h-40 w-40 overflow-hidden border border-yellow-400 transition hover:border-2 hover:shadow-[4px_4px_0px_#facc15] lg:h-60 lg:w-60"
          >
            <img
              src={product.image}
              alt=""
              className="h-full w-full object-contain transition"
            />
          </button>
        ))}
      </div>

      {/* MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt=""
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl"
          />
        </div>
      )}
    </section>
  );
};

export default MyDocuments;
