import React from "react";
import Cards from "./Cards";

const contacts = [
  {
    name: "Sara",
    img: "https://www.informador.mx/__export/1591209620028/sites/elinformador/img/2020/06/03/whatsapp_image_2020-06-03_at_1_22_36_pm_x1x_crop1591209586178.jpg_1034156727.jpg",
    text: "Our creator of Radio-APP and designed, and also has extensive experience in the new technologies sector, and is also the creator of other APPs.",
    linkedin: "https://www.linkedin.com/in/sara-valencia-70180313a/",
    github:  "https://github.com/saravalencia"

  },
  {
    name: "Alba",
    img: "https://www.informador.mx/__export/1591209620028/sites/elinformador/img/2020/06/03/whatsapp_image_2020-06-03_at_1_22_36_pm_x1x_crop1591209586178.jpg_1034156727.jpg",
    text: "Alba is our, who is in charge of deciding which technologies will be carried out in the APP, in addition to solving any technical problems that may arise.",
    linkedin: "https://www.linkedin.com/in/alba-l%C3%B3pez-meli%C3%A1n-28162558/",
    github:  "https://github.com/Alopmel"

  },
  {
    name: "Manuel",
    img: "https://www.informador.mx/__export/1591209620028/sites/elinformador/img/2020/06/03/whatsapp_image_2020-06-03_at_1_22_36_pm_x1x_crop1591209586178.jpg_1034156727.jpg",
    text: "Manuel, is the developer of our Radio-APP and is in charge of developing both front and back.",
    linkedin: "https://www.linkedin.com/in/manuel-m-358913a7/",
    github:  "https://github.com/manuel-marque"

  },
  {
    name: "Virginia",
    img: "https://www.informador.mx/__export/1591209620028/sites/elinformador/img/2020/06/03/whatsapp_image_2020-06-03_at_1_22_36_pm_x1x_crop1591209586178.jpg_1034156727.jpg",
    text: ".",
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