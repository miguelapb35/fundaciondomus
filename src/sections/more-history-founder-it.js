/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Heading, Text, Box } from "theme-ui";

export default function moreHistoryFounder() {
  return (
    <Container sx={styles.container}>
      <Box sx={styles.contentBox}>
        <Heading as="h1" variant="heroPrimary">
          FONDATORE
        </Heading>
      </Box>

      <Text as="p" variant="heroSecondary">
        Il Padre Jorge Eliecer Arias è nato il 4 gennaio 1966 in
        Hispania-Antioquia, in una famiglia formata da Conrado Arias e Gilma
        Toro da quell'unione matrimoniale di 57 anni di matrimonio sono nati 10
        figli, di cui padre Jorge occupa il terzo posto.
      </Text>
      <Text as="p" variant="heroSecondary">
        Ha frequentato la scuola elementare presso l'istituto maschile di
        Albán-Valle e ha frequentato il liceo centro Vocazionale Sperandeo
        Urrea, Itagüi-Antioquia. Ha realizzato gli studi filosofici presso
        L'Università Pontificia San Giovanni in Laterano a Roma, Laureato in
        Teologia Nell'Università San Bonaventura di Bogotá- e successivamente ha
        studiato psicologia presso L'Università Antonio Nariño e realizzò un
        master in rieducazione presso la fondazione universitaria Luis amigo e
        un master in psicologia all'Università Europea di Roma.
      </Text>
      <Text as="p" variant="heroSecondary">
        "Dalla fondazione della Domus Colombia stiamo vivendo ogni giorno questo
        sogno di umanità come sempre l'ha voluto fin dall'inizio di questo sogno
        il fondatore, un sogno di umanità impegnato nella costruzione della pace
        attraverso la cura della vita nei diversi stadi dello sviluppo umanità."
      </Text>
    </Container>
  );
}

const styles = {
  container: {
    minHeight: "inherit",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: "50px",
  },
  contentBox: {
    width: ["100%", "90%", "535px", null, "57%", "60%", "68%", "60%"],
    mx: "auto",
    textAlign: "center",
    mb: ["40px", null, null, null, null, 7],
  },
};
