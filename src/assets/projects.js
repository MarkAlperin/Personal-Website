const mapImage = require("./map.png");
const sdcImage = require("./sdc.png");
const fecGif = require("./fecGif.gif");
const fecImage = require("./fec.png")

const projects = [
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
    image:
      fecImage,
  },
  {
    name: "Cradle Mountain API",
    description: "Backend system designed to handle production level traffic for 15 million data entries.",
    position: "Back-End Engineer",
    techs: ["Node.js, ", "AWS, ", "MongoDB, ", "Nginx, ", "Loader.io, ", "Express"],
    github: "https://github.com/TeamThyme/ratings-reviews-api",
    bullets: [
      "Aggregated 15 million documents to a MongoDB database and optimized to reach API query response times of 14ms.",
      "Horizontally scaled with Nginx and 3 AWS servers to increase capacity from 500 rps to 1400 rps.",
      "Used Loader.io to monitor the performance of the API and optimize the load balancer.",
    ],
    image: sdcImage,
  },
  {
    name: "Project Greene",
    description: "Interactive donation website to connect and broker exchanges between local users.",
    position: "Front-End Engineer",
    techs: [ "React, ", "GoogleMaps, ", "Node.js, ", "Firebase, ", "Socket.io", ],
    github: "https://github.com/GreeneOcean/Project_Greene",
    bullets: [
      "Created map components with the GoogleMaps API to provide UI/UX for local-to-user data.",
      "Built out React functionality for the landing, browse, and item pages for an intuitive user experience.",
      "Implement Socket.io video chat to allow user-to-user communication.",
    ],
    image: mapImage,
  },
];

export default projects;
