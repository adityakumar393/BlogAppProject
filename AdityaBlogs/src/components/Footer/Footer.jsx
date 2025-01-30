import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white border-t border-gray-700">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="-m-6 flex flex-wrap justify-between">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12 flex flex-col justify-between">
            <div className="mb-4 flex items-center space-x-3">
              <Logo width="100px" />
            </div>
            <p className="text-sm text-gray-400">&copy; 2023 DevUI. All Rights Reserved.</p>
          </div>
          
          {/** Footer Links Section **/}
          {[
            { title: "Company", links: ["Features", "Pricing", "Affiliate Program", "Press Kit"] },
            { title: "Support", links: ["Account", "Help", "Contact Us", "Customer Support"] },
            { title: "Legals", links: ["Terms & Conditions", "Privacy Policy", "Licensing"] }
          ].map((section, index) => (
            <div key={index} className="w-full p-6 md:w-1/2 lg:w-2/12">
              <h3 className="mb-6 text-xs font-semibold uppercase text-gray-400 tracking-widest">
                {section.title}
              </h3>
              <ul>
                {section.links.map((link, idx) => (
                  <li key={idx} className="mb-4 transition-transform duration-300 hover:translate-x-1">
                    <Link className="text-base font-medium text-gray-300 hover:text-white" to="/">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Footer;