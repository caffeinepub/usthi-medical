import { Badge } from "@/components/ui/badge";
import { Cross, Menu, Phone, ShoppingCart, X } from "lucide-react";
import { useState } from "react";

const WA_PATH =
  "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z";

interface HeaderProps {
  cartCount: number;
}

export default function Header({ cartCount }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Categories", href: "#categories" },
    { label: "Services", href: "#how-it-works" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className="sticky top-0 z-50 bg-card border-b border-border shadow-header"
      data-ocid="header.panel"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2.5"
          data-ocid="header.link"
        >
          <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
            <Cross className="w-5 h-5 text-primary-foreground" />
          </div>
          <div className="leading-tight">
            <span className="font-bold text-lg text-foreground tracking-wide">
              USTHI
            </span>
            <span className="font-bold text-lg text-primary tracking-wide">
              {" "}
              MEDICAL
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              data-ocid="header.link"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <a
            href="tel:9933138573"
            className="hidden sm:flex items-center gap-1.5 text-sm text-primary font-medium"
            data-ocid="header.link"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden lg:inline">9933138573</span>
          </a>

          <a
            href="https://wa.me/919933138573"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 text-sm font-semibold px-3 py-1.5 rounded-lg whatsapp-btn transition-colors"
            data-ocid="header.link"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 fill-current"
              aria-hidden="true"
            >
              <path d={WA_PATH} />
            </svg>
            <span className="hidden lg:inline">WhatsApp</span>
          </a>

          {/* Cart */}
          <button
            type="button"
            className="relative flex items-center justify-center w-10 h-10 rounded-lg hover:bg-secondary transition-colors"
            aria-label="Cart"
            data-ocid="header.button"
          >
            <ShoppingCart className="w-5 h-5 text-foreground" />
            {cartCount > 0 && (
              <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 text-[10px] font-bold bg-primary text-primary-foreground">
                {cartCount}
              </Badge>
            )}
          </button>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-secondary transition-colors"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
            data-ocid="header.toggle"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-card px-4 py-3 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-foreground hover:text-primary"
              onClick={() => setMobileOpen(false)}
              data-ocid="header.link"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/919933138573"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg whatsapp-btn w-fit"
            data-ocid="header.link"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 fill-current"
              aria-hidden="true"
            >
              <path d={WA_PATH} />
            </svg>
            Order via WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
