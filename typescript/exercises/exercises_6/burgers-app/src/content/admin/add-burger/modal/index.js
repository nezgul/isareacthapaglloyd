import { useState } from 'react';
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";

export const AddBurgerModal = ({ isOpen, handleClose, refresh }) => {
    const [formData, setFormData] = useState({
        name: '',
        ingredients: '',
        price: '',
        url: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleAdd = () => {
        fetch('https://rest-api-b6410.firebaseio.com/burgers.json', {
            method: 'POST',
            body: JSON.stringify(formData)
        }).then(() => {
            handleClose();
            refresh();
        })
    }

    const { name, ingredients, price, url } = formData;

    return (
        <Dialog open={isOpen} onClose={handleClose} fullWidth>
            <DialogTitle>Add new burger</DialogTitle>
            <DialogContent>
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
                <TextField
                    autoFocus
                    margin="dense"
                    id="ingredients"
                    label="Ingredients"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={ingredients}
                    name="ingredients"
                    onChange={handleChange}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="price"
                    label="Price"
                    type="number"
                    fullWidth
                    variant="standard"
                    value={price}
                    name="price"
                    onChange={handleChange}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="url"
                    label="Image url"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={url}
                    name="url"
                    onChange={handleChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button variant="contained" onClick={handleAdd}>Add</Button>
            </DialogActions>
        </Dialog>
    )
}