import { makeStyles } from "@material-ui/core";
import mobile from "../../assets/mobile/bg-pattern-header.svg";
import tablet from "../../assets/tablet/bg-pattern-header.svg";
import desktop from "../../assets/desktop/bg-pattern-header.svg";

export const useHeaderStyles = makeStyles((theme) => ({
  root: {
    padding: "32px 24px",
    backgroundImage: `url(${mobile})`,
    [theme.breakpoints.up("sm")]: {
      backgroundImage: `url(${tablet})`,
    },
    [theme.breakpoints.up("md")]: {
      padding: "45px 165px 85px",
      backgroundImage: `url(${desktop})`,
    },
  },
  headline: {
    fontWeight: "bold",
  },
}));
