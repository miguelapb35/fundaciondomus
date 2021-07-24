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
    altText: 'ADVICE AND CONSULTANCY',
    title: 'ADVICE AND CONSULTANCY',
    text:
      'Comprehensive psychological services, social work, nutrition, occupational therapy, medicine, nursing, addiction therapy, legal advice.',
  },
  {
    id: 2,
    imgSrc: Support,
    altText: 'EDUCATION',
    title: 'EDUCATION',
    text:
      'trainings, diplomas, workshops, forums, conferences aimed at companies, associations, schools, universities, territorial entities and other organizations that require our services in prevention and treatment of the use of psychoactive substances and emotional addictions.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'CARE',
    title: 'CARE',
    text:
      'Care for the elderly, pregnant mother, school support, vulnerable population and treatment for addictions of consumption such as emotional, ambulatory and hospitalization, as required.',
  },
  {
    id: 4,
    imgSrc: Partnership,
    altText: 'WARDROBE',
    title: 'WARDROBE',
    text:
      'sale of used clothing in good condition.',
  },
  {
    id: 5,
    imgSrc: Subscription,
    altText: 'COMMUNITY DINING ROOM',
    title: 'COMMUNITY DINING ROOM',
    text:
      'Care to vulnerable population providing 150 daily breakfasts.',
  },
  {
    id: 6,
    imgSrc: Performance,
    altText: 'SPIRITUAL RETREAT',
    title: 'SPIRITUAL RETREAT',
    text:
      'Every month there is a spiritual experience in which you meet your SELF and begin to have the conscience to understand and forgive yourself.',
  },
  {
    id: 7,
    imgSrc: Subscription,
    altText: 'HOUSE OF COEXISTENCES',
    title: 'HOUSE OF COEXISTENCES',
    text:
      'We offer a beautiful space for coexistence of parish groups, religious communities, young people, scouts and all those who want a spirit-mind-body-God connection.',
  },
];

export default function ServiciosEnglish() {
  return (
    <section id='servicios' sx={{ variant: 'section.feature' }}>
      <Container>
        <SectionHeader 
          slogan='Domus Colombia Foundation'
          title='Services'
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
