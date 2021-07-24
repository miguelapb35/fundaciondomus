/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Heading, Box, Text, Image, Grid } from "theme-ui";
import BannerImg from "assets/logo-efata-pastoral.png";
import SectionHeader from "../components/section-header";

export default function KeyFeature() {
  return (
    <section sx={{ variant: "section.keyFeature" }} id="efata">
      <Container sx={styles.container}>
        <SectionHeader
          slogan="LA FONDAZIONE DOMUS"
          title="¡ HA BISOGNO DI TE !"
        />
        <Text as="p" variant="heroSecondary">
          La Fondazione Domus Colombia, offre il programma terapeutico EFATA,
          come un alternativa di cura e riabilitazione delle drogue, atraverso
          un modelo BIO-SICO-SPIRITUALE; offrendo un servizio professionale,
          etico e con vero impegno al servizio della vita.
        </Text>
        <Box sx={styles.imageBox}>
          <Image src={BannerImg} alt="banner" />
        </Box>
        <Heading as="h1" variant="heroPrimary" sx={styles.title}>
          BANCOLOMBIA CONTO DI RISPARMIO 05362574288
        </Heading>
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
