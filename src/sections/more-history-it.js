/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Heading, Box, Text, Image, Grid } from "theme-ui";
import BannerImg from "assets/about/img-header.png";

export default function moreHistory() {
  return (
    // <section sx={{ variant: 'section.keyFeature' }} id='feature' ></section>
    <Container sx={styles.container}>
      <Text as="p" variant="heroSecondary">
        Nel 2013 nasce l'idea di dare un'altra risposta ad un'altra fascia di
        persone che erano le regazze madri che erano a rischio di abortire per
        diverse situazioni e nominiamo il programma che è stato creato nel
        quartiere Porvenir Rio di Mosquera Domus Esperanza perché la vita è
        speranza, come risposta alle donne che vengono ospitate in situazioni di
        vulnerabilità. Continuiamo a sognare sempre cercando di essere risposta
        concreta nel costruire la pace attraverso la cura della vita e cosi
        nasce nel 2016 il programma Domus Santa Rosa dedicato a proteggere gli
        adulti anziani in situazione di abbandono e/o vulnerabilità e viene
        creata una struttura per questo scopo dove abbiamo 10 anziane a nostra
        cura permanente.
      </Text>
      <Text as="p" variant="heroSecondary">
        Nel 2017 nasce l'idea di dare vita ad un programma per il settore di
        Suba e abbiamo creato la Domus Pippo per aiutare le ragazze madri con il
        sostengo scolastico dei loro bambini che a motivo del lavoro delle mamme
        lasciano i bambini tante volte da soli, e cosi la nostra Domus Pippo
        accoglie e progetta con loro tutto l'accompagnamento dei lavori,
        supporto scolastico, supporto psicologico sia per il bambino che per la
        stessa famiglia.
      </Text>
      <Text as="p" variant="heroSecondary">
        In questo periodo della pandemia, anno 2020, comincia ad emergere una
        idea che mancava nella nostra fondazione, una fetta della popolazione a
        cui non avevamo ancora guardato ed è la popolazione con problemi di
        dipendenza, allora si pensò al programma Rete Terapeutica Pastorale
        Efata, che si sta avviando come programma che vuole aiutare nella
        prevenzione e il trattamento dal processo ambulatoriale come ricoveri
        intervenendo all'utente dalla sua guarigione, accettazione e
        transformazione delle sue dipendenze sia di consumo che emotive.
      </Text>
      <Text as="p" variant="heroSecondary">
        Nel 2021 nasce Domus Alfarero un altro spazio per la prevenzione
        attraverso l'artiglianato la musica, la danza, la pittura.
      </Text>
      <Box sx={styles.imageBox}>
        <Image src={BannerImg} alt="banner" />
      </Box>
    </Container>
  );
}

const styles = {
  container: {
    minHeight: "inherit",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    mt: "-90px",
    p: {
      fontSize: "15px",
    },
  },
  imageBox: {
    justifyContent: "center",
    textAlign: "center",
    display: "inline-flex",
    mb: [0, null, -6, null, null, "-40px", null, -3],
    pb: [0, 0, "40px", null, 7],
    pt: "20px",
    img: {
      justifyContent: "center",
      textAlign: "center",
      position: "relative",
      borderRadius: "15px",
      height: [245, "auto"],
      maxWidth: "75%",
    },
  },
  title: {
    justifyContent: "center",
    textAlign: "center",
    pt: ["40px", "45px", "55px", "70px", null, null, "80px", "15px"],
  },
  grid: {
    width: ["100%", "80%", "100%"],
    mx: "auto",
    gridGap: [
      "35px 0",
      null,
      "40px 40px",
      "50px 60px",
      "30px",
      "50px 40px",
      "55px 90px",
    ],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(4,1fr)",
    ],
  },
};
