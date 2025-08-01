import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <div className="bg-green-800 text-white px-4 py-12 sm:px-6 sm:py-14 lg:px-16 lg:py-16 rounded-2xl mx-4 sm:mx-6 lg:mx-16 mb-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Branding + Social Icons */}
          <div>
            <div className="text-xl font-bold mb-4">Danapaani Foundation</div>
            <div className="flex items-center gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30">
                  <FaFacebookF className="text-white text-lg" />
                </div>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30">
                  <FaInstagram className="text-white text-lg" />
                </div>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30">
                  <FaTwitter className="text-white text-lg" />
                </div>
              </a>
            </div>
          </div>

          {/* Legal Info */}
          <div>
            <h4 className="font-semibold mb-4">© 2025 Danapaani NGO</h4>
            <div className="space-y-2 text-sm">
              <p>Privacy Policy</p>
              <p>Terms of Use</p>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="sm:col-span-2 lg:col-span-2">
            <p className="text-sm leading-relaxed">
              Dana Pani is dedicated to fighting hunger and restoring dignity through every meal served.
              With compassion at our core, we believe that access to food is a basic human right — not a
              privilege. Join us in our mission to ensure that no one sleeps hungry.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Footer;
