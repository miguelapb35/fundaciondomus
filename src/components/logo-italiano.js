/** @jsx jsx */
import { jsx, Image } from "theme-ui";
import { Link } from "components/link";

export default function LogoItaly({ src, ...rest }) {
  return (
    <Link
      path="/italiano"
      sx={{
        variant: "links.logo",
        display: "flex",
        cursor: "pointer",
        mr: 15,
        width: "66px",
        height: "50px",
      }}
      {...rest}
    >
      <Image src={src} alt="italian translation" sx={{ borderRadius: "5px" }} />
    </Link>
  );
}
