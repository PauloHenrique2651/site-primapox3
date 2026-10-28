"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useState } from "react";
import type { GalleryItem } from "@/data/gallery";
import styles from "@/app/home.module.css";

const GalleryLightbox = dynamic(() => import("./GalleryLightbox"));

// Grid of finish photographs; each opens the shared lightbox.
export function GalleryLightboxGrid({ items }: { items: GalleryItem[] }) {
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  return (
    <>
      <ul className={styles.finishGrid}>
        {items.map((item) => (
          <li key={item.id}>
            <button type="button" onClick={() => setSelected(item)} aria-label={`Ampliar: ${item.alt}`}>
              <span className={styles.finishPhoto}><Image src={item.src} alt="" fill sizes="(max-width: 600px) 46vw, (max-width: 1100px) 30vw, 20vw" /></span>
              <span className={styles.finishName}>{item.alt}</span>
            </button>
          </li>
        ))}
      </ul>
      {selected && <GalleryLightbox selected={selected} items={items} onSelect={setSelected} onClose={() => setSelected(null)} />}
    </>
  );
}
