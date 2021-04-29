import React from "react";
import Cards from "./Cards";

const contacts = [
  {
    name: "Sara, CTO",
    img: "https://www.informador.mx/__export/1591209620028/sites/elinformador/img/2020/06/03/whatsapp_image_2020-06-03_at_1_22_36_pm_x1x_crop1591209586178.jpg_1034156727.jpg",
    text: "Our creator of Radio-APP, is the director of technology, and also has extensive experience in the new technologies sector, and is also the creator of other APPs."
  },
  {
    name: "Alba, Tech Lead",
    img: "https://www.informador.mx/__export/1591209620028/sites/elinformador/img/2020/06/03/whatsapp_image_2020-06-03_at_1_22_36_pm_x1x_crop1591209586178.jpg_1034156727.jpg",
    text: "Alba is our technical leader, who is in charge of deciding which technologies will be carried out in the APP, in addition to solving any technical problems that may arise."
  },
  {
    name: "Manuel, Fullstack",
    img: "https://www.informador.mx/__export/1591209620028/sites/elinformador/img/2020/06/03/whatsapp_image_2020-06-03_at_1_22_36_pm_x1x_crop1591209586178.jpg_1034156727.jpg",
    text: "Manuel, is the developer of our Radio-APP and is in charge of developing both front and back."
  },
  {
    name: "Virginia, Scrum Master",
    img: "https://www.informador.mx/__export/1591209620028/sites/elinformador/img/2020/06/03/whatsapp_image_2020-06-03_at_1_22_36_pm_x1x_crop1591209586178.jpg_1034156727.jpg",
    text: "In charge of following the practices written in the Scrum model."
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
          text={contact.text}
        />
      ))}
    </div>
  );
};

export default ContactList;