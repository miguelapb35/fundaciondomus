/** @jsx jsx */
import React, { useState } from "react";
import { jsx } from "theme-ui";
import { Container, Grid, Box, Heading, Text } from "theme-ui";
import SectionHeader from "components/section-header";
import ReactModal from "react-modal";
import PatternBG from "assets/patternBG.png";
import ArrowOdd from "assets/arrowOdd.svg";
import ArrowEven from "assets/arrowEven.svg";

const data = [
  {
    id: 2010,
    title: "They open their first headquarters in Puente Aranda Bogotá",
    text:
      "The Domus Colombia Foundation was born on July 30, 2010, opening its first headquarters in the Puente Aranda neighborhood, which we call Domus San Gabriel, arises as a desire to give a concrete response to the various needs of people in vulnerable situations, said The structure begins as a center where we support children with school reinforcement, then a series of workshops were created, a social wardrobe and later we crystallized it in another work that is the dining rooms for street dwellers, abandoned grandparents and mothers head of home.",
  },
  {
    id: 2013,
    title: "Domus Esperanza is created in Mosquera.",
    text:
      "In 2013, the idea arose of giving another response to another group of people who were mothers who were in danger of having an abortion due to different situations and we named that program that was created in the neighborhood of Rio de Mosquera Domus Esperanza because life is hope and there are pregnant women in vulnerable situations",
  },
  {
    id: 2016,
    title: "The Domus Santa Rosa program is created.",
    text:
      "We keep dreaming always trying to be a concrete response how to build peace through the care of life and in 2016 the Domus Santa Rosa program was created, dedicated to protecting elderly people in situations of abandonment and / or vulnerability and it was created then a structure for this purpose where we have 10 grandmothers in our permanent care.",
  },
  {
    id: 2017,
    title: "The Domus Pippo Program begins",
    text:
      "In 2017, the idea arose to make a program for the northern sector in Suba and we created Domus Pippo to help mothers who are heads of households with school support since their work left the children very alone and from Domus Pippo they were They welcome and carry out with them all the accompaniment in tasks, school reinforcement, psychological monitoring for both the child and the family.",
  },
  {
    id: 2020,
    title:
      "The idea of ​​creating the Efata Therapeutic Pastoral Network program arises",
    text:
      "At this time of the pandemic in 2020, the idea began to emerge that a sector of the population was missing that we had not yet looked at and that is the population with addiction problems, so the Therapeutic Network program was considered Pastoral Efata, which is starting as a program that wants to help in prevention, treatment from the process outpatient as well as hospitalization, intervening with the user from their healing, acceptance and transformation of both consumer and emotional addictions.",
  },
];

ReactModal.setAppElement("#main");

export default function WorkFlowEnglish() {
  return (
    <section sx={styles.workflow}>
      <Container>
        <SectionHeader
          slogan="Domus Colombia Foundation"
          title="TIME LINE"
          isWhite={true}
        />
        <Grid sx={styles.grid} id="main">
          {data.map((item) => (
            <Box sx={styles.card} key={item.id}>
              <Box sx={styles.iconBox}> {`${item.id}`} </Box>
              <Box sx={styles.wrapper}>
                <Heading sx={styles.wrapper.title}>{item.title}</Heading>
                {/* <Text sx={styles.wrapper.subTitle} >
                    <div sx={styles.wrapper.paragraph} >
                      {item.text}
                    </div>
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
