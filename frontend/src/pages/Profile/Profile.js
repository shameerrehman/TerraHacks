import React from 'react';
import { 
  Box, 
  Typography, 
  Avatar, 
  Chip, 
  List, 
  ListItem, 
  ListItemText,
  Paper,
  Grid,
  Rating
} from '@mui/material';
import WaterDropIcon from '@mui/icons-material/WaterDrop';

const Profile = () => {
  return (
    <Box sx={{ maxWidth: 400, margin: 'auto', padding: 2 }}>
      <Paper elevation={3} sx={{ padding: 2, borderRadius: 4 }}>
        <Box display="flex" alignItems="center" mb={2}>
          <Avatar 
            src="https://t4.ftcdn.net/jpg/02/10/48/41/360_F_210484126_900yRgFbetEU7x1dZcZqJFR9RldnYhxY.jpg" 
            sx={{ width: 80, height: 80, marginRight: 2 }}
          />
          <Box>
            <Typography variant="h5">Jordana S.</Typography>
            <Typography variant="body2">Toronto, ON</Typography>
            <Box display="flex" alignItems="center">
              <WaterDropIcon color="primary" />
              <Typography variant="body2" ml={1}>
                Swapper Liters 13,500
              </Typography>
            </Box>
          </Box>
        </Box>

        <Typography variant="body1" paragraph>
          Fashion enthusiast and eco-conscious style seeker. Passionate about curating a unique wardrobe and swapping fashion finds. Let's trade and elevate our looks together!
        </Typography>

        <Typography variant="h6" gutterBottom>Favorite Styles:</Typography>
        <Box mb={2}>
          {['Boho Chic', 'Vintage', 'Trendy Street-wear'].map((style, index) => (
            <Chip key={index} label={style} sx={{ margin: 0.5 }} />
          ))}
        </Box>

        <Typography variant="h6" gutterBottom>Wish-list:</Typography>
        <List dense>
          <ListItem>
            <ListItemText primary="• Classic Trench Coat" />
          </ListItem>
          <ListItem>
            <ListItemText primary="• Comfortable Sneakers" />
          </ListItem>
        </List>

        <Typography variant="h6" gutterBottom>Swap Preferences:</Typography>
        <List dense>
          <ListItem>
            <ListItemText primary="• Condition: Gently used, in good condition" />
          </ListItem>
          <ListItem>
            <ListItemText primary="• Sizes: Medium or Large" />
          </ListItem>
          <ListItem>
            <ListItemText primary="• Brands: Open to various brands" />
          </ListItem>
          <ListItem>
            <ListItemText primary="• Types: Dresses, jackets, shoes" />
          </ListItem>
        </List>

        <Box mb={2}>
          <Typography variant="h6" gutterBottom>Reviews:</Typography>
          <Rating value={5} readOnly />
          <Typography variant="body2" fontStyle="italic">
            "Jordana's taste is impeccable! Loved the vintage dress I got from her." - Sabrina C.
          </Typography>
        </Box>

        <Typography variant="h6" gutterBottom>Gallery:</Typography>
        <Grid container spacing={1}>
          {[1, 2, 3, 4].map((item) => (
            <Grid item xs={6} key={item}>
              <img 
                src={`/path-to-gallery-image-${item}.jpg`} 
                alt={`Gallery item ${item}`}
                style={{ width: '100%', height: 'auto', borderRadius: 8 }}
              />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
};

export default Profile;