import Image from "next/image";
import { posts } from "@/data/content";

export default function Blog() {
  return (
    <section id="blog">
      <div className="wrap rel">
        <div className="head">
          <div>
            <span className="eyebrow">El blog del vaquero</span>
            <h2>
              Historias <em>y consejos</em>
            </h2>
          </div>
          <a href="#" className="link-arrow">Ver todo el blog →</a>
        </div>
        <div className="posts">
          {posts.map((p) => (
            <a key={p.titulo} className="post" href="#">
              <div className="ph">
                <Image src={p.foto} alt="" fill sizes="(max-width: 1020px) 100vw, 400px" />
              </div>
              <div className="meta">{p.meta}</div>
              <h3>{p.titulo}</h3>
              <p>{p.resumen}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
