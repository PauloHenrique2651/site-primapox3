import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { SocialLinks } from "@/components/SocialLinks";
import { whatsappLink } from "@/data/whatsapp";
import { company, navigation } from "@/data/site";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer} id="rodape">
      <div className={`shell ${styles.top}`}>
        <div className={styles.brandCol}>
          <BrandMark className={styles.brand} sizes="(max-width: 800px) 240px, 320px" />
          <p>Pintura eletrostática a pó com preparação controlada, cobertura uniforme e acabamento de alto padrão.</p>
          <SocialLinks className={styles.social} />
        </div>
        <nav className={styles.links} aria-label="Navegação do rodapé">
          {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          <Link href="/galeria">Galeria</Link>
          <Link href="/central-tecnica">Central técnica</Link>
          <Link href="/contato">Contato</Link>
        </nav>
        <div className={styles.contact}>
          <p className={styles.label}>Dúvidas, solicitações e orçamentos</p>
          <a className={styles.mail} href={`mailto:${company.email}`}>{company.email}</a>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">WhatsApp {company.whatsappLabel}</a>
          <p className={styles.phones}>{company.phones.map((phone) => <a key={phone} href={`tel:+55${phone.replace(/\D/g, "")}`}>{phone}</a>)}</p>
          <p>{company.address}</p>
          <a className={styles.route} href={company.mapsUrl} target="_blank" rel="noopener noreferrer">Ver no mapa</a>
        </div>
      </div>
      <div className={`shell ${styles.bottom}`}>
        <span>© {new Date().getFullYear()} {company.name}</span>
        <Link href="/politica-de-privacidade">Política de privacidade</Link>
      </div>
    </footer>
  );
}
