import { useState, useEffect } from "react";
import { Box, Stack, Typography, Container } from "@mui/material";

import Sidebar from "./Sidebar";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {

  const[selectedCategory, setSelectedCategory] = useState('New');
  const[videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
  }, [selectedCategory]);

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

        <Box display='flex' flexDirection='column'>
          <Typography fontWeight='bold' variant="h4" color="white" gutterBottom>
            {selectedCategory} <span style={{ color: 'red' }}>Vidoes</span>
          </Typography>
          <Videos videos={[videos]} />
        </Box>
        
      </Box>
    </>
  );
};

export default Feed;
