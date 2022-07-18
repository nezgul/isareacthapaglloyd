import React from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import { CssBaseline } from '@material-ui/core';
import Users from './components/Users';

const queryClient = new QueryClient()
function App() {
  return (
    <>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <Users />
      </QueryClientProvider>
    </>
  );
}

export default App;
