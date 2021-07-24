/** @jsx jsx */
import { jsx, Container, Box, Image } from "theme-ui";
import TextFeature from "components/text-feature";

import FeatureThumb from "assets/history/img-history.png";
import shapePattern from "assets/shape-pattern2.png";

const data = {
  title: "STORIA",
  description:
    "La fondazione Domus Colombia nasce il 30 luglio 2010, aprendo la sua prima sede nel quartiere Puente Aranda, che abbiamo nominato Domus San Gabriele, nasce come un desiderio di dare una risposta concreta alle diverse esigenze did persone in situazione di vulnerabilità, tale struttura comincia come un centro in cui sosteniamo i bambini con il rafforzamento scolastico, poi sono stati creati una serie di laboratori, un guardaroba sociale e poi viene transformato in un'altra opera che e la mensa per abitanti di strada, anziane abbandonati e ragazze madri. ",
};

export default function CoreFeature() {
  return (
    <section sx={{ variant: "section.coreFeature" }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature title={data.title} description={data.description} />
        </Box>
        <Box sx={styles.thumbnail}>
          <Image src={FeatureThumb} alt="Thumbnail" />
          <Box sx={styles.shapeBox}>
            <Image src={shapePattern} alt="Shape" />
          </Box>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: ["wrap", null, null, "nowrap"],
    pb: [0, 7, 0, null, 7],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, "30px", 0],
    textAlign: ["center", null, null, "left"],
    width: ["100%", "80%", null, 340, 400, 430, null, 485],
    pb: ["50px", "60px", null, 0],
    mx: ["auto", null, null, 0],
    ".description": {
      pr: [0, null, 6, 7, 6],
    },
  },
  thumbnail: {
    display: "inline-flex",
    position: "relative",
    mr: "auto",
    ml: ["auto", null, null, null, 7],
    pb: ["50px", "60px", null, 0],
    "> img": {
      position: "relative",
      zIndex: 1,
      height: [310, "auto"],
    },
  },
  shapeBox: {
    position: "absolute",
    bottom: -65,
    right: -165,
    zIndex: -1,
    display: ["none", "inline-block", "none", null, "inline-block"],
  },
};
