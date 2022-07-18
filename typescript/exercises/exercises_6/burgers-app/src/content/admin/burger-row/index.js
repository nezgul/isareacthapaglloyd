import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";

export const BurgerRow = ({ burger, refresh, enterEditMode }) => {
    const handleEditClick = () => {
        enterEditMode(burger.id)
    }

    const handleDeleteClick = () => {
        fetch(`https://rest-api-b6410.firebaseio.com/burgers/${burger.id}.json`, {
            method: 'DELETE'
        }).then(() => {
            refresh();
        })
    }

    return (
        <TableRow>
            <TableCell>{burger.name}</TableCell>
            <TableCell align="right">{burger.ingredients}</TableCell>
            <TableCell align="right">{burger.price}</TableCell>
            <TableCell>
                <Button variant="contained" onClick={handleEditClick}>Edit</Button>
            </TableCell>
            <TableCell>
                <Button variant="contained" color="error" onClick={handleDeleteClick}>Delete</Button>
            </TableCell>
        </TableRow>
    )
}