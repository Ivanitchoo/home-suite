"use client";

import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import {footerLinks, socialLinks} from '@/constants/index'
import Link from "next/link";

const Footer = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [email, setEmail] = useState("");
  const [language, setLanguage] = useState("pt");

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className={`w-full ${darkMode ? "bg-gray-900 text-white" : "bg-gradient-to-r from-gray-100 to-gray-300 text-gray-800"} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Contace-nos</h3>
            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-blue-600" />
              <p>Av. 25 de Setembro, n° 916<br />Maputo, Kampfumo, 1106</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaPhone className="text-blue-600" />
              <p>+258 84 360 6844</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-blue-600" />
              <p>ivanalbano9@gmail.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {footerLinks
              .slice(0,5)
              .map((link) => (
                <li key={link.route}>
                  
                    <Link className="hover:text-blue-600 transition-colors duration-200" href={link.route}> {link.label}  </Link>
                  
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Introduza o seu email"
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Subscrever
              </button>
            </form>
          </div>

          {/* Settings and Social */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <IoSunnyOutline size={24} /> : <IoMoonOutline size={24} />}
              </button>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="px-3 py-1 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800"
              >
                <option value="pt">Português</option>
                <option value="en">English</option>
              </select>
            </div>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((link) => (
                <Link
                  key={link.route}
                  className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
                  //aria-label={link.label}
                  href={link.route}
                >
                  
                    <link.Icon className="w-6 h-6"/>
                  
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Legal and Compliance */}
        <div className="mt-12 pt-8 border-t border-gray-300 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm">
              © {currentYear} Pine Technology, SA. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              {footerLinks
              .slice(-3)
              .map((link) => (
                <Link
                  key={link.route}
                  className="text-sm hover:text-blue-600 transition-colors duration-200"
                  onClick={() => console.log(`Navigating to ${link.label}`)}
                  href={link.route}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;