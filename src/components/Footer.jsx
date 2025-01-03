const Footer = () => {
  return (
    <footer className="bg-deepBurgundy py-6">
      <div className="container mx-auto text-center">
        <p className="text-white">
          &copy; {new Date().getFullYear()} Rustic Acres. All rights reserved.
        </p>
        <a
          href="#contact"
          className="text-softGold hover:underline mt-2 inline-block"
        >
          Contact Us
        </a>
      </div>
    </footer>
  );
};

export default Footer;
