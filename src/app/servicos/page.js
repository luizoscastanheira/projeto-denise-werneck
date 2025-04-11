import estilos from "./servicos.module.css";
import Link from "next/link";
import Image from "next/image";

import eCapilar from "../../../public/eCapilar01.jpg";
import eFacial from "../../../public/eFacial01.jpg";
import eCorporal from "../../../public/eCorporal01.jpg";

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
                <p>
                  <span>Transformando Beleza em Confiança - </span> A estética capilar é a arte e a ciência dedicadas ao cuidado, tratamento e embelezamento dos cabelos. Mais do que simples procedimentos cosméticos, ela envolve uma abordagem holística que considera a saúde do couro cabeludo, a estrutura dos fios e as necessidades individuais de cada pessoa.
                </p>
                
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
                    <div className={estilos.boxLink}><Link href="/contato" className={estilos.linkAgendar}>Agendar Meu Atendimento</Link></div>
                  </div>
                </div>
              </div>
              <div className={estilos.card}>
                <h3>Estética Facial</h3>
                <p>
                  <span>Realçando a Beleza Natural - </span> A estética facial é uma disciplina dedicada ao cuidado e aprimoramento da pele do rosto, visando realçar a beleza natural de cada indivíduo. Combinando técnicas avançadas e produtos de alta qualidade, buscamos proporcionar uma experiência única de bem-estar e rejuvenescimento.
                </p>
                
                <div className={estilos.boxCardInterno}>
                  <Image src={eFacial} className={estilos.imgProcedimentos} alt="Imagem de um cabelo bem feito"/>
                  <div>
                    <ul className={estilos.lista}>
                      <li className={estilos.itemLista}>Colocação de Cílios (Fio a Fio)</li>
                      <li className={estilos.itemLista}>Design de Sobrancelhas</li>
                      <li className={estilos.itemLista}>Limpeza de Pele</li>
                      <li className={estilos.itemLista}>Microagulhamento</li>
                      <li className={estilos.itemLista}>Micropigmentação Labial</li>
                      <li className={estilos.itemLista}>Micropigmento Fia a Fio</li>
                      <li className={estilos.itemLista}>Micropuntura (Tratamento de Rugas, estrias e Marcas de Acne)</li>
                      <li className={estilos.itemLista}>Reflexologia</li>
                    </ul>
                    <div className={estilos.boxLink}><Link href="/contato" className={estilos.linkAgendar}>Agendar Meu Atendimento</Link></div>
                  </div>
                </div>
              </div>
              <div className={estilos.card}>
                <h3>Estética Coporal</h3>
                <p>
                  <span>Cuidando do Corpo, Elevando a Alma - </span> A estética corporal é uma área dedicada ao cuidado e aprimoramento da aparência e saúde do corpo. Combinando técnicas avançadas e produtos de alta qualidade, buscamos proporcionar uma experiência transformadora que vai além da beleza superficial.
                </p>
                
                <div className={estilos.boxCardInterno}>
                  <Image src={eCorporal} className={estilos.imgProcedimentos} alt="Imagem de um cabelo bem feito"/>
                  <div>
                    <ul className={estilos.lista}>
                      <li className={estilos.itemLista}>Acupuntura (Aurículoterapia)</li>
                      <li className={estilos.itemLista}>Vanho de Lua</li>
                      <li className={estilos.itemLista}>Depilação Corporal</li>
                      <li className={estilos.itemLista}>Massagem de Drenagem Linfática (Pré e Pós Operatório)</li>
                      <li className={estilos.itemLista}>Masssagem Modeladora</li>
                      <li className={estilos.itemLista}>Massagem Pantala</li>
                      <li className={estilos.itemLista}>Massagem Relaxante</li>
                      <li className={estilos.itemLista}>SPA dos Pés</li>
                    </ul>
                    <div className={estilos.boxLink}><Link href="/contato" className={estilos.linkAgendar}>Agendar Meu Atendimento</Link></div>
                  </div>
                </div>
              </div>
            </section>
        

    </section>
  );
};