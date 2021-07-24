/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid, Box, Image } from "theme-ui";
import FeatureThumb from "assets/donaciones/camandulas.jpg";
import SectionHeader from "components/section-header";
import FeatureCard from "components/feature-card.js";

const data = [
  {
    id: 1,
    altText: "DONACIÓN ÚNICA",
    title: "DONACIÓN ÚNICA",
    text:
      "Ayúdanos a ayudar con tu colaboración en especie o en efectivo, esto nos permitirá ofrecer mejores servicios a nuestra población vulnerable.",
  },
  {
    id: 2,
    altText: "DONACIÓN MENSUAL",
    title: "DONACIÓN MENSUAL",
    text:
      "Con tu Ofrenda Mensual, contribuirás a dar más sonrisas a nuestros adultos mayores, niños, jovenes y toda la población que hoy necesita de nosotros.",
  },
  {
    id: 3,
    altText: "DONACIÓN CORPORATIVA",
    title: "DONACIÓN CORPORATIVA",
    text:
      "Realiza con nosotros una alianza estratégica, planeando áreas de trabajo donde prime el mútuo beneficio en nuestros convenios, y así cumplir nuestra responsabilidad social.",
  },
  {
    id: 4,
    altText: "DONACIÓN CONMEMORATIVA",
    title: "DONACIÓN CONMEMORATIVA",
    text:
      "Con la compra de uno de nuestros souvenirs, estás apoyando a nuestros diferentes programas donde impactámos población vulnerable.",
  },
  {
    id: 5,
    altText: "DONACIONES INTERNACIONALES",
    title: "DONACIONES INTERNACIONALES",
    text:
      "Fundación Domus Colombia. Banco: Bancolombia. Cuenta de Ahorros: 05362594288. ABA: 021000089. SWIF: ColocoBMXXX",
  },
];

export default function Donaciones() {
  return (
    <section id="donaciones" sx={{ variant: "section.feature" }}>
      <Container>
        <SectionHeader slogan="Fundación Domus Colombia" title="Donaciones" />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
        <Box sx={styles.thumbnail}>
          {/*    <Image src={FeatureThumb} alt="Thumbnail" />
         <Box sx={styles.shapeBox}>
          <Image src={shapePattern} alt="Shape"/>
        </Box> */}
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      "40px 0",
      null,
      "45px 30px",
      null,
      "60px 50px",
      "70px 50px",
      null,
      "80px 90px",
    ],
    gridTemplateColumns: ["repeat(1,1fr)", null, "repeat(2,1fr)"],
  },
};
