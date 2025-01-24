import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const About = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <h1>A PROPOS</h1>
        
        <br />

        <p>Un site « fou de food » mettant en lumière notre pool de Papa Poule , qu'ils soient cuistots en herbe ou expérimentés, artistes célèbres ou anonymes. </p>

        <br />
        <p>
        Tous les mois retrouvez le challenge d'un de nos Daddies qui, avec un caddie de 10 € maximum , cuisinera pour ses chérubins un plat et un dessert de son choix .
        Mais, puisque la vérité sort toujours de la bouche des enfants,  la cuisine du Papa poule sera notée par ses poussins …
        et ça se fera …. SANS CONCESSIONS
        Puisque nous avons conscience de la petitesse du  budget , notre Cook aura le droit d'utiliser 2 aliments déjà présents dans son frigo ou son placard .</p>
        </div>
    );
};

export default About;