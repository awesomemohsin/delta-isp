import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import { DESIGN_VERSION } from '@/lib/site-config'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    'Company': [
      { label: 'About Us', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Packages', href: '/packages' },
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
    { Icon: Instagram, href: 'https://www.instagram.com/dscl_2024', label: 'Instagram' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Linkedin, href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className="relative bg-transparent overflow-hidden border-t border-border">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/images/delta-logo.svg"
                alt="Delta Logo"
                width={100}
                height={100}
                className="h-20 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <span className={`font-bold text-xl leading-tight ${DESIGN_VERSION === 'hot'
                  ? 'bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'
                  : 'text-foreground'
                }`}>
                Delta Software and <br className="hidden sm:block" /> Communication
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm">
              Providing fast, reliable, and uninterrupted connectivity across Bangladesh for homes, businesses, and enterprises.
            </p>
          </div>

          {/* Links Sections - Grouped for Mobile side-by-side */}
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Group 1: Company & Resources (Side by Side on Mobile) */}
            <div className="space-y-8">
              <h4 className="font-semibold text-sm mb-4">Company</h4>
              <ul className="space-y-2">
                {footerLinks['Company'].map((link, index) => (
                  <li key={`company-${index}`}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-8">
              <h4 className="font-semibold text-sm mb-4">Resources</h4>
              <ul className="space-y-2">
                {footerLinks['Resources'].map((link, index) => (
                  <li key={`resources-${index}`}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal - Stays in 3rd col on desktop, but grid-cols-2 container ensures mobile pairing with Social */}
            <div className="space-y-8 col-span-1 md:col-span-1 hidden md:block">
              <h4 className="font-semibold text-sm mb-4">Legal</h4>
              <ul className="space-y-2">
                {footerLinks['Legal'].map((link, index) => (
                  <li key={`legal-${index}`}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact & Social Section */}
        <div className="border-t border-border pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start text-center md:text-left">
            {/* Legal & Follow Us Group (Side by Side on Mobile) */}
            <div className="grid grid-cols-2 gap-8 md:hidden mb-8">
              <div className="text-left">
                <h4 className="font-semibold text-sm mb-4">Legal</h4>
                <ul className="space-y-2">
                  {footerLinks['Legal'].map((link, index) => (
                    <li key={`legal-mobile-${index}`}>
                      <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-sm mb-4">Follow Us</h4>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map(({ Icon, href, label }) => (
                    <Link
                      key={label}
                      href={href}
                      className="p-2 rounded-lg bg-secondary/10 hover:bg-secondary/20 text-primary transition-all"
                      aria-label={label}
                    >
                      <Icon size={18} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop Legal is already in the grid above. Social is separate here. */}

            {/* Get In Touch */}
            <div className="space-y-6">
              <h4 className="font-semibold text-sm mb-4">Get In Touch</h4>
              <div className="flex flex-col space-y-4 items-center md:items-start">
                <a href="tel:+8809611678064" className="flex items-center space-x-3 text-sm group text-muted-foreground hover:text-foreground transition-colors">
                  <Phone size={16} className="text-primary group-hover:scale-110 transition-transform" />
                  <span>+880 9611678064</span>
                </a>
                <a href="mailto:info@deltasoftwareandcommunication.com" className="flex items-center space-x-3 text-sm group text-muted-foreground hover:text-foreground transition-colors">
                  <Mail size={16} className="text-primary group-hover:scale-110 transition-transform" />
                  <span className="break-all">info@deltasoftwareandcommunication.com</span>
                </a>
                <div className="flex items-start space-x-3 text-sm text-muted-foreground">
                  <MapPin size={16} className="text-primary mt-1 shrink-0" />
                  <span className="max-w-xs">
                    House: 35, Sonargaon Janapath Road, Uttara, Dhaka -1230, Bangladesh.
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links (Desktop version) */}
            <div className="hidden md:block">
              <h4 className="font-semibold text-sm mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map(({ Icon, href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    className="p-2.5 rounded-xl bg-secondary/10 hover:bg-secondary/20 text-primary transition-all hover:-translate-y-1 block"
                    aria-label={label}
                  >
                    <Icon size={20} />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs text-muted-foreground text-center md:text-left">
              &copy; {currentYear} Delta Software and Communication. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors font-medium">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors font-medium">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
