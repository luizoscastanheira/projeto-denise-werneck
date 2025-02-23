import estilos from './sobre.module.css';

export default function Sobre(){
    return(
        <section>
            <div id={estilos.bannerImagem}>
                <div className={estilos.boxTexto}>
                    <h1>Sobre Nós</h1>
                </div>
            </div>
            <div id={estilos.bannerTexto}></div>
            <div id={estilos.textoSobre}></div>
        </section>
    );
};