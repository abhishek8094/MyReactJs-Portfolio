import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { FiSun, FiMoon } from "react-icons/fi";
import Navigationlogo from "../../public/Navlogo.png"
import { useTheme } from "../context/ThemeContext";

const pages = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [activePage, setActivePage] = React.useState(pages[0].name); // Default to "Home"
  const { isDark, toggleTheme } = useTheme();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handlePageChange = (pageName) => {
    setActivePage(pageName);
    handleCloseNavMenu();
  };

  return (
    <AppBar
      className="sm:px-32"
      position="fixed"
      sx={{
        backgroundColor: isDark ? "#000" : "#ffffff",
        color: isDark ? "white" : "#000",
        opacity: isDark ? 0.8 : 0.95,
        zIndex: 2,
        boxShadow: isDark ? "0 2px 8px rgba(255,255,255,0.1)" : "0 2px 8px rgba(0,0,0,0.1)",
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{ paddingLeft: { xs: 0, md: 2 }, paddingRight: { xs: 0, md: 2 } }}
      >
        <Toolbar
          disableGutters
          sx={{ paddingLeft: { xs: 1, md: 0 }, paddingRight: { xs: 1, md: 0 } }}
        >
          <img
            src={Navigationlogo}
            alt="Logo"
            className="h-12 w-auto mr-4 rounded-full"
            // Ensure no margin on mobile
          />

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: isDark ? "white" : "#000",
              textDecoration: "none",
            }}
          >
            bhishek Singh
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                href={page.href}
                sx={{
                  mx: 1,
                  color: isDark ? "white" : "#000",
                  textDecoration:
                    activePage === page.name ? "underline" : "none",
                  textUnderlineOffset:
                    activePage === page.name ? "6px" : "none",
                  textDecorationThickness:
                    activePage === page.name ? "2px" : "none",
                  textDecorationStyle:
                    activePage === page.name ? "solid" : "none",
                  textDecorationColor:
                    activePage === page.name ? "red" : "none",
                }}
                onClick={() => handlePageChange(page.name)}
              >
                {page.name}
              </Button>
            ))}
            <IconButton
              onClick={toggleTheme}
              sx={{
                ml: 2,
                color: isDark ? "white" : "#000",
                fontSize: "1.5rem",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "rotate(20deg)",
                },
              }}
              title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <FiSun size={24} /> : <FiMoon size={24} />}
            </IconButton>
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              justifyContent: "flex-end",
              alignItems: "center",
              gap: 1,
            }}
          >
            <IconButton
              onClick={toggleTheme}
              sx={{
                color: isDark ? "white" : "#000",
                fontSize: "1.5rem",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "rotate(20deg)",
                },
              }}
              title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <FiSun size={24} /> : <FiMoon size={24} />}
            </IconButton>
            <IconButton
              size="large"
              sx={{ color: isDark ? "white" : "#000" }}
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              {anchorElNav ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={() => handlePageChange(page.name)}
                  sx={{
                    backgroundColor: isDark ? "#1a1a1a" : "#f5f5f5",
                    color: isDark ? "white" : "#000",
                    "&:hover": {
                      backgroundColor: isDark ? "#2a2a2a" : "#e0e0e0",
                    },
                  }}
                >
                  <Typography
                    textAlign="center"
                    sx={{
                      textDecoration:
                        activePage === page.name ? "underline" : "none",
                      textUnderlineOffset:
                        activePage === page.name ? "6px" : "none",
                      textDecorationThickness:
                        activePage === page.name ? "2px" : "none",
                      textDecorationStyle:
                        activePage === page.name ? "solid" : "none",
                    }}
                  >
                    <a
                      href={page.href}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {page.name}
                    </a>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
