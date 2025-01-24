import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';


const Home = () => {
    return (
        <div>
            <Logo />
           <Navigation />
                     
           <h1>Accueil</h1>
           <div className="logo2">
            {/* Les images importées depuis la balise img sont accessibles dans "public" */}
            <img src="./Vintage_Text_Effect_7-DaddiesCook-2.png" alt="logo Daddies Cook" />
            {/* <h3>Daddies Cook</h3> */}
        </div>
        </div>
    );
};

export default Home;