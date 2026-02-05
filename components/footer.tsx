import Link from 'next/link'
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
    { Icon: Facebook, href: '#', label: 'Facebook' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Linkedin, href: '#', label: 'LinkedIn' },
    { Icon: Instagram, href: '#', label: 'Instagram' },
  ]

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">D</span>
              </div>
              <span className="font-bold text-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Delta ISP</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Providing fast, reliable, and unlimited internet for homes and businesses across the region.
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
                <li className="flex items-center space-x-3 text-sm">
                  <Phone size={16} className="text-primary" />
                  <span className="text-muted-foreground">1-800-ISP-FAST</span>
                </li>
                <li className="flex items-center space-x-3 text-sm">
                  <Mail size={16} className="text-primary" />
                  <span className="text-muted-foreground">support@deltaisp.com</span>
                </li>
                <li className="flex items-start space-x-3 text-sm">
                  <MapPin size={16} className="text-primary mt-0.5" />
                  <span className="text-muted-foreground">123 Tech Street, Silicon Valley, CA 94000</span>
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
                    className="p-2 rounded-lg bg-secondary/20 hover:bg-secondary/40 text-primary hover:text-secondary transition-colors"
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
              &copy; {currentYear} Delta ISP. All rights reserved.
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
