import {
  TextField,
  Button,
  makeStyles,
} from '@material-ui/core/'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: theme.spacing(3),    
  }
}));

const Register = () => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.wrapper}>
        <TextField label="Digite o nome" />
      </div>
      <div className={classes.wrapper}> 
        <TextField label="Digite o cargo" />
      </div>
      <div className={classes.wrapper}>
        <Button variant="contained" color="primary">
          Cadastrar
        </Button>
      </div>
    </>
  )
}

export default Register