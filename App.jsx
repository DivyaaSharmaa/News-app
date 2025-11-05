import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import NewsList from './assets/Newslist';

const App = () => {
  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div">
            Inshorts Clone 📰
          </Typography>
        </Toolbar>
      </AppBar>
      <NewsList />
    </div>
  );
};

export default App;
