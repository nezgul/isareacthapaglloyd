import { Link } from 'react-router-dom';
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

const buttonStyles = { my: 2, color: 'white', display: 'block' };

export const Navigation = () => {
    return <AppBar position="static">
        <Container>
            <Toolbar disableGutters>
                <Avatar alt="logo" src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png" />
                <Button
                    component={Link}
                    to="/"
                    sx={{ ml: 2, ...buttonStyles }}
                >
                    Home
                </Button>
                <Button
                    component={Link}
                    to="/burgers"
                    sx={buttonStyles}
                >
                    Menu
                </Button>
                <Button
                    component={Link}
                    to="/admin"
                    sx={buttonStyles}
                >
                    Admin
                </Button>
            </Toolbar>
        </Container>
    </AppBar>
}
