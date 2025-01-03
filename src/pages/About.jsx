import { Link } from "react-router-dom";
import PuppyImage1 from "../assets/images/image1.jpg";

const About = () => {
  return (
    <section className="bg-lightGrey min-h-screen">
      <div className="max-w-7xl mx-auto py-16 px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-deepBurgundy text-center mb-10">
          About Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Left Section */}
          <div className="max-w-lg">
            <p className="mt-6 text-lg text-gray-700">
              Welcome to Rustic Acres, home to our beloved Cavalier King Charles
              Spaniels. We pride ourselves on nurturing these gentle, loyal
              companions with love and care. Our goal is to connect each puppy
              with a forever home where they can thrive and bring joy to your
              family.
            </p>
            <div className="mt-8">
              <Link
                to={"/contact"}
                className="text-softGold hover:text-mutedTeal font-medium hover:underline"
              >
                Learn more about us
                <span className="ml-2">&#8594;</span>
              </Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex justify-center">
            <img
              src={PuppyImage1}
              alt="About Us Image"
              className="object-cover rounded-lg shadow-lg border-4 border-softGold"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
