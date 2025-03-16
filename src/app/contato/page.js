import estilos from "./contato.module.css";
import Image from "next/image";
import Link from "next/link";

import fotoDenise from "../../../public/fotoDenise1.jpg";

export default function Contatos(){
    return(
        
        <section id={estilos.sectionContato}>
            
            <div id={estilos.boxBanner}>
                <h1>Contato</h1>
            </div>

            <div id={estilos.boxBase}>
                <div id={estilos.boxFaleComigo}>

                    <Image id={estilos.imgBoxFaleComigo} src={fotoDenise} alt="Imagem da Profissional para contato."/>
                    <div id={estilos.boxTextoFaleComigo}>
                        <h2>Fale comigo hoje!</h2>
                        <p>
                            <a>(24) 98822-2441</a>
                            <a>(24) 2252-9607</a>
                            <a>E-mail</a>
                        </p>
                    </div>    

                </div>    
                <div id={estilos.boxForm}>
                    <div>
                        <h1> Envie-me uma mensagem.</h1>
                        <p>
                            Estou sempre pronta para atendê-la com qualidade e resultados.
                            Deixe sua mensagem e entrarei com contato.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
    
};