import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/data/seo";
import { HeroCarousel } from "@/components/HeroCarousel";
import { HeroBackgroundVideo } from "@/components/HeroBackgroundVideo";
import { LegacyContactForm } from "@/components/LegacyContactForm";
import { PhotoGallery } from "@/components/PhotoGallery";
import { about, contact, galleryTitle, home, services } from "@/data/primapox";
import styles from "./home.module.css";

export const metadata = pageMetadata("/", "Primapox | Pintura eletrostática a pó no Rio de Janeiro", "Executamos pintura eletrostática com tinta em pó, ideais para: esquadrias, batentes, caixilhos, forros, divisórias, fachadas, telhas metálicas, coberturas, estruturas espaciais, etc.");

// Layout reverse engineered from ezycolor.com.br; every visible text comes verbatim from data/primapox.ts.
const swatches = [
  { name: "Branco", color: "#f3f4f1", src: "/gallery/26.webp" },
  { name: "Vermelho", color: "#c8141b", src: "/gallery/22.webp" },
  { name: "Verde", color: "#1f9a3a", src: "/gallery/5.webp" },
  { name: "Azul", color: "#1b8fd0", src: "/gallery/45.webp" },
  { name: "Amarelo", color: "#efc000", src: "/gallery/44.webp" },
  { name: "Várias cores", color: "conic-gradient(#c8141b 0 25%, #f3f4f1 0 50%, #1f6b3a 0 75%, #efc000 0)", src: "/gallery/14.webp" },
];

const rows = [
  { label: home.aboutTitle, title: about.title, text: home.aboutText, href: "/empresa", photos: ["/gallery/11.webp", "/gallery/32.webp", "/gallery/31.webp"] },
  { label: services.typesTitle, title: services.types[0][0], text: services.types[0][1], href: "/servicos", photos: ["/gallery/40.webp", "/gallery/30.webp", "/gallery/35.webp"] },
  { label: services.typesTitle, title: services.types[1][0], text: services.types[1][1], href: "/servicos", photos: ["/gallery/25.webp", "/gallery/26.webp", "/gallery/24.webp"] },
];

const grayRows = [
  { title: services.materials[0][0], text: services.materials[0][1], photos: ["/gallery/24.webp", "/gallery/37.webp", "/gallery/38.webp", "/gallery/36.webp"] },
  { title: services.materials[1][0], text: services.materials[1][1], photos: ["/gallery/40.webp", "/gallery/30.webp", "/gallery/39.webp", "/gallery/35.webp"] },
];

export default function HomePage() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="titulo-principal">
        <HeroCarousel swatches={swatches} video={{ src: "/media/hero-ezycolor.webm", poster: "/gallery/22.webp" }} />
        <div className={`shell ${styles.heroText}`}>
          <h1 id="titulo-principal">{services.closing}</h1>
          <p className={styles.heroSub}>{services.sloganTitle}</p>
          <p className={styles.heroLead}>{home.servicesText}</p>
          <Link className={styles.heroButton} href="/servicos">{home.more}</Link>
        </div>
      </section>

      {rows.map((row, index) => (
        <section key={row.title} className={styles.row} aria-labelledby={`linha-${index}`}>
          <div className={`shell ${styles.rowGrid}`}>
            <div className={styles.strip}>
              {row.photos.map((src) => <div key={src} className={styles.stripPhoto}><Image src={src} alt="" fill sizes="(max-width: 900px) 30vw, 18vw" /></div>)}
            </div>
            <div className={styles.rowText}>
              <p className={styles.label}>{row.label}</p>
              <h2 id={`linha-${index}`}>{row.title}</h2>
              <Link className={styles.more} href={row.href}>{home.more}</Link>
              <p>{row.text}</p>
            </div>
          </div>
        </section>
      ))}

      {grayRows.map((row, index) => (
        <section key={row.title} className={styles.gray} aria-labelledby={`material-${index}`}>
          <div className="shell">
            <div className={styles.grayHead}>
              <div>
                <p className={styles.label}>{services.materialTitle}</p>
                <h2 id={`material-${index}`}>{row.title}</h2>
                <Link className={styles.more} href="/servicos">{home.more}</Link>
              </div>
              <div className={styles.grayText}>{index === 0 && <p>{services.materialIntro}</p>}<p>- {row.text}</p></div>
            </div>
            <div className={styles.fourPhotos}>
              {row.photos.map((src) => <div key={src} className={styles.tallPhoto}><Image src={src} alt="" fill sizes="(max-width: 900px) 46vw, 22vw" /></div>)}
            </div>
          </div>
        </section>
      ))}

      <section className={styles.banner} aria-labelledby="slogan">
        <HeroBackgroundVideo src="/media/hero-ezycolor.webm" poster="/gallery/13.webp" className={styles.bannerMedia} buttonClassName={styles.bannerToggle} />
        <div className={styles.bannerText}>
          <h2 id="slogan">{services.sloganTitle}</h2>
          <p className={styles.heroSub}>{services.closing}</p>
          <p>{services.sloganParagraphs[0]}</p>
          <Link className={styles.heroButton} href="/servicos">{home.more}</Link>
        </div>
      </section>

      <section className={styles.cardSection} aria-labelledby="vantagens">
        <div className={`shell ${styles.roundCard}`}>
          <Image src="/gallery/17.webp" alt="" fill sizes="90vw" />
          <div className={styles.roundCardText}>
            <h2 id="vantagens">{home.advantagesTitle}</h2>
            <ul>{home.advantages.map((advantage) => <li key={advantage}>{advantage}</li>)}</ul>
          </div>
          <Link className={styles.roundCardButton} href="/contato">{home.contactTitle}</Link>
        </div>
      </section>

      <section className={styles.badges} aria-labelledby="beneficios">
        <div className="shell">
          <p className={styles.centerLabel}>{services.title}</p>
          <h2 id="beneficios" className={styles.centerTitle}>{services.benefitsTitle}</h2>
          <ul className={styles.benefitCols}>{services.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul>
        </div>
      </section>

      <section className={styles.news} aria-labelledby="galeria">
        <div className="shell">
          <p className={styles.centerLabel}>Primapox</p>
          <h2 id="galeria" className={styles.centerTitle}>{galleryTitle}</h2>
          <PhotoGallery limit={8} />
          <div className={styles.center}><Link className={styles.outlineDark} href="/galeria">{home.more}</Link></div>
        </div>
      </section>

      <section className={styles.contact} aria-labelledby="fale-conosco">
        <div className={`shell ${styles.contactGrid}`}>
          <div>
            <p className={styles.label}>{home.locationTitle}</p>
            <h2 id="fale-conosco">{home.contactTitle}</h2>
            <p>{contact.intro}</p>
            <p>{home.locationText}</p>
            <a className={styles.mail} href={`mailto:${contact.email}`}>{contact.email}</a>
          </div>
          <LegacyContactForm />
        </div>
      </section>
    </>
  );
}
