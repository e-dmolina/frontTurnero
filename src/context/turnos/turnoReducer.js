import { OBTENER_TURNOS, AGREGAR_TURNO, ELIMINAR_TURNO, OBTENER_TURNOS_X_FECHA, CAMBIAR_HORARIO_X_DIA } from '../../types'

export default (state, action) => {
    switch (action.type) {
        case OBTENER_TURNOS:
            return {
                ...state,
                turnos: action.payload
            }
        case AGREGAR_TURNO:
            return {
                ...state,
                turnos: [...state.turnos, action.payload]
            }
        case ELIMINAR_TURNO:
            return {
                ...state,
                turnos: state.turnos.filter( turno => turno._id !== action.payload)
            }
        case OBTENER_TURNOS_X_FECHA:
            return {
                ...state,
                turnosDisponibles: state.horarioDeAtencion.filter(t => action.payload.indexOf(t) === -1)
            }
        case CAMBIAR_HORARIO_X_DIA:
            if (action.payload === 2 || action.payload === 5) { //martes y viernes
                return {
                    ...state,
                    horarioDeAtencion: ['09:00', '10:00', '11:00','12:00', '13:00']
                }
            } else if (action.payload === 4 || action.payload === 6) { //jueves y sabados
                return {
                    ...state,
                    horarioDeAtencion: ['16:00', '17:00', '18:00', '19:00', '20:00']
                }
            } else if (action.payload === 3) { //miercoles
                return {
                    ...state,
                    horarioDeAtencion: ['13:00', '14:00', '15:00', '16:00', '17:00', '18:00']
                }
            }
        default:
            return state
    }
}