import { makeStyles, Paper, Typography } from "@material-ui/core";
import ListComponent from "./ListComponent";
const Presentation = () => {
  const classes = useStyles();
  return (
    <Paper
      variant='outlined'
      square
      elevation={0}
      className={classes.presentation}
    >
      <Typography variant='h5'>Componentes exclusivo para PC's</Typography>
      <ListComponent />
    </Paper>
  );
};

export default Presentation;

const useStyles = makeStyles((theme) => ({
  presentation: {
    width: "inherit",
    height: "auto",
    padding: theme.spacing(2),
  },
}));
