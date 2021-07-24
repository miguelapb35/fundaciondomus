/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import FeatureCard from "components/feature-card.js";
import Performance from "assets/feature/performance.svg";
import Partnership from "assets/feature/partnership.svg";
import Subscription from "assets/feature/subscription.svg";
import Support from "assets/feature/support.svg";

const data = [
  {
    id: 1,
    imgSrc: Support,
    altText: "CONSULENZE",
    title: "CONSULENZE",
    text: `
      Servizi integrati psicologici, lavoro sociale, nutrizione, 
      terapia occupazionale, medicina, infermieristica, 
      terapia delle dipendenze, consulenza legale.
      `,
  },
  {
    id: 2,
    imgSrc: Support,
    altText: "ISTRUZIONE",
    title: "ISTRUZIONE",
    text: `
      formazione, diplomi, laboratori, forum, conferenze rivolte
      alle aziende, associazioni, scuole, università, enti territoriali 
      e altre organizzazioni che necessitano dei nostri servizi di 
      prevenzione e trattamento del consumo di sostanze psicoattive 
      e di dipendenze emotive.
      `,
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: "ATTENZIONE",
    title: "ATTENZIONE",
    text: `
      all'adulto maggiore, madri gestanti, sostegno scolastico,  
      popolazione vulnerabile e trattamento di aggiunte di 
      consumo come emotivi, ambulatorie e ricovero, come richiesto.
      `,
  },
  {
    id: 4,
    imgSrc: Partnership,
    altText: "GUARDAROBA",
    title: "GUARDAROBA",
    text: "vendita di abiti usati in buone condizioni.",
  },
  {
    id: 5,
    imgSrc: Subscription,
    altText: "MENSA COMUNITARIA",
    title: "MENSA COMUNITARIA",
    text:
      "Attenzione alla popolazione vulnerabile offrendo 150 colazioni al giorno.",
  },
  {
    id: 6,
    imgSrc: Performance,
    altText: "ESPERIENZA SPIRITUALE",
    title: "ESPERIENZA SPIRITUALE",
    text: `
      Ogni mese si compie un'esperienza spirituale nella quale incontri il tuo 
      IO e cominci ad avere coscienza per capirti e perdonarti.
      `,
  },
  {
    id: 7,
    imgSrc: Subscription,
    altText: "CASA INCONTRI DI GRUPPO",
    title: "CASA INCONTRI DI GRUPPO",
    text: `
      Offriamo un bellissimo spazio per convivenze di gruppi 
      parrocchiali, comunità religiose, giovani, scout e tutti 
      coloro che vogliono una connessione spirito-mente-corpo-Dio.
      `,
  },
];

export default function Servicios() {
  return (
    <section id="servicios" sx={{ variant: "section.feature" }}>
      <Container>
        <SectionHeader slogan="Fondazione Domus Colombia" title="Servizi" />
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
