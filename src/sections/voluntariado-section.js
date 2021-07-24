/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Text, Image } from 'theme-ui';
import BannerImg from 'assets/voluntariado/voluntariado.png';
import SectionHeader from '../components/section-header';
import VoluntariosCard from './voluntarios-carousel';

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id='voluntariado' >
      <Container sx={styles.container}>
        <SectionHeader
          slogan='Domus Voluntariado'
          title='Voluntariado'
        />
        <Box sx={styles.imageBox}>
          <Image src={BannerImg} alt='banner' />
        </Box>           
        <Text as='p' variant='heroSecondary'>
          El Voluntariado es una expresión de solidaridad organizada que implica compromiso con las necesidades existentes y los objetivos colectivos. Bajo el proyecto Koinonia Juan Pablo II, Promovemos y facilitamos actividades de voluntariado en los diferentes programas que tenemos, uniendo manos que quieren ayudar sin importar la labor en horarios y lugares diferentes, de esta manera encontramos una oportunidad de servir a otros. Algunos de estos programas son: Comedor San Jose, Comedor San Victorino, Brigadas de salud, Ropero social y Talleres para adulto mayor.
        </Text>
        <VoluntariosCard />
        <Text as='p' variant='heroSecondary'>
          El objetivo principal es promocionar la salud y prevención de enfermedades a la población vulnerable en lugares apartados y de difícil acceso. Junto con un grupo de profesionales de la salud (médicos, psicólogos, terapeutas, odontólogos, entre otros) se presta el servicio básico, aportando en el mejoramiento de la calidad de vida de las personas. De igual manera se incluye asesorías en planificación familiar, talleres de higiene oral, cuidado del medio ambiente, higiene personal y recreación.
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
