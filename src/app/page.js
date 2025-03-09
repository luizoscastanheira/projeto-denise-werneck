import Image from "next/image";
import estilos from "./page.module.css";

import { TbMassage } from "react-icons/tb";
import { GiVineLeaf } from "react-icons/gi";
import { FaHandHoldingWater } from "react-icons/fa";

import imgBeneficios from "../../public/imgBeneficios.png";

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
        
        
          <div className={estilos.card}>
            <FaHandHoldingWater className={estilos.iconProcedimentos} />
            <h3>Estética Capilar</h3>
            <p className={estilos.cardParagrafo}>
              Mais do que cuidar dos cabelos, cuido do seu bem-estar. Com tratamentos personalizados, a saúde dos fios, o brilho e a maciez que você sempre desejou estão ao seu alcance.
            </p>
          </div>
          <div className={estilos.card}>
            <GiVineLeaf className={estilos.iconProcedimentos} />
            <h3>Estética Facial</h3>
            <p className={estilos.cardParagrafo}>
              Com uma ampla gama de tratamentos de estética facial, vamos muito além do cuidado básico com a pele. 
              </p>             
          </div>
          <div className={estilos.card}>
            <TbMassage className={estilos.iconProcedimentos} />
            <h3>Estética Corporal</h3>
            <p className={estilos.cardParagrafo}>
              Venha descobrir como diversos tratamentos de estética corporal podem transformar sua pele, corpo e confiança
            </p>
          </div>
        
      </section>

      <section id={estilos.sectionBeneficios}>
        <div className={estilos.boxBeneficios}>
          <h3>Benefícios</h3>
          <p>
          Fazer tratamentos estéticos no <span>Espaço Denise Werneck</span> pode proporcionar uma série de benefícios para a saúde e o bem-estar, além de melhorar significativamente a autoestima. Esses tratamentos não apenas realçam a beleza exterior, mas também promovem uma sensação de confiança e satisfação pessoal.
          </p>
          <h4>Transforme-se:</h4>
          <ul>
            <li><span>Melhora da Autoestima:</span> Sinta-se bem consigo mesmo ao ver sua aparência melhorar.</li>
            <li><span>Aparência Rejuvenescida:</span> Desfrute de uma pele mais jovem e radiante.</li>
            <li><span>Redução de Medidas:</span>Alcance a forma desejada com tratamentos eficazes e seguros.</li>
            <li><span>Saúde da Pele:</span>Cuide da sua pele, deixando-a mais saudável e vibrante.</li>
          </ul>
        </div>
        <div className={estilos.boxBeneficios}>
          <Image src= {imgBeneficios} alt="Imagem de mulher sendo atendida em estética corporal." className={estilos.imgBeneficios}/>
        </div>

      </section>
    </main>
  );
}
