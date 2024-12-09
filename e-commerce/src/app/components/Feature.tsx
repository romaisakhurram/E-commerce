export default function Feature () {
  const products = [
    {
      name: "Cantilever chair",
      code: "Code - Y523201",
      price: "$42.00",
      image: "/images/chairWhite.png", // Replace with actual image paths
    },
    {
      name: "Cantilever chair",
      code: "Code - Y523201",
      price: "$42.00",
      image: "/images/Feature2.png",
    },
    {
      name: "Cantilever chair",
      code: "Code - Y523201",
      price: "$42.00",
      image: "/images/blueChair.png",
    },
    {
      name: "Cantilever chair",
      code: "Code - Y523201",
      price: "$42.00",
      image: "/images/chair.png",
    },
  ];

  return (
    <section className=" py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Featured Products
        </h2>
        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative border rounded-xl p-4 bg-white shadow-md hover:shadow-lg transition duration-300"
              style={{ height: "300px", width: "250px" }} // Optional height for consistent card size
            >
              <div className="w-[full] h-40  bg-purple-50 flex items-center justify-center overflow-hidden rounded-lg">
                
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-contain w-full h-full"
                />
                
              </div>
              <div className="mt-6 text-center hover:bg-blue-800  ">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500">{product.code}</p>
                <p className="text-lg font-bold text-gray-800 mt-2">
                  {product.price}
                </p>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
