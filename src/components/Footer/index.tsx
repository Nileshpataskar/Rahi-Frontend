"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  return (
    <footer className=" bg-primary text-gray-800 shadow-lg">
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-16 md:px-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="mb-4 flex items-center justify-center space-x-2 md:justify-start"
            >
              <Image
                src="/logos/Rahi_LogoW.png"
                alt="Rahi Industries Logo"
                width={180}
                height={100}
                className="block  w-32 sm:w-48"
              />
            </Link>
            <p className="text-sm text-gray-400 md:text-base">
              Leading manufacturer of electrical components, powering innovation
              worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="mb-4 text-lg font-semibold text-gray-100">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Home", "Products", "Download", "Company", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`/${item.toLowerCase()}`}
                      className=" hover:text-blue-500 text-gray-400 transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="mb-4 text-lg font-semibold text-gray-100">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-gray-400 md:text-base">
              <li className="flex items-center justify-center md:justify-start">
                <Mail className="mr-2 h-5 w-5 text-blue-500" />
                sales@rahiindustries.in
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <Phone className="mr-2 h-5 w-5 text-green-500" />
                +91 90114 46161
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <MapPin className="mr-2 h-6 w-6 text-red-500" />
                Sr No 323, 3A, Uruli Devachi, Pune, Maharashtra 412308
              </li>
            </ul>
          </div>

          {/* Google Map */}
          <div className="relative flex justify-center">
            <div className="w-full rounded-xl border-2 border-gray-300 p-2 shadow-lg md:w-72">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.55243823537!2d73.94966037506069!3d18.458619382622953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e96daf88352b%3A0x79dd33b1d5acbdd0!2sRahi%20Industries!5e0!3m2!1sen!2sin!4v1738278958186!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-xl"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-300 pt-4 text-center text-sm text-gray-700">
          <p>
            © {new Date().getFullYear()} Rahi Industries. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
