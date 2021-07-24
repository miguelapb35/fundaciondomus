/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Heading, Box, Text, Image, Grid } from "theme-ui";
import BannerImg from "assets/about/img-header.png";

export default function MoreHistoryEnglish() {
  return (
    // <section sx={{ variant: 'section.keyFeature' }} id='feature' ></section>
    <Container sx={styles.container}>
      <Text as="p" variant="heroSecondary">
        In 2013 the idea arose to give another response to another group of
        people who were mothers who were in danger of having an abortion due to
        different situations and we named that program that was created in the
        neighborhood of Rio de Mosquera Domus Esperanza because life is hope and
        pregnant women in vulnerable situations are housed there. We keep
        dreaming always trying to be a concrete response on how to build peace
        through the care of life and in 2016 the Domus Santa Rosa program was
        created, dedicated to protecting elderly people in situations of
        abandonment and / or vulnerability and it was created then a structure
        for this purpose where we have 10 grandmothers in our permanent care.
      </Text>
      <Text as="p" variant="heroSecondary">
        In 2017 the idea arose to do a program for the northern sector in Suba
        and we created Domus Pippo to help mothers who are heads of households
        with school support since their work left the children very alone and in
        Domus Pippo they are welcomed and helped out with tasks, school
        reinforcement, psychological monitoring for both the child and the
        family .
      </Text>
      <Text as="p" variant="heroSecondary">
        At this time of the pandemic in 2020, the idea began to emerge that a
        sector of the population was missing that we had not yet looked at and
        that is the population with addiction problems, so the Therapeutic
        Network program was considered Pastoral Efata, which is starting as a
        program that wants to help in prevention, treatment from the process
        outpatient as well as hospitalization, intervening with the user from
        their healing, acceptance and transformation of both consumer and
        emotional addictions.
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
