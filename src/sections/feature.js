/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';

const data = [
  {
    id: 1,
    altText: 'Somos una organización colombiana',
    title: 'Somos una organización colombiana',
    text:
      'sin ánimo de lucro, creada por un grupo de profesionales animados por el deseo de ayudar a erradicar la pobreza de la población vulnerable como: Niños, jóvenes, adultos mayores, madres cabezas de hogar, mujeres en gestación y tratamiento de adicciones tanto de consumo como emocionales.',
  },
  {
    id: 2,
    altText: 'MISIÓN',
    title: 'MISIÓN',
    text:
      'La FUNDACIÓN DOMUS COLOMBIA es una entidad sin ánimo de lucro, cuyo objetivo primordial es contribuir a la erradicación de la pobreza en las franjas más vulnerables del país, teniendo como pilares fundamentales la trascendencia del ser humano, la educación, la cultura y la protección del medio ambiente.',
  },
  {
    id: 3,
    altText: 'VISIÓN',
    title: 'VISIÓN',
    text:
      'La FUNDACIÓN DOMUS COLOMBIA será para el 2025, una entidad posicionada a nivel nacional e internacional, confiable, sólida, generadora de importantes cambios en los diferentes sectores donde está llamada a desarrollar su objeto social.',
  },
  {
    id: 4,
    altText: 'JUNTA DIRECTIVA',
    title: 'JUNTA DIRECTIVA',
    text:
      'P. JORGE ELIÉCER ARIAS - PRESIDENTE; GUSTAVO ESCOBAR - VICEPRESIDENTE; KELLY GONZÁLEZ - SECRETARIA',
  },
];

export default function Feature() {
  return (
    <section id='quienes-somos' sx={{ variant: 'section.feature' }}>
      <Container>
        <SectionHeader 
          slogan='Fundación Domus Colombia'
          title='Quiénes Somos'
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
