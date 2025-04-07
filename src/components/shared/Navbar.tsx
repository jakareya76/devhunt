import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <nav className="p-4 sticky text-mu bg-site-secondary">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={200} height={60} />
          </Link>
        </div>
        <div>
          <ul className="flex gap-8 text-site-accent font-semibold text-lg">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/jobs">Jobs</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="flex gap-4">
            <Button
              variant="default"
              className="bg-site-primary hover:bg-site-background cursor-pointer"
              size="lg"
            >
              Sign In
            </Button>
            <Button
              variant="outline"
              className="bg-transparent border-site-accent text-site-accent cursor-pointer"
              size="lg"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
