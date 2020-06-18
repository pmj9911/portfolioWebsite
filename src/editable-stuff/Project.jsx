import { ProjectBuilder } from "../components/Project/ProjectBuilder";
// import vesimImage from "./ProjectImages/VESIM.jpeg";
// import nmimsImage from "./ProjectImages/NMIMS.jpeg";
// import hbtbImage from "./ProjectImages/HackByTheBeach.jpeg";
// import vitImage from "./ProjectImages/VIT-HACK.jpeg";

const Projectlist = [];

const WordifyMe = new ProjectBuilder({
    name : " WordifyMe ",
    githubLink :   " https://github.com/pmj9911/WordifyMe/archive/master.zip ",
    //https://github.com/pmj9911/WordifyMe ,
    Technology : ["Python", "Shell"],
    updatedOn:  " 23 April 2020 ",
    })
Projectlist.push(WordifyMe);

const Segro = new ProjectBuilder({
    name : " Segro An end to end solution for waste segregation, collection and disposal   ",
    githubLink :   "https://github.com/pmj9911/Segro/archive/master.zip ",
    // https://github.com/pmj9911/Segro ,
    Technology : [" CSS", " Python", " HTML", " JavaScript" ],
    updatedOn:  " 9 June 2020 ",
    })
Projectlist.push(Segro);
  
const Rhea = new ProjectBuilder({
    name : " RHEA Real Time Revision Assistant For Courses",
    githubLink :   "  https://github.com/pmj9911/RHEA/archive/master.zip ",
    // https://github.com/pmj9911/RHEA 
    Technology :[ "  TypeScript", "  HTML", "  JavaScript", "  CSS"], 
    updatedOn:  " 16 June 2020 ",
})
Projectlist.push(Rhea);

const Vote = new ProjectBuilder({
    name : " Vote-Application",
    githubLink :   "  https://github.com/pmj9911/Vote-Application/archive/master.zip ",
    // https://github.com/pmj9911/Vote-Application ,
    Technology : [" JavaScript", " HTML", " Solidity"],
    updatedOn:  " 11 June 2020 ",
    })
Projectlist.push(Vote);

const SDASRP = new ProjectBuilder({
name : "Student-Depression-And-Suicide-Rate-Prediction",
    githubLink  :  " https://github.com/pmj9911/Student-Depression-And-Suicide-Rate-Prediction/archive/master.zip ",
    updatedOn: "31 March 2020 " ,
    Technology : ["Jupyter Notebook"],
    // https://github.com/pmj9911/Student-Depression-And-Suicide-Rate-Prediction 
})
Projectlist.push(SDASRP);
  
const DLProject = new ProjectBuilder({
    name : " DL-Projects",
    githubLink :   "  https://github.com/pmj9911/DL-Projects/archive/master.zip ",
    // https://github.com/pmj9911/DL-Projects ,
    Technology : [" Python" ],
    updatedOn:  " 27 May 2020 ",
    })
Projectlist.push(DLProject);

const FlutterAll = new ProjectBuilder({
    name : " flutter-all",
    githubLink :   "  https://github.com/pmj9911/flutter-all/archive/master.zip ",
    //https://github.com/pmj9911/flutter-all ,
    Technology : [" Dart"],
    updatedOn:  " 9 June 2020 ",
    })
Projectlist.push(FlutterAll);

// const DjagoRest = new ProjectBuilder({
//     name : " Django-Rest-Example ",
//     githubLink :   " https://github.com/pmj9911/Django-Rest-Example/archive/master.zip ",
//     //https://github.com/pmj9911/Django-Rest-Example ,
//     //Technology1 : " Python",
//     updatedOn:  " 6 June 2020 ",
//     })
// Projectlist.push(DjagoRest);

const HealthApp = new ProjectBuilder({
    name : " healthApp",
    githubLink :   "https://github.com/pmj9911/healthApp/archive/master.zip ",
    //https://github.com/pmj9911/healthApp ,
    Technology : [" Dart"],
    updatedOn:  " 22 December 2019 ",
    })
Projectlist.push(HealthApp);

const TSS = new ProjectBuilder({
    name : " Twitter-Sentiment-Analyser",
    githubLink :   "https://github.com/pmj9911/Twitter-Sentiment-Analyser/archive/master.zip ",
    // https://github.com/pmj9911/Twitter-Sentiment-Analyser ,
    Technology : [" JavaScript", " Python", " HTML", " CSS"],
    updatedOn:  " 13 December 2019 ",
    })
Projectlist.push(TSS);

