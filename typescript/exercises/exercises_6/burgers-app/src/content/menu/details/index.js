import { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import CircularProgress from "@mui/material/CircularProgress";
import {PageWrapper} from "../../../common/page-wrapper";

export const MenuDetails = () => {
    const params = useParams();
    const [burger, setBurger] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`https://rest-api-b6410.firebaseio.com/burgers/${params.id}.json`)
            .then(r => r.json())
            .then((data) => {
                setBurger(data);
                setIsLoading(false);
            })
    }, []);

    if (!burger) {
        if (isLoading) {
            return <PageWrapper><CircularProgress /></PageWrapper>
        }

        return <PageWrapper title="Such burger does not exist." />;
    }

    return <PageWrapper title={burger.name}>
        <Avatar sx={{ width: '200px', height: '200px', my: 2 }} alt="burger"
                src={burger.url || 'https://cdn-icons-png.flaticon.com/512/3075/3075977.png'} />
        <Typography variant="subtitle">{burger.ingredients}</Typography>
        <Typography variant="h5">{burger.price}</Typography>
    </PageWrapper>
}