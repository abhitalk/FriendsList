import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';



function AppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="xl">
        <Toolbar disableGutters={true}>
        </Toolbar>
      </Container>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'white'
  },
  logo: {
    width: '100px'
  }
}));

export default AppBar;