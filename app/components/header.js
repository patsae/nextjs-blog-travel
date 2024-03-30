"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="container">
      <div className="header">
        <div className="logo">
          <Image
            src="/images/logo.png"
            fill="true"
            alt="Blog travel"
            objectFit="contain"
          />
        </div>
        <nav>
          <Link
            className={`link ${pathname === "/" ? "link-active" : ""}`}
            href="/"
          >
            Home
          </Link>
          <Link
            className={`link ${pathname === "/blogs" ? "link-active" : ""}`}
            href="/blogs"
          >
            Blogs
          </Link>
          <Link
            className={`link ${pathname === "/aboutme" ? "link-active" : ""}`}
            href="/aboutme"
          >
            About me
          </Link>
        </nav>
      </div>
    </header>
  );
}
