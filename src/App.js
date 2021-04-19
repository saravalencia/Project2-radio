import Navbar from './components/Navbar/Navbar'
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
        <Route path="/about">
            <Navbar />
            <AboutUs title="The Radio APP" subtitle="The first Radio App that you can listen everywhere, it's here, it's possible!" p="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
            <div className="cards">
            <Cards 
            
            title="Card title" imageUrl="https://storage.googleapis.com/quest_editor_uploads/HAzXOReZ8TpEbI18lCQnAQ3DWY20eNbk.png" body="Lorem ipsum dolor sit amet consectetur adipiscing elit varius, nunc mus facilisis libero at primis tortor ridiculus euismod, sodales feugiat sociosqu pulvinar lectus malesuada vitae."  title="Card title" imageUrl="https://storage.googleapis.com/quest_editor_uploads/HAzXOReZ8TpEbI18lCQnAQ3DWY20eNbk.png" body="Lorem ipsum dolor sit amet consectetur adipiscing elit varius, nunc mus facilisis libero at primis tortor ridiculus euismod, sodales feugiat sociosqu pulvinar lectus malesuada vitae."    />
                        
            <Cards 
            
            title="Card title" imageUrl="https://storage.googleapis.com/quest_editor_uploads/HAzXOReZ8TpEbI18lCQnAQ3DWY20eNbk.png" body="Lorem ipsum dolor sit amet consectetur adipiscing elit varius, nunc mus facilisis libero at primis tortor ridiculus euismod, sodales feugiat sociosqu pulvinar lectus malesuada vitae."  title="Card title" imageUrl="https://storage.googleapis.com/quest_editor_uploads/HAzXOReZ8TpEbI18lCQnAQ3DWY20eNbk.png" body="Lorem ipsum dolor sit amet consectetur adipiscing elit varius, nunc mus facilisis libero at primis tortor ridiculus euismod, sodales feugiat sociosqu pulvinar lectus malesuada vitae."    />

            <Cards 
            
            title="Card title" imageUrl="https://storage.googleapis.com/quest_editor_uploads/HAzXOReZ8TpEbI18lCQnAQ3DWY20eNbk.png" body="Lorem ipsum dolor sit amet consectetur adipiscing elit varius, nunc mus facilisis libero at primis tortor ridiculus euismod, sodales feugiat sociosqu pulvinar lectus malesuada vitae."  title="Card title" imageUrl="https://storage.googleapis.com/quest_editor_uploads/HAzXOReZ8TpEbI18lCQnAQ3DWY20eNbk.png" body="Lorem ipsum dolor sit amet consectetur adipiscing elit varius, nunc mus facilisis libero at primis tortor ridiculus euismod, sodales feugiat sociosqu pulvinar lectus malesuada vitae."    />

            <Cards 
            
            title="Card title" imageUrl="https://storage.googleapis.com/quest_editor_uploads/HAzXOReZ8TpEbI18lCQnAQ3DWY20eNbk.png" body="Lorem ipsum dolor sit amet consectetur adipiscing elit varius, nunc mus facilisis libero at primis tortor ridiculus euismod, sodales feugiat sociosqu pulvinar lectus malesuada vitae."  title="Card title" imageUrl="https://storage.googleapis.com/quest_editor_uploads/HAzXOReZ8TpEbI18lCQnAQ3DWY20eNbk.png" body="Lorem ipsum dolor sit amet consectetur adipiscing elit varius, nunc mus facilisis libero at primis tortor ridiculus euismod, sodales feugiat sociosqu pulvinar lectus malesuada vitae."    />
         </div>
         <div className="page-container">
            <div className="content-wrap">
          <h3>Content for Footer</h3>
          </div>
            <Footer />
          </div>
          </Route>
        </Switch>
        </BrowserRouter>
    
        </div>
  );
}

export default App;