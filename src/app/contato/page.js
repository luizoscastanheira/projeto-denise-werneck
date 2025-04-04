import estilos from "./contato.module.css";
import Image from "next/image";

import fotoDenise from "../../../public/fotoDenise1.jpg";

import { GrMapLocation } from "react-icons/gr";
import { PiWhatsappLogoDuotone } from "react-icons/pi";

export default function Contatos(){
    return(
        
        <section id={estilos.sectionContato}>
            
            <section id={estilos.sectionBanner}>
                <div id={estilos.boxTextoBanner}>
                    <h1>Contato</h1>
                </div>
            </section>

            <div id={estilos.boxBase}>
                <div id={estilos.boxFaleComigo}>

                    <Image id={estilos.imgBoxFaleComigo} src={fotoDenise} alt="Imagem da Profissional para contato."/>
                    <div id={estilos.boxTextoFaleComigo}>
                        <h2>Fale comigo hoje!</h2>
                        
                    </div>    

                </div>    
                <div id={estilos.boxForm}>
                    <div id={estilos.boxTexto}>
                        <h2> Envie-me uma mensagem.</h2>
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

            <div id={estilos.containerMapa}>
                <h3>É fácil me encontar, estou no Mini Shopping Vila Nova - ao lado da Praça Arsonval Macedo.</h3>
                <iframe className={estilos.mapa} src="https://www.google.com/maps/embed?pb=!4v1743764846675!6m8!1m7!1sr_tshVtIeA-hHrARyayl7Q!2m2!1d-22.10845136011215!2d-43.19324600787377!3f265.8890471761899!4f7.033722842684824!5f0.7820865974627469" width="600" height="450" ></iframe>
                <iframe className={estilos.mapa} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d274.7409732389906!2d-43.193421916784146!3d-22.108461274752404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x98f5e9cfffb32f%3A0xf772d84d212d6bfe!2sR.%20Lincon%20de%20A%20Pe%C3%A7anha%2C%2098%20-%20Vila%20Isabel%2C%20Tr%C3%AAs%20Rios%20-%20RJ%2C%2025815-065!5e0!3m2!1spt-BR!2sbr!4v1743765229274!5m2!1spt-BR!2sbr" width="600" height="450"></iframe>
            </div>

        </section>

        
    );
    
};