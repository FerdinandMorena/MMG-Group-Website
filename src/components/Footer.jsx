import { Link } from "react-router-dom";
import Logo from "./Logo";

const footerLinks = {
  services: [
    { name: "Roofing", href: "/services#roofing" },
    { name: "Painting", href: "/services#painting" },
    { name: "Flooring", href: "/services#flooring" },
    { name: "Construction", href: "/services#construction" },
    { name: "Maintenance", href: "/services#maintenance" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Works", href: "/works" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#041f5e] text-white w-full overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="inline-block mb-6">
              <Logo className="text-sm" />
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Situnda Global Solutions (PTY) LTD is a 100% South African owned
              company committed to providing quality building services with
              integrity.
            </p>
            <div className="text-sm text-white/40">
              <p>REG NO: 2026/244431/07</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">
                  Head Office
                </p>
                <p>Polokwane, Limpopo Province</p>
              </li>

              <li>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">
                  Directors
                </p>
                <p>Asandiswa Situnda</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-7xl mx-auto">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} MMG Group. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <p className="text-white/40 text-sm">
              Developed By Ferdinand Morena
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
