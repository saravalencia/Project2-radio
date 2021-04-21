import Navbar from './components/Navbar/Navbar';
import './App.css';
import {Map} from './components/map/Map';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AboutUs from './components/Navbar/AboutUs';
import Cards from './components/Navbar/Cards';
import Footer from './components/Navbar/Footer';


function App()  {

  return (
    <div className="App">
    <BrowserRouter>
    <Switch>
        <Route exact path="/">
            <Navbar />
            <Map />
        </Route>

        <Route path="/discover">
        <Navbar />
        "Discover components go here."
        <player />
        </Route>

        <Route path="/favourites">
        <Navbar />
        "Favourites components go here."
        <player />
        </Route>
        
        <Route path="/about">
            <Navbar />
            <AboutUs title="The Radio APP" subtitle="The first Radio App that you can listen everywhere, it's here, it's possible!" p="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
            <div className="cards">
            <Cards 
            
            title="Card title" imageUrl="https://media-exp1.licdn.com/dms/image/C4D35AQHnvSJwk2WnYQ/profile-framedphoto-shrink_400_400/0/1616751288915?e=1619020800&v=beta&t=AYiQipCV-EO4M9iAYKluWOGJiAKEi9C3CuRrgZxro9o" body="Lorem ipsum dolor sit amet consectetur adipiscing elit varius, nunc mus facilisis libero at primis tortor ridiculus euismod, sodales feugiat sociosqu pulvinar lectus malesuada vitae."  title="Card title"/>
                        
            <Cards 
            
            title="Card title" imageUrl="https://media-exp1.licdn.com/dms/image/C5103AQHrtZnWekF-5A/profile-displayphoto-shrink_400_400/0/1517053091488?e=1624492800&v=beta&t=twg_gcQjkzslHEu3bMZtTQRvbsvRayrActKuU8YSEAQ" body="Lorem ipsum dolor sit amet consectetur adipiscing elit varius, nunc mus facilisis libero at primis tortor ridiculus euismod, sodales feugiat sociosqu pulvinar lectus malesuada vitae."  title="Card title"/>

            <Cards 
            
            title="Card title" imageUrl="https://media-exp1.licdn.com/dms/image/C4E03AQE0KUWGKGmhQg/profile-displayphoto-shrink_400_400/0/1517477429801?e=1624492800&v=beta&t=rz0WJzpeFt_WGQHxfvNF_T1ap2elFRW0Bi0iKIJ-o0k" body="Lorem ipsum dolor sit amet consectetur adipiscing elit varius, nunc mus facilisis libero at primis tortor ridiculus euismod, sodales feugiat sociosqu pulvinar lectus malesuada vitae."  title="Card title" />

            <Cards 
            
            title="Card title" imageUrl="https://media-exp1.licdn.com/dms/image/C4D03AQE61frc8lNsXg/profile-displayphoto-shrink_400_400/0/1569238818077?e=1624492800&v=beta&t=UEOiuY0DgwU7MwyhNxuoR7v6zN28l1b4Imodj-DppCg" body="Lorem ipsum dolor sit amet consectetur adipiscing elit varius, nunc mus facilisis libero at primis tortor ridiculus euismod, sodales feugiat sociosqu pulvinar lectus malesuada vitae."  title="Card title"/>
         </div>
         <player />
         <Footer />
        </Route>
        
        </Switch>
        </BrowserRouter>
    
        </div>
  );
}

export default App;