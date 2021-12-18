import { Box, Switch, Typography } from "@material-ui/core";
import { useHeaderStyles } from "./styles";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { darkModeToggled, toggleDarkMode } from "../../store/darkMode";
import { store } from "../../store";

const Header = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useAppDispatch();
  const classes = useHeaderStyles();

  const isDarkMode = useAppSelector((state) => state.entities.darkMode);

  return (
    <Box className={classes.root} display="flex" justifyContent="space-between">
      <Typography className={classes.headline} variant="h4">
        devjobs
      </Typography>
      <Box display="flex" alignItems="center">
        <WbSunnyIcon />
        <Switch
          color="primary"
          onChange={({ target }) =>
            store.dispatch(darkModeToggled({ isDarkMode: target.checked }))
          }
          value={isDarkMode}
        />
        <DarkModeIcon />
      </Box>
    </Box>
  );
};

export default Header;
