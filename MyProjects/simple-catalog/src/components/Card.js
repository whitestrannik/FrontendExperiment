import React from 'react';
import './Card.css';

const Card = ({id, name, description, lastUpdate, img}) => {
        return (
            <div className="card bg-secondary mx-auto">
                <div className="card-header text-white border-danger font-weight-bold">
                    {id}
                </div>
                
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}.</p>
                    <p className="card-text"><small className="text-muted">Last updated {lastUpdate} mins ago</small></p>
                    <img className="img-thumbnail" src={img} alt=""/>
                </div>

                <div className="card-footer bg-light ">
        <small className="text-muted">Last updated {lastUpdate} mins ago</small>
                </div>
            </div>
        );
    }

export default Card;    