import Image from "next/image";
import estilos from "./page.module.css";

import { TbMassage } from "react-icons/tb";
import { GiVineLeaf } from "react-icons/gi";
import { FaHandHoldingWater } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      <section id={estilos.sectionBanner}>
        <div id={estilos.boxTextoBanner}>
          <h1>"Sua jornada de beleza começa aqui."</h1>
        </div>
      </section>

        <section id={estilos.sectionFaixa}>
          <h2>Investir em sua beleza é renovar-se a cada dia <br></br>e cada dia é uma nova e incrível experiência!</h2>
        </section>

      <section id={estilos.sectionProcedimentos}>
        
        <div id={estilos.boxCards}>
          <div className={estilos.card}>
            <FaHandHoldingWater />
            <h3>Estética Capilar</h3>
          </div>
          <div className={estilos.card}>
            <GiVineLeaf />
            <h3>Estética Facial</h3>
          </div>
          <div className={estilos.card}>
            <TbMassage />
            <h3>Estética Corporal</h3>
          </div>
        </div>
      </section>
    </main>
  );
}
