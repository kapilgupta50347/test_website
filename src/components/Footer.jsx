import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-navy text-beige py-6 mt-12 text-center border-t border-beige/20">
      <p className="text-sm">
        © {new Date().getFullYear()} <span className="font-semibold text-cheese">Shapix</span> — All rights reserved.
      </p>
    </footer>
  );
}
