/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';

const data = [
  {
    id: 1,
    altText: 'ONE-TIME DONATION',
    title: 'ONE-TIME DONATION',
    text:
      'Help us to help with a Domus donation, so you will build with us more harmonious environments for our vulnerable population.',
  },
  {
    id: 2,
    altText: 'MONTHLY DONATION',
    title: 'MONTHLY DONATION',
    text:
      'With your Monthly Domus donation, you will contribute to give more smiles to our seniors, children, youth and the entire population that needs us today.',
  },
  {
    id: 3,
    altText: 'CORPORATE DONATION',
    title: 'CORPORATE DONATION',
    text:
      'Make a strategic alliance with us, planning work areas where mutual benefit prevails in our agreements, and thus fulfill our social responsibility.',
  },
  {
    id: 4,
    altText: 'MEMORIAL DONATION',
    title: 'MEMORIAL DONATION',
    text:
      'With the purchase of one of our souvenirs, you are supporting our different programs where we impact vulnerable populations.',
  }
];

export default function DonacionesEnglish() {
  return (
    <section id='donaciones' sx={{ variant: 'section.feature' }}>
      <Container>
        <SectionHeader 
          slogan='Domus Colombia Foundation'
          title='Donations'
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
