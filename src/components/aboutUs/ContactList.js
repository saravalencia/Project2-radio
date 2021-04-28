import React from "react";
import Cards from "./Cards";

const contacts = [
  {
    name: "Img1",
    img: "https://www.informador.mx/__export/1591209620028/sites/elinformador/img/2020/06/03/whatsapp_image_2020-06-03_at_1_22_36_pm_x1x_crop1591209586178.jpg_1034156727.jpg",
    text: "aewfjah lfkhaelwifu aehfkas saklgf sakfg skfg lfg askdfhg aligf  "
  },
  {
    name: "Img2",
    img: "https://www.informador.mx/__export/1591209620028/sites/elinformador/img/2020/06/03/whatsapp_image_2020-06-03_at_1_22_36_pm_x1x_crop1591209586178.jpg_1034156727.jpg",
    text: "aewfjah lfkhaelwifu aehfkas saklgf sakfg skfg lfg askdfhg aligf  "
  },
  {
    name: "Img3",
    img: "https://www.informador.mx/__export/1591209620028/sites/elinformador/img/2020/06/03/whatsapp_image_2020-06-03_at_1_22_36_pm_x1x_crop1591209586178.jpg_1034156727.jpg",
    text: "aewfjah lfkhaelwifu aehfkas saklgf sakfg skfg lfg askdfhg aligf  "
  },
  {
    name: "Img4",
    img: "https://www.informador.mx/__export/1591209620028/sites/elinformador/img/2020/06/03/whatsapp_image_2020-06-03_at_1_22_36_pm_x1x_crop1591209586178.jpg_1034156727.jpg",
    text: "aewfjah lfkhaelwifu aehfkas saklgf sakfg skfg lfg askdfhg aligf  "
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