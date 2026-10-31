import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/data/seo";
import { HeroCarousel } from "@/components/HeroCarousel";
import { HomeContactForm } from "@/components/HomeContactForm";
import { company } from "@/data/site";
import { home } from "@/data/primapox";
import styles from "./home.module.css";

export const metadata = pageMetadata("/", "Primapox", home.servicesText);

// Only the content of the legacy home page (index.php), in its order, styled after ezycolor.com.br.
const swatches = [
  { name: "Branco", color: "#f3f4f1", src: "/gallery/26.webp" },
  { name: "Vermelho", color: "#c8141b", src: "/gallery/22.webp" },
  { name: "Verde", color: "#1f9a3a", src: "/gallery/5.webp" },
  { name: "Azul", color: "#1b8fd0", src: "/gallery/45.webp" },
  { name: "Amarelo", color: "#efc000", src: "/gallery/44.webp" },
  { name: "Cores", color: "conic-gradient(#c8141b 0 25%, #f3f4f1 0 50%, #1f6b3a 0 75%, #efc000 0)", src: "/gallery/14.webp" },
];

export default function HomePage() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="nossos-servicos">
        <HeroCarousel swatches={swatches} video={{ src: "/media/hero-ezycolor.webm", poster: "/gallery/22.webp" }} />
        <div className={`shell ${styles.heroText}`}>
          <h1 id="nossos-servicos">{home.servicesTitle}</h1>
          <p className={styles.heroLead}>{home.servicesText}</p>
          <p className={styles.heroSub}>{home.advantagesTitle}</p>
          <ul className={styles.heroList}>{home.advantages.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </section>

      <section className={styles.row} aria-labelledby="a-primapox">
        <div className={`shell ${styles.rowGrid}`}>
          <div className={styles.strip}>
            {["/gallery/12.webp", "/gallery/11.webp", "/gallery/32.webp"].map((src) => <div key={src} className={styles.stripPhoto}><Image src={src} alt="" fill sizes="(max-width: 900px) 30vw, 18vw" /></div>)}
          </div>
          <div className={styles.rowText}>
            <h2 id="a-primapox">{home.aboutTitle}</h2>
            <p>{home.aboutText}</p>
          </div>
        </div>
      </section>

      <section className={styles.gray} aria-labelledby="fale-conosco">
        <div className="shell">
          <h2 id="fale-conosco" className={styles.centerTitle}>{home.contactTitle}</h2>
          <div className={styles.formWrap}><HomeContactForm /></div>
        </div>
      </section>

      <section className={styles.row} aria-labelledby="localizacao">
        <div className={`shell ${styles.rowGrid}`}>
          <iframe className={styles.map} src={company.mapsEmbedUrl} title={home.locationTitle} loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
          <div className={styles.rowText}>
            <h2 id="localizacao">{home.locationTitle}</h2>
            <p>{home.locationText}</p>
            <Link className={styles.outlineDark} href="/contato">{home.more}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
