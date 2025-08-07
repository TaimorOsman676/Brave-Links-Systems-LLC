'use client'
import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-5 md:px-20 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Column 1 - About */}
        <div>
          <h1 className="text-xl font-semibold mb-4 text-white">Brave Link Systems LLC</h1>
          <p className="text-sm leading-relaxed text-gray-300">
            Brave Link Systems LLC is a leading service provider offering reliable solutions in the IT and BPO industry. We help businesses grow with innovative strategies.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
          </ul>
        </div>

        {/* Column 3 - Legal */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Legal</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/PrivacyPolicy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/terms-of-service" className="hover:text-white">Terms of Service</Link></li>
            <li><Link href="/disclaimer" className="hover:text-white">Disclaimer</Link></li>
          </ul>
        </div>

        {/* Column 4 - Contact */}
        <div className="md:text-start">
          <h2 className="text-xl font-semibold mb-4 text-white">Contact</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><strong>Website:</strong> <a href="https://bravelinksystemsllc.com" className="text-blue-400 hover:underline" target="_blank">bravelinksystemsllc.com</a></li>
            <li><strong>Email:</strong> info@bravelinksystemsllc.com</li>
            <li><strong>Phone:</strong> +1 646-249-5293</li>
            <li><strong>Phone:</strong> +1 646-554-2858</li>
            <li><strong>Address:</strong> 30 N Gould St Ste N, Sheridan, WY 82801 USA</li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Brave Link Systems LLC. All rights reserved.
      </div>
    </footer>
  )
}
