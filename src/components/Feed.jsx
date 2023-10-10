import { useState, useEffect } from "react";
import { Box, Stack, Typography, Container } from "@mui/material";

import Sidebar from "./Sidebar";

const Feed = () => {
  const[selectedCategory, setSelectedCategory] = useState('New');

  function handleButtonClick(categoryName) {
    setSelectedCategory(categoryName)
  }

  return (
    <>
      <Box display='flex' flexDirection='row'>
        <Stack
          sx={{
            flexDirection: { sx: "column", md: "row" },
          }}
        >
          <Box
            sx={{
              height: { sx: "auto", md: "92vh" },
              borderRight: "1px solid #3d3d3d",
              px: { sx: 0, md: 2 },
            }}
          >
            <Sidebar selectedCategory={selectedCategory} handleButtonClick={handleButtonClick}  />
            <Typography sx={{ color: "#fff" }}>Copyright @ragh</Typography>
          </Box>
        </Stack>

        <Box>
          <Typography fontWeight='bold' variant="h4" color="white">
            {selectedCategory} <span style={{ color: 'red' }}>Vidoes</span>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Feed;
