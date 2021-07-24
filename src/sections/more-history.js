/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Heading, Box, Text, Image, Grid } from "theme-ui";
import BannerImg from "assets/about/img-header.png";

export default function moreHistory() {
  return (
    // <section sx={{ variant: 'section.keyFeature' }} id='feature' ></section>
    <Container sx={styles.container}>
      <Text as="p" variant="heroSecondary">
        En el año 2013 surge la idea de dar otra respuesta a otra franja de
        personas que eran las madres que estaban en peligro de abortar por
        diferentes situaciones y nombramos ese programa que se creó en el barrio
        porvenir rio de Mosquera Domus Esperanza, y ahora funciona en la sede
        principal de puente aranda Cra 56 # 17 - 44 Bogotá, porque la vida es
        esperanza y allí se albergan mujeres gestantes en situación de
        vulnerabilidad. Seguimos soñando siempre tratando de ser respuesta
        concreta como construir la paz a través del cuidado de la vida y se crea
        el programa Domus Santa Rosa dedicada a proteger a las personas adultas
        mayores en situación de abandono y/o vulnerabilidad y se crea entonces
        una estructura para este fin donde tenemos 10 abuelas a nuestro cuidado
        permanente.
      </Text>
      <Text as="p" variant="heroSecondary">
        En el año 2017 surge la idea de hacer un programa por el sector del
        norte en Suba y creamos a Domus Pippo para ayudar a las madres cabeza de
        hogar con el apoyo escolar ya que por su trabajo dejaban los niños muy
        solos y desde Domus Pippo se acogen y se realiza con ellos todo el
        acompañamiento en tareas, refuerzo escolar, seguimiento psicológico
        tanto para el niño como para la familia.
      </Text>
      <Text as="p" variant="heroSecondary">
        En este tiempo de la pandemia año 2020 comienza surgir la idea de que
        faltaba un sector de la población al cual no habíamos mirado todavía y
        es la población con problemas de adicciones, entonces se pensó en el
        programa Red Terapéutica Pastoral Efata, la cual está iniciando como
        programa que quiere ayudar en la prevención, tratamiento desde el
        proceso ambulatorio como internación interviniendo al usuario desde su
        sanación, curación, aceptación y transformación de sus adicciones tanto
        de consumo como emocionales.
      </Text>
      <Text as="p" variant="heroSecondary">
        La creación de la Domus Alfarero, programa que busca hacer un trabajo de
        prevención a través del arte y del aprendizaje que permite ocupar el
        tiempo libre en actividades formativas y educativas. Este programa se
        desarrolla en nuestra sede ubicada en Duitama - Boyacá en la Calle 14B #
        34 - 08 Barrio El Paraiso
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
