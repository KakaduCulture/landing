'use client';

import {
  Box,
  Typography,
  Button,
  Paper,
  Card,
  CardContent,
} from '@mui/material';
import Image from 'next/image';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

const cards = [
  {
    icon: <TravelExploreIcon color="primary" sx={{ fontSize: 40 }} />,
    title: 'Scenic Routes',
    description: 'Discover hidden spots and stunning landscapes.',
  },
  {
    icon: <StoreMallDirectoryIcon color="primary" sx={{ fontSize: 40 }} />,
    title: 'Local Shopping',
    description: 'Find authentic souvenirs and essentials nearby.',
  },
  {
    icon: <MenuBookIcon color="primary" sx={{ fontSize: 40 }} />,
    title: 'Guided Tours',
    description: 'Learn about cultural heritage and must-see spots.',
  },
  {
    icon: <NotificationsActiveIcon color="primary" sx={{ fontSize: 40 }} />,
    title: 'Live Alerts',
    description: 'Stay updated with weather, safety, and park news.',
  },
];

export default function Home() {
  return (
      <Box
          sx={{
            minHeight: '100vh',
            width: '100%',
            backgroundImage: 'url("/background.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            px: 2,
            py: 10,
          }}
      >
        <Box
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.85)',
              borderRadius: 2,
              padding: { xs: 4, sm: 6 },
              maxWidth: '90%',
              width: '100%',
              mx: 'auto',
            }}
        >
          <Typography variant="h3" gutterBottom fontWeight="bold" align="center">
            Discover Kakadu National Park
          </Typography>

          <Typography variant="h5" color="text.primary" sx={{ mt: 2, mb: 1 }} align="center">
            Plan. Explore. Experience Kakadu.
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{ mb: 5 }} align="center">
            The official app to unlock adventure and culture in Australia's natural wonder.
          </Typography>
          
          <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                justifyContent: 'center',
                gap: 3,
              }}
          >
            {cards.map((item, index) => (
                <Card
                    key={index}
                    elevation={1}
                    sx={{
                      width: '100%',
                      height: 140,
                      display: 'flex',
                      alignItems: 'center',
                      padding: 2,
                      gap: 2,
                      boxSizing: 'border-box',
                    }}
                >
                  <Box
                      sx={{
                        width: 48,
                        height: 48,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                  >
                    {item.icon}
                  </Box>

                  <CardContent
                      sx={{
                        p: 0,
                        flex: 1,
                        overflow: 'hidden',
                      }}
                  >
                    <Typography variant="subtitle1" fontWeight="bold">
                      {item.title}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          overflow: 'hidden',
                          wordBreak: 'break-word',
                          lineHeight: 1.4,
                        }}
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
            ))}
          </Box>
          
          <Box display="flex" justifyContent="center">
            <Paper elevation={3} sx={{ mt: 6, p: 3, borderRadius: 2 }}>
              <Typography variant="subtitle1" gutterBottom align="center">
                Scan to Download the App
              </Typography>
              <Image
                  src="/qrcode.png"
                  alt="QR Code to download Kakadu App"
                  width={200}
                  height={200}
              />
            </Paper>
          </Box>

          <Box mt={6} textAlign="center">
            <Button
                variant="contained"
                size="large"
                href="https://kakadu.gov.au"
                target="_blank"
            >
              Learn More
            </Button>
          </Box>
        </Box>
      </Box>
  );
}