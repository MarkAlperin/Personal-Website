const mapImage = require("./map.png");
const sdcImage = require("./sdc.png");
// const fecGif = require("./fecGif.gif");
const fecImage = require("./fec.png");
const cardImage = require("./cards.png");
const arcImage = require("./arc.png");

const projects = [
  {
    name: "Secret Card Club",
    description: "A mobile playing card sandbox game for up to 8 players.",
    techs: [
      "React-Native, ",
      "Node.js, ",
      "uWebSockets, ",
      "PostgreSQL, ",
      "Express ",
    ],
    github: "https://github.com/SecretCardClub",
    bullets: [
      "Implemented custom card deck and table sandbox UX with the React-Native PanResponder and Gesture Responder systems to intuitively simulate real life interactions.",
      "Used the React-Native Animated library to synchronously display player actions to all users.",
      "Leveraged uWebSockets create a real time data stream between the server and the clients.",
    ],
    image: cardImage,
  },
  {
    name: "Project Greene",
    description:
      "Interactive donation website to connect and broker exchanges between local users.",
    position: "Front-End Engineer",
    techs: [
      "React, ",
      "GoogleMaps, ",
      "Node.js, ",
      "Firebase, ",
      "PostgreSQL, ",
      "Socket.io",
    ],
    github: "https://github.com/GreeneOcean/Project_Greene",
    bullets: [
      "Created map components with the GoogleMaps API to provide UI/UX for local-to-user data.",
      "Built out React functionality for the landing, browse, and item pages for an intuitive user experience.",
      "Implement Socket.io video chat to allow user-to-user communication.",
    ],
    image: mapImage,
  },
  {
    name: "Cradle Mountain API",
    description:
      "Backend system designed to handle production level traffic for 15 million data entries.",
    position: "Back-End Engineer",
    techs: [
      "Node.js, ",
      "AWS, ",
      "MongoDB, ",
      "Nginx, ",
      "Loader.io, ",
      "Express",
    ],
    github: "https://github.com/TeamThyme/ratings-reviews-api",
    bullets: [
      "Aggregated 15 million documents to a MongoDB database and optimized to reach API query response times of 14ms.",
      "Horizontally scaled with Nginx and 3 AWS servers to increase capacity from 500 rps to 1400 rps.",
      "Used Loader.io to monitor the performance of the API and optimize the load balancer.",
    ],
    image: sdcImage,
  },
  {
    name: "Cradle Mountain",
    description:
      "E-commerce front page that allows users to shop for clothing products, read and write reviews.",
    position: "Front-End Engineer",
    techs: ["React, ", "Redux, ", "AWS, ", "Axios, ", "CSS3 "],
    github: "https://github.com/CradleMountain/wouldawoodshopshopwood",
    bullets: [
      "Built custom carousels (vertical, horizontal, nested) with React and CSS3 that directed users to products.",
      "Implemented the state management tool React Redux to integrate multiple widgets from different developers and reduce refactor times.",
      "Built API interactivity with Axios to gather product data and persist user shopping data.",
    ],
    image: fecImage,
  },
  {
    name: "ARC Calendar App",
    description:
      "My first React project, this is an interactive event calendar for a local marksmanship club in Austin, TX. It was build during a two day sprint.",
    position: "Front-End Engineer",
    techs: ["React, ", "FireBase, ", "Axios, ", "DateFNS"],
    github: "https://github.com/MarkAlperin/arc-website-app",
    bullets: [
      "Used custom React calendar to display event data to the user.",
      "Implemented Google Firebase's RealTime Database to allow users to create and rsvp to events.",
      "Leveraged the DateFNS library to create recurring events funtionality. ",
    ],
    image: arcImage,
  },
];

export default projects;
