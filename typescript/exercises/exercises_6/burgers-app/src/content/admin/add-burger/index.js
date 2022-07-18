import { useState } from 'react';
import Fab from "@mui/material/Fab";
import Icon from "@mui/material/Icon";
import {AddBurgerModal} from "./modal";

export const AddBurger = ({ refresh }) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div style={{ display: 'flex', marginTop: '15px', alignSelf: 'flex-end'}}>
            <Fab variant="contained" color="primary" onClick={handleClickOpen}>
                <Icon>add</Icon>
            </Fab>
            <AddBurgerModal isOpen={open} handleClose={handleClose} refresh={refresh} />
        </div>
    );
}