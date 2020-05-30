import React, { useState, useContext, useEffect } from 'react'
import TableMaterial from './TableMaterial'
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import Barra from './Barra';
import AuthContext from '../context/autenticacion/authContext'
import TurnoContext from '../context/turnos/turnoContext'
import { LoopCircleLoading } from 'react-loadingg'

const Home = (props) => {

    // Extraer la información de autenticación
    const authContext = useContext(AuthContext)
    const { usuarioAutenticado, usuario } = authContext

    const turnoContext = useContext(TurnoContext)
    const { turnos, obtenerTurnos, turnosParaHoy, turnosResto } = turnoContext

    // State
    const [disabled, setDisabled] = useState(false)

    useEffect(() => {
        if (usuario) {
            usuarioAutenticado()
        }
        obtenerTurnos()
        // eslint-disable-next-line
    }, [])

    const onClick = () => {
        if (turnos.length >= 1 && usuario.rol !== 'Admin') {
            setDisabled(true)
            setTimeout(() => {
                setDisabled(false)
            }, 3000)
        } else {
            // window.location.href = '/turnero'
            props.history.push('/turnero')
        }
    }



    if (turnos) {
        return (
            <div className='mt-3'>

                <Barra />

                <TableMaterial
                    titulos={["Mis turnos agendados para hoy"]}
                    turnosDisponibles={turnosParaHoy}
                />

                <TableMaterial
                    titulos={["Mis próximos turnos agendados"]}
                    turnosDisponibles={turnosResto}
                />

                <div className='mt-5 d-flex justify-content-center'>

                    <Button variant="contained" color="primary" onClick={onClick} disabled={disabled}>
                        Agregar Turno
                            </Button>
                </div>
                {
                    disabled
                    &&
                    <div className='mt-5 d-flex justify-content-center'>
                        <Alert severity="warning">No puedes agendar mas de 1 turno</Alert>
                    </div>
                }
            </div>
        )
    } else {
        return <LoopCircleLoading />
    }

}

export default Home
