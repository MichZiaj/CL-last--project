import React from 'react';
import logo2 from '../../images/logo2.png';

const Home = () => {
    return (
        <>
            <section className='opening'>
            <div className="container">
                <div className='opening__content'>
                    <img className="opening__logo" src={logo2} alt="Logo"/>
                </div>
            </div>
        </section>

        </>
    );
};

export default Home;
