import { iconWhats, footerLogo, faixada, grafic, teamWork, coop } from "../assets";
import { useEffect } from "react";
import  Header  from "../components/header"
import Footer from "../components/footer"
import CardFooter from "../components/cardFooter"
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import styles from "../styles/home.module.scss";
import AOS from 'aos';
import "aos/dist/aos.css";


   export const Home = () => {

        useEffect(() => {
          AOS.init();
        }, [])
        return (
          <>
            <Container fluid className={styles.containerHome}>
              <Header />
      
              <Container>
                <div className={styles.mainText} data-aos="fade-right" data-aos-duration="2000">
                  <img className={styles.logoMainText} src={footerLogo} alt="flecha saiba mais" />
                  <h2 className={styles.title}>EMBALAGENS & PAPÈIS</h2>
                  <p className={styles.subTitle}>IDEAL PARA VOCÊ, IDEAL PARA SUA EMPRESA</p>
                  <p className={styles.subTitle2}></p>
                </div>
      
      
      
                <a className={styles.containerWhats} href="https://wa.me/5516999717240" target="_blank">
                  <img className={styles.iconWhats} src={iconWhats} alt="contatoWhatsapp" />
                </a>
              </Container>
      
            </Container>
            <Container className={styles.containerAbout}>
              <div className={styles.textAbout}>
                <h2 className={styles.titleAbout}>Sobre Nós</h2>
                <p className={styles.subTitleAbout}>
                Somos uma Empresa de Componentes para os setores Calçadista, Bolsas e Vestuários em geral.
                <br/>
                Atendemos tanto no atacado quanto no varejo.
                <br/>
                Estamos no mercado desde 2010 com uma meta diária: <br/>
                O aperfeiçoamento de nossos serviços, a excelência no atendimento a manutenção da qualidade em nossos produtos.
                <br/>
                Seja bem-vindo a Lucapel!
                <br/>
                Nossa equipe agradece desde já seu contato.
                </p>
                <Link to="/empresa">
                  <button className={styles.buttonAbout} >CONHEÇA MAIS</button>
                </Link>
      
      
              </div>
      
              <img className={styles.imgAbout} src={faixada} />
      
            </Container>
    
            <Container fluid >
      
              <div className={styles.cards}>
                <div className={styles.card}>
                  <img className={styles.iconCard} src={coop} alt="Compromiso" />
                  <h3 className={styles.titleCard}>Compromisso</h3>
                  <p className={styles.subTitleCard}>Visamos sempre atender nossos clientes com eficiência e agilidade, garantindo a qualidade e custo benefício de nossos produtos.
                  </p>
                </div>
                <div className={styles.card}>
                  <img className={styles.iconCard} src={grafic} alt="Visão" />
                  <h3 className={styles.titleCard}>Visão</h3>
                  <p className={styles.subTitleCard}>Buscamos ser uma empresa consolidada, reconhecida e conectada na área de Embalagens e Papéis, a fim de tornar líderes do presente e do futuro. </p>
                </div>
                <div className={styles.card}>
                  <img className={styles.iconCard} src={teamWork} alt="Valores" />
                  <h3 className={styles.titleCard}>Valores</h3>
                  <div className={styles.subTitleCard}>
                    <ul>
                      <li>Engajamento</li>
                      <li>Excelência</li>
                      <li>Constância</li>
                      <li>Comprometimento</li>
                      <li>Igualdade</li>
                    </ul>
                  </div>
                </div>
              </div>
      
            </Container>
            <CardFooter />
            <Footer />
          </>
        )
      }
      
      
      
