/** @jsx jsx */
import { jsx, Box, Container, Image, Text } from "theme-ui";
import { Link } from "components/link";
import data from "./footer.data";
import FooterLogo from "assets/logo.svg";
import Logo from "components/logo";
import LogoDark from "assets/logo.png";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  return (
    <footer sx={styles.footer}>
      <Box sx={styles.footer.footerBottomArea}>
        <Text sx={styles.footer.copyright}>FUNDACIÓN DOMUS COLOMBIA</Text>
        <Text sx={styles.footer.copyright}>CRA. 56 # 17-44 Puente Aranda</Text>
        <Text sx={styles.footer.copyright}>
          Bogotá – Colombia (+571) 702 5068
        </Text>
        <Text sx={styles.footer.copyright}>WhatsApp 321 949 92 71</Text>
        <Text sx={styles.footer.copyright}>recepcion@domuscolombia.org</Text>
      </Box>
    </footer>
  );
}

const styles = {
  footer: {
    footerBottomArea: {
      borderTop: "1px solid",
      borderTopColor: "border_color",
      display: "flex",
      pt: [7, null, 8],
      pb: ["40px", null, "100px"],
      textAlign: "center",
      flexDirection: "column",
    },
    menus: {
      mt: [3, 4],
      mb: 2,
      nav: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      },
    },

    link: {
      fontSize: [1, "15px"],
      color: "text",
      fontWeight: "400",
      mb: 2,
      cursor: "pointer",
      transition: "all 0.35s",
      display: "block",
      textDecoration: "none",
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
      ":hover": {
        color: "primary",
      },
    },
    copyright: {
      fontSize: [1, "15px"],
      width: "100%",
    },
  },
};
