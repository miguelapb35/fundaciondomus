/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Performance from 'assets/feature/performance.svg';
import Partnership from 'assets/feature/partnership.svg';
import Subscription from 'assets/feature/subscription.svg';
import Support from 'assets/feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc:  Support,
    altText: 'ASESORIAS Y CONSULTORIAS',
    title: 'ASESORIAS Y CONSULTORIAS',
    text:
      'Servicios integrales psicológica, trabajo social, nutrición, terapia ocupacional, medicina, enfermería, terapia de adicciones, asesorías jurídicas.',
  },
  {
    id: 2,
    imgSrc: Support,
    altText: 'EDUCACIÓN',
    title: 'EDUCACIÓN',
    text:
      'capacitaciones, diplomados, talleres, foros, conferencias dirigidas a empresas, asociaciones, colegios, universidades, entidades territoriales y demás organizaciones que requieran de nuestros servicios en prevención y tratamiento al consumo de sustancias psicoactivas y adicciones emocionales.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'ATENCIÓN',
    title: 'ATENCIÓN',
    text:
      'al adulto mayor, madre gestante, apoyo escolar, población vulnerable y tratamiento a adiciones de consumo como emocionales, ambulatorias e internación, según se requiera.',
  },
  {
    id: 4,
    imgSrc: Partnership,
    altText: 'ROPERO',
    title: 'ROPERO',
    text:
      'venta de ropa usada en buen estado.',
  },
  {
    id: 5,
    imgSrc: Subscription,
    altText: 'COMEDOR COMUNITARIO',
    title: 'COMEDOR COMUNITARIO',
    text:
      'Atención a población vulnerable brindando 150 desayunos diarios.',
  },
  {
    id: 6,
    imgSrc: Performance,
    altText: 'EXPERIENCIA ESPIRITUAL',
    title: 'EXPERIENCIA ESPIRITUAL',
    text:
      'Cada mes se realiza una experiencia espiritual en la cual te encuentras con tu YO y empiezas a tener la conciencia para entenderte y perdonarte.',
  },
  {
    id: 7,
    imgSrc: Subscription,
    altText: 'CASA DE CONVIVENCIAS',
    title: 'CASA DE CONVIVENCIAS',
    text:
      'Ofrecemos un hermoso espacio para convivencias de grupos parroquiales, comunidades religiosas, jóvenes, scout y todos aquellos que quieran una conexión espíritu-mente-cuerpo-Dios.',
  },
];

export default function Servicios() {
  return (
    <section id='servicios' sx={{ variant: 'section.feature' }}>
      <Container>
        <SectionHeader 
          slogan='Fundación Domus Colombia'
          title='Servicios'
        />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
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
