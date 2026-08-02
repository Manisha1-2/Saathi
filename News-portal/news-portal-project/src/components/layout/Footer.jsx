import Container from "./Container";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-800 bg-gray-950 text-white">
      <Container>
        <div className="grid gap-10 py-14 md:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold">
              <span className="text-red-600">News</span>
              <span className="text-white">Pulse</span>
            </h2>

            <p className="mt-4 text-sm leading-6 text-gray-400">
              Your trusted source for breaking news, politics,
              technology, business, sports, entertainment and health.
            </p>

            <div className="mt-6 flex gap-4">
              <FaFacebookF className="cursor-pointer text-gray-400 hover:text-red-600" />
              <FaTwitter className="cursor-pointer text-gray-400 hover:text-red-600" />
              <FaInstagram className="cursor-pointer text-gray-400 hover:text-red-600" />
              <FaYoutube className="cursor-pointer text-gray-400 hover:text-red-600" />
            </div>
          </div>


          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li className="hover:text-red-600 cursor-pointer">
                Home
              </li>
              <li className="hover:text-red-600 cursor-pointer">
                Latest News
              </li>
              <li className="hover:text-red-600 cursor-pointer">
                Trending
              </li>
              <li className="hover:text-red-600 cursor-pointer">
                Contact
              </li>
            </ul>
          </div>


          {/* Categories */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Categories
            </h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li className="hover:text-red-600 cursor-pointer">
                Politics
              </li>
              <li className="hover:text-red-600 cursor-pointer">
                Business
              </li>
              <li className="hover:text-red-600 cursor-pointer">
                Technology
              </li>
              <li className="hover:text-red-600 cursor-pointer">
                Sports
              </li>
            </ul>
          </div>


          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Contact
            </h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                Email: contact@newspulse.com
              </li>

              <li>
                Location: Kathmandu, Nepal
              </li>

              <li>
                Phone: +977 98XXXXXXXX
              </li>
            </ul>
          </div>

        </div>


        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">

          <p>
  © {new Date().getFullYear()} NewsPulse.
  All Rights Reserved.
</p>

        </div>

      </Container>
    </footer>
  );
}