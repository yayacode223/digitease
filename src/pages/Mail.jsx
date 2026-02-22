import { useState } from "react";
import { Navbar, Footer } from "../components";
import EmailIcon from '@mui/icons-material/Email';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici tu peux brancher ton backend ou un service comme EmailJS / Formspree
    console.log("Form submitted:", formData);
    setStatus("success");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
    <Navbar isHome={false}/>
    <div className="min-h-screen flex items-center justify-center px-4 my-16">
      <div className="bg-white rounded shadow-xl p-8 max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 flex items-center justify-center gap-2">
          <EmailIcon sx={{ fontSize: 32, color: '#1a56db' }} /> Envoyez-nous un mail
        </h1>
        {status === "success" && (
          <div className="flex items-center gap-2 text-green-600 mb-4 justify-center">
            <CheckCircleIcon /> Merci ! Votre message a bien été envoyé.
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nom */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Nom</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary outline-none"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-pink-400 outline-none"
            ></textarea>
          </div>

          {/* Bouton */}
          <button
            type="submit"
            className="w-full gradent text-white py-3 rounded font-semibold hover:opacity-90 transition"
          >
            Envoyer
          </button>
        </form>

        {/* Statut d'envoi */}
        {status && (
          <p className="mt-4 text-center text-green-600 font-medium">{status}</p>
        )}
      </div>
    </div>
    <Footer />
    </>
  );
}
