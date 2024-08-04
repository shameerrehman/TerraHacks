import React, { useState } from 'react';
import {
  Box,
  Typography,
  Avatar,
  Paper,
  TextField,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Button
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SendIcon from '@mui/icons-material/Send';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const messages = [
  { id: 1, sender: 'You', text: 'Is the brand EcoWear sustainable?', time: '10:25 am' },
  { id: 2, sender: 'StyleSustainBot', text: 'Yes, EcoWear is sustainable. They use eco-friendly materials and follow ethical practices.', time: '10:25 am' },
  { id: 3, sender: 'You', text: 'Do they have any certifications?', time: '10:35 am' },
  { id: 4, sender: 'StyleSustainBot', text: 'Yes, they have GOTS and Fair Trade certifications.', time: '10:35 am' },
  { id: 5, sender: 'You', text: 'Great, thanks!', time: '10:36 am' },
  { id: 6, sender: 'StyleSustainBot', text: 'You\'re welcome!', time: '10:36 am' },
];

const suggestedQuestions = [
  'What other brands do you recommend that are sustainable?',
  'What should I look for in a brand\'s sustainability practices?',
  'Do you have any tips for building a sustainable wardrobe?'
];

const Messenger = ({ onBack }) => {
  const [newMessage, setNewMessage] = useState('');

  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Paper elevation={1} sx={{ p: 2, bgcolor: '#FFF8DC' }}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <IconButton onClick={onBack}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6">StyleSustainBot</Typography>
          <Box width={24} /> {/* Placeholder for symmetry */}
        </Box>
      </Paper>

      <Box flexGrow={1} overflow="auto" p={2} bgcolor="#F0F0F0">
        <List>
          {messages.map((message) => (
            <ListItem key={message.id} sx={{ justifyContent: message.sender === 'You' ? 'flex-end' : 'flex-start' }}>
              <Paper elevation={1} sx={{ 
                maxWidth: '70%', 
                p: 1, 
                bgcolor: message.sender === 'You' ? '#FCF3CF' : 'white',
                borderRadius: message.sender === 'You' ? '20px 20px 0 20px' : '20px 20px 20px 0'
              }}>
                <ListItemText 
                  primary={message.text}
                  secondary={message.time}
                  secondaryTypographyProps={{ align: 'right', fontSize: '0.7rem' }}
                />
              </Paper>
            </ListItem>
          ))}
        </List>
        
        {suggestedQuestions.map((question, index) => (
          <Button 
            key={index}
            variant="contained" 
            sx={{ 
              display: 'block', 
              width: '100%', 
              mb: 1, 
              textAlign: 'left', 
              bgcolor: '#FCF3CF',
              color: 'black',
              '&:hover': {
                bgcolor: '#F7DC6F'
              }
            }}
          >
            {question}
          </Button>
        ))}
      </Box>

      <Paper elevation={2} sx={{ p: 2, bgcolor: 'white' }}>
        <Box display="flex" alignItems="center">
          <IconButton>
            <InsertEmoticonIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="send a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            sx={{ mx: 1 }}
          />
          <Button variant="contained" endIcon={<SendIcon />}>
            SEND
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Messenger;