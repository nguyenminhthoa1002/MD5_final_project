import { sentenceCase } from 'change-case';
// import { useState } from 'react';
// @mui
import {
    Stack,
    Avatar,
    TableRow,
    TableCell,
    Typography,
} from '@mui/material';
// components
import Label from '../components/label';

import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from 'react';
import CatalogEdit from './CatalogEdit';

// ----------------------------------------------------------------------

export default function ElementCatalog(props) {
    // const [rowsPerPage, setRowsPerPage] = useState(5);

    // const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - USERLIST.length) : 0;
    const { row } = props;
    const [isToggle, setToggle] = useState(false);
    const [rowUpdate, setRowUpdate] = useState()
    const handleUpdate = (row) => {
        setToggle(true)
        setRowUpdate(row)
    }
    const handleChangeToggle = () => {
        setToggle(false)
    }

    if (isToggle) {
        return <CatalogEdit row={rowUpdate} handleChangeToggle={handleChangeToggle}></CatalogEdit>
    } else {
        return (
            <>
                <TableRow hover key={row.id} tabIndex={-1} role="checkbox" >
                    <TableCell align="left">{row.id}</TableCell>
                    <TableCell component="th" scope="row" padding="none">
                        <Stack direction="row" alignItems="center" spacing={2}>
                            <Avatar alt={row.name} src={row.avatarUrl} />
                            <Typography variant="subtitle2" noWrap>
                                {row.name}
                            </Typography>
                        </Stack>
                    </TableCell>

                    <TableCell align="left">{row.company}</TableCell>

                    <TableCell align="left">{row.role}</TableCell>

                    <TableCell align="left">{row.isVerified ? 'Yes' : 'No'}</TableCell>

                    <TableCell align="left">
                        <Label color={(row.status === 'banned' && 'error') || 'success'}>{sentenceCase(row.status)}</Label>
                    </TableCell>

                    <TableCell align="left">
                        <button type="button" className="btn btn-outline-warning buttonCss" onClick={() => { handleUpdate(row) }}>
                            <i className="bi bi-pencil-square"></i>
                        </button>
                        <button type="button" className="btn btn-outline-danger buttonCss">
                            <i class="bi bi-trash3"></i>
                        </button>

                    </TableCell>
                </TableRow>

                {/* {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                </TableRow>
            )} */}
            </>
        );
    }
}
