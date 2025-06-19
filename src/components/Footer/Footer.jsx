import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 px-6 py-12 mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Safety
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Accessibility
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Connect</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
