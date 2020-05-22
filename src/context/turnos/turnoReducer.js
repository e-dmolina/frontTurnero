import { OBTENER_TURNOS, AGREGAR_TURNO, ELIMINAR_TURNO, OBTENER_TURNOS_X_FECHA } from '../../types'

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
                turnos: [...state, action.payload]
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
        default:
            return state
    }
}