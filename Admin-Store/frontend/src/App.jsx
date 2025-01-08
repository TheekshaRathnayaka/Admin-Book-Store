import { Box, useColorModeValue } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import FrontPage from "./pages/FrontPage";
import HelpPage from "./pages/HelpPage";

function App() {

  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>

      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/help" element={<HelpPage />} />
      </Routes>

    </Box>
  );
}

export default App;
