import { makeStyles, Paper} from "@material-ui/core";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import tileData from "./tileData";

const ActivitySlider = () => {
  const classes = useStyles();
  return (
    <Paper variant='outlined' square elevation={0} className={classes.root}>
      <div className={classes.slider}>
        <GridList cellHeight={220} className={classes.gridList}>
          {tileData.map((tile) => (
            <GridListTile key={tile.img} >
              <img src={tile.img} alt={tile.title}  />
              <GridListTileBar title={tile.title} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </Paper>
  );
};

export default ActivitySlider;

const useStyles = makeStyles((theme) => ({
  root: {
    height: "auto",
  },
   slider: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1000,
    height: 550,
    "&::-webkit-scrollbar": {
      display: "none",
    },
  }, 
}));
