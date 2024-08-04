import React, { useState } from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  TextField,
  InputAdornment,
  Paper,
  IconButton,
  Divider
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const messages = [
  { id: 1, sender: 'StyleSustainBot', message: 'Ask me anything! I\'m happy to help.', avatar: '/path-to-bot-avatar.png', time: '' },
  { id: 2, sender: 'Terra M.', message: 'See you!', avatar: '/path-to-terra-avatar.png', time: '15 min ago' },
  { id: 3, sender: 'Mary K.', message: 'Hi Jordana I love your jacket 😍😍', avatar: '/path-to-mary-avatar.png', time: '4 hours ago' },
  { id: 4, sender: 'James L.', message: 'Same here! See you on Friday!', avatar: '/path-to-james-avatar.png', time: '2 days ago' },
  { id: 5, sender: 'Joseph H.', message: 'hey Jordana want to swap? 👗🔄', avatar: '/path-to-joseph-avatar.png', time: '3 days ago' },
  { id: 6, sender: 'David R.', message: 'Hi Jordana, u ready to swap??', avatar: '/path-to-david-avatar.png', time: '3 days ago' },
  { id: 7, sender: 'Lisa R.', message: 'I\'m waiting near Balzac\'s', avatar: '/path-to-lisa-avatar.png', time: '1 week ago' },
  { id: 8, sender: 'Ashley K.', message: 'Matched! Ready to start a conversation!', avatar: '/path-to-ashley-avatar.png', time: '' },
  { id: 9, sender: 'Michael C.', message: 'Matched! Ready to start a conversation!', avatar: '/path-to-michael-avatar.png', time: '' },
];

const Inbox = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', bgcolor: '#FFF8DC' }}>
      <Paper elevation={0} sx={{ p: 2, bgcolor: '#E6E6FA' }}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h6">Inbox</Typography>
          <IconButton>
            <ArrowBackIcon />
          </IconButton>
        </Box>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="search..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{ mt: 2, bgcolor: 'white' }}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Paper>

      <List>
        {messages.map((message, index) => (
          <React.Fragment key={message.id}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar src={message.avatar} />
              </ListItemAvatar>
              <ListItemText
                primary={message.sender}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {message.message}
                    </Typography>
                    {message.time && (
                      <Typography
                        component="span"
                        variant="caption"
                        sx={{ display: 'block', textAlign: 'right', mt: 1 }}
                      >
                        {message.time}
                      </Typography>
                    )}
                  </React.Fragment>
                }
              />
            </ListItem>
            {index < messages.length - 1 && <Divider variant="inset" component="li" />}
          </React.Fragment>
        ))}
      </List>
      <Box display="flex" justifyContent="center" mt={2} mb={2}>
        <span>•</span>
        <span style={{ margin: '0 5px' }}>•</span>
        <span>•</span>
      </Box>
    </Box>
  );
};

export default Inbox;