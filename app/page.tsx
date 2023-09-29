import Feed from "@/components/Feed";
import Navbar from "@/components/Navbar";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />
      <Feed />
    </Box>
  );
}
