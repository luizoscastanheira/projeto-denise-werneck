import estilos from "./servicos.module.css";
import Link from "next/link";

import { TbMassage } from "react-icons/tb";
import { GiVineLeaf } from "react-icons/gi";
import { FaHandHoldingWater } from "react-icons/fa";

export default function Servicos(){
  return(
    <section id={estilos.containerBase}>
            <section id={estilos.sectionBanner}>
                <div id={estilos.boxTextoBanner}>
                    <h1>Meus Serviços</h1>
                </div>
            </section>

            <section id={estilos.sectionProcedimentos}>
              <div className={estilos.card}>
                <h3>Estética Capilar</h3>
                <div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div className={estilos.card}>
                <h3>Estética Facial</h3>
              </div>
              <div className={estilos.card}>
                <h3>Estética Corporal</h3>
              </div>
            </section>

            <section id={estilos.sectionFaixaServicos}>
                <Link href="/contato" className={estilos.linkFaixaServicos}>Fale Comigo - Agende</Link>
            </section>

    </section>
  );
};