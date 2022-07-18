import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Button from "@mui/material/Button";
import {useState} from "react";
import TextField from "@mui/material/TextField";

export const EditBurgerRow = ({ burger, refresh, cancelEditMode }) => {
    const [formData, setFormData] = useState({
        name: burger.name,
        ingredients: burger.ingredients,
        price: burger.price,
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSaveClick = () => {
        fetch(`https://rest-api-b6410.firebaseio.com/burgers/${burger.id}.json`, {
            method: 'PATCH',
            body: JSON.stringify(formData)
        }).then(() => {
            cancelEditMode();
            refresh();
        })
    }

    const handleCancelClick = () => {
        cancelEditMode();
    }

    const { name, ingredients, price } = formData;

    return (
        <TableRow>
            <TableCell>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Name"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={name}
                    name="name"
                    onChange={handleChange}
                />
            </TableCell>
            <TableCell align="right">
                <TextField
                    margin="dense"
                    id="name"
                    label="Ingredients"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={ingredients}
                    name="ingredients"
                    onChange={handleChange}
                />
            </TableCell>
            <TableCell align="right">
                <TextField
                    margin="dense"
                    id="name"
                    label="Price"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={price}
                    name="price"
                    onChange={handleChange}
                />
            </TableCell>
            <TableCell>
                <Button variant="contained" color="success" onClick={handleSaveClick}>Save</Button>
            </TableCell>
            <TableCell>
                <Button variant="contained" color="inherit" onClick={handleCancelClick}>Cancel</Button>
            </TableCell>
        </TableRow>
    )
}