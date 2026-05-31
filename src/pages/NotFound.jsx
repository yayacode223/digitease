import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Navbar, Footer } from "../components";
import { useTheme } from "../contexts/ThemeContext";

export default function NotFound() {
  const navigate = useNavigate();
  const { isDark } = useTheme();

  return (
    <>
      <Navbar isHome={false} />
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: isDark ? "#0f172a" : "#f8fafc",
          display: "flex",
          flexDirection: "column",
          transition: "background-color 0.3s ease",
        }}
      >
        <Container
          maxWidth="sm"
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            py: { xs: 12, md: 16 },
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Code 404 */}
            <Typography
              sx={{
                fontSize: { xs: "6rem", md: "9rem" },
                fontWeight: 900,
                lineHeight: 1,
                mb: 2,
                background: "linear-gradient(135deg, #1a56db 0%, #0891b2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "-0.04em",
              }}
            >
              404
            </Typography>

            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                color: isDark ? "#f1f5f9" : "#0f172a",
                mb: 2,
                fontSize: { xs: "1.5rem", md: "2rem" },
                transition: "color 0.3s ease",
              }}
            >
              Page introuvable
            </Typography>

            <Typography
              sx={{
                color: isDark ? "#94a3b8" : "#6b7280",
                fontSize: { xs: "1rem", md: "1.125rem" },
                lineHeight: 1.7,
                mb: 5,
                maxWidth: 380,
                mx: "auto",
                transition: "color 0.3s ease",
              }}
            >
              La page que vous recherchez n'existe pas ou a été déplacée.
            </Typography>

            <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<HomeIcon />}
                onClick={() => navigate("/")}
                sx={{
                  background: "linear-gradient(135deg, #1a56db 0%, #0891b2 100%)",
                  borderRadius: 2,
                  textTransform: "none",
                  fontWeight: 600,
                  px: 3,
                  py: 1.5,
                  boxShadow: "0 4px 14px rgba(26,86,219,0.3)",
                  "&:hover": {
                    background: "linear-gradient(135deg, #1e40af 0%, #0e7490 100%)",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.2s ease",
                }}
              >
                Retour à l'accueil
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<ArrowBackIcon />}
                onClick={() => navigate(-1)}
                sx={{
                  borderRadius: 2,
                  textTransform: "none",
                  fontWeight: 600,
                  px: 3,
                  py: 1.5,
                  borderColor: isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.15)",
                  color: isDark ? "#94a3b8" : "#6b7280",
                  "&:hover": {
                    borderColor: "#2563eb",
                    color: "#2563eb",
                    bgcolor: "transparent",
                  },
                  transition: "all 0.2s ease",
                }}
              >
                Page précédente
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
