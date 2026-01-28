import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0B2444] text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* OUR SERVICES */}
        <div>
          <h3 className="text-base sm:text-lg font-semibold mb-4 tracking-wide">OUR SERVICES</h3>
          <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm opacity-90">
            {[
              "Tours", "Treks", "Expeditions", "Safaris",
              "Rock Climbing", "Overland Tours", "Honeymoon Tours",
              "Hotel Reservations", "Rent a Car Services",
               
            ].map((item, i) => (
              <li key={i} className="hover:text-gray-300 cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-base sm:text-lg font-semibold mb-4 tracking-wide">Quick Links</h3>
          <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm opacity-90">
            {[
               "Travelers Tips", "Booking Conditions",
              "Holiday Types", "Solo Travel", "Meet Our Team",
              "Why Travel with us", "Top Destinations", "Pakistan Travel Guide",
               "Contact Us"
            ].map((item, i) => (
              <li key={i} className="hover:text-gray-300 cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>

        {/* TOP DESTINATIONS */}
        <div>
          <h3 className="text-base sm:text-lg font-semibold mb-4 tracking-wide">Top Destinations</h3>
          <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm opacity-90">
            {[
              "Fairy Meadows", "Hunza Valley", ,
               "Skardu Valley", "Mohenjodaro", "Swat Valley", "Lahore City", ,
              "Naran Valley", "Chitral Valley", "Ghizer Valley", 
            ].map((item, i) => (
              <li key={i} className="hover:text-gray-300 cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>

        {/* CONTACT WITH US */}
        <div>
          <h3 className="text-base sm:text-lg font-semibold mb-4 tracking-wide">Contact With Us</h3>

          {/* ISLAMABAD */}
          <div className="mb-6">
            <p className="flex items-center gap-2 font-semibold text-sm mb-1">
              <FaMapMarkerAlt className="text-yellow-400" /> ISLAMABAD OFFICE:
            </p>
            <p className="text-xs sm:text-sm opacity-90">
              khalifa heights 4th floor D1 Committi Chowk Islamabad-Rawalpindi
            </p>
            <p className="flex items-center gap-2 text-xs sm:text-sm mt-2">
              <FaPhone className="text-yellow-400" /> 0092-3456564307
                                                        
            </p>
            <p className="flex items-center gap-2 text-xs sm:text-sm">
              <FaEnvelope className="text-yellow-400" /> beyondbordersadventuretours@gmail.com
            </p>
          </div>

          {/* HUNZA OFFICE */}
          <div className="mb-6">
            <p className="flex items-center gap-2 font-semibold text-sm mb-1">
              <FaMapMarkerAlt className="text-yellow-400" /> Hunza-Nagar:
            </p>
            <p className="text-xs sm:text-sm opacity-90">
              Shahrah-e-Nagar office Hotel Cherry Garden Gilgit, Pakistan.
            </p>
            <p className="flex items-center gap-2 text-xs sm:text-sm mt-2">
              <FaPhone className="text-yellow-400" /> 0092-3135235207
            </p>
          </div>

          {/* SINGAPORE OFFICE */}
          
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/20 mt-16 pt-4 text-center text-xs sm:text-sm opacity-80">
  © BBAT 2025–2030. All rights reserved.
  <div className="mt-1">
    Based in Pakistan • Serving Adventures Worldwide
  </div>
  </div>
    </footer>
  );
}
