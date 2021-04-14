import {MenuItems} from './MenuItems';
import './Navbar.css';
import {useState} from 'react';


function Navbar() {

    const [click, clicked] = useState(false)

    const handleClick = () => {
        clicked(!click);
    } 

    return (
      <nav className='NavbarItems'>
         
          <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <ul >
              <ul className={click ? 'nav-menu active' : 'nav-menu'}  >
               {MenuItems.map((item, index) => {
                   return(
                     <li key={index}>
                         <a className={item.cName} href={item.url}>
                           {item.icon}  {item.title}
                        </a>
                     </li>
                   )
               })}  
        </ul>   </ul>
        <h1 className='radio-logo'>Radio<i className="fas fa-compact-disc"></i></h1>
      </nav>
    );
  }
  

  export default Navbar