const PrimeVideoClone = new ProjectBuilder({
    name : " PrimeVideo_Clone",
    githubLink :   "  https://github.com/pmj9911/PrimeVideo_Clone/archive/master.zip ",
    // https://github.com/pmj9911/PrimeVideo_Clone ,
    Technology :[ " JavaScript", " Python", " HTML", " CSS"],
    updatedOn:  " 8 September 2019 ",
    })
Projectlist.push(PrimeVideoClone);

const FlaskBlog = new ProjectBuilder({
    name : " Flask-Blog ",
    githubLink :   " https://github.com/pmj9911/Flask-Blog/archive/master.zip ",
    // https://github.com/pmj9911/Flask-Blog ,
    Technology : [" HTML", " Python", " CSS" ],
    updatedOn:  " 2 November 2019 ",
    })
Projectlist.push(FlaskBlog);

const  DjangoBlog = new ProjectBuilder({
    name : " Django-Blog ",
    githubLink :   " https://github.com/pmj9911/Django-Blog/archive/master.zip ",
    // https://github.com/pmj9911/Django-Blog ,
    Technology :[ " Python", " HTML", " CSS", " JavaScript"],
    updatedOn:  " 8 July 2019 ",
    })
Projectlist.push(DjangoBlog);

// const DAV = new ProjectBuilder({
//     name : " Data-analytics-and-visualisation All the code and data sets worked on during the training by suven consultants pvt ltd for Data analytics and visualisation using R ",
//     githubLink :   " https://github.com/pmj9911/Data-analytics-and-visualisation/archive/master.zip ",
//     // https://github.com/pmj9911/Data-analytics-and-visualisation ,
//     //Technology1 : " R ",
//     updatedOn:  " 23 June 2019 ",
//     })
// Projectlist.push(DAV);

// const LOC = new ProjectBuilder({
//     name : " LOC-Empower Project created for,  LOC- lines of code organised by ACM of  D. J. Sanghvi , A 24 hr hackathon. team members are:  ",
//     githubLink :   "https://github.com/pmj9911/LOC-Empower/archive/master.zip ",
//     // https://github.com/pmj9911/LOC-Empower ,
//     //Technology1 : "TypeScript",
//     //Technology2 : " HTML",
//     //Technology3 : " CSS",
//     //Technology4 : " JavaScript",
//     updatedOn:  " 6 June 2020 ",
//     })
// Projectlist.push(LOC);

// const Codeshashtra = new ProjectBuilder({
//     name : " CODESHASHTRA-fintech Project created when participated in the Codeshashtra 5.0 hackathon organised by CSI of D J Sanghvi on 2nd and 3rd march 2019  ",
//     githubLink :   "https://github.com/pmj9911/CODESHASHTRA-fintech/archive/master.zip ",
//     // https://github.com/pmj9911/CODESHASHTRA-fintech ,
//     //Technology1 : " TypeScript",
//     //Technology2 : " HTML",
//     //Technology3 : " CSS",
//     //Technology4 : " JavaScript" ,
//     updatedOn:  " 6 June 2020 ",
//     })
// Projectlist.push(Codeshashtra);

const Cricbuzz = new ProjectBuilder({
    name : " Cricbuzz  ",
    githubLink :   "https://github.com/pmj9911/Cricbuzz/archive/master.zip ",
    // https://github.com/pmj9911/Cricbuzz ,
    Technology : [" JavaScript"],
    updatedOn:  " 6 June 2020 ",
    })
Projectlist.push(Cricbuzz);

// const TravelWebsite = new ProjectBuilder({
//     name : " TravelWebsite  ",
//     githubLink :   "https://github.com/pmj9911/TravelWebsite/archive/master.zip ",
//     // https://github.com/pmj9911/TravelWebsite ,
//     // //Technology1: JavaScript: 55.8 %",
//     //Technology2 : " HTML",
//     //Technology3 : " CSS",
//     //Technology4 : " PHP" ,
//     updatedOn:  " 18 April 2019 ",
//     })
// Projectlist.push(TravelWebsite);

// const SEProject = new ProjectBuilder({
//     name : " SE_Project Project made as a part of OOP Course.  ",
//     githubLink :   "https://github.com/pmj9911/SE_Project/archive/master.zip ",
//     // https://github.com/pmj9911/SE_Project ,
//     //Technology1 : " JavaScript",
//     //Technology2 : " Java",
//     updatedOn:  " 6 February 2019 ",
//     })
// Projectlist.push(SEProject);

// const Hangman = new ProjectBuilder({
//     name : " FE_Project A hangman game written in C language.  ",
//     githubLink :   "https://github.com/pmj9911/FE_Project/archive/master.zip ",
//     //https://github.com/pmj9911/FE_Project ,
//     //Technology1 : " C",
//     updatedOn:  "  6 February: 2019",
//     })
// Projectlist.push(Hangman);

export default Projectlist;
