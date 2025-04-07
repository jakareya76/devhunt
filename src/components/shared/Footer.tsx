// components/Footer.js
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-site-secondary text-muted py-12">
      <div className="container mx-auto px-6">
        {/* Logo and Description */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div className="flex items-center space-x-3">
            <Image
              src="/logo.png"
              alt="DevHunt Logo"
              width={200}
              height={60}
              className="h-[60px] w-[200px]"
            />
          </div>
          <p className="mt-4 md:mt-0 text-center md:text-left text-sm text-muted max-w-xl">
            Empowering developers to build, grow, and thrive. Join the community
            and accelerate your growth with DevHunt.
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 px-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-lg text-main mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted hover:text-site-primary">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-muted hover:text-site-primary">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-muted hover:text-site-primary">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-muted hover:text-site-primary">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-main mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted hover:text-site-primary">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-muted hover:text-site-primary">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-muted hover:text-site-primary">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted hover:text-site-primary">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-main mb-4">Follow Us</h3>
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="text-muted hover:text-site-primary">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-muted hover:text-site-primary">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-muted hover:text-site-primary">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-muted hover:text-site-primary">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-main mb-4">Newsletter</h3>
            <form className="flex flex-col">
              <input
                type="email"
                placeholder="Your email"
                className="p-2 mb-4 rounded-md text-main bg-border placeholder:text-black/60 focus:outline-none focus:ring-2 focus:ring-site-primary"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-site-primary text-main rounded-md hover:bg-site-primary cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-border pt-6">
          <p className="text-center text-sm text-muted">
            © 2025 DevHunt. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
