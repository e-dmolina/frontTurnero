import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import deLocale from "date-fns/locale/es";
import moment from 'moment'
import { TableContainer, Paper, Table, TableCell, withStyles, TableRow, TableHead, TableBody, Button } from '@material-ui/core';
import Swal from 'sweetalert2';
import TurnoContext from '../context/turnos/turnoContext'
import AuthContext from '../context/autenticacion/authContext'
import { Link } from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';
import { LoopCircleLoading } from 'react-loadingg';


const Turnero = () => {

    const StyledTableCell = withStyles(theme => ({
        head: {
            backgroundColor: '#3f51b5',
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
    }))(TableCell);

    const StyledTableRow = withStyles(theme => ({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.background.default,
            },
        },
    }))(TableRow);

    // Obtener el state del context
    const turnoContext = useContext(TurnoContext)
    const { agregarTurno,
            obtenerHorasDisponibles,
            turnosDisponibles, 
            turnos, 
            cambiarHorarioAtencion,
            cargandoTurnos } = turnoContext

    // Extraer la información de autenticación
    const authContext = useContext(AuthContext)
    const { usuario } = authContext

    // State
    const [fechaCalendario, setFechaCalendario] = useState(new Date())
    const [fechaSeleccionada, setfechaSeleccionada] = useState(moment(new Date()).format('DD-MM-YYYY'))
    const [disabled, setDisabled] = useState(false)


    useEffect(() => {
        cambiarHorarioAtencion(moment(fechaCalendario).day())
        obtenerHorasDisponibles(fechaSeleccionada)
        // eslint-disable-next-line
    }, [fechaCalendario, turnos])


    const history = useHistory()

    const onChange = async date => {

        if (moment(date).day() === 0 || moment(date).day() === 1) {
            Swal.fire(
                'Los días Domingo y Lunes no atendemos',
                'Por favor seleccione otra fecha',
                'info'
              )
            return
        }
        let dateFormated = moment(date).format('DD-MM-YYYY')
        setfechaSeleccionada(dateFormated)
        setFechaCalendario(date)
        // Hace una consulta para traer los turnos ocupados en la fecha seleccionada
        // para ello cuando cambia fechaCalendario se ejecuta obtenerOcupados() en el useEffect
    }

    const onClickTurno = hora => {
        if (turnos.length >= 1 && usuario.rol !== 'Admin') {
            setDisabled(true)
            return
        }
        const turno = { fecha: fechaSeleccionada, hora: hora }

        Swal.fire({
            title: 'Atención!',
            text: `Vas a agendar un turno para el día ${turno.fecha} a las ${turno.hora} hs`,
            type: 'info',
            showConfirmButton: true,
            confirmButtonText: 'Confirmar',
            showCancelButton: true,
            cancelButtonText: 'Cancelar'
        }).then(resp => {
            if (resp.value) {
                agregarTurno(turno)
                console.log('turno creado')
                history.push('/home')
                Swal.fire({
                    title: 'Turno agendado con éxito!',
                    text: `Has agendado un turno para el día ${turno.fecha} a las ${turno.hora} hs`,
                    type: 'info'
                })
            }
        });
    }

    if (cargandoTurnos) {
        return <LoopCircleLoading />
    } else {
        return (
            <div className="container">
    
                <h1 style={{ color: 'black' }} align="center">Turnero</h1>
    
                <div className='mb-3' align="center" style={{ backgroundColor: 'white' }}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={deLocale}>
                        <KeyboardDatePicker
                            margin="normal"
                            id="date-picker-dialog"
                            label="Fecha de Turno"
                            format="dd/MM/yyyy"
                            value={fechaCalendario}
                            minDate={moment(new Date()).format('YYYY/MM/DD')}
                            maxDate={moment().day(14)}
                            onChange={onChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                </div>
    
                {
                    turnosDisponibles.length === 0
                        ?
                        <div className="alert alert-danger">
                            <h5>No quedan tunos disponibles para el dia  {fechaSeleccionada}</h5>
                        </div>
                        :
                        <div>
                            <TableContainer component={Paper}>
                                <Table aria-label="customized table">
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell
                                                align="center"
                                            >
                                                Turnos Disponibles para el dia {fechaSeleccionada}
                                            </StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {turnosDisponibles.map((td, i) => (
                                            // valida que no esten disponibles los turnos iguales y anteriores a la hora actual
                                            (td.split(':')[0] > new Date().getHours() || fechaSeleccionada !== moment(new Date()).format('DD-MM-YYYY')) && 
                                            <StyledTableRow key={i}>
                                                {console.log(fechaSeleccionada !== moment(new Date()).format('DD-MM-YYYY'))}
                                                <StyledTableCell component="th" scope="row" align="center" onClick={() => onClickTurno(td)}>
                                                    {td}
                                                </StyledTableCell>
                                            </StyledTableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
    
                }
                {
                    disabled
                    &&
                    <div className='mt-5 d-flex justify-content-center'>
                        <Alert severity="warning">No puedes agendar mas de 1 turno</Alert>
                    </div>
                }
                <div className='mt-5 d-flex justify-content-center'>
                    <Button variant="contained" color="primary">
                        <Link style={{ color: 'white' }} to='/home'>Volver</Link>
                    </Button>
                </div>
            </div>
        )
    }
}

export default Turnero
