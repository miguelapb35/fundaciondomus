/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Box, Text, Image } from "theme-ui";
import BannerImg from "assets/voluntariado/voluntariado.png";
import SectionHeader from "../components/section-header";
import VoluntariosCard from "./voluntarios-carousel-it";

export default function KeyFeature() {
  return (
    <section sx={{ variant: "section.keyFeature" }} id="voluntariado">
      <Container sx={styles.container}>
        <SectionHeader slogan="Domus Volontariato" title="Volontariato" />
        <Box sx={styles.imageBox}>
          <Image src={BannerImg} alt="banner" />
        </Box>
        <Text as="p" variant="heroSecondary">
          "Il volontariato è un'espressione di solidarietà organizzata che
          implica l'impegno verso i bisogni esistenti e gli obiettivi
          collettivi". Con il progetto Koinonia Giovanni Paolo II, Promuoviamo e
          facilitiamo attività di volontariato nei diversi programmi che
          abbiamo, unendo le mani che vogliono aiutare indipendentemente dal
          lavoro in orari e luoghi diversi, in questo modo troviamo
          un'opportunità di servire gli altri. Alcuni di questi programmi sono:
          Mensa San Jose, Mensa San Victorino, Le squadre di soccorso,
          Guardaroba sociale.
        </Text>
        <VoluntariosCard />
        <Text as="p" variant="heroSecondary">
          L'obiettivo principale è promuovere la salute e la prevenzione delle
          malattie nelle popolazione vulnerabili in luoghi isolati e
          difficilmente accessibili. Insieme ad un gruppo di operatori sanitari
          (medici, psicologi, terapeuti, dentisti, ecc.) viene fornito il
          servizio di base, contribuendo a migliorare la qualità della vita
          delle persone. Sono comprese anche consulenze in materia di
          pianificazione famigliare, igiene orale, tutel ambientale, igiene
          personale e ricreazione.
        </Text>
      </Container>
    </section>
  );
}

const styles = {
  container: {
    minHeight: "inherit",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  imageBox: {
    justifyContent: "center",
    textAlign: "center",
    display: "inline-flex",
    mb: [0, null, -6, null, null, "-40px", null, -3],
    img: {
      justifyContent: "center",
      textAlign: "center",
      position: "relative",
      borderRadius: "15px",
      height: [245, "auto"],
      marginBottom: "70px",
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
