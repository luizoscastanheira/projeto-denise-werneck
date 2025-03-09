import estilos from './rodape.module.css';

import Image from 'next/image';
import Link from 'next/link';

// Importando Imagem
import Logo from '../../../public/logotipo.jpg';

import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { GrMapLocation } from "react-icons/gr";
import { CgInstagram } from "react-icons/cg";
import { PiWhatsappLogoDuotone } from "react-icons/pi";
import { PiFacebookLogoDuotone } from "react-icons/pi";

export default function Rodape(){
    return(
        <footer id={estilos.rodape}>
            <section id={estilos.containerCards}>
                <div className={estilos.card}>
                    <Image src={Logo} id={estilos.imgLogo} alt="Imagem do logotipo da Empresa"/>
                    <p>
                        "Cuidando do seu corpo, celebrando sua essência."
                    </p>
                    <p>
                        Agende uma visita e veja tudo que o Espaço Denise Werneck tem a te oferecer. Presentei-se!
                    </p>
                </div>
                <div className={estilos.card}>
                    <h4>Links Rápidos</h4>
                    <Link href="/" className={estilos.link}>Home</Link>
                    <Link href="/sobre" className={estilos.link}>Sobre</Link>
                    <Link href="/servicos" className={estilos.link}>Serviços</Link>
                    <Link href="/contato" className={estilos.link}>Contato</Link>
                </div>
                <div className={estilos.card}>
                    <h4>Contato</h4>
                    <div>
                        <GrMapLocation className={estilos.icons}/>
                        <p>
                            Rua Lincoln de Almeida Peçanha, 204 - Sala1 - Vila ISabel - Três Rios - RJ (
                                No mini Shopping Vila Nova - ao lado da Praça Arsonval Macedo.
                            )
                        </p>
                     </div>
                     <div>
                        <LiaPhoneVolumeSolid className={estilos.icons}/>
                        <p>(24) 98822-2441</p>
                        <p>(24) 2252-9607</p>
                     </div>
                </div>
                <div className={estilos.card}>
                    <h4>Siga-nos</h4>

                    <a target='_blank' href='https://www.instagram.com/espaco_denisewerneck?igsh=MWE1bzFseDIzaHV6Mg== '><CgInstagram className={estilos.icons}/></a>
                    <a target='_blank' href='https://api.whatsapp.com/send?phone=5524988222441&text=Ol%C3%A1!%20deixe%20sua%20mensagem%20em%20te%20respondo%20assim%20que%20poss%C3%ADvel.'><PiWhatsappLogoDuotone className={estilos.icons} /></a>

                </div>
            </section>

            
            <p id={estilos.copy}>Copyright © 2025 - Todos os direitos reservados</p>
        </footer>
    );
};