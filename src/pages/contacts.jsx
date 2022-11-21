import { iconWhats } from "../assets";
import { useEffect } from "react";
import Header from "../components/header"
import CardFooter from "../components/cardFooter"
import Footer from "../components/footer"
import { Container } from "reactstrap";
import styles from "../styles/contacts.module.scss";
import AOS from 'aos';
import "aos/dist/aos.css";


export const Contacts = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <>
            <Container className={styles.containerContacts} fluid>
                <Header />
                <Container>
                    <div className={styles.mainText} data-aos="fade-right" data-aos-duration="2000">

                        <h2 className={styles.title}>Contato</h2>
                        <p className={styles.subTitle}>Para nós é muito importante ter um contato direto e claro com nossos clientes.</p>
                    </div>
                </Container>


                <a className={styles.containerWhats} href="https://wa.me/5516999717240" target="_blank">
                    <img className={styles.iconWhats} src={iconWhats} alt="contatoWhatsapp" />
                </a>
            </Container>
            <CardFooter />
            <Footer />
        </>
    )
}

