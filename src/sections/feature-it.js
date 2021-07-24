/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import FeatureCard from "components/feature-card.js";

const data = [
  {
    id: 1,
    altText: "Siamo un'organizzazione colombiana",
    title: "Siamo un'organizzazione colombiana",
    text:
      "senza scopo di lucro, creata da un gruppo di professionisti animati ​​dal desiderio di contribuire a sradicare la povertà della popolazione vulnerabile come: Bambini, giovani, andulti anziani e ragazze madri, trattamento delle dipendenze sia di consumo che emotive.",
  },
  {
    id: 2,
    altText: "MISSIONE",
    title: "MISSIONE",
    text:
      "La FONDAZIONE DOMUS COLOMBIA è un ente senza scopo di lucro, il cui obiettivo primario è quello di contribuire all'eliminazione della povertà nelle fasce più vulnerabili della popolazione, avendo come pilastri fondamentali la trascendenza dell'essere umano, l'istruzione, la cultura e la protezione dell'ambiente.",
  },
  {
    id: 3,
    altText: "VISIONE",
    title: "VISIONE",
    text:
      "La FONDAZIONE DOMUS COLOMBIA sarà per il 2025, un'entità posizionata a livello nazionale e internazionale, affidabile, solida, generatrice di importanti cambiamenti nei diversi settori in cui è chiamata a sviluppare il suo oggetto sociale.",
  },
  {
    id: 4,
    altText: "CONSIGLIO DI AMMINISTRAZIONE",
    title: "CONSIGLIO DI AMMINISTRAZIONE",
    text:
      "P. JORGE ELIÉCER ARIAS - PRESIDENTE; GUSTAVO ESCOBAR - VICEPRESIDENTE; KELLY GONZÁLEZ - SEGRETARIO",
  },
];

export default function Feature() {
  return (
    <section id="quienes-somos" sx={{ variant: "section.feature" }}>
      <Container>
        <SectionHeader slogan="Fondazione Domus Colombia" title="Chi siamo" />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
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
