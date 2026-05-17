import { sidiki } from "../assets";
import { adama } from "../assets";
import { yahya } from "../assets"


const equipes = [
    {
        nom: "Coulibaly Adama",
        poste: "Consultant en IA & Cloud",
        image: adama,
        description: "Confirmé en intelligence artificielle et solutions cloud, capable de concevoir et déployer des architectures évolutives et optimisées pour les entreprises.",
        network: {
            facebook: "https://facebook.com/startlingadama",
            linkedin: "https://linkedin.com/in/startlingadama",
            email: "startlingadama@mail.com"
        }
    },
    {
        nom: "Dao Sidiki",
        poste: `Full Stack web & Mobile Microsoft UIUX Certified`,
        image: sidiki,
        description: "Développeur full stack spécialisé dans les applications web et mobiles, avec une expertise en design UI/UX certifiée par Microsoft, assurant des interfaces utilisateurs intuitives et performantes.",
        network: {
            facebook: "https://facebook.com/sidiki.dao.7",
            linkedin: "https://www.linkedin.com/in/sidiki-dao-b75bb539a/",
            email: "sidiki@mail.com"
        }
    },
    {
        nom: "Coulibaly Yaya",
        poste: "Élève-ingénieur logiciel – Full Stack Web, Mobile & DevOps",
        image: yahya,
        description: "Full stack web & mobile, passionné d'architecture logicielle et d'automatisation DevOps. De l'UI réactive à la CI/CD, conception de solutions robustes de bout en bout.",
        network: {
            facebook: "https://facebook.com/yaya",
            linkedin: "https://www.linkedin.com/in/yaya-coulibaly-433976220/",
            email: "yayac2298@gmail.com"
        }
    },
];

export default equipes;
