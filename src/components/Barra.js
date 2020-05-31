import React, { useContext, useEffect } from 'react'
import AuthContext from '../context/autenticacion/authContext'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Barra = () => {

    const classes = useStyles();

    // Extraer la información de autenticación
    const authContext = useContext(AuthContext)
    const { usuario, usuarioAutenticado, cerrarSesion } = authContext

    useEffect(() => {
        usuarioAutenticado()
        // eslint-disable-next-line
    }, [])

    return (

        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    {/* validación para lo que tarde en ejecutarse el useEffect */}
                    {
                        usuario
                        &&
                        <Typography variant="h6" className={classes.title}>
                            Hola <span>{usuario.nombre}!</span>
                        </Typography>
                    }


                    <Button color="inherit" onClick={() => cerrarSesion()}>
                        Salir
                        <ExitToAppIcon/>
                        </Button>
                </Toolbar>
            </AppBar>
        </div>

        // <header className="app-header">
        //     {/* validación para lo que tarde en ejecutarse el useEffect */}
        //     {
        //         usuario
        //         &&
        //         <p className="nombre-usuario">
        //             Hola <span>{usuario.nombre}</span>
        //         </p>
        //     }

        //     <nav className="nav-principal">
        //         <button
        //             className="btn btn-blank cerrar-sesion"
        //             onClick={() => cerrarSesion()}
        //         >
        //             Cerrar sesión
        //         </button>
        //     </nav>
        // </header>
    )
}

export default Barra
