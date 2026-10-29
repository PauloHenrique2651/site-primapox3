"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandMark } from "@/components/BrandMark";
import { useHeaderState } from "@/components/useHeaderState";
import { company, navigation } from "@/data/site";
import styles from "./SiteHeader.module.css";

const links = navigation;

export function SiteHeader() {
  const pathname = usePathname();
  const quoteHref = "/contato";
  const { open, setOpen, close, scrolled, menu, toggle } = useHeaderState();

  return (
    <header className={styles.header} data-scrolled={scrolled} data-open={open}>
      <div className={`shell ${styles.inner}`}>
        <BrandMark className={styles.brand} priority onClick={close} />
        <nav className={styles.nav} aria-label="Navegação principal">
          {links.map((item) => (
            <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link>
          ))}
        </nav>
        <a className={styles.cta} href={quoteHref}>Fale Conosco</a>
        <button ref={toggle} className={styles.toggle} type="button" aria-expanded={open} aria-controls="menu-mobile" aria-label={open ? "Fechar menu" : "Abrir menu"} onClick={() => setOpen(!open)}>
          <i /><i />
        </button>
      </div>
      <div ref={menu} className={styles.menu} id="menu-mobile" hidden={!open}>
        <nav className="shell" aria-label="Navegação mobile">
          {links.map((item) => (
            <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined} onClick={close}>{item.label}</Link>
          ))}
          <a className={styles.menuCta} href={quoteHref} onClick={close}>Fale Conosco</a>
          <a className={styles.menuMail} href={`mailto:${company.email}`}>{company.email}</a>
        </nav>
      </div>
    </header>
  );
}
