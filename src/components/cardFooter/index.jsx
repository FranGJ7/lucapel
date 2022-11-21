import { facebook, instagram, email, telephone, location } from "../../assets";
import styles from "./cardFooter.module.scss"
import { Container } from "reactstrap";


const CardFooter = () => {
    return ( 
        <>
            <Container className={styles.infoFooter} fluid>
                <div className={styles.contactCard}>
                    <h1>Contato</h1>
                    <hr className={styles.hr} />
                    <img className={styles.icon} src={location} alt="telefone" />
                    <p> Endereço: R. Bruno Cilurzo, 1565 - Vila Rezende, Franca - SP <br />CEP: 14406-523</p>
                    <img className={styles.icon} src={telephone} alt="telefone" />
                    <p>Telefone: (16) 3025-7240</p>
                    <img className={styles.icon} src={email} alt="telefone" />
                    <p>E-mail: lucapel_2010@hotmail.com</p>

                    <div className={styles.socialMedia}>
                        <a href="https://www.facebook.com/lucapel.ind/" target="_blank">
                            <img className={styles.socialIcon} src={facebook} alt="iconFacebook" />
                        </a>
                        <a className={styles.linkSocial} href="https://www.instagram.com/lucapel.ind/" target="_blank">
                            <img className={styles.socialIcon} src={instagram} alt="iconInstagram" />
                        </a>
                    </div>



                </div>
                <div className={styles.googleCard}>
                    <iframe className={styles.googleMaps} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.4663291551205!2d-47.43822798450761!3d-20.528092286271683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b0a79afb1ca911%3A0x8435196e3388b0ac!2sLucapel%20Embalagens%20%26%20Pap%C3%A9is!5e0!3m2!1spt-BR!2sbr!4v1662812486287!5m2!1spt-BR!2sbr" />
                </div>
            </Container>
        </>
    )
}

export default CardFooter;
