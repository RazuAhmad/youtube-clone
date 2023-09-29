import React from "react";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import logo from "../public/assets/youtub-logo.png";
import Image from "next/image";
import SearchBar from "./SearchBar";
const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      spacing={14}
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
      }}
    >
      <Link href="/" className="flex items-center">
        <Image src={logo} alt="" height={45} width={45} />
      </Link>

      <SearchBar />
    </Stack>
  );
};

export default Navbar;
