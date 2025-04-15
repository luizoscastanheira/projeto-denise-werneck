// Importando Estilos
import estilos from './topo.module.css';
//Importando recursos
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
            <div id={estilos.boxTelefones}>
                <p><a href='tel:+5524988222441' className={estilos.telefone}>(24) 98822-2441</a></p>
                <p><a href='tel+55242222529607' className={estilos.telefone}>(24) 2252-9607</a></p>
            </div>
        </header>
    );
};