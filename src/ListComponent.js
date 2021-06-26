import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import data from "./listData";
import ActivitySlider from "./ActivitySlider";

export default function ListComponent() {
  const classes = useStyles();

  return (
    <div className={classes.gridRoot}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <List
            component='nav'
            aria-labelledby='nested-list-subheader'
            subheader={
              <ListSubheader component='div' id='nested-list-subheader'>
               Presentamos los beneficios  de la empresa:        
             </ListSubheader>
            }
            className={classes.listRoot}
          >
            {data.map((item) => (
              <ListItem key={item.text}>
                <ListItemIcon className={classes.icon}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} md={6}>
          <ActivitySlider />
        </Grid>
      </Grid>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  gridRoot: {
    flexGrow: 1,
  },
  listRoot: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  icon: {
    color: "#1769aa",
  },
}));
