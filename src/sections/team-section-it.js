/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import TeamCard from "components/team-card";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

import Member1 from "assets/team/5-san-gabriel-web.png";
import Member2 from "assets/team/3-santa-rosa-web.png";
import Member3 from "assets/team/4-pippo-web.png";
import Member4 from "assets/team/2-esperanza-web.png";
import Member5 from "assets/team/alfarero.jpg";
import Member6 from "assets/logo-efata-pastoral.png";

const data = [
  {
    id: 1,
    imgSrc: Member1,
    altText: "San Gabriel",
    title: "San Gabriel",
  },
  {
    id: 2,
    imgSrc: Member2,
    altText: "Santa Rosa",
    title: "Santa Rosa",
  },
  {
    id: 3,
    imgSrc: Member3,
    altText: "Pippo",
    title: "Pippo",
  },
  {
    id: 4,
    imgSrc: Member4,
    altText: "Esperanza",
    title: "Esperanza",
  },
  {
    id: 5,
    imgSrc: Member5,
    altText: "Alfarero",
    title: "Alfarero",
  },
  {
    id: 6,
    imgSrc: Member6,
    altText: "EFATA",
    title: "EFATA",
  },
];

export default function TeamSection() {
  return (
    <section>
      <Container>
        <SectionHeader slogan="Fondazione Domus Colombia" title="PROGRAMMI" />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <TeamCard
              key={item.id}
              src={item.imgSrc}
              altText={item.altText}
              title={item.title}
              designation={item.designation}
              social={item.socialProfile}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ["35px 0px", null, 0, null, null, "30px 35px"],
    gridTemplateColumns: [
      "repeat(2,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(3,1fr)",
    ],
  },
};
