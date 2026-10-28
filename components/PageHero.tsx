import type { ReactNode } from "react";
import Image from "next/image";
import styles from "./PageHero.module.css";

export function PageHero({ eyebrow, title, copy, image }: { eyebrow: string; title: ReactNode; copy: string; marker?: string; image?: string }) {
  return (
    <section className={styles.hero}>
      <div className={`shell ${styles.grid}`} data-image={Boolean(image)}>
        <div className={styles.text}>
          <p className={styles.trail}>{eyebrow.replace("Primapox / ", "")}</p>
          <h1>{title}</h1>
          <p className={styles.copy}>{copy}</p>
        </div>
        {image && <div className={styles.photo}><Image src={image} alt="" fill sizes="(max-width: 800px) 90vw, 42vw" priority /></div>}
      </div>
    </section>
  );
}
