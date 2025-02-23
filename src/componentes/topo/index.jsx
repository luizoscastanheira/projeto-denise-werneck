import estilos from './topo.module.css';
import Image from 'next/image';
import Link from 'next/link';

// Importando Imagem
import Logo from '../../../public/logotipo.jpg';


export default function Topo(){
    return(
        <header id={estilos.topo}>
            <Image src={Logo} className={estilos.imgLogo} alt="Imagem do Logotipo."/>
            <nav className={estilos.navLink}>
            <Link href="/" className={estilos.linkTopo}>Home</Link>
            <Link href="/sobre" className={estilos.linkTopo}>Sobre</Link>
            <Link href="/servicos" className={estilos.linkTopo}>Serviços</Link>
            <Link href="/contato" className={estilos.linkTopo}>Contato</Link>
            </nav>
            <div>
                <p>(24) 98822-2441</p>
                <p>(24) 2252-9607</p>
            </div>
        </header>
    );
};