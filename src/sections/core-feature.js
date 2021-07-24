/** @jsx jsx */
import { jsx, Container, Box, Image } from "theme-ui";
import TextFeature from "components/text-feature";

import FeatureThumb from "assets/history/img-history.png";
import shapePattern from "assets/shape-pattern2.png";

const data = {
  title: "HISTORIA",
  description:
    "La fundación Domus Colombia nace el 30 de julio del 2010, abriendo su primera sede en el barrio Puente Aranda, la cual llamamos Domus San Gabriel, surge como un deseo de dar una respuesta concreta a las diversas necesidades de personas en situación de vulnerabilidad, dicha estructura comienza siendo un centro donde apoyamos a niños con el refuerzo escolar, luego se crearon una serie de talleres, un ropero social y después lo cristalizamos en otra obra que es los comedores para habitantes de calle, abuelos en estado de abandono y madres cabeza de hogar.",
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
