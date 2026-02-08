'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/mode-toggle'
import { GetConnectedDialog } from '@/components/get-connected-dialog'
import { DESIGN_VERSION } from '@/lib/site-config'
import { usePathname } from 'next/navigation'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/packages', label: 'Packages' },
    { href: '/pay-bill', label: 'Pay Bill' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${DESIGN_VERSION === 'hot'
      ? 'bg-background/90 backdrop-blur-xl border-b-2 border-[#EA2630]/20 shadow-[0_4px_20px_-10px_rgba(12,88,164,0.15)]'
      : 'bg-background/80 backdrop-blur-md border-b border-border'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/delta-logo.svg"
              alt="Delta Internet"
              width={500}
              height={100}
              className={`h-16 md:h-24 w-auto object-contain transition-transform duration-500 ${DESIGN_VERSION === 'hot' ? 'group-hover:scale-110' : 'group-hover:scale-105'}`}
              priority
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            {links.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-bold tracking-tight transition-all relative group py-2 ${DESIGN_VERSION === 'hot'
                    ? isActive
                      ? 'text-[#0C58A4]'
                      : 'text-black hover:text-[#0C58A4]'
                    : 'text-foreground/80 hover:text-foreground'
                    }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 transition-all duration-300 ${DESIGN_VERSION === 'hot'
                    ? isActive
                      ? 'w-full h-1 bg-[#EA2630]'
                      : 'w-0 h-1 bg-gradient-to-r from-[#0C58A4] to-[#EA2630] group-hover:w-full'
                    : 'h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full'
                    }`} />
                </Link>
              )
            })}
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-4">
            <ModeToggle />
            {DESIGN_VERSION === 'hot' ? (
              <GetConnectedDialog />
            ) : (
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-primary to-secondary text-white font-medium px-6 py-2 rounded-full hover:shadow-lg transition-all">
                  Connect Now
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ModeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className={`md:hidden pb-6 pt-2 space-y-2 animate-in slide-in-from-top-4 duration-300 ${DESIGN_VERSION === 'hot' ? 'border-t border-[#EA2630]/10' : ''
            }`}>
            {links.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 text-sm font-bold tracking-tight rounded-xl transition-all ${DESIGN_VERSION === 'hot'
                      ? isActive
                        ? 'bg-[#0C58A4]/10 text-[#0C58A4] border-l-4 border-[#EA2630]'
                        : 'text-black hover:bg-[#0C58A4]/5 hover:text-[#0C58A4]'
                      : 'font-medium text-foreground/80 hover:text-foreground hover:bg-secondary/10'
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              )
            })}
            {DESIGN_VERSION === 'hot' ? (
              <GetConnectedDialog className="w-full mt-4" />
            ) : (
              <Link href="/contact" className="block w-full mt-4" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary text-white">
                  Connect Now
                </Button>
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}
