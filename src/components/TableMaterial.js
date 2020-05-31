import React, { Fragment, useContext } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Swal from 'sweetalert2';
import Paper from '@material-ui/core/Paper';
import TurnoContext from '../context/turnos/turnoContext'
import AuthContext from '../context/autenticacion/authContext'
import clienteAxios from '../config/axios'
import Alert from '@material-ui/lab/Alert';

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


const TableMaterial = ({ titulos, turnosDisponibles, dateFormated }) => {

    const turnocontext = useContext(TurnoContext)
    const { eliminarTurno } = turnocontext

    // Extraer la información de autenticación
    const authContext = useContext(AuthContext)
    const { usuario } = authContext

    const onClickTurno = t => {

        if (usuario.rol === 'Admin') {
            buscarUsuario(t)
            return
        }

        Swal.fire({
            title: 'Atención',
            text: `Estas seguro de eliminar el turno para el día ${t.fecha} a las ${t.hora} hs?`,
            icon: 'question',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
        }).then(resp => {
            if (resp.value) {
                eliminarTurno(t._id)
            }
        });
    }

    const buscarUsuario = async t => {
        const respuesta = await clienteAxios.get(`/api/usuarios/${t.cliente}`)
        Swal.fire({
            title: `<h5>Cliente: ${respuesta.data.nombre}</h5>`,
            html: `<p>Email: ${respuesta.data.email}</p><p><a href="https://wa.me/+54${respuesta.data.telefono}">Telefono: ${respuesta.data.telefono}</a></p><p>Desea eliminar el turno?</p>`,
            icon: 'question',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
        }).then(resp => {
            if (resp.value) {
                eliminarTurno(t._id)
            }
        });

    }

    return (
        <Fragment>
            <TableContainer component={Paper}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            {
                                titulos.map((t, i) => {
                                    return <StyledTableCell
                                        key={i}
                                        align="center"
                                    >
                                        {t} {dateFormated}
                                    </StyledTableCell>
                                })
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            turnosDisponibles.length > 0
                                ?

                                turnosDisponibles.map((td, i) => {
                                    return <StyledTableRow key={i}>
                                        <StyledTableCell component="th" scope="row" align="center" onClick={() => onClickTurno(td)}>
                                            {td.hora} {td.fecha}
                                        </StyledTableCell>
                                    </StyledTableRow>
                                })
                                :
                                <div className="d-flex justify-content-center">
                                    <Alert severity='error'>No hay turnos agendados en esta lista</Alert>
                                </div>
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Fragment>
    );
}

export default TableMaterial
