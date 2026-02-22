import logo from './logo.svg'
import logo_dark from './logo_dark.svg'
import cross_icon from './cross_icon.svg'
import menu_icon from './menu_icon.svg'
import star_icon from './star_icon.svg'
import left_arrow from './left_arrow.svg'
import right_arrow from './right_arrow.svg'
import header_img from './header_img.png'
import brand_img from './brand_img.png'
import project_img_1 from './project_img_1.jpg'
import project_img_2 from './project_img_2.jpg'
import project_img_3 from './project_img_3.jpg'
import project_img_4 from './project_img_4.jpg'
import project_img_5 from './project_img_5.jpg'
import project_img_6 from './project_img_6.jpg'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'

export const assets = {
    logo,
    logo_dark,
    cross_icon,
    menu_icon,
    star_icon,
    header_img,
    brand_img,
    project_img_1,
    project_img_2,
    project_img_3,
    project_img_4,
    left_arrow,
    right_arrow,
}

export const projectsData = [
    {
      title: "Skyline Haven",
      price: "$2,50,000",
      location: "California",
      image: project_img_1
    },
    {
      title: "Vista Verde",
      price: "$2,50,000",
      location: "San Francisco",
      image: project_img_2
    },
    {
      title: "Serenity Suites",
      price: "$2,50,000",
      location: "Chicago",
      image: project_img_3
    },
    {
      title: "Central Square",
      price: "$2,50,000",
      location: "Los Angeles",
      image: project_img_4
    },
    {
      title: "Vista Verde",
      price: "$2,50,000",
      location: "San Francisco",
      image: project_img_5
    },
    {
      title: "Serenity Suites",
      price: "$2,50,000",
      location: "Chicago",
      image: project_img_6
    },
    
  ];

  export const testimonialsData = [
    {
        name: "Marion D",
        title: "Client DigitEase",
        image: profile_img_1,
        alt: "Portrait of Donald Jackman",
        rating: 5,
        text: "Nous avions besoin d’un site vitrine moderne et d’un assistant virtuel pour répondre aux premières questions de nos visiteurs. DigitEase a livré une solution élégante, rapide, et le chatbot est aussi performant qu’agréable à utiliser."
    },
    {
        name: "Richard N",
        title: "Client DigitEase",
        image: profile_img_2,
        alt: "Portrait of Richard Nelson",
        rating: 4,
        text: "L’application mobile que DigitEase a développée pour nous est devenue un outil central dans notre quotidien. L’agent IA intégré automatise des tâches répétitives et nous fait gagner plusieurs heures par semaine. Un vrai partenaire technologique."
    },
    {
        name: "Alexandre P",
        title: "Client DigitEase",
        image: profile_img_3,
        alt: "Portrait of James Washington",
        rating: 5,
        text: "Nous souhaitions offrir une expérience personnalisée à nos utilisateurs. Grâce à leur expertise en développement web et en IA, nous avons déployé un agent conversationnel qui comprend vraiment les besoins de nos clients. Le résultat dépasse nos attentes."
    }
];