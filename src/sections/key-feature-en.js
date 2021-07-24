/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Heading, Box, Text, Image } from 'theme-ui';
import BannerImg from 'assets/logo-efata-pastoral.png';
import SectionHeader from '../components/section-header';

export default function KeyFeatureEnglish() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id='efata' >
      <Container sx={styles.container}>
        <SectionHeader
          slogan='DOMUS FOUNDATION'
          title='¡ NEEDS YOU !'
        />
        <Text as='p' variant='heroSecondary'>
          The Domus Colombia Foundation offers the EFATA therapeutic program,
          as an alternative treatment and rehabilitation of addictions,
          with a bio-psycho-spiritual model; offering its service with
          professionalism, ethics and commitment to the service of life.
        </Text>
        <Box sx={styles.imageBox}>
          <Image src={BannerImg} alt='banner' />
        </Box>        
        <Heading as='h1' variant='heroPrimary' sx={styles.title}>
          BANCOLOMBIA SAVINGS ACCOUNT 05362574288
        </Heading>        
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
    }
  },
  title: {
    justifyContent: 'center',
    textAlign: 'center',
    pt: ['40px', '45px', '55px', '70px', null, null, '80px', '15px'],
  },
};
