import React from 'react';
import broda from "../../images/broda.png";
import wlosy from "../../images/wlosy.png";
import calosc from "../../images/calosc.png"

const PriceList = () => {
    return (
            <section className='price-list'>
                <div className="container text__container">
                    <div className="price__box__container">
                        <div className="price__box first__box">
                            <img className="opening__logo" src={wlosy} alt="włosy"/>
                            <h2 className="box__tittle">Głowa</h2>
                            <p className="box__text">30 PLN</p>
                        </div>

                        <div className="price__box second__box">
                            <img className="opening__logo" src={broda} alt="broda"/>
                            <h2 className="box__tittle">Broda</h2>
                            <p className="box__text">25 PLN</p>
                        </div>
                        <div className="price__box third__box">
                            <img className="opening__logo" src={calosc} alt="włosy i broda"/>
                            <h2 className="box__tittle">Głowa + <br/> Broda</h2>
                            <p className="box__text">50 PLN</p>
                        </div>


                    </div>
                </div>
            </section>

    );
};

export default PriceList;