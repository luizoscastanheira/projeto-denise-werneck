import estilos from "./servicos.module.css";

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

        </section>
    );
    
};