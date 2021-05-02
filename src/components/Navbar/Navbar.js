import {MenuItems} from './MenuItems';
import './Navbar.css';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';



function Navbar() {
    const user = useSelector(state => state.authentication.user);
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
                        
                          <Link className={item.cName} to={item.url}> {item.icon}  {item.title} </Link> 
                          
                     </li>
                   )
               })}  
        </ul>   </ul>
        <h1 className='radio-logo'>Radio<i className="fas fa-compact-disc"></i></h1>
        <h4 className='user'><a href="/login"><i class="fas fa-user"></i></a> {user?"Hi " + user.firstName + "!":""}</h4>
      </nav>
    );
  }
  

  export default Navbar