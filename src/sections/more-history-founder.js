/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Heading, Text, Box } from 'theme-ui';


export default function moreHistoryFounder() {
  return (
    <Container sx={styles.container}>
      <Box sx={styles.contentBox}>
        <Heading as='h1' variant='heroPrimary'>
          FUNDADOR
        </Heading>
      </Box>

        <Text as='p' variant='heroSecondary'>
        El Padre Jorge Eliecer Arias nació el 4 de enero de 1966 en Hispania –Antioquia,
        en el seno de la familia conformada por Conrado Arias Y Gilma Toro de esa unión
        matrimonial de 57 años de matrimonio nacieron 10 hijos el padre Jorge ocupa el tercer lugar.
        </Text>
        <Text as='p' variant='heroSecondary'>
        Realizo sus estudios de primaria en la escuela de varones de Albán –Valle y sus estudios
        de bachillerato en el centro Vocacional Sperandeo Urrea. Itagüí –Antioquia. Es Bachiller
        filosófico de la Universidad pontifica San Juan de Letrán en Roma, Licenciado en teología
        de la universidad San Buenaventura de Bogotá- posteriormente estudio psicología en la
        universidad Antonio Nariño y realizo una maestría en reeducación en la fundación universitaria
        Luis amigo y una maestría en psicología en la universidad europea de Roma.
        </Text>
        <Text as='p' variant='heroSecondary'>
        Desde la fundación Domus Colombia estamos viviendo cada día este sueño de humanidad
        como ha querido el fundador, un sueño de humanidad
        comprometido en la construcción de la paz a través del cuidado de la vida en las
        diferentes etapas del desarrollo humano.
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
