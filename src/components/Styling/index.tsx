"use client";
import * as React from 'react';
import { Box, Container, Typography, Link, Button } from '@mui/material';
import { useRouter } from 'next/navigation';

type StylingProp = {
  h1: string;
  github: string;
  vercel: string;
};

const Styling = ({ h1, github, vercel }: StylingProp) => {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <Container maxWidth="sm"  sx={{ mt: 8 }}>
      <Box
        sx={{
          padding: 4,
          backgroundColor: '#d09494',
          borderRadius: 2,
          boxShadow: 4,
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" gutterBottom>
          {h1}
        </Typography>

        <Typography variant="body1" gutterBottom>
          <strong>Git:</strong>{' '}
          <Link href={github} underline="hover">
            {github}
          </Link>
        </Typography>

        <Typography variant="body1">
          <strong>Vercel:</strong>{' '}
          <Link href={vercel} underline="hover">
            {vercel}
          </Link>
        </Typography>

        <Button
          variant="contained"
          onClick={handleClick}
          sx={{
            mt: 3,
            px: 4,
            py: 1.5,
            fontWeight: 600,
            fontSize: '1rem',
            borderRadius: '12px',
            backgroundColor: '#1D2D44',
            
            '&:hover': {
              backgroundColor: '#922c5e',
            },
          }}>
          Back
        </Button>
      </Box>
    </Container>
  );
};

export default Styling;
