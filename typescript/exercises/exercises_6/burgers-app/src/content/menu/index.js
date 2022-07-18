import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Paper from "@mui/material/Paper";
import {PageWrapper} from "../../common/page-wrapper";

export const Menu = () => {
    const [burgers, setBurgers] = useState([]);

    useEffect(() => {
        fetch('https://rest-api-b6410.firebaseio.com/burgers.json')
            .then(r => r.json())
            .then((data) => {
                const formattedValue = Object.keys(data).map((key) => ({ id: key, ...data[key] }));
                setBurgers(formattedValue);
            })
    }, []);

    return (
        <PageWrapper title="Menu">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Ingredietns</TableCell>
                            <TableCell align="right">Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {burgers.map((burger) => {
                            return <TableRow key={burger.id}>
                                <TableCell>
                                    <Link to={`/burgers/${burger.id}`}>{burger.name}</Link>
                                </TableCell>
                                <TableCell align="right">{burger.ingredients}</TableCell>
                                <TableCell align="right">{burger.price}</TableCell>
                            </TableRow>
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </PageWrapper>
    );
}