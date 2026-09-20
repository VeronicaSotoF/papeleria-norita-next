"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FiSearch, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

const enlaces = [
  { href: "/", texto: "Inicio" },
  { href: "/nosotros", texto: "Nosotros" },
  { href: "/tienda", texto: "Tienda" },
  { href: "/contacto", texto: "Contacto" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-content">
        <Link href="/" className="brand" onClick={() => setMenuAbierto(false)}>
          <div className="brand-icon">
            <Image
              src="/logo.svg"
              alt="Logo Papelería Norita"
              width={48}
              height={48}
              priority
            />
          </div>

          <div className="brand-text">
            <span>PAPELERÍA</span>
            <strong>NORITA</strong>
          </div>
        </Link>

        <nav
          id="menu-principal"
          className={`nav-links ${menuAbierto ? "open" : ""}`}
        >
          {enlaces.map((enlace) => (
            <Link
              key={enlace.href}
              href={enlace.href}
              className={pathname === enlace.href ? "active" : ""}
              aria-current={pathname === enlace.href ? "page" : undefined}
              onClick={() => setMenuAbierto(false)}
            >
              {enlace.texto}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="icon-button" aria-label="Buscar" type="button">
            <FiSearch />
          </button>

          <button
            className="icon-button cart-button"
            aria-label="Carrito"
            type="button"
          >
            <FiShoppingCart />
            <span className="cart-number">0</span>
          </button>

          <button
            className="icon-button menu-toggle"
            aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuAbierto}
            aria-controls="menu-principal"
            type="button"
            onClick={() => setMenuAbierto(!menuAbierto)}
          >
            {menuAbierto ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
}
