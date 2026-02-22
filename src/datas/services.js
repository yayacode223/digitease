import { ai, dev } from "../assets";

// Icons will be handled in ServiceCard component based on service id
const services=[
    {
        id:1,
        title:"Solution Web, Mobile et DevOps",
        icon: "web", // web development icon
        description:"Nous mettons à votre service notre expertise dans la mise en place votre projet web/mobile site vitrine, e-commerce et application mobile en fonction de vos spécificités.",
        specifités:[
            "Sites vitrines, e-commerce & apps mobiles",
            "Design responsive & UX moderne",
            "Technologies modernes ",
            "Fonctionnalités sur mesure selon vos besoins",
            "Optimisation SEO & performance",
            "Sécurité et RGPD pris en compte",
            "Délais rapides & accompagnement dédié",
            "Support technique post-livraison inclus"
        ],
        image:dev,
        engagements:[
            {
                title:"Performance",
                description:"Des applications rapides et optimisées pour tous les appareils."
            },
            {
                title:"Design",
                description:"Des interfaces modernes, élégantes et centrées sur l’utilisateur."
            },
            {
                title:'Fiabilité',
                description:'Un code maintenable et des solutions évolutives sur le long terme.'
            }
        ]
    },
    {
        id:2,
        title:"Intelligence Artificielle et Automatisation",
        icon: "ai", // AI icon
        description:"Nous concevons et intégrons des solutions d'intelligence artificielle sur mesure pour automatiser, analyser et optimiser vos processus métier.",
        specifités:[
            "Développement de modèles IA sur mesure",
            "Analyse prédictive & automatisation ",
            "Intégration d'IA dans vos solutions logicielles",
            "Déploiement cloud & APIs intelligentes",
            "Confidentialité & éthique de l'IA respectées",
            "Accompagnement dans l'intégration métier",
            "Tests, évaluation & amélioration continue"
        ],
        image:ai,
        engagements:[
            {
                title:"Précision",
                description:"Des modèles IA entraînés et calibrés pour offrir des résultats fiables et pertinents."
            },
            {
                title:"Innovation",
                description:"Des solutions basées sur les dernières avancées en machine learning et deep learning."
            },
            {
                title:"Sécurité & Éthique",
                description:"Un respect strict de la confidentialité des données et des pratiques responsables."
            }
        ]
    },
    {
        id:3,
        title:"Cloud Computing & infrastructure scalable",
        icon: "cloud", // Cloud icon
        description:"Nous vous accompagnons dans la migration, la gestion et l'optimisation de votre infrastructure cloud pour plus de performance, de sécurité et de flexibilité.",
        specifités:[
            "Déploiement sur AWS ou Google Cloud",
            "Migration d'infrastructures vers le cloud",
            "Architecture scalable & haute disponibilité",
            "Sécurité, sauvegardes & conformité avec les normes RGPD",
            "Automatisation via CI/CD & infrastructure",
            "Maintenance & support technique continue",
        ],
        image:"https://i.pinimg.com/736x/1f/cc/ea/1fcceab4efc82ab112fcc70af2267ab7.jpg",
        engagements:[
            {
                title:"Scalabilité",
                description:"Des infrastructures capables de s’adapter automatiquement à votre croissance."
            },
            {
                title:"Fiabilité",
                description:"Haute disponibilité et tolérance aux pannes pour assurer la continuité de service."
            },
            {
                title:"Sécurité",
                description:"Un cloud conforme aux normes (RGPD, sauvegardes, monitoring) pour protéger vos données."
            }
        ]
    }
]

export default services;