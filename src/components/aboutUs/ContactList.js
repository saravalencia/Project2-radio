import React from "react";
import Cards from "./Cards";

const contacts = [
  {
    name: "Sara",
    img: "https://media-exp1.licdn.com/dms/image/C5603AQGJqAl6bSSwxQ/profile-displayphoto-shrink_800_800/0/1619096629941?e=1625702400&v=beta&t=Q_68FpeScQESKLZuVx5U43-gfI-YWPJgYc_7PPS59-E",
    text: "Our creator of Radio-APP who had the main idea to develop and designed.",
    linkedin: "https://www.linkedin.com/in/sara-valencia-70180313a/",
    github:  "https://github.com/saravalencia"

  },
  {
    name: "Alba",
    img: "https://media-exp1.licdn.com/dms/image/C4D35AQFPk9yvaD60JA/profile-framedphoto-shrink_800_800/0/1619548777288?e=1620338400&v=beta&t=3KCjlwnl1y_RPsk0hFKuLnNbHkMacy-ckZ2DDyeFuW4",
    text: "Alba is who is in charge of deciding which technologies will be carried out in the APP, in addition to solving any technical problems that may arise.",
    linkedin: "https://www.linkedin.com/in/alba-l%C3%B3pez-meli%C3%A1n-28162558/",
    github:  "https://github.com/Alopmel"

  },
  {
    name: "Manuel",
    img: "https://media-exp1.licdn.com/dms/image/C4E03AQE0KUWGKGmhQg/profile-displayphoto-shrink_800_800/0/1517477429801?e=1625702400&v=beta&t=VcEXENprtUaeSSgCVeD85EPf4WcWBF8D8ms95ZD1ppI",
    text: "Manuel is the developer of our Radio-APP and is in charge of developing both front and back.",
    linkedin: "https://www.linkedin.com/in/manuel-m-358913a7/",
    github:  "https://github.com/manuel-marque"

  },
  {
    name: "Virginia",
    img: "https://media-exp1.licdn.com/dms/image/C4D03AQE61frc8lNsXg/profile-displayphoto-shrink_400_400/0/1569238818077?e=1625702400&v=beta&t=UKQ6w_Tn0rIrZBq8_Lj1sFHAUgCxdYlFmTUy2iCxZCQ",
    text: " Virginia is the developer of our Radio-APP and is in charge of developing both front and back.",
    linkedin: "https://www.linkedin.com/in/virginia-herrera-herrera/",
    github:  "https://github.com/Vir89"

  },
];

const ContactList = () => {
  return (
    <div  className="card-containers" >
      {contacts.map((contact, index) => (
        <Cards
          key={index}
          img={contact.img}
          name={contact.name}    
          linkedin={contact.linkedin}     
          github={contact.github}       
          text={contact.text}
        />
      ))}
    </div>
  );
};

export default ContactList;