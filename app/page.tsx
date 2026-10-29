import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/data/seo";
import { HeroCarousel } from "@/components/HeroCarousel";
import { LegacyContactForm } from "@/components/LegacyContactForm";
import { PhotoGallery } from "@/components/PhotoGallery";
import { about, contact, galleryTitle, home, services } from "@/data/primapox";
import styles from "./home.module.css";

export const metadata = pageMetadata("/", "Primapox | Pintura eletrostática a pó no Rio de Janeiro", "Executamos pintura eletrostática com tinta em pó, ideais para: esquadrias, batentes, caixilhos, forros, divisórias, fachadas, telhas metálicas, coberturas, estruturas espaciais, etc.");

// Every visible text comes verbatim from data/primapox.ts (legacy primapox.com).
const swatches = [
  { name: "Branco", color: "#f3f4f1", src: "/gallery/26.webp" },
  { name: "Vermelho", color: "#c8141b", src: "/gallery/22.webp" },
  { name: "Verde", color: "#1f9a3a", src: "/gallery/5.webp" },
  { name: "Azul", color: "#1b8fd0", src: "/gallery/45.webp" },
  { name: "Amarelo", color: "#efc000", src: "/gallery/44.webp" },
  { name: "Várias cores", color: "conic-gradient(#c8141b 0 25%, #f3f4f1 0 50%, #1f6b3a 0 75%, #efc000 0)", src: "/gallery/14.webp" },
];

const [paintingFirst] = services.painting.split(" A tinta em pó tem");
const steps = [
  { number: "01", title: services.pretreatmentTitle, text: services.pretreatment[1] },
  { number: "02", title: services.paintingTitle, text: paintingFirst },
  { number: "03", title: services.cureTitle, text: services.after[0] },
];

const materialPhotos = ["/gallery/17.webp", "/gallery/40.webp", "/gallery/44.webp", "/gallery/45.webp", "/gallery/5.webp"];

export default function HomePage() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="titulo-principal">
        <HeroCarousel swatches={swatches} video={{ src: "/media/hero-ezycolor.webm", poster: "/gallery/22.webp" }} />
        <div className={`shell ${styles.heroText}`}>
          <p className={styles.label}>{home.servicesTitle}</p>
          <h1 id="titulo-principal">Se é metal, <strong>Primapox</strong> pinta e protege!</h1>
          <p>{home.servicesText}</p>
          <div className={styles.actions}>
            <Link className={styles.primary} href="/contato">{home.contactTitle}</Link>
            <Link className={styles.secondary} href="/servicos">{home.more}</Link>
          </div>
        </div>
      </section>

      <section className={styles.statement} aria-labelledby="competencia">
        <div className={`shell ${styles.statementGrid}`}>
          <h2 id="competencia">{about.paragraphs[1]}</h2>
          <div>
            <p>{home.aboutText}</p>
            <p className={styles.advantagesTitle}>{home.advantagesTitle}</p>
            <ul className={styles.advantages}>{home.advantages.map((advantage) => <li key={advantage}>{advantage}</li>)}</ul>
            <Link className={styles.link} href="/empresa">{home.more}</Link>
          </div>
        </div>
      </section>

      <section className={styles.finishes} id="acabamentos" aria-labelledby="titulo-acabamentos">
        <div className="shell">
          <div className={styles.head}>
            <h2 id="titulo-acabamentos">{galleryTitle}</h2>
          </div>
          <PhotoGallery limit={8} />
          <Link className={styles.link} href="/galeria">{home.more}</Link>
        </div>
      </section>

      <section className={styles.surfaces} aria-labelledby="resinas">
        <div className="shell">
          <h2 id="resinas">{services.typesTitle}</h2>
          <div className={styles.surfaceGrid}>
            <article>
              <div className={styles.surfacePhoto}><Image src="/gallery/40.webp" alt="Divisória de vidro com estrutura metálica escura em ambiente interno" fill sizes="(max-width: 800px) 92vw, 45vw" /></div>
              <h3>{services.types[0][0]}</h3>
              <p>{services.types[0][1]}</p>
            </article>
            <article>
              <div className={styles.surfacePhoto}><Image src="/gallery/25.webp" alt="Fachada envidraçada com estrutura metálica" fill sizes="(max-width: 800px) 92vw, 45vw" /></div>
              <h3>{services.types[1][0]}</h3>
              <p>{services.types[1][1]}</p>
            </article>
          </div>
          <p className={styles.typesNote}>{services.typesNote}</p>
          <Link className={styles.link} href="/servicos">{home.more}</Link>
        </div>
      </section>

      <section className={styles.process} aria-labelledby="processo">
        <div className="shell">
          <h2 id="processo">{services.title}</h2>
          <ol>
            {steps.map((step) => (
              <li key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
          <Link className={styles.link} href="/servicos">{home.more}</Link>
        </div>
      </section>

      <section className={styles.applications} aria-labelledby="aplicacoes">
        <div className="shell">
          <div className={styles.head}>
            <h2 id="aplicacoes">{services.materialTitle}</h2>
            <p>{services.materialIntro}</p>
          </div>
          <div className={`${styles.appGrid} ${styles.appGridFive}`}>
            {services.materials.map(([title, text], index) => (
              <article key={title}>
                <div className={styles.appPhoto}><Image src={materialPhotos[index]} alt={title} fill sizes="(max-width: 800px) 92vw, 20vw" /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.benefits} aria-labelledby="beneficios">
        <div className={`shell ${styles.benefitGrid}`}>
          <div>
            <h2 id="beneficios">{services.benefitsTitle}</h2>
          </div>
          <ul>{services.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul>
        </div>
      </section>

      <section className={styles.closing} aria-label={services.sloganTitle}>
        <div className="shell">
          <p>{services.closing}</p>
          <span>{services.sloganTitle}</span>
        </div>
      </section>

      <section className={styles.quote} aria-labelledby="titulo-orcamento">
        <div className={`shell ${styles.quoteGrid}`}>
          <div>
            <h2 id="titulo-orcamento">{home.contactTitle}</h2>
            <p>{contact.intro}</p>
            <h3 className={styles.locationTitle}>{home.locationTitle}</h3>
            <p>{home.locationText}</p>
            <a className={styles.mail} href={`mailto:${contact.email}`}>{contact.email}</a>
          </div>
          <div className={styles.formCard}><LegacyContactForm /></div>
        </div>
      </section>
    </>
  );
}
