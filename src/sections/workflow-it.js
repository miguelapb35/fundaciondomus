/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid, Box, Heading, Text } from "theme-ui";
import SectionHeader from "components/section-header";

import PatternBG from "assets/patternBG.png";
import ArrowOdd from "assets/arrowOdd.svg";
import ArrowEven from "assets/arrowEven.svg";

const data = [
  {
    id: 2010,
    title: "Aprono la loro prima sede a Puente Aranda Bogotá",
    text:
      "La fundación Domus Colombia nace el 30 de julio del 2010, abriendo su primera sede en el barrio puente Aranda, la cual llamamos Domus San Gabriel, surge como un deseo de dar una respuesta concreta a las diversas necesidades de personas en situación de vulnerabilidad, dicha estructura comienza siendo un centro donde apoyamos a niños con el refuerzo escolar, luego se crearon una serie de talleres, un ropero social y después lo cristalizamos en otra obra que es los comedores para habitantes de calle, abuelos en estado de abandono y madres cabeza de hogar.",
  },
  {
    id: 2013,
    title: "Nasce Domus Esperanza a Mosquera.",
    text:
      "En el año 2013 surge la idea de dar otra respuesta a otra franja de personas que que eran las madres que estaban en peligro de abortar por diferentes situaciones y nombramos ese programa que se creo en el barrio porvenir rio de Mosquera Domus Esperanza porque la vida es esperanza y allí se albergan mujeres gestantes en situación de vulnerabilidad",
  },
  {
    id: 2016,
    title: "Nasce il programma Domus Santa Rosa.",
    text:
      "Seguimos soñando siempre tratando de ser respuesta concreta como construir la paz a través del cuidado de la vida y surge en el año 2016 el programa Domus Santa Rosa dedicada a proteger a las personas adultas mayores en situación de abandono y/o vulnerabilidad y se crea entonces una estructura para este fin donde tenemos 10 abuelas a nuestro cuidado permanente.",
  },
  {
    id: 2017,
    title: "Si parte con il Programma Domus Pippo.",
    text:
      "En el año 2017 surge la idea de hacer un programa por el sector del norte en Suba y creamos a Domus Pippo para ayudar a las madres cabeza de hogar con el apoyo escolar ya que por su trabajo dejaban los niños muy solos y desde Domus Pippo se acogen y se realiza con ellos todo el acompañamiento en tareas, refuerzo escolar, seguimiento psicológico tanto para el niño como para la familia.",
  },
  {
    id: 2020,
    title:
      "Nasce l'idea di creare il programma di Rete Pastorale Terapeutica Efata",
    text:
      "En este tiempo de la pandemia  año 2020 comienza surgir la idea  de que faltaba un sector  de la población  al cual no habíamos mirado todavía y es la población con problemas de adicciones, entonces se pensó en el programa Red Terapéutica Pastoral Efata, la cual esta iniciando  como programa que quiere ayudar  en la prevención, tratamiento desde el proceso ambulatorio como internación interviniendo al usuario desde su sanación, curación, aceptación y transformación de sus adicciones tanto de consumo como emocionales.",
  },
  {
    id: 2021,
    title: "Programma Domus Alfarero",
    text:
      "Programa que busca hacer un trabajo de prevención a través del Arte. Duitama - Boyacá",
  },
];

export default function WorkFlow() {
  return (
    <section sx={styles.workflow}>
      <Container>
        <SectionHeader
          slogan="Fundación Domus Colombia"
          title="LINEA DE TIEMPO"
          isWhite={true}
        />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <Box sx={styles.card} key={item.id}>
              <Box sx={styles.iconBox}> {`${item.id}`} </Box>
              <Box sx={styles.wrapper}>
                <Heading sx={styles.wrapper.title}>{item.title}</Heading>
                {/* <Text sx={styles.wrapper.subTitle}>
                  <div sx={styles.wrapper.paragraph}>{item.text}</div>
                </Text> */}
              </Box>
            </Box>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  workflow: {
    backgroundColor: "primary",
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    position: "relative",
    py: [8, null, 9, null, null, 10],
  },
  grid: {
    mb: -1,
    pt: 0,
    gridGap: [
      "35px 0",
      null,
      "45px 30px",
      null,
      "50px 25px",
      null,
      null,
      "50px 65px",
    ],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(4,1fr)",
    ],
  },
  card: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    textAlign: ["center", null, "left"],
    width: ["100%", "80%", "100%"],
    mx: ["auto"],
    px: [4, null, null, 0],
    "&::before": {
      position: "absolute",
      content: '""',
      top: 0,
      left: [0, null, null, null, null, 72, null, 90],
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "center center",
      width: 215,
      height: 60,
      "@media screen and (max-width:1220px)": {
        display: "none",
      },
    },
    "&:nth-of-type(2n-1)::before": {
      backgroundImage: `url(${ArrowOdd})`,
    },
    "&:nth-of-type(2n)::before": {
      backgroundImage: `url(${ArrowEven})`,
      top: 17,
    },
    "&:last-child::before": {
      display: "none",
    },
  },

  iconBox: {
    padding: "10px",
    width: ["50px", null, "60px", null, null, "70px"],
    height: ["50px", null, "60px", null, null, "70px"],
    flexShrink: 0,
    borderRadius: [15, null, 23, null, null, 30],
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    mb: [5, null, null, null, null, 6],
    mx: ["auto", null, 0],
    fontSize: [4, null, 5, null, null, "20px"],
    fontWeight: 700,
    justifyContent: "center",
    color: "#234582",
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    mt: "-5px",
    title: {
      fontSize: [3, null, 4, null, null, 5],
      color: "white",
      lineHeight: [1.4, null, null, null, null, 1.55],
      pr: [0, null, null, null, null, 2],
      mb: [2, 3],
    },
    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, null, 1.9, 2],
      color: "white",
      opacity: 0.75,
      pr: [0, null, null, null, null, 5],
    },
    paragraph: {
      height: "170px",
      overflowY: "scroll",
      width: "16em",
      wordWrap: "break-word",
      border: "3px solid #fff",
      borderRadius: "15px",
      padding: "5px",
    },
  },
};
