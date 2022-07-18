import React from 'react';
import { Paper, Grid, Box } from '@material-ui/core';
import { useQuery } from 'react-query';
import { makeGetUser } from '../services/api';

const Users = () => {
  const query = useQuery<unknown>('users', makeGetUser);
  console.log(query);
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={6}>
        <Box margin={2}>
          <Paper>
            TODO
        </Paper>
        </Box>
      </Grid>
    </Grid>
  )
};

export default Users;