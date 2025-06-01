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
    <Container maxWidth="sm" sx={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box
        sx={{
          p: 4,
          borderRadius: 8,
          boxShadow: 10,
          border: '2px solid #888',
          backgroundColor: '#f5f5f5',
          textAlign: 'center',
          width: '100%',
        }}
      >
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
          Andrew's Assignments
        </Typography>

        <Stack direction="column" spacing={2} mt={2}>
          {Assignments.map((item, index) => (
            <Link key={index} href={item.url} passHref>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: '#1976d2',
                  color: '#fff',
                  '&:hover': {
                    backgroundColor: '#115293',
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
    </Container>
  );
}

