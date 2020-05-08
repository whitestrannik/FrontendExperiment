import React from 'react';
import './Catalog.css';
import Card from './Card';

const Catalog = ({goods}) => {
        return (
            <div className="container-fluid">
                <div className="card-deck p-3">
                    {
                        goods.map((good, i) => {
                            return (
                                <Card
                                    id = {good.id}
                                    name = {good.name}
                                    description = {good.description}
                                    lastUpdate = {good.lastUpdate}
                                    img = {good.img}
                                />
                            );
                        })
                    }
                </div>
            </div>
        );
    }

export default Catalog;