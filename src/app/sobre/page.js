import Image from 'next/image';
import estilos from './sobre.module.css';
import fotoSobre from '../../../public/fotoSobre.png';
import { LuCalendarClock } from "react-icons/lu";
import { TbHeartHandshake } from "react-icons/tb";


export default function Sobre(){
    return(
        <section id={estilos.secaoSobre}>
            <div id={estilos.bannerImagem}>
                <div className={estilos.boxTexto}>
                    <h1>Sobre Nós</h1>
                </div>
            </div>
            <div id={estilos.bannerTexto}>
                <h2>Conheça o Espaço Denise Werneck</h2>
                <p>"Cuidamos do seu corpo, celebramos sua essência."</p>
            </div>
            <div id={estilos.textoSobre}>
                <Image id={estilos.imgBox} src={fotoSobre} alt="Foto da Proprietária"/>
                <div id={estilos.boxTextoSobre}>
                    <h3>Nossa História</h3>
                    <h4>Eu sou Denise Werneck! Esse é o nosso Espaço!</h4>

                    <p>
                    É isso que nos motiva, nos impulsiona, o cuidado com cada detalhe que faz de corpo, mente e alma que faz de cada indivíduo um ser único e especial neste universo tão vasto e maravilho. Nossa missão é clara: Ajudar você a sentir sentir-se tão especial quanto você realmente é .
                    </p>
                    <p>
                    Minha vida profissional teve início na área administrativa, mas no ano de 2014, envolvi-me em um "turbilhão" de emoções ao cursar simultâneamente técnico de enfermagem e uma gradução em estética.
                    </p>
                    <p>
                    Após a graduação, por um período de 3 anos, espírito empreendedor e no espaço de minha própria casa, comecei a conquista de meus primeiros clientes - não sem descobrir por mim mesma que antes de correr, caminhar é preciso.
                    </p>
                    <p>
                    A busca pela consolidação no mercado e pela excelência profissional me levaram a buscar ainda mais qualificação, esta obtida em vários cursos ao longo desses anos iniciais.
                    </p>
                    <p>
                    Sendo uma mulher de fé e oração, senti a influência do Espírito Santo me indicando o caminho de divulgar meu trabalho. Comecei com mil planfletos que, com a foco, força e fé, distribuí eu mesma no meu bairro e entorno... Sim! Deu certo! E comecei a receber ligações perguntando sobre os serviços.
                    </p>
                    <p>
                    O espaço do lar não comportava mais os atendimento, meu marido adquiriu e presenteou-me com minha primeira sala comercial na qual até hoje atendo uma clientela que tem crescido de forma constante ao ponto de no ano de 2024 eu ser agraciada com o prêmio Ebritec como melhor espaço de estátcia da cidade de Três Rios.
                    </p>
                </div>
                
            </div>

            <div id={estilos.divComoTrabalhamos}>
                <h3>Como nós trabalhamos</h3>
                <div id={estilos.boxCards}>
                <div className={estilos.card}>
                    <h4>Você Agenda...</h4>
                    <LuCalendarClock className={estilos.icon}/>
                    <p>
                        Você entra em contato e juntas escolhemos o horário que melhor se encaixa na  sua rotina.
                    </p>
                </div>
                <div className={estilos.card}>
                    <h4>...Nós Atendemos</h4>
                    <TbHeartHandshake className={estilos.icon}/>
                    <p>
                        No dia e hora marcados você receberá um atendimento personalizado, de qualidade com efeitos visíveis já no primeiro momento.
                    </p>
                </div>
                </div>
                
            </div>

        </section>

    
    );
};