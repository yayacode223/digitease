import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import Chip from "@mui/material/Chip";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Navbar, Footer } from "../components";
import { useTheme } from "../contexts/ThemeContext";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const INITIAL_FORM = { from_name: "", from_email: "", message: "" };

export default function Mail() {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const validate = () => {
    const next = {};
    if (!formData.from_name.trim()) next.from_name = "Veuillez entrer votre nom.";
    if (!formData.from_email.trim()) {
      next.from_email = "Veuillez entrer votre email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.from_email)) {
      next.from_email = "Adresse email invalide.";
    }
    if (!formData.message.trim()) next.message = "Veuillez écrire votre message.";
    else if (formData.message.trim().length < 20)
      next.message = "Le message doit contenir au moins 20 caractères.";
    return next;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error("EmailJS: variables d'environnement manquantes (VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY)");
      setStatus("error");
      return;
    }
    setStatus("loading");
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, { publicKey: PUBLIC_KEY });
      setStatus("success");
      setFormData(INITIAL_FORM);
    } catch (err) {
      console.error("EmailJS error:", err?.text ?? err);
      setStatus("error");
    }
  };

  const fieldSx = {
    "& .MuiOutlinedInput-root": {
      borderRadius: 2,
      bgcolor: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.02)",
      "& fieldset": { borderColor: isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.15)" },
      "&:hover fieldset": { borderColor: isDark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.3)" },
    },
    "& .MuiInputLabel-root": { color: isDark ? "#94a3b8" : "#64748b" },
    "& .MuiInputBase-input": { color: isDark ? "#f1f5f9" : "#0f172a" },
  };

  return (
    <>
      <Navbar isHome={false} darkHero />
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: isDark ? "#0f172a" : "#f8fafc",
          transition: "background-color 0.3s ease",
        }}
      >
        {/* Header — image de fond pleine largeur */}
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            pt: { xs: 12, md: 15 },
            pb: { xs: 8, md: 11 },
            textAlign: "center",
            bgcolor: "#0b1120",
          }}
        >
          {/* Image de fond */}
          <Box
            component="img"
            src="/contact/contact.webp"
            alt=""
            aria-hidden="true"
            loading="eager"
            fetchPriority="high"
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: { xs: "70% center", md: "center" },
              zIndex: 0,
            }}
          />
          {/* Voile de lisibilité */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              zIndex: 1,
              background:
                "linear-gradient(180deg, rgba(7,11,22,0.62) 0%, rgba(7,11,22,0.7) 55%, rgba(11,17,32,0.8) 100%)",
            }}
          />
          <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Chip
                icon={<EmailIcon sx={{ fontSize: 18, color: "#bfdbfe" }} />}
                label="Formulaire de contact"
                sx={{
                  mb: 3,
                  bgcolor: "rgba(37,99,235,0.25)",
                  border: "1px solid rgba(96,165,250,0.45)",
                  backdropFilter: "blur(8px)",
                  color: "#bfdbfe",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  py: 2.5,
                  px: 1,
                  borderRadius: 3,
                }}
              />
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "2rem", md: "2.75rem" },
                  color: "#ffffff",
                  textShadow: "0 2px 20px rgba(0,0,0,0.45)",
                  mb: 2,
                  letterSpacing: "-0.02em",
                }}
              >
                Envoyez-nous un{" "}
                <Box
                  component="span"
                  sx={{
                    background: "linear-gradient(135deg, #60a5fa 0%, #22d3ee 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  message
                </Box>
              </Typography>
              <Typography
                sx={{
                  color: "rgba(241,245,249,0.92)",
                  textShadow: "0 1px 12px rgba(0,0,0,0.4)",
                  fontSize: { xs: "1rem", md: "1.125rem" },
                  lineHeight: 1.8,
                }}
              >
                Décrivez votre projet et nous vous répondons sous 24h.
              </Typography>
            </motion.div>
          </Container>
        </Box>

        {/* Formulaire */}
        <Container maxWidth="sm" sx={{ py: { xs: 6, md: 8 } }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, sm: 5 },
                borderRadius: 4,
                bgcolor: isDark ? "#1e293b" : "#ffffff",
                border: "1px solid",
                borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.07)",
                boxShadow: isDark
                  ? "0 4px 24px rgba(0,0,0,0.4)"
                  : "0 4px 24px rgba(0,0,0,0.06)",
                transition: "background-color 0.3s ease, border-color 0.3s ease",
              }}
            >
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <Box sx={{ textAlign: "center", py: 4 }}>
                    <CheckCircleOutlineIcon
                      sx={{ fontSize: 64, color: "#22c55e", mb: 2 }}
                    />
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        color: isDark ? "#f1f5f9" : "#0f172a",
                        mb: 1.5,
                      }}
                    >
                      Message envoyé !
                    </Typography>
                    <Typography sx={{ color: isDark ? "#94a3b8" : "#6b7280", mb: 3 }}>
                      Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
                    </Typography>
                    <Button
                      variant="outlined"
                      onClick={() => setStatus("idle")}
                      sx={{
                        borderRadius: 2,
                        textTransform: "none",
                        fontWeight: 600,
                        borderColor: isDark ? "rgba(255,255,255,0.2)" : undefined,
                        color: isDark ? "#94a3b8" : undefined,
                      }}
                    >
                      Envoyer un autre message
                    </Button>
                  </Box>
                </motion.div>
              ) : (
                <Box component="form" onSubmit={handleSubmit} noValidate>
                  {status === "error" && (
                    <Alert severity="error" sx={{ mb: 3, borderRadius: 2 }}>
                      Une erreur est survenue. Vérifiez votre connexion et réessayez.
                    </Alert>
                  )}

                  <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                    <TextField
                      label="Nom complet"
                      name="from_name"
                      value={formData.from_name}
                      onChange={handleChange}
                      error={!!errors.from_name}
                      helperText={errors.from_name}
                      fullWidth
                      required
                      sx={fieldSx}
                    />
                    <TextField
                      label="Adresse email"
                      name="from_email"
                      type="email"
                      value={formData.from_email}
                      onChange={handleChange}
                      error={!!errors.from_email}
                      helperText={errors.from_email}
                      fullWidth
                      required
                      sx={fieldSx}
                    />
                    <TextField
                      label="Votre message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      error={!!errors.message}
                      helperText={errors.message || `${formData.message.length} / 20 min`}
                      fullWidth
                      required
                      multiline
                      rows={5}
                      sx={fieldSx}
                    />

                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      disabled={status === "loading"}
                      endIcon={
                        status === "loading" ? (
                          <CircularProgress size={20} color="inherit" />
                        ) : (
                          <SendIcon />
                        )
                      }
                      sx={{
                        background: "linear-gradient(135deg, #1a56db 0%, #0891b2 100%)",
                        borderRadius: 2,
                        py: 1.75,
                        fontWeight: 600,
                        fontSize: "1rem",
                        textTransform: "none",
                        boxShadow: "0 4px 14px rgba(26,86,219,0.3)",
                        "&:hover": {
                          background: "linear-gradient(135deg, #1e40af 0%, #0e7490 100%)",
                          transform: "translateY(-2px)",
                          boxShadow: "0 6px 20px rgba(26,86,219,0.4)",
                        },
                        "&:disabled": {
                          background: isDark ? "#334155" : "#e2e8f0",
                          color: isDark ? "#64748b" : "#94a3b8",
                        },
                        transition: "all 0.2s ease",
                      }}
                    >
                      {status === "loading" ? "Envoi en cours…" : "Envoyer le message"}
                    </Button>
                  </Box>
                </Box>
              )}
            </Paper>
          </motion.div>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
