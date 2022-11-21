import {
    iconWhats,
    aplicador,
    aplicadorFitaGoma,
    aplicadorFitaGoma2,
    caixaColetiva,
    caixaIndividual,
    caixaIndividualPersonalizada,
    caixaplastica,
    canoBota,
    elastico,
    fitaAdesivaTransparente,
    fitaGoma,
    fitaPlastica,
    fitilhosPlastico,
    papelA4,
    papelaoCouro,
    papeldebucha,
    papelToalha,
    papelKraft,
    papelOnduladoBobina,
    papelSemiKraft,
    stretch,
    papelSeda,
    papelSedaPersonalizado
   
} from "../assets";
import { useEffect } from "react";
import { Container } from "reactstrap";
import  Header  from "../components/header";
import Footer from "../components/footer";
import styles from "../styles/products.module.scss";
import AOS from 'aos';
import "aos/dist/aos.css";


export const Products = () => {

    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <Container fluid className={styles.containerHome}>
                <Header />

                <Container>


                    <div className={styles.mainText} data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                        <h2 className={styles.title}>Produtos</h2>
                        <p className={styles.subTitle}>O objetivo dos nossos serviços é trazer ao cliente qualidade e preço justo.</p>
                    </div>

                    <a className={styles.containerWhats} href="https://wa.me/5516999717240" target="_blank">
                        <img className={styles.iconWhats} src={iconWhats} alt="contatoWhatsapp" />
                    </a>
                </Container>
            </Container>


            <Container className={styles.containerAbout}>

                <div className={styles.boxAbout}>
                    <h2 className={styles.titleAbout}>Papel de Bucha</h2>
                    <div data-aos="fade-up" data-aos-duration="250">
                        <p className={styles.subTitleAbout}>  A principal finalidade do Papel Bucha é o preenchimento de produtos como bolsas e sapatos para exposição e venda. </p>
                        <p className={styles.subTitleAbout}>O objetivo é apresentar o produto com mais volume, impedindo que ele chegue "amassado" ao cliente, o que poderia prejudicar sua venda.</p>
                        <p className={styles.subTitleAbout}>Papel reciclado fino e bastante maleável. Ao ser amassado, o papel não apresenta quinas, de modo que não marca o couro ou lona do sapato, por exemplo.</p>
                        <p className={styles.subTitleAbout}>       Nosso papel também tem a vantagem de ser bem seco, impedindo o surgimento de mofo, depois de despachado para seu distribuidor.</p>
                    </div>
                </div>
                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="400" className={styles.boxImage}>
                    <img className={styles.imgAbout} src={papeldebucha} />
                </div>

                <div className={styles.border} />

                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="400" className={styles.boxImage}>
                    <img className={styles.imgAbout} src={papelSeda}/>
                </div>
                <div className={styles.boxAbout}>
                    <h2 className={styles.titleAbout}>Papel Seda</h2>
                    <div data-aos="fade-up" data-aos-duration="250">
                        <p className={styles.subTitleAbout}>
                            Produto com o melhor corte do mercado, sem rebarbas, e contagem rigorosa de folhas. Além disso, apresenta alta alvura (cor branca brilhante, e não amarelada, sem manchas).</p>
                        <p className={styles.subTitleAbout}>
                            Outras vantagem de nosso produto é que ele não apresenta impurezas, desse modo, pode entrar em contato com alimentos. O Papel de seda pode ser utilizado para embalar alimentos (pães e doces), pequenos objetos delicados e finos (louças, porcelana), em camisarias para embalar roupas, fabricas de sapatos, bolsas etc. Também poderá adquirir o produto para utilizá-lo em artesanato.</p>
                        <p className={styles.subTitleAbout}>
                            Papel Seda para embalagem é perfeito para embalar calçados, peças de vestuário, peças de metal, sacolas de papel e muito mais. </p>
                    </div>
                </div>

                <div className={styles.border} />

                <div className={styles.boxAbout}>
                    <h2 className={styles.titleAbout}>Papel Seda Personalizado</h2>
                    <div data-aos="fade-up" data-aos-duration="250">
                        <p className={styles.subTitleAbout}>Assim como o papel seda padrão da Lucapel, oferecemos ao cliente uma experiência completa de personalização, podendo também customizar a arte que será impressa no papel (opcional), e a medida que ficar melhor para sua empresa.</p>
                        <p className={styles.subTitleAbout}>Fabricado em celulose virgem, é ideal para criar uma boa apresentação para o seu produto. </p>
                    </div>
                </div>
                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="400" className={styles.boxImage}>
                    <img className={styles.imgAbout} src={papelSedaPersonalizado}/>
                </div>


                <div className={styles.border} />

                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="400" className={styles.boxImage}>
                    <img className={styles.imgAbout} src={papelKraft}/>
                </div>
                <div className={styles.boxAbout}>
                    <h2 className={styles.titleAbout}>Papel Kraft</h2>
                    <div data-aos="fade-up" data-aos-duration="250">
                        <p className={styles.subTitleAbout}>

                            O Papel Kraft é um produto fabricado diretamente a partir das fibras de celulose. Produto puro, sem contaminação.</p>
                        <p className={styles.subTitleAbout}>
                            Não é um papel reciclado, e por isso, é muito mais resistente. É uma ótima opção se você deseja um papel resistente
                            para confecção de embalagens, como pacotes para os Correios, ou para moldes em confecções, por exemplo.</p>
                    </div>
                </div>

                <div className={styles.border} />

                <div className={styles.boxAbout}>
                    <h2 className={styles.titleAbout}>Papel Semi-Kraft</h2>
                    <div data-aos="fade-up" data-aos-duration="250">
                        <p className={styles.subTitleAbout}> A principal vatagem do Papel Semi-Kraft é o custo. O Papel Semi-Kraft ou Eco-Kraft, apresenta a mesma aparência do Papel Kraft Natural ou Monolúcido,
                            mas por um preço muito mais </p>
                        <p className={styles.subTitleAbout}> Muito de nossos clientes utilizam esse produto para embalagem de pequenos objetos, forração de chão ou pallets, separação de peças, proteção de produtos acabados,
                            enchimento de caixas. Esse produto também pode ser utilizado para embalar mercadorias para os Correios. Se seu produto não for pesado, o Semi-Kraft pode ser utilizado sem nenhum problema.</p>
                        <p className={styles.subTitleAbout}>
                            Papel Semi-Kraft muito utilizado em construções, reformas, produto ideal para casa de tintas, depósitos material de construção,
                            lojas de embalagens. Disponivel nas seguintes medidas 40cm, 60cm, 80cm, 1,20mts.
                        </p>

                    </div>
                </div>
                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="400" className={styles.boxImage}>
                    <img className={styles.imgAbout} src={papelSemiKraft}/>
                </div>

                <div className={styles.border} />


                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="400" className={styles.boxImage}>
                    <img className={styles.imgAbout} src={papelOnduladoBobina} />
                </div>
                <div className={styles.boxAbout}>
                    <h2 className={styles.titleAbout}>Papel Ondulado Bobina</h2>
                    <div data-aos="fade-up" data-aos-duration="250">
                        <p className={styles.subTitleAbout}> O papelão ondulado protege contra impactos, além de absorver tinta e outros resíduos de obras. Mais que o uso em obras, o Papelão Ondulado é muito utilizado como embalagem , principalmente para proteção ao movimentar, transportar, distribuir e estocar produtos, sendo muito aplicado no setor moveleiro e de mudanças.</p>
                        <p className={styles.subTitleAbout}>Papel semikraft ondulado muito utilizado em construções e reformas, sendo ideal para casa de tintas, depósitos de materiais de construção, lojas de embalagens, fábrica de móveis, loja de peças de porcelana, fábrica de louça e loja de peças automotivas.
                            Disponível na seguinte medida 1,20m, pode ser vendido em bobina por kg.</p>
                    </div>
                </div>

                <div className={styles.border} />

                <div className={styles.boxAbout}>
                    <h2 className={styles.titleAbout}>Filme Stretch</h2>
                    <div data-aos="fade-up" data-aos-duration="250">
                        <p className={styles.subTitleAbout}>É um filme estirável utilazado em escala industrial. É uma embalagem que tem a finalidade de proteger e unitizar cargas paletizadas e diversos produtos, garantindo o processo de movimentação e transporte, protegendo-os contra violação, poeira e umidade.</p>
                        <p className={styles.subTitleAbout}>O Filme Strech é ideal para fechamento de pallets ou grandes pacotes, além de permitir a conjungação de várias caixas evitando perdas. É extremamente resistente e ao mesmo tempo leve, proporcionando o máximo de segurança com o mínimo de peso extra.</p>
                        <p className={styles.subTitleAbout}>As principais características do filme strech são:
                            Alta resistência mecânica (tração e alongamento)
                            Alto poder de pega (aderência)
                            Boas propriedades óticas (brilho e transparência)
                            Alta resistência à perfuração (aumentando a resistência a cantos vivos)
                            Alta retenção de carga (compactação).</p>
                    </div>
                </div>
                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="400" className={styles.boxImage}>
                    <img className={styles.imgAbout} src={stretch} />
                </div>


                <div className={styles.border} />

                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="400" className={styles.boxImage}>
                    <img className={styles.imgAbout} src={fitaAdesivaTransparente} />
                </div>
                <div className={styles.boxAbout}>
                    <h2 className={styles.titleAbout}>Fita Adesiva Transparente</h2>
                    <div data-aos="fade-up" data-aos-duration="250">
                        <p className={styles.subTitleAbout}>É ideal no fechamento de caixas, pacotes emendas e reforços. A sua versatilidade, simplicidade e praticidade a tornam possível de ser utilizada em diversas situações, desde ocorrências domésticas até para soluçôes no mercado manifatureiro. Por ser completamente versátil, um dos locais onde a fita adesiva é mais utilizada são as empresas que utilizam o empacotamento e embalagem em seus processos.</p>
                        <p className={styles.subTitleAbout}>Fita adesiva de filme de polipropileno biorientado (BOPP) transparente acrílica à base d’água com 37 micras. </p>
                        <p className={styles.subTitleAbout}>Aplicação: Fechamento de embalagens de papel, papelão e embalagens plásticas. Uso industrial, escolar e doméstico.</p>
                    </div>
                </div>

                <div className={styles.border} />

                <div className={styles.boxAbout}>
                    <h2 className={styles.titleAbout}>Fita Gomada</h2>
                    <div data-aos="fade-up" data-aos-duration="250">
                        <p className={styles.subTitleAbout}>Trabalhamos com quatro tipos de fita gomada: Fita gomada sem reforço, fita gomada com reforço, fita gomada com impressão e fita gomada personalizada.
                        </p>
                        <p className={styles.subTitleAbout}>Essas fitas são ideias para lacrar uma caixa ou embalagem e assim deixar mais evidente que a mesma não foi violada, a fita gomada é o produto certo para a segurança de suas mercadorias (encomendas). Além disso, oferece maior aderência em relação à fita adesiva comum. Com colagem rápida, nossa fita gomada confere um ótimo acabamento ás suas embalagens. Muito mais segurança e confiabilidade.</p>
                        <p className={styles.subTitleAbout}>Afita gomada também é conhecida como fita cola, é utilizada essencialmente para realizar o fechamento de caixas de papelão. Sua matéria-prima é o papel kraft e goma vegetal, o que garante uma resistência superior.</p>
                    </div>
                </div>
                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="400" className={styles.boxImage}>
                    <img className={styles.imgAbout} src={fitaGoma} />
                </div>


                <div className={styles.border} />

                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="400" className={styles.boxImage}>
                    <img className={styles.imgAbout} src={caixaColetiva}/>
                </div>
                <div className={styles.boxAbout}>
                    <h2 className={styles.titleAbout}>Caixa Coletiva</h2>
                    <div data-aos="fade-up" data-aos-duration="250">
                        <p className={styles.subTitleAbout}>São para facilitar o transporte e/ou armazenamento de produtos e mercadorias, ou a embalagem de produtos maiores que entrará em contato com o consumidor final.</p>
                        <p className={styles.subTitleAbout}>As caixas de papelão são muito usadas para transportar objetos que fazem parte dos processos de mudanças comerciais ou residenciais. O fechamento com a fita gomada torna-se fundamental para garantir a segurança do que se deseja levar de um ponto ao outro em segurança.</p>
                    </div>
                </div>

                <div className={styles.border} />

                <div className={styles.boxAbout}>
                    <h2 className={styles.titleAbout}>Caixa Individual</h2>
                    <div data-aos="fade-up" data-aos-duration="250" >
                        <p className={styles.subTitleAbout}>É utilizada para embalar calçados e confecções, as caixas de papelão devem ser desenvolvidas e produzidas considerando as características dos produtos a serem acondicionados. Os materiais devem ser compatíveis com cada volume, otimizando a embalagem.</p>
                        <p className={styles.subTitleAbout}>Uma caixa de papelão para calça jeans, por exemplo, necessita de dimensões maiores e materiais como      o papelão ondulado, mais resistente do que as caixas de sapato, pois há variações muito grandes entre produtos. A embalagem para um par de botas é bem diferente do que a de uma rasteirinha.</p>
                        <p className={styles.subTitleAbout}>As embalagens de papelão podem acondicionar um item único ou podem ser caixas de papelão coletivas para 12 pares de sapatos por exemplo.</p>
                    </div>
                </div>
                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="400" className={styles.boxImage}>
                    <img className={styles.imgAbout} src={caixaIndividual}/>
                </div>

                <div className={styles.border} />

                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="400" className={styles.boxImage}>
                        <img className={styles.imgAbout} src={caixaIndividualPersonalizada}/>
                </div>
                <div className={styles.boxAbout}>
                    <h2 className={styles.titleAbout}>Caixa Individual Personalizada</h2>
                    <div data-aos="fade-up" data-aos-duration="250" >
                        <p className={styles.subTitleAbout}>As caixas individuais personalizadas possuem a mesma composição da caixa individual comum e todas as suas vantagens com o diferencial de poder ser customizada de acordo com as especificações desejadas pelo cliente. </p>

                    </div>
                </div>



                <div className={styles.border} />

                <div className={styles.boxAbout}>
                    <h2 className={styles.titleAbout}>Papelão Couro</h2>
                    <div data-aos="fade-up" data-aos-duration="250" >
                        <p className={styles.subTitleAbout}>O papel couro é um material de grande resistência permitindo uma ampla aplicação em diversos setores das indústrias.</p>
                        <p className={styles.subTitleAbout}>Atualmente sua aplicabilidade vem ganhando mercado em setores anteriormente desconhecidos. Seu custo benefício tornou-se atrativo para sua variada capacidade de atuação. É composto de matérias primas de fontes renováveis prória, não utilizando de material reciclado.</p>
                        <p className={styles.subTitleAbout}>Uma das características do papel couro é a alta resistência e estabilidade, que permitem diversas aplicações como: Palmilhas de calçados, pratos e bandejas de papelão, móveis, cartonagem e artesanatos em geral, bolsas, malas, fogos de artifício e muito mais.</p>
                    </div>
                </div>
                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="400" className={styles.boxImage}>
                    <img className={styles.imgAbout} src={papelaoCouro}/>
                </div>

                <div className={styles.border} />

                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="400" className={styles.boxImage}>
                    <img className={styles.imgAbout} src={papelA4}/>
                </div>

                <div className={styles.boxAbout}>
                    <h2 className={styles.titleAbout}>Papel Sulfite A4</h2>
                    <div data-aos="fade-up" data-aos-duration="250" >
                        <p className={styles.subTitleAbout}>Papel para cópias, impressões a jato de tinta e laser. Formato 210x297mm, com superfície e massa homogênea, fibras longitudinais, espessura uniforme, elevado teor de alvura (brancura) e baixo índice de deformação devido ao calor.</p>
                    </div>
                </div>




                <div className={styles.border} />


                <div className={styles.boxAbout}>
                    <h2 className={styles.titleAbout}>Papel Toalha Interfolha</h2>
                    <div data-aos="fade-up" data-aos-duration="250" >
                        <p className={styles.subTitleAbout}> 100% CELULOSE VIRGEM
                            20cm x 21cm – 2 Dobras
                            Fardo com 1.000 folhas
                        </p>
                        <p className={styles.subTitleAbout}>BRANCO ECONÔMICO
                            20cm x 21cm – 2 Dobras
                            Fardo com 1.000 folhas</p>
                        <p className={styles.subTitleAbout}>Em suma seu formato mais comum é o interfolha 2 dobras. Além disso, ele se diferencia com relação à varias características. Por exemplo: Gramatura, maciez, resistência a tração, resistência a umidade, poder de absorção etc.</p>
                        <p className={styles.subTitleAbout}>Certamente na Lucapel você encontra papel toalha interfolha de alta qualidade. Isso sem abrir mão da economia e para os mais diversos usos em sua empresa.</p>
                    </div>
                </div>

                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="400" className={styles.boxImage}>
                    <img className={styles.imgAbout} src={papelToalha}/>
                </div>





                <div className={styles.border} />

                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="400" className={styles.boxImage}>
                    <img className={styles.imgAbout} src={fitilhosPlastico} />
                </div>

                <div className={styles.boxAbout}>
                    <h2 className={styles.titleAbout}>Fitilho Plástico</h2>
                    <div data-aos="fade-up" data-aos-duration="250" >
                        <p className={styles.subTitleAbout}>Produzido em polipropileno, o Fitilho plástico é utilizado em aplicações manuais, sendo indicado para amarração de diversos produtos e pacotes. Material complementar para fechamento de embalagens ou uso em ponto de venda. Excelente custo benefício.</p>
                        <p className={styles.subTitleAbout}>Fornecemos dois modelos deste produto: FITILHO FINO e o FITILHO GROSSO.</p>
                    </div>
                </div>


                <div className={styles.border} />


                <div className={styles.boxAbout}>
                    <h2 className={styles.titleAbout}>Suporte para cano de bota</h2>
                    <div data-aos="fade-up" data-aos-duration="250" >
                        <p className={styles.subTitleAbout}>Mantenha suas botas sempre conservadas e sem dobras no cano. Este suporte mantém um par de botas sempre em pé, com o cano esticado, não deixando o cano ficar deformado por causa das dobras. As botas podem inclusive serem guardadas com o cano mantendo as mesmas intactas a marcas.
                        </p>

                    </div>
                </div>

                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="400" className={styles.boxImage}>
                    <img className={styles.imgAbout} src={canoBota}/>
                </div>


                <div className={styles.border} />

                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="400" className={styles.boxImage}>
                    <img className={styles.imgAbout} src={fitaPlastica} />
                </div>


                <div className={styles.boxAbout}>
                    <h2 className={styles.titleAbout}>Fita Arquear</h2>
                    <div data-aos="fade-up" data-aos-duration="250" >
                        <p className={styles.subTitleAbout}>A  fita plástica de arquear preta é produzida através de resinas de Polipropileno(PP). Ela é indicada para realizar o fechamento de caixas de papelão e de pallets.</p>
                        <p className={styles.subTitleAbout}>A fita preta torna-se uma excelente aposta para quem deseja ter um produto de alta qualidade e que oferece a reciclagem de 100%
                            A fita de arquear pp preta tem o melhor custo-benefício e a mais fácil de utilizar no processo de arqueação de paletes.</p>
                        <p className={styles.subTitleAbout}>Aumente a segurança do transporte evitando tombamentos e violação das embalagens.         Fabricada em polipropileno 100% reciclável, é indicada para arqueação de cargas que vão do peso leve ao médio.</p>
                    </div>
                </div>




                <div className={styles.border} />

                <div className={styles.boxAbout}>
                    <h2 className={styles.titleAbout}>Aplicador de Fita Adesiva</h2>
                    <div data-aos="fade-up" data-aos-duration="250" >
                        <p className={styles.subTitleAbout}>O Aplicador de Fita Adesiva 50mm e 70mm garante mais praticidade durante o processo de fechamento de caixas e embalagens, o uso do aplicador torna o empacotamento mais rápido, pois não é necessário usar as duas mãos para o seu manuseio.
                        </p>
                        <p className={styles.subTitleAbout}>Aparelho para lacrar e vedar caixas de papelão, pacotes e outros.
                            Fácil de usar e recarregar,
                            Aplica e corta a fita em um único movimento,
                            Empunhadura anatômica,
                            Regulador lateral de ajuste com mola,
                            Recomendado para fitas até 50mm de largura e 70mm de comprimento.
                        </p>

                    </div>
                </div>


                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="400" className={styles.boxImage}>
                    <img className={styles.imgAbout} src={aplicador} />
                </div>




                <div className={styles.border} />

                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="400" className={styles.boxImage}>
                    <img className={styles.imgAbout} src={caixaplastica}/>
                </div>
                <div className={styles.boxAbout}>
                    <h2 className={styles.titleAbout}>Caixa Plástica</h2>
                    <div data-aos="fade-up" data-aos-duration="250" >
                        <p className={styles.subTitleAbout}>Caixa agrícula com ombreira <br />
                            Utilização: Agrícula, supermercados, ceasas, farmacêuticas, indústrias em geral, frigorifico, laticinios e residências.</p>
                        <p className={styles.subTitleAbout}>Dados Técnicos <br />
                            Capacidade volumétrica - 49 litros <br />
                            Carga por caixa - 30 kilos <br />
                            Carga de empilhamento - 360 kilos <br />
                            Encaixe - 8mm <br />
                            Comprimento externo - 5600mm <br />
                            Largura externa - 300mm <br />
                            Altura total - 310mm <br />
                            Comprimento interno - 528mm <br />
                            Largura interna - 321mm
                        </p>


                    </div>
                </div>


                <div className={styles.border} />


                <div className={styles.boxAbout}>
                    <h2 className={styles.titleAbout}>Elástico</h2>
                    <div data-aos="fade-up" data-aos-duration="250" >
                        <p className={styles.subTitleAbout}>Elástico Látex Fino e Grosso
Elástico usado para dinheiro, fábrica de palmilhas, amarrar corte em fábrica de calçados, amarrar pamonha, solados, etc <br /> Elástico de grande resistência e ótima qualidade.</p>
                       
                    </div>
                </div>
                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="400" className={styles.boxImage}>
                    <img className={styles.imgAbout} src={elastico}/>
                </div>



                <div className={styles.border} />

                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="400" className={styles.boxImage}>
                    <img className={styles.imgAbout} src={aplicadorFitaGoma}/>
                </div>


                <div className={styles.boxAbout}>
                    <h2 className={styles.titleAbout}>Aplicador Fita Gomada Tobogã</h2>
                    <div data-aos="fade-up" data-aos-duration="250" >
                        <p className={styles.subTitleAbout}>Aplicador manual para fitas gomadas sem reforço, leve e prático vai facilmente até o ponto de fechamento de suas embalagens.
                        </p>
                        <p className={styles.subTitleAbout}>Informações técnicas:
                            -Largura mínima e máxima da fita 30/80</p>
                    </div>
                </div>



                <div className={styles.border} />

                <div className={styles.boxAbout}>
                    <h2 className={styles.titleAbout}>Aplicador Fita Gomada Canoa</h2>
                    <div data-aos="fade-up" data-aos-duration="250" >
                        <p className={styles.subTitleAbout}>Aplicador manual para fitas gomadas sem reforço, leve e prático vai facilmente até o ponto de fechamento de suas embalagens.
                        </p>
                        <p className={styles.subTitleAbout}>Informações técnicas:
                            -Largura mínima e máxima da fita 30/80</p>
                    </div>
                </div>

                <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="400" className={styles.boxImage}>
                    <img className={styles.imgAbout} src={aplicadorFitaGoma2}/>
                </div>

            </Container>
            <Footer />
        </>
    )

}
