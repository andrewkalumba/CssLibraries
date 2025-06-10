"use client"
import Link from "next/link";
import { Box, Container, Typography, Stack, Button } from "@mui/material";

interface AssignmentsProp {
  name: string
  url: string
}

export default function Home() {
  const Assignments: AssignmentsProp[] = [
    { name: "health website with sass", url: "/sass" },
    { name: "nasa_api with styled components", url: "/styledComponents" }
  ];

  return (
    <Container maxWidth="sm" sx={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Box
        sx={{
          p: 4,
          borderRadius: 8,
          boxShadow: 10,
          border: '2px solid #888',
          backgroundColor: '#d09494',
          textAlign: 'center',
          width: '100vh',
          height: '50vh',
          margin: '30px',
      
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 700, marginBottom: '30px' }}>
          Andrew's Assignments
        </Typography>

        <Stack direction="column" spacing={2} mt={2}>
          {Assignments.map((item, index) => (
            <Link key={index} href={item.url}>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: '#1D2D44',
                  color: '#fff',
                  padding: '20px',
                  borderRadius: '16px',
                  fontSize:'1.2rem',
                  '&:hover': {
                    backgroundColor: '#922c5e',
                  },
                  textTransform: 'capitalize',
                }}
              >
                {item.name}
              </Button>
            </Link>
          ))}
        </Stack>
      </Box>
    </Container >
  );
}

