import estilos from './rodape.module.css';

import Image from 'next/image';
import Link from 'next/link';

// Importando Imagem
import Logo from '../../../public/logotipo.jpg';

export default function Rodape(){
    return(
        <footer id={estilos.rodape}>
            <section id={estilos.containerCards}>
                <div className={estilos.card}>
                    <Image src={Logo} alt="Imagem do logotipo da Empresa"/>
                    <p>
                        "Cuidando do seu corpo, celebrando sua essência."
                    </p>
                    <p>
                        Faça-nos uma visita e veja tudo que o Espaço Denise Werneck tem a te oferecer. Presentei-se!
                    </p>
                </div>
                <div className={estilos.card}>
                    <h4>Links Rápidos</h4>
                    <nav className={estilos.navLink}>
                        <Link href="/" className={estilos.linkTopo}>Home</Link>
                        <Link href="/sobre" className={estilos.linkTopo}>Sobre</Link>
                        <Link href="/servicos" className={estilos.linkTopo}>Serviços</Link>
                        <Link href="/contato" className={estilos.linkTopo}>Contato</Link>
                    </nav>
                </div>
                <div className={estilos.card}>
                    <h4>Contato</h4>
                    <div>
                        <h5>Endereço</h5>
                        <p>
                            Rua Lincoln de Almeida Peçanha, 204 - Sala1 - Vila ISabel - Três Rios - RJ (
                                No mini Shopping Vila Nova - ao lado da Praça Arsonval Macedo.
                            )
                        </p>
                     </div>
                     <div>
                        <h5>Telefones</h5>
                        <p>(24) 98822-2441</p>
                        <p>(24) 2252-9607</p>
                     </div>
                </div>
                <div className={estilos.card}></div>
            </section>
            <p>Copyright © 2025 - Todos os direitos reservados</p>
        </footer>
    );
};