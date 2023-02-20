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

// ----------------------------------------------------------------------

export default function CatalogEdit(props) {
    // const [rowsPerPage, setRowsPerPage] = useState(5);

    // const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - USERLIST.length) : 0;
    const { row } = props;
    const [inputTest, setInputTest] = useState();
    const handleUpdate = () => {
        props.handleChangeToggle()
    }
    return (
        <>
            <TableRow hover key={row.id} tabIndex={-1} role="checkbox" >
                <TableCell align="left" readOnly>{row.id}</TableCell>
                <TableCell component="th" scope="row" padding="none">
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <Avatar alt={row.name} src={row.avatarUrl} />
                        <Typography variant="subtitle2" noWrap>
                            <input type='text' defaultValue={row.name} onChange={(e) => setInputTest(e.target.value)}></input>
                            {/* {row.name} */}
                        </Typography>
                    </Stack>
                </TableCell>

                <TableCell align="left">
                    <input type='text' defaultValue={row.company} onChange={(e) => setInputTest(e.target.value)}></input>
                    {/* {row.company} */}
                </TableCell>

                <TableCell align="left">
                    <input type='text' defaultValue={row.role} onChange={(e) => setInputTest(e.target.value)}></input>
                    {/* {row.role} */}
                </TableCell>

                <TableCell align="left">
                    <select class="form-select" aria-label="Default select example">
                        <option selected>{row.isVerified ? 'Yes' : 'No'}</option>
                        <option value="1">Yes</option>
                        <option value="2">No</option>
                    </select>
                    {/* {row.isVerified ? 'Yes' : 'No'} */}
                </TableCell>

                <TableCell align="left">
                    {/* <Label color={(row.status === 'banned' && 'error') || 'success'}>
                        {sentenceCase(row.status)}
                    </Label> */}
                    <select class="form-select" aria-label="Default select example">
                        <option selected>{row.status}</option>
                        <option value="1">Active</option>
                        <option value="2">Banned</option>
                    </select>
                </TableCell>

                <TableCell align="left">
                    <button type="button" className="btn btn-primary buttonSave" onClick={handleUpdate}>
                        Save
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
