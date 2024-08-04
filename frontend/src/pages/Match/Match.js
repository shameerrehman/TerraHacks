import React from 'react';
import { Box, Container, Typography, Button, Avatar, Card, CardMedia, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';

const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(2),
  backgroundColor: '#fff',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
}));

const MainContent = styled(Container)(({ theme }) => ({
  backgroundColor: '#fff',
  padding: theme.spacing(4),
  textAlign: 'center',
  borderRadius: '10px',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#f0c14b',
  color: '#000',
  '&:hover': {
    backgroundColor: '#ddb347',
  },
}));

const WaterSaved = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: theme.spacing(2),
}));

const Match = () => {
  return (
    <Box>
      <MainContent>
        <Typography variant="h4" gutterBottom>
          Swap Matched!
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Message Terra Mole to set up a Swap Day
        </Typography>
        <ImageContainer>
          <Card sx={{ maxWidth: 150, margin: '0 20px' }}>
            <CardMedia
              component="img"
              alt="Item 1"
              height="140"
              image="https://i.pinimg.com/originals/03/33/7a/03337a394c31e4368b4cdeaf29d85565.jpg"
            />
          </Card>
          <Typography variant="h4">↔</Typography>
          <Card sx={{ maxWidth: 150, margin: '0 20px' }}>
            <CardMedia
              component="img"
              alt="Item 2"
              height="140"
              image="https://i.pinimg.com/originals/b3/d3/28/b3d328ec12ad91c2f68393b79777eb63.jpg"
            />
          </Card>
        </ImageContainer>
        <Typography variant="body1" color="textSecondary">
          you helped save 2,700 liters of water!
        </Typography>
        <StyledButton variant="contained" sx={{ mt: 4 }}>
          Message Terra
        </StyledButton>
        <WaterSaved>
          <Avatar alt="Terra Mole" src="/path-to-terra-avatar.jpg" />
          <Box sx={{ ml: 2 }}>
            <Typography variant="subtitle1">Swapper Liters Earned 🎉</Typography>
            <Typography variant="h4" color="primary">+2,700</Typography>
          </Box>
        </WaterSaved>
      </MainContent>
    </Box>
  );
};

export default Match;
