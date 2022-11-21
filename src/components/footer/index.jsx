import { footerLogo } from "../../assets";
import styles from "./footer.module.scss"
import { Container } from "reactstrap";

const Footer = () => {
  return (
    <>
      <Container className={styles.footer} fluid>
        <img className={styles.imgLogo} src={footerLogo}/>
        <p className={styles.textFooter}>LUCAPEL EMBALAGENS & PAPEIS &#174; | CNPJ 12.517.030/0001-59</p>
      </Container>
    </>
  )
};

export default Footer




