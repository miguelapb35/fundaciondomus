/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid, Box, Image } from "theme-ui";
import FeatureThumb from "assets/donaciones/camandulas.jpg";
import SectionHeader from "components/section-header";
import FeatureCard from "components/feature-card.js";

const data = [
  {
    id: 1,
    altText: "DONAZIONE UNICA",
    title: "DONAZIONE UNICA",
    text: `
      Aiutaci ad aiutare con il tuo contributo, così costruirai con 
      noi ambienti più armoniosi per la nostra popolazione vulnerabile.
      `,
  },
  {
    id: 2,
    altText: "DONAZIONE MENSILE",
    title: "DONAZIONE MENSILE",
    text: `Con la tua Offerta Mensile, contribuirai a rendere più 
    sorridenti i nostri adulti anziani, i bambini, i giovani e l'intera 
    popolazione che oggi hano bisogno di noi.
      
      `,
  },
  {
    id: 3,
    altText: "DONAZIONE CORPORATIVA",
    title: "DONAZIONE CORPORATIVA",
    text: `
      Crea con noi un'alleanza strategica per pianificare aree
       di lavoro in cui i vantaggi prevalgono sui nostri programmi
       di collaborazione e per favorire la responsabilità sociale.
      `,
  },
  {
    id: 4,
    altText: "DONAZIONE COMMEMORATIVA",
    title: "DONAZIONE COMMEMORATIVA",
    text: `
      Con l'acquisto di uno dei nostri souvenir state sostenendo i nostri 
      diversi programmi in cui stiamo sollevando la popolazione vulnerabile.
      `,
  },
  {
    id: 5,
    altText: "PER VERSAMENTI INTERNAZIONALI",
    title: "PER VERSAMENTI INTERNAZIONALI",
    text:
      "Nome: Fundación Domus Colombia. Banca: Bancolombia - Bogotá. Conto: 05362594288. ABA: 021000089. SWIF: ColocoBMXXX",
  },
];

export default function Donaciones() {
  return (
    <section id="donaciones" sx={{ variant: "section.feature" }}>
      <Container>
        <SectionHeader slogan="Fondazione Domus Colombia" title="Donazione" />
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
