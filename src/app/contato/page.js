import estilos from "./contato.module.css";
import Image from "next/image";
import Link from "next/link";

import fotoDenise from "../../../public/fotoDenise1.jpg";

import { GrMapLocation } from "react-icons/gr";
import { CgInstagram } from "react-icons/cg";
import { PiWhatsappLogoDuotone } from "react-icons/pi";

export default function Contatos(){
    return(
        
        <section id={estilos.sectionContato}>
            
            <div id={estilos.boxBanner}>
                <div id={estilos.boxTextoBanner}>
                    <h1>Contato</h1>
                </div>
            </div>

            <div id={estilos.boxBase}>
                <div id={estilos.boxFaleComigo}>

                    <Image id={estilos.imgBoxFaleComigo} src={fotoDenise} alt="Imagem da Profissional para contato."/>
                    <div id={estilos.boxTextoFaleComigo}>
                        <h2>Fale comigo hoje!</h2>
                        
                    </div>    

                </div>    
                <div id={estilos.boxForm}>
                    <div id={estilos.boxTexto}>
                        <h1> Envie-me uma mensagem.</h1>
                        <p>
                            Estou sempre pronta para atendê-la com qualidade e resultados.
                        </p>
                        <p>
                            Faça hoje mesmo seu contato por telefone ou envie uma mensagem pelo WhatsApp.   
                        </p>
                        <p>
                        Será uma prazer te atender, tirar todas suas dúvidas e agendar seu atendimento.
                        </p>
                    </div>

                    <div id={estilos.boxFone}>
                        <p>
                            <a>(24) 98822-2441</a> OU <a>(24) 2252-9607</a>
                        </p>
                    </div>

                    <div id={estilos.boxZap}>
                        <a target='_blank' href='https://api.whatsapp.com/send?phone=5524988222441&text=Ol%C3%A1!%20deixe%20sua%20mensagem%20em%20te%20respondo%20assim%20que%20poss%C3%ADvel.'><PiWhatsappLogoDuotone className={estilos.icons} /></a>
                        <a target='_blank' href='https://api.whatsapp.com/send?phone=5524988222441&text=Ol%C3%A1!%20deixe%20sua%20mensagem%20em%20te%20respondo%20assim%20que%20poss%C3%ADvel.'>Clica e chama no Zap!</a>
                    </div>
                </div>
            </div>

        </section>
    );
    
};