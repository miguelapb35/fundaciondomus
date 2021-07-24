/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Text, Image } from 'theme-ui';
import BannerImg from 'assets/voluntariado/voluntariado.png';
import SectionHeader from '../components/section-header';
import VoluntariosCardEnglish from './voluntarios-carousel-en';

export default function VoluntariadoSectionEnglish() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id='voluntariado' >
      <Container sx={styles.container}>
        <SectionHeader
          slogan='Domus Voluntariado'
          title='Volunteer'
        />
        <Box sx={styles.imageBox}>
          <Image src={BannerImg} alt='banner' />
        </Box>           
        <Text as='p' variant='heroSecondary'>
          Volunteering is an expression of organized solidarity that implies commitment to existing needs and collective goals. Under the Koinonia Juan Pablo II project, we promote and facilitate volunteer activities in the different programs we have, joining hands that want to help regardless of the work at different times and places, in this way we find an opportunity to serve others. Some of these programs are: Comedor San Jose, Comedor San Victorino, Health Brigades, Social Wardrobe and Workshops for the elderly.
        </Text>
        <VoluntariosCardEnglish />
        <Text as='p' variant='heroSecondary'>
          The main objective is to promote health and disease prevention to the vulnerable population in remote and hard-to-reach places. Together with a group of health professionals (doctors, psychologists, therapists, dentists, among others) the basic service is provided, contributing to the improvement of people's quality of life. Likewise, it includes counseling in family planning, workshops on oral hygiene, caring for the environment, personal hygiene and recreation.
        </Text>        
      </Container>
    </section>
  );
}

const styles = {
  container: {
    minHeight: 'inherit',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },  
  imageBox: {
      justifyContent: 'center',
      textAlign: 'center',
      display: 'inline-flex',
      mb: [0, null, -6, null, null, '-40px', null, -3],
    img: {
      justifyContent: 'center',
      textAlign: 'center',      
      position: 'relative',
      borderRadius: '15px',
      height: [245, 'auto'],
      marginBottom: '70px',
    }
  },
  title: {
    justifyContent: 'center',
    textAlign: 'center',
    pt: ['40px', '45px', '55px', '70px', null, null, '80px', '15px'],
  },
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
