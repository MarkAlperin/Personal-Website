

const projects = [
  {
    name: "Tennis Time",
    description: "A web app that the client to schedule future tennis court bookings, which are handled by a bot.",
    techs: [
      "React, ",
      "MUI, ",
      "AWS, ",
      "Node, ",
      "Express, ",
      "MongoDB, ",
      "Puppeteer",
    ],
    github: "https://github.com/MarkAlperin/Tennis_Time",
    bullets: [
      "Created a reservation system with Node, AWS, and MongoDB that allows the client to schedule future tennis court bookings.",
      "Leveraged the MUI library to create a user-friendly interface.",
      "Created a bot with puppeteer that automatically schedules tennis court bookings for the client.",
    ],
    imageL: "tennisTime54.webp",
    imageS: "tennisTime24.webp",
    alt: "a web app that allows the client to schedule future tennis court bookings.",
    link: "/tennis-time",
  },
  {
    name: "Just Cards",
    description: "A mobile playing card sandbox game for up to 8 players.",
    techs: [
      "React-Native, ",
      "Node.js, ",
      "PostgreSQL, ",
      "Express ",
    ],
    github: "https://github.com/SecretCardClub",
    bullets: [
      "Created dynamic screen location detection for sandbox UX with the React-Native PanResponder system to intuitively simulate drag and drop interactions.",
      "Used the React-Native Animated library to synchronously display player actions to all users.",
      "Leveraged React-Native’s Gesture Responder system to build gesture based interactions for cards."

    ],
    imageL: "cards54.webp",
    imageS: "cards24.webp",
    alt: "a mobile playing card sandbox game",
  },
  {
    name: "Local Donation Exchange",
    description:
      "Interactive donation website to connect and broker exchanges between local users.",
    position: "Front-End Engineer",
    techs: [
      "React, ",
      "GoogleMaps, ",
      "Node.js, ",
      "Firebase, ",
      "PostgreSQL ",
    ],
    github: "https://github.com/GreeneOcean/Project_Greene",
    bullets: [
      "Created map components with the GoogleMaps API to provide UI/UX for local-to-user data.",
      "Built out React functionality for the landing, browse, and item pages for an intuitive user experience.",
      "Implemented descriptive tags in PostgreSQL to improve user filtering and searching for donations."
    ],
    imageL: "map54.webp",
    imageS: "map18.webp",
    alt: "an image of google maps displaying local donations"
  },
  {
    name: "Shopping API Redesign",
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
    imageL: "sdc54.webp",
    imageS: "sdc18.webp",
    alt: "perfomance measurments for an API"
  },
  {
    name: "Clothing Website Front-End",
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
    imageL: "fec36.webp",
    imageS: "fec54.webp",
    alt: "an image of a clothing website front page"
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
    imageL: "arc54.webp",
    imageS: "arc24.webp",
    alt: "an image of a calendar app for a local marksmanship club"
  },
];

export default projects;
