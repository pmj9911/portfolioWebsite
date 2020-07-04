import { ProjectBuilder } from "../../components/Project/ProjectBuilder";
import image1 from "./WordifyMe/WordifyMe-1.jpg";
const WordifyMe = new ProjectBuilder({
    name : "WordifyMe ",
    githubLink :   "https://github.com/pmj9911/WordifyMe",
    //https://github.com/pmj9911/WordifyMe ,
    Technology : ["python-plain-wordmark"],
    description: "Made as a part of GRE study, to efficiently remember custom word lists. It is a mobile application, made using Flutter. There is no login system in this app yet. All the data is stored in a central server hosted on pythonanywhere.",
    projectDuration:  "March 2020 - June 2020 ",
    })
    .addHeading("Description:")
    .addParagraph(
      ""
    ).addHeading("Screenshots:")
    .addImage(image1);

export default WordifyMe;