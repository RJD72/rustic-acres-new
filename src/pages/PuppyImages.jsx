import { useState } from "react";
import { imageArr } from "../assets/images/imageArr";

const PuppyImages = () => {
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openCarousel = (index) => {
    setActiveIndex(index);
    setIsCarouselOpen(true);
  };

  const closeCarousel = () => {
    setIsCarouselOpen(false);
  };

  const nextImage = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % imageArr.length);
  };

  const prevImage = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + imageArr.length) % imageArr.length
    );
  };

  return (
    <div className="min-h-screen bg-lightGrey">
      <h2 className="text-4xl md:text-5xl font-bold py-10 text-center text-deepBurgundy">
        Puppies
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 max-w-7xl mx-auto">
        {imageArr.length > 0 ? (
          imageArr.map((img, index) => (
            <div
              className="group cursor-pointer relative"
              key={index}
              onClick={() => openCarousel(index)}
            >
              <img
                src={img}
                alt={`Puppy ${index + 1}`}
                className="w-full h-52 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
              />
            </div>
          ))
        ) : (
          <p className="text-2xl text-center text-gray-600 py-10">
            No images found
          </p>
        )}
      </div>

      {/* Carousel Modal */}
      {isCarouselOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <button
            className="absolute top-5 right-5 text-softGold text-4xl font-bold"
            onClick={closeCarousel}
          >
            &times;
          </button>
          <div className="relative flex items-center">
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 text-softGold text-3xl bg-deepBurgundy p-3 rounded-full shadow-md hover:bg-mutedTeal transition"
              onClick={prevImage}
            >
              &#8249;
            </button>
            <img
              src={imageArr[activeIndex]}
              alt={`Puppy ${activeIndex + 1}`}
              className="max-w-full max-h-screen rounded-lg border-4 border-softGold"
            />
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 text-softGold text-3xl bg-deepBurgundy p-3 rounded-full shadow-md hover:bg-mutedTeal transition"
              onClick={nextImage}
            >
              &#8250;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PuppyImages;
