import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material"

const SearchBar = () => {
  return (
    <>
      <Paper
        onSubmit={() => {}}
        sx={{
          borderRadius: 20,
          border: "1px solid #e3e3e3",
          pl: 2,
          mr: { sm: 5 },
        }}
      >
        <input 
          className="search-bar"
          type="text" 
          placeholder="Search..."
          onChange={() => {}}
        />
        <IconButton
          sx={{
            p: '10px',
            color: 'red',
          }}
        >
          <Search /> 
        </IconButton>
      </Paper>
    </>
  );
};

export default SearchBar;