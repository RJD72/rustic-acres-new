import GroupPhoto from "../assets/images/group-photo.jpg";
import BenefitsSection from "./BenefitsSection";
import Puppies from "./Puppies";

const Main = () => {
  return (
    <main>
      <section className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto py-12 px-6 bg-lightGrey">
        {/* Left Side */}
        <div className="w-full flex flex-col justify-center">
          <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-deepBurgundy mb-3">
            Rustic Acres
          </h2>
          <h3 className="text-2xl lg:text-3xl text-mutedTeal mb-3">
            Your Perfect Companion
          </h3>
          <p className="mb-6 text-gray-700">
            Welcome to our family of Cavalier King Charles Spaniels. These
            loving and loyal dogs are ready to bring joy and companionship to
            your home.
          </p>
          <div className="flex flex-col md:flex-row gap-3">
            <button className="border-2 border-deepBurgundy text-deepBurgundy px-6 py-3 rounded-lg font-semibold hover:bg-deepBurgundy hover:text-white transition">
              Meet the Puppies
            </button>
            <button className="bg-softGold text-white px-6 py-3 rounded-lg font-semibold hover:bg-mutedTeal hover:text-white transition">
              Contact Us
            </button>
          </div>
        </div>
        {/* Right Side */}
        <div className="w-full flex justify-center">
          <div className="shadow-lg shadow-gray-400 rounded-lg overflow-hidden">
            <img
              src={GroupPhoto}
              alt="Group Photo of Puppies"
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <BenefitsSection />
      <Puppies />
    </main>
  );
};
export default Main;
