import React from "react";
import { useState } from "react";

import { Stack, Button, Box, Typography } from "@mui/material";
import { categories } from "../utils/constants";

const Sidebar = ({ selectedCategory, handleButtonClick }) => {

  return (
    <>
      <Stack
        sx={{
          display: 'flex',
          overflowY: 'auto',
          height: { sx: "auto", md: "95%" },
          flexDirection: { xs: 'row', md: 'column'},
        }}
      >
        {categories.map((category) => (
          <Button
            className="category-btn"
            style={{
              background: category.name === selectedCategory && '#FC1503',
              color: 'white',
              borderRadius: '30px',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'start',
              alignItems: 'center',
              padding: '7px 15px',
              margin: '10px 0px',
              transition: 'all 0.3s ease',
            }}
            key={category.name}
            onClick={() => handleButtonClick(category.name)}
          >
            <span style={{ color: category.name === selectedCategory ? 'white' : 'red', marginRight: '15px', marginTop: '6px' }}>{category.icon}</span>
            <span style={{ opacity: category.name === selectedCategory ? '1' : '0.8' }}>{category.name}</span>
          </Button>
        ))}
      </Stack>
    </>
  );
};

export default Sidebar;