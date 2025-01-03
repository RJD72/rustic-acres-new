const Puppies = () => {
  const puppies = [
    {
      id: 1,
      name: "Bella",
      image: "src/assets/images/image1.jpg",
      description: "Playful and loving.",
    },
    {
      id: 2,
      name: "Charlie",
      image: "src/assets/images/image2.jpg",
      description: "Friendly and energetic.",
    },
    {
      id: 3,
      name: "Daisy",
      image: "src/assets/images/image3.jpg",
      description: "Gentle and affectionate.",
    },
  ];

  return (
    <section id="puppies" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-deepBurgundy text-center mb-10">
          Puppies
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {puppies.map((puppy) => (
            <div
              key={puppy.id}
              className="bg-white shadow-md rounded-lg p-6 text-center"
            >
              <img
                src={puppy.image}
                alt={puppy.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-deepBurgundy">
                {puppy.name}
              </h3>
              <p className="text-gray-600">{puppy.description}</p>
              <button className="bg-softGold text-white px-4 py-2 mt-4 rounded-md hover:bg-mutedTeal">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Puppies;
