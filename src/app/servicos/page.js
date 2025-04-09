import estilos from "./servicos.module.css";
import Link from "next/link";
import Image from "next/image";

import eCapilar from "../../../public/eCapilar01.jpg";

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
                <div className={estilos.boxCardInterno}>
                  <Image src={eCapilar} className={estilos.imgProcedimentos} alt="Imagem de um cabelo bem feito"/>
                  <div>
                    <ul className={estilos.lista}>
                      <li className={estilos.itemLista}>Aplicação Coloração</li>
                      <li className={estilos.itemLista}>Corte</li>
                      <li className={estilos.itemLista}>Escova</li>
                      <li className={estilos.itemLista}>Escova com Prancha</li>
                      <li className={estilos.itemLista}>Hidratação</li>
                      <li className={estilos.itemLista}>Higienização</li>
                      <li className={estilos.itemLista}>Nutrição</li>
                      <li className={estilos.itemLista}>Progressiva</li>
                      <li className={estilos.itemLista}>Reconstrução</li>
                    </ul>
                  </div>
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