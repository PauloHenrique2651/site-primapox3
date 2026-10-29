import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { SocialLinks } from "@/components/SocialLinks";
import { whatsappLink } from "@/data/whatsapp";
import { company, navigation } from "@/data/site";
import { contact, footerRights, home } from "@/data/primapox";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer} id="rodape">
      <div className={`shell ${styles.top}`}>
        <div className={styles.brandCol}>
          <BrandMark className={styles.brand} sizes="(max-width: 800px) 240px, 320px" />
          <p>{footerRights}</p>
          <SocialLinks className={styles.social} />
        </div>
        <nav className={styles.links} aria-label="Navegação do rodapé">
          {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <div className={styles.contact}>
          <p className={styles.label}>{home.contactTitle}</p>
          <a className={styles.mail} href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">WhatsApp {company.whatsappLabel}</a>
          {contact.phoneLines.map((line) => <p key={line}>{line}</p>)}
          {contact.addressLines.map((line) => <p key={line}>{line}</p>)}
          <a className={styles.route} href={company.mapsUrl} target="_blank" rel="noopener noreferrer">{home.locationTitle}</a>
        </div>
      </div>
      <div className={`shell ${styles.bottom}`}>
        <span>{footerRights}</span>
        <Link href="/politica-de-privacidade">Política de privacidade</Link>
      </div>
    </footer>
  );
}
