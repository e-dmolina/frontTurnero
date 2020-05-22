import React, { useReducer } from 'react'
import turnoContext from './turnoContext'
import turnoReducer from './turnoReducer'
import { OBTENER_TURNOS, AGREGAR_TURNO, ELIMINAR_TURNO, OBTENER_TURNOS_X_FECHA } from '../../types'
import clienteAxios from '../../config/axios'

const TurnoState = props => {

    const initialState = {
        turnos: [],
        turnosDisponibles: [],
        horarioDeAtencion: ['18:00', '18:30', '19:00', '19:30', '20:00']
    }

    // Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(turnoReducer, initialState)

    // Funciones para el CRUD de Turnos
    // getMisTurnos
    const obtenerTurnos = async () => {
        try {
            const response = await clienteAxios.get('/api/turnos')
            dispatch({
                type: OBTENER_TURNOS,
                payload: response.data
            })
        } catch (error) {
            console.log(error)
        }
    }

    // Obtener horasDisponibles por fecha
    const obtenerHorasDisponibles = async fecha => {
        try {
            // Trae las horas ocupadas de la fecha
            const respuesta = await clienteAxios.get(`api/turnos/fecha/${fecha}`)
            const aux = []
            await respuesta.data.map(t => aux.push(t.hora))
            dispatch({
                type: OBTENER_TURNOS_X_FECHA,
                payload: aux
            })
        } catch (error) {
            console.log(error)
        }
    }

    // Agregar Turno
    const agregarTurno = async turno => {
        try {
            const resultado = await clienteAxios.post('/api/turnos', turno)
            // Insertar el turno en el state
            dispatch({
                type: AGREGAR_TURNO,
                payload: resultado.data
            })
        } catch (error) {
            console.log(error)
        }
    }

    // Eliminar un Turno
    const eliminarTurno = async turnoId => {
        try {
            await clienteAxios.delete(`/api/turnos/${turnoId}`)
            dispatch({
                type: ELIMINAR_TURNO,
                payload: turnoId
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <turnoContext.Provider
            value={{
                turnos: state.turnos,
                horarioDeAtencion: state.horarioDeAtencion,
                turnosDisponibles: state.turnosDisponibles,
                obtenerTurnos,
                agregarTurno,
                eliminarTurno,
                obtenerHorasDisponibles
            }}
        >
            {props.children}
        </turnoContext.Provider>
    )
}

export default TurnoState