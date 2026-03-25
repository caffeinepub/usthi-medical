import { Cross, Heart } from "lucide-react";
import { SiFacebook, SiInstagram, SiX } from "react-icons/si";

const footerLinks = [
  {
    heading: "Shop",
    links: ["Categories", "Featured", "Offers", "New Arrivals"],
  },
  {
    heading: "Support",
    links: ["Contact Us", "FAQs", "Returns", "Track Order"],
  },
  {
    heading: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  },
  {
    heading: "Company",
    links: ["About Us", "Blog", "Careers", "Press"],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="about"
      className="bg-foreground text-primary-foreground"
      data-ocid="footer.section"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-10">
          {/* Brand column */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Cross className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg tracking-wide">
                USTHI MEDICAL
              </span>
            </div>
            <p className="text-xs text-white/60 leading-relaxed">
              Affordable, genuine medicines delivered to your doorstep in
              Silchar and across Assam.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white/60 hover:text-white transition-colors"
                data-ocid="footer.link"
              >
                <SiFacebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/60 hover:text-white transition-colors"
                data-ocid="footer.link"
              >
                <SiInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="text-white/60 hover:text-white transition-colors"
                data-ocid="footer.link"
              >
                <SiX className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <h4 className="text-sm font-bold mb-4 text-white/90">
                {col.heading}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <button
                      type="button"
                      className="text-xs text-white/60 hover:text-white transition-colors cursor-pointer"
                      data-ocid="footer.link"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/50">
            © {year} USTHI MEDICAL. All rights reserved.
          </p>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white/50 hover:text-white/80 transition-colors flex items-center gap-1"
          >
            Built with <Heart className="w-3 h-3 fill-red-400 text-red-400" />{" "}
            using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
