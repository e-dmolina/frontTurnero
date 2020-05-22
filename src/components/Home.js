import React, { useState, useContext, useEffect } from 'react'
import TableMaterial from './TableMaterial'
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import Barra from './Barra';
import AuthContext from '../context/autenticacion/authContext'
import TurnoContext from '../context/turnos/turnoContext'


const Home = (props) => {


    // Extraer la información de autenticación
    const authContext = useContext(AuthContext)
    const { usuarioAutenticado } = authContext

    const turnoContext = useContext(TurnoContext)
    const { turnos, obtenerTurnos } = turnoContext

    // State
    const [disabled, setDisabled] = useState(false)

    useEffect(() => {
        usuarioAutenticado()
        obtenerTurnos()
        // eslint-disable-next-line
    }, [])

    const onClick = () => {
        if (turnos.length >= 2) {
            setDisabled(true)
            setTimeout(() => {
                setDisabled(false)
            }, 3000)
        } else {
            // window.location.href = '/turnero'
            props.history.push('/turnero')
        }
    }

    return (
        <div className='mt-3'>

            <Barra />

            <TableMaterial
                titulos={["Mis Turnos"]}
                turnosDisponibles={turnos}
            />

            <div className='mt-5 d-flex justify-content-center'>

                    <Button variant="contained" color="primary" onClick={onClick} disabled={disabled}>
                        {/* <Link style={{ color: 'white' }} to='/turnero'>Agregar Turno</Link> */}
                            Agregar Turno
                    </Button>
            </div>
            {
                    disabled
                    &&
                    <div className='mt-5 d-flex justify-content-center'>
                        <Alert severity="warning">No puedes tener mas de dos turnos agendados</Alert>
                    </div>
                }
        </div>
    )
}

export default Home
