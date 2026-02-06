import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    'Company': [
      { label: 'About Us', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Contact', href: '/contact' },
    ],
    'Resources': [
      { label: 'FAQ', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Support', href: '#' },
      { label: 'Sitemap', href: '#' },
    ],
    'Legal': [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'Accessibility', href: '#' },
    ],
  }

  const socialLinks = [
    { Icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61568434629601', label: 'Facebook' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Linkedin, href: '#', label: 'LinkedIn' },
    { Icon: Instagram, href: '#', label: 'Instagram' },
  ]

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/images/delta-logo.svg"
                alt="Delta Logo"
                width={70}
                height={70}
                className="h-14 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <span className="font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-tight">
                Delta Software and <br className="hidden sm:block" /> Communication
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm">
              Providing fast, reliable, and uninterrupted connectivity across Bangladesh for homes, businesses, and enterprises.
            </p>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={`${category}-${index}`}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact & Social */}
        <div className="border-t border-border pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-sm mb-4">Get In Touch</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 text-sm group">
                  <Phone size={16} className="text-primary group-hover:scale-110 transition-transform" />
                  <a href="tel:+8809611678064" className="text-muted-foreground hover:text-foreground transition-colors">
                    +880 9611678064
                  </a>
                </li>
                <li className="flex items-center space-x-3 text-sm group">
                  <Mail size={16} className="text-primary group-hover:scale-110 transition-transform" />
                  <a href="mailto:info@deltasoftwareandcommunication.com" className="text-muted-foreground hover:text-foreground transition-colors break-all">
                    info@deltasoftwareandcommunication.com
                  </a>
                </li>
                <li className="flex items-start space-x-3 text-sm">
                  <MapPin size={16} className="text-primary mt-1 shrink-0" />
                  <span className="text-muted-foreground">
                    House: 35, Sonargaon Janapath Road, Uttara, Dhaka -1230, Bangladesh.
                  </span>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-sm mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map(({ Icon, href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    className="p-2 rounded-lg bg-secondary/10 hover:bg-secondary/20 text-primary transition-all hover:-translate-y-1"
                    aria-label={label}
                  >
                    <Icon size={20} />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              &copy; {currentYear} Delta Software and Communication. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
