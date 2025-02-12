import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const cities = [
    "New York", "London", "Tokyo", "Paris", "Sydney",
    "Mumbai", "Dubai", "Berlin", "Toronto", "Singapore"
  ];

  const travelCategories = [
    "Adventure Travel", "Art and Culture", "Beaches, Coasts and Islands",
    "Family Holidays", "Festivals", "Food and Drink",
    "Honeymoon and Romance", "Road Trips", "Sustainable Travel",
    "Travel on a Budget", "Wildlife and Nature"
  ];

  const travelSections = [
    "Destination Guides", "Lonely Planet Kids",
    "Lonely Planet Shop", "Non-English Guides"
  ];

  const siteLinks = [
    "About Lonely Planet", "Contact Us", "Trade and Advertising",
    "Privacy Policy", "Terms and Conditions", "Work For Us",
    "Write For Us", "Sitemap", "Consumer Health Data Privacy Policy",
    "Do Not Sell or Share My Personal Information"
  ];

  // Reusable list component
  const ListSection = ({ title, items }) => (
    <div>
      <h2 className="text-lg mb-3 font-bold uppercase">{title}</h2>
      <ul className="flex flex-col gap-2 text-gray-800 text-sm">
        {items.map((item, idx) => <li key={idx}>{item}</li>)}
      </ul>
    </div>
  );

  return (
    <footer>
      {/* Top Section */}
      <section className="bg-white">
        <div className="container mx-auto grid md:grid-cols-[1.5fr_1fr] grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-6 py-10 px-5">
          <div>
            <h1 className="text-3xl font-bold text-blue-700">lonely planet</h1>
            <p className="text-sm mt-5">For Explorers Everywhere</p>
            <p className="font-bold my-5">FOLLOW US</p>
            <div className="flex gap-2">
              <Facebook color="blue" />
              <Twitter color="black" />
              <Linkedin color="green" />
              <Instagram color="red" />
            </div>
            <div className="mt-5">
              <h3 className="text-lg mb-5 font-semibold text-blue">
                Get 20% off your first order.
              </h3>
              <form className="w-3/4 flex flex-col gap-4 items-start">
                <input
                  id=""
                  required=""
                  type="email"
                  name=""
                  placeholder="Email address"
                  className="rounded-full bg-transparent px-4 py-2 border border-gray-400 outline-blue-700 placeholder-black w-full"
                  defaultValue=""
                />
                <button
                  className="mb-4 px-6 py-2 bg-blue-700 text-white rounded-full w-full"
                  type="submit"
                  data-testid="btn"
                >
                  Subscribe now
                </button>
                <p className="text-xs text-black-400">
                  Subscribe to Lonely Planet newsletters and promotions.{/* */}{" "}
                  <span className="whitespace-nowrap">
                    Read our{/* */}{" "}
                    <a href="/legal" className="underline text-blue">
                      Privacy Policy.
                    </a>
                  </span>
                </p>
              </form>
            </div>

          </div>
          <ListSection title="Top Destinations" items={cities} />
          <ListSection title="Travel Interests" items={travelCategories} />
          <div className="flex flex-col gap-2">
            <ListSection title="Shop" items={travelSections} />
            <ListSection title="About us" items={siteLinks} />
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="py-8 bg-black px-5">
        <div className="container flex flex-col-reverse md:flex-row items-center justify-between gap-5">
          <p className="text-sm text-white text-center md:text-left">
            © 2025 Lonely Planet, a Red Ventures company. All rights reserved.
          </p>

          {/* Language Selector */}
          <div className="inline-flex items-center w-full md:w-96">
            <label htmlFor="language-dropdown" className="mr-6 font-semibold text-white uppercase">
              Language
            </label>
            <div id="language-dropdown" className="relative w-full">
              <button className="relative flex justify-between items-center w-full rounded-lg px-4 py-2 md:px-5 md:py-4 text-left font-semibold border border-white text-white focus:outline-none">
                English
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" className="text-xs ml-4 text-white" viewBox="0 0 11 6" fill="currentColor" aria-hidden="true">
                  <path d="M5.60504 5.5L0 0H11.2101L5.60504 5.5Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
