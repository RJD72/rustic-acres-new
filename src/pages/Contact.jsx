const Contact = () => {
  return (
    <div className="min-h-screen bg-lightGrey">
      <div className="max-w-7xl mx-auto sm:rounded-lg">
        {/* Header */}
        <div className="pt-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-deepBurgundy">
            Contact
          </h2>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 py-10 gap-6">
          {/* Left Section */}
          <div className="bg-deepBurgundy md:col-span-4 p-10 text-white">
            <p className="text-sm uppercase tracking-wide font-medium">
              Contact
            </p>
            <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold mt-4">
              Get In Touch
            </h3>
            <p className="mt-4 leading-7">
              We’d love to hear from you! Whether you have a question about our
              puppies, adoption process, or anything else, our team is ready to
              answer all your inquiries.
            </p>
          </div>

          {/* Form Section */}
          <form className="md:col-span-8 p-10 bg-white rounded-lg shadow-md">
            {/* First and Last Name */}
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="first-name"
                >
                  First Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-mutedTeal"
                  id="first-name"
                  type="text"
                  placeholder="Jane"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="last-name"
                >
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-mutedTeal"
                  id="last-name"
                  type="text"
                  placeholder="Doe"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-mutedTeal"
                  id="email"
                  type="email"
                  placeholder="email@example.com"
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="message"
                >
                  Your Message
                </label>
                <textarea
                  rows="6"
                  className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-mutedTeal"
                  id="message"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end px-3">
              <button
                type="submit"
                className="px-6 py-3 text-white bg-softGold rounded-lg shadow-md font-medium hover:bg-mutedTeal focus:ring-2 focus:ring-mutedTeal transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
