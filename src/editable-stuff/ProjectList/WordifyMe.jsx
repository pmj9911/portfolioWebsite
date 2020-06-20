import { ProjectBuilder } from "../../components/Project/ProjectBuilder";
import image1 from "./WordifyMe/WordifyMe-1.jpg";
const WordifyMe = new ProjectBuilder({
    name : "WordifyMe ",
    githubLink :   "https://github.com/pmj9911/WordifyMe",
    //https://github.com/pmj9911/WordifyMe ,
    Technology : ["python-plain-wordmark"],
    updatedOn:  "23 April 2020 ",
    })
    .addHeading("Description:")
    .addParagraph(
      "Made as a part of GRE study, to efficiently remember custom word lists."
    ).addHeading("Screenshots:")
    .addImage(image1);

export default WordifyMe;