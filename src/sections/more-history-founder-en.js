/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Heading, Text, Box } from 'theme-ui';


export default function moreHistoryFounderEnglish() {
  return (
    <Container sx={styles.container}>
      <Box sx={styles.contentBox}>
        <Heading as='h1' variant='heroPrimary'>
          FOUNDER
        </Heading>
      </Box>

        <Text as='p' variant='heroSecondary'>
        Father Jorge Eliecer Arias was born on January 4, 1966 in Hispania - Antioquia,
        within the family made up of Conrado Arias and Gilma Toro from that union of 57 years
        of marriage, 10 children were born, Father Jorge occupies third place.
        </Text>
        <Text as='p' variant='heroSecondary'>        
        He completed his primary studies at escuela de varones de Albán school and his high school studies
        at the Sperandeo Urrea Vocational Center. Itagüí –Antioquia. He is a Philosophical Bachelor
        from the Pontifical San Juan de Letrán University in Rome, a Bachelor of Theology from the
        San Buenaventura University in Bogotá- later he studied psychology at the Antonio Nariño
        University and did a master's degree in re-education at the Luis amigo university foundation
        and a master's degree in psychology at the European university of Rome.
        </Text>
        <Text as='p' variant='heroSecondary'>        
        From the Domus Colombia foundation we are living this dream of humanity every day
        as I have wanted since I started this dream as founder, a dream of humanity
        committed to building peace through the care of life in the
        different stages of human development
        </Text>
      </Container>
    
  );
}

const styles = {
  container: {
    minHeight: 'inherit',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: '50px',
  },
  contentBox: {
    width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
    mx: 'auto',
    textAlign: 'center',
    mb: ['40px', null, null, null, null, 7],
  },  
};
