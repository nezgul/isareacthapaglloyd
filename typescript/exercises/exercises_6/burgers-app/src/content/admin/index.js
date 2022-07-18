import {PageWrapper} from "../../common/page-wrapper";
import {AddBurger} from "./add-burger";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import {useEffect, useState} from "react";
import {BurgerRow} from "./burger-row";
import {EditBurgerRow} from "./edit-burger-row";

export const Admin = () => {
    const [burgers, setBurgers] = useState([]);
    const [editId, setEditId] = useState(null);

    const fetchBurgers = () => {
        fetch('https://rest-api-b6410.firebaseio.com/burgers.json')
            .then(r => r.json())
            .then((data) => {
                const formattedValue = Object.keys(data).map((key) => ({ id: key, ...data[key] }));
                setBurgers(formattedValue);
            });
    }

    const enterEditMode = (id) => {
        setEditId(id);
    }

    const cancelEditMode = () => {
        setEditId(null);
    }

    useEffect(() => {
        fetchBurgers();
    }, []);

    return (
        <PageWrapper title="Admin">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Ingredietns</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell sx={{ width: '70px'}} />
                            <TableCell sx={{ width: '100px'}} />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {burgers.map((burger) => burger.id === editId
                            ? <EditBurgerRow
                                key={burger.id}
                                burger={burger}
                                refresh={fetchBurgers}
                                cancelEditMode={cancelEditMode}
                            />
                            : <BurgerRow
                                key={burger.id}
                                burger={burger}
                                refresh={fetchBurgers}
                                enterEditMode={enterEditMode}
                            />
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <AddBurger refresh={fetchBurgers} />
        </PageWrapper>
    )
}