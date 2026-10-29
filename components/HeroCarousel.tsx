"use client";

import Image from "next/image";
import { useState } from "react";
import { HeroBackgroundVideo } from "@/components/HeroBackgroundVideo";
import styles from "@/app/home.module.css";

export type Swatch = { name: string; color: string; src: string };

// Full-bleed hero background: the HyperFrames film plays by default; colour chips swap in a real
// finish photo. Chips carry no visible text (names are for assistive technology only).
export function HeroCarousel({ swatches, video }: { swatches: Swatch[]; video: { src: string; poster: string } }) {
  const [selected, setSelected] = useState(-1);
  const active = selected >= 0 ? swatches[selected] : null;

  return (
    <>
      <div className={styles.backdrop}>
        <div className={styles.videoLayer} data-active={!active}>
          <HeroBackgroundVideo src={video.src} poster={video.poster} className={styles.backdropMedia} buttonClassName={styles.videoToggle} />
        </div>
        {swatches.map((swatch, position) => (
          <Image key={swatch.src} className={styles.backdropPhoto} data-active={position === selected} src={swatch.src} alt="" fill sizes="100vw" quality={90} />
        ))}
      </div>
      <div className={styles.chartBar}>
        <div className={`shell ${styles.chart}`}>
          <div className={`${styles.swatches} ${styles.chipsOnly}`} role="group" aria-label="Cores">
            <button type="button" aria-pressed={selected === -1} aria-label="Vídeo" onClick={() => setSelected(-1)} style={{ "--swatch": "conic-gradient(#002398 0 50%, #fd0100 0)" } as React.CSSProperties}><span aria-hidden="true" /></button>
            {swatches.map((swatch, position) => (
              <button key={swatch.name} type="button" aria-pressed={position === selected} aria-label={swatch.name} onClick={() => setSelected(position)} style={{ "--swatch": swatch.color } as React.CSSProperties}><span aria-hidden="true" /></button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
