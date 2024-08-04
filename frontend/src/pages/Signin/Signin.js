import React, { useState } from 'react';
import { TextField, Button, Container, Box, Typography, Avatar, Link } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { styled } from '@mui/material/styles';
import logo from './logo.png'

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(8),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#fff',
  borderRadius: '10px',
  padding: theme.spacing(4),
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: '#000',
}));

const StyledLogo = styled('img')(({ theme }) => ({
  width: '100px',
  height: '100px',
  marginBottom: theme.spacing(2),
  justifyContent: 'center'
}));

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
  backgroundColor: '#f0c14b',
  color: '#000',
  '&:hover': {
    backgroundColor: '#ddb347',
  },
}));

const StyledSignupButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1, 0, 2),
  borderColor: '#f0c14b',
  color: '#000',
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& label.Mui-focused': {
    color: '#f0c14b',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#f0c14b',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#f0c14b',
    },
    '&:hover fieldset': {
      borderColor: '#f0c14b',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#f0c14b',
    },
  },
}));

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    // Add your login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <StyledContainer component="main" maxWidth="xs">
      <Box>
        <StyledLogo src={logo} alt="StyleSwap Logo" />
        <Typography component="h1" variant="h5">
          Welcome back!
        </Typography>
        <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
          <StyledTextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <StyledTextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link href="#" variant="body2" sx={{ color: '#000', mt: 1 }}>
            Forgot Password?
          </Link>
          <StyledButton
            type="submit"
            fullWidth
            variant="contained"
          >
            Login
          </StyledButton>
          <StyledSignupButton
            fullWidth
            variant="outlined"
          >
            Signup
          </StyledSignupButton>
        </Box>
      </Box>
    </StyledContainer>
  );
};

export default Login;
