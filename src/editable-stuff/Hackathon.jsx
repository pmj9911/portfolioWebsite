import { HackathonBuilder } from "../components/Hackathon/HackathonBuilder";
import vesimImage from "./HackathonImages/VESIM.jpg";
import nmimsImage from "./HackathonImages/NMIMS.jpeg";
import hbtbImage from "./HackathonImages/HackByTheBeach.jpeg";
import vitImage from "./HackathonImages/VIT-HACK.jpeg";

const Hackathonlist = [];

const vitHack = new HackathonBuilder({
  title: "VIT- Hackathon ",
  image: vitImage,
  languages: ["Python", "Angular", "Flask", "Deep Learning"],
  location:
    "Vellore Institute of Technology, Vellore",
  description: "The track was Education. The problem statement was given by Inversion Consultancy.",
  rank: 1,
  superS: "st",
})
  .addHeading("VIT")
  .addParagraph(
    "Date: 21st- 22nd September, 2019"
  )
  .addParagraph(
    "Location: Vellore, Tamil Nadu"
  );

const nmimsHack = new HackathonBuilder({
  title: "Hack-N-Code 3.0 ",
  image: nmimsImage,
  languages: ["Python", "Django", "Deep Learning"],
  location:
    "Mukesh Patel School of Technology Management & Engineering, Mumbai",
  description: "The problem statement was provided by Capgemini. More than 100 teams were a part of this hackathon.",
  rank: 1,
  superS: "st",
})
  .addHeading("Hack-N-Code 3.0")
  .addParagraph(
    "Date: 13th October, 2019"
  )
  .addParagraph(
    "Location: Mumbai,Maharahstra"
  );

const vesimHack = new HackathonBuilder({
  title: "DATA-QUEZT",
  image: vesimImage,
  languages: ["Python", "Deep Learning"],
  location:
    "Vivekanand Education Society's Institute of Management Studies and Research, Mumbai",
  description: "It was a Data Analytics contest , conducted over 3 days. The problem definition was based on suicide detection ",
  rank: 2,
  superS: "nd",
})
  .addHeading("DATA-QUEZT")
  .addParagraph(
    "Date: 4th-6th December, 2019"
  )
  .addParagraph(
    "Location: Mumbai, Maharashtra"
  );

const HackByTheBeach = new HackathonBuilder({
  title: "Hack by the beach",
  image: hbtbImage,
  languages: ["Python", "Deep Learning"],
  location:
    "Birla Institute of Technology & Science, Sancoale, Goa ",
  description: "We developed an end to end waste management solution, SEGRO. It was a great experience being mentored by the founders of code asylums.",
  rank: 5,
  superS: "th",
})
  .addHeading("VIT")
  .addParagraph(
    "Date: 30st January- 1st February, 2019"
  )
  .addParagraph(
    "Location: Sancoale, Goa"
  );
Hackathonlist.push(HackByTheBeach);
Hackathonlist.push(vesimHack);
Hackathonlist.push(nmimsHack);
Hackathonlist.push(vitHack);

export default Hackathonlist;
