"use client";

import Image from "next/image";
import { useState } from "react";
import { HeroBackgroundVideo } from "@/components/HeroBackgroundVideo";
import styles from "@/app/home.module.css";

export type Swatch = { name: string; color: string; src: string; caption: string };

// Full-bleed hero background: the HyperFrames finishes film plays by default; the colour chart
// at the bottom swaps the background for one real finish photo.
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
          <p className={styles.chartLabel} aria-live="polite">{active ? active.caption : "Acabamentos do acervo Primapox"}</p>
          <div className={styles.swatches} role="group" aria-label="Escolher acabamento">
            <button type="button" aria-pressed={selected === -1} onClick={() => setSelected(-1)} style={{ "--swatch": "conic-gradient(#002398 0 50%, #fd0100 0)" } as React.CSSProperties}>
              <span aria-hidden="true" />
              Vídeo
            </button>
            {swatches.map((swatch, position) => (
              <button key={swatch.name} type="button" aria-pressed={position === selected} onClick={() => setSelected(position)} style={{ "--swatch": swatch.color } as React.CSSProperties}>
                <span aria-hidden="true" />
                {swatch.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
