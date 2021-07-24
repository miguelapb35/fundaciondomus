/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';

const data = [
  {
    id: 1,
    altText: 'We are a Colombian organization',
    title: 'We are a Colombian organization',
    text:
      'We are a non-profit organization, created by a group of professionals motivated by the desire to help eradicate poverty in the vulnerable population, such as: Children, young people, elders and pregnant mothers and treatment to both substances and emotional addictions',
  },
  {
    id: 2,
    altText: 'MISSION',
    title: 'MISSION',
    text:
      'The DOMUS COLOMBIA FOUNDATION is a non-profit organization, whose primary objective is to contribute to the eradication of poverty in the most vulnerable areas of the country, having as fundamental pillars the transcendence of the human being, education, culture and the protection of the environment.',
  },
  {
    id: 3,
    altText: 'VISION',
    title: 'VISION',
    text:
      'The DOMUS COLOMBIA FOUNDATION will be by 2025, an entity positioned at a national and international level, reliable, solid, generating important changes in the different sectors where it is called to develop its social purpose.',
  },
  {
    id: 4,
    altText: 'BOARD OF DIRECTORS',
    title: 'BOARD OF DIRECTORS',
    text:
      'P. JORGE ELIÉCER ARIAS - PRESIDENTE',
  },
];

export default function FeatureEnglish() {
  return (
    <section id='quienes-somos' sx={{ variant: 'section.feature' }}>
      <Container>
        <SectionHeader 
          slogan='Domus Colombia Foundation '
          title='About us'
        />
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
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
