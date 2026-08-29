"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BurgerMenu from "@/components/ui/burgerMenu/burgerMenu";
import Button from "@/components/ui/button/Button";

export default function Header() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className={`header ${isOpen ? "open-header" : ""}`}>
      <div className="header-inner">
        <Link href="/" className="header-logo">
          JD
        </Link>

        <nav className="header-nav" aria-label="Main navigation">
          <ul className="header-links">
            {links.map((link) => {
              const isActive = pathname === link.href;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`header-link ${
                      isActive ? "header-link-active" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}

            <li>
              <Button variant="primary" href="/contact" className="header-btn">
                Get in touch
              </Button>
            </li>
          </ul>
        </nav>

        <BurgerMenu
          isOpen={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        />
      </div>
    </header>
  );
}
