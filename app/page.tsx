import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/data/seo";
import { HeroCarousel } from "@/components/HeroCarousel";
import { GalleryLightboxGrid } from "@/components/FinishGrid";
import { QuoteForm } from "@/components/QuoteForm";
import { applications, company, processSteps } from "@/data/site";
import { serviceBenefits } from "@/data/services";
import { galleryItems } from "@/data/gallery";
import { legacy } from "@/data/legacy";
import styles from "./home.module.css";

export const metadata = pageMetadata("/", "Primapox | Pintura eletrostática a pó no Rio de Janeiro", "Pintura eletrostática a pó para componentes metálicos, com preparação controlada, cobertura uniforme e acabamento de alto padrão no Rio de Janeiro.");

const swatches = [
  { name: "Branco", color: "#f3f4f1", src: "/gallery/26.webp", caption: "Esquadrias e guarda-corpo com acabamento claro" },
  { name: "Vermelho", color: "#c8141b", src: "/gallery/22.webp", caption: "Perfis vermelhos com superfície uniforme" },
  { name: "Verde", color: "#1f9a3a", src: "/gallery/5.webp", caption: "Perfis metálicos com acabamento verde" },
  { name: "Azul", color: "#1b8fd0", src: "/gallery/45.webp", caption: "Componente industrial azul finalizado" },
  { name: "Amarelo", color: "#efc000", src: "/gallery/44.webp", caption: "Painéis em amarelo e grafite" },
  { name: "Cartela", color: "conic-gradient(#c8141b 0 25%, #f3f4f1 0 50%, #1f6b3a 0 75%, #efc000 0)", src: "/gallery/14.webp", caption: "Amostras de cores e acabamentos Primapox" },
];

const finishes = galleryItems.filter((item) => item.category === "Acabamentos").slice(0, 8);

export default function HomePage() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="titulo-principal">
        <HeroCarousel swatches={swatches} video={{ src: "/media/hero-ezycolor.webm", poster: "/gallery/22.webp" }} />
        <div className={`shell ${styles.heroText}`}>
          <p className={styles.label}>Pintura eletrostática a pó</p>
          <h1 id="titulo-principal">A beleza da cor com a <strong>proteção</strong> do <strong>metal</strong>.</h1>
          <p>Revestimento técnico para componentes metálicos, com cobertura uniforme, alta resistência e acabamentos brilhantes ou foscos.</p>
          <div className={styles.actions}>
            <a className={styles.primary} href="#orcamento">Solicitar orçamento</a>
            <a className={styles.secondary} href="#acabamentos">Ver acabamentos</a>
          </div>
        </div>
      </section>

      <section className={styles.statement} aria-labelledby="competencia">
        <div className={`shell ${styles.statementGrid}`}>
          <h2 id="competencia">Não é só cor. É desempenho sobre o metal.</h2>
          <div>
            <p>A tinta em pó forma uma película contínua sobre a peça. A aplicação eletrostática favorece a cobertura de geometrias complexas, enquanto a cura consolida resistência e acabamento.</p>
            <p>{legacy.reputation}</p>
            <ul className={styles.advantages}>{legacy.advantages.map((advantage) => <li key={advantage}>{advantage}</li>)}</ul>
            <Link className={styles.link} href="/empresa">Conhecer a Primapox</Link>
          </div>
        </div>
      </section>

      <section className={styles.finishes} id="acabamentos" aria-labelledby="titulo-acabamentos">
        <div className="shell">
          <div className={styles.head}>
            <h2 id="titulo-acabamentos">Cores, superfícies e acabamentos</h2>
            <p>Diferentes cores, efeitos e acabamentos, brilhantes ou foscos, definidos conforme o uso da peça. Fotografias do acervo real da Primapox.</p>
          </div>
          <GalleryLightboxGrid items={finishes} />
          <Link className={styles.link} href="/galeria">Abrir a galeria completa</Link>
        </div>
      </section>

      <section className={styles.surfaces} aria-labelledby="resinas">
        <div className="shell">
          <h2 id="resinas">Duas resinas, cada uma para o seu ambiente</h2>
          <div className={styles.surfaceGrid}>
            <article>
              <div className={styles.surfacePhoto}><Image src="/gallery/40.webp" alt="Divisória de vidro com estrutura metálica escura em ambiente interno" fill sizes="(max-width: 800px) 92vw, 45vw" /></div>
              <h3>Híbrida, para uso interior</h3>
              <p>Combinação de resinas epóxi e poliéster para superfícies metálicas em peças de uso interno.</p>
            </article>
            <article>
              <div className={styles.surfacePhoto}><Image src="/gallery/25.webp" alt="Fachada envidraçada com estrutura metálica" fill sizes="(max-width: 800px) 92vw, 45vw" /></div>
              <h3>Poliéster, para uso exterior</h3>
              <p>Resinas poliésteres para peças metálicas externas, especialmente aplicações arquitetônicas.</p>
            </article>
          </div>
          <Link className={styles.link} href="/solucoes/pintura-eletrostatica-a-po#resinas">Entender as resinas</Link>
        </div>
      </section>

      <section className={styles.process} aria-labelledby="processo">
        <div className="shell">
          <h2 id="processo">Quatro etapas até a superfície final</h2>
          <ol>
            {processSteps.map((step) => (
              <li key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
          <Link className={styles.link} href="/processo">Ver o processo completo</Link>
        </div>
      </section>

      <section className={styles.applications} aria-labelledby="aplicacoes">
        <div className="shell">
          <div className={styles.head}>
            <h2 id="aplicacoes">Onde o acabamento trabalha</h2>
            <p>Da arquitetura ao equipamento industrial, cada peça pede uma leitura própria de material, geometria e ambiente de uso.</p>
          </div>
          <div className={styles.appGrid}>
            {applications.map((application) => (
              <article key={application.code}>
                <div className={styles.appPhoto}><Image src={application.image} alt={application.imageAlt} fill sizes="(max-width: 800px) 92vw, 25vw" /></div>
                <h3>{application.title}</h3>
                <p>{application.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.benefits} aria-labelledby="beneficios">
        <div className={`shell ${styles.benefitGrid}`}>
          <div>
            <h2 id="beneficios">O que a superfície ganha</h2>
            <p>Características do processo descritas no acervo Primapox. O desempenho final depende do substrato, da preparação, da resina e da cura.</p>
          </div>
          <ul>{serviceBenefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul>
        </div>
      </section>

      <section className={styles.closing} aria-label="Slogan Primapox">
        <div className="shell">
          <p>{legacy.closing}</p>
          <span>{legacy.slogan}</span>
        </div>
      </section>

      <section className={styles.quote} aria-labelledby="titulo-orcamento">
        <div className={`shell ${styles.quoteGrid}`}>
          <div>
            <h2 id="titulo-orcamento">Traga a peça. Nós pensamos a superfície.</h2>
            <p>Envie dimensões, quantidade, fotos ou desenhos. Quanto melhor o escopo, mais objetiva será a análise.</p>
            <a className={styles.mail} href={`mailto:${company.email}`}>{company.email}</a>
          </div>
          <div className={styles.formCard}><QuoteForm /></div>
        </div>
      </section>
    </>
  );
}
