import React from 'react';
import ziza from '../../images/ziza.jpeg';

const About = () => {
    return (
        <section className='about-us'>
            <div className="container text__container">
                <div className="about-us__container">
                    <img className="about-us__photo" src={ziza} alt="Zdjęcie barber"/>

                    <div className="about-us__box">
                        <h2 className="about-us__tittle">Michał Gigoń</h2>
                        <p className="about-us__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae commodi corporis doloremque dolores dolorum eius eligendi error ipsum magnam, nisi nostrum possimus voluptatum. Beatae consequatur consequuntur dicta dignissimos dolorem, incidunt libero nam perferendis quae quo, totam voluptate. Illum modi quasi repellat repudiandae similique! Beatae dicta iure nostrum quae sed, sequi.</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
