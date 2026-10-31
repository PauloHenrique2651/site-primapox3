import type { ReactNode } from "react";
import Image from "next/image";
import styles from "./PageHero.module.css";

// Ezy Color-style banner: full-width photo, centred spaced uppercase title.
export function PageHero({ eyebrow, title, copy, image }: { eyebrow: string; title: ReactNode; copy: string; marker?: string; image?: string }) {
  return (
    <section className={styles.hero}>
      {image && <Image className={styles.photo} src={image} alt="" fill sizes="100vw" priority />}
      <div className={`shell ${styles.text}`}>
        <p className={styles.trail}>{eyebrow.replace("Primapox / ", "")}</p>
        <h1>{title}</h1>
        {copy && <p className={styles.copy}>{copy}</p>}
      </div>
    </section>
  );
}
