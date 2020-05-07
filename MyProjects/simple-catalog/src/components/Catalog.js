import React, { Component } from 'react';
import './Catalog.css';
import img1 from '../design_concept/img1.jpg';
import img2 from '../design_concept/img2.jpg';
import img3 from '../design_concept/img3.jpg';
import img4 from '../design_concept/img4.jpg';
import img5 from '../design_concept/img5.jpg';

class Catalog extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="card-deck p-3">
                    <div className="card bg-secondary mx-auto">
                        <div className="card-header text-white border-danger font-weight-bold">
                            Good N123123535345
                        </div>
                        
                        <div className="card-body">
                            <h5 className="card-title">Surface tablet PC</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional
                                content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            <img className="img-thumbnail" src={img1} alt=""/>
                        </div>

                        <div className="card-footer bg-light ">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
            
                    <div className="card bg-secondary mx-auto">
                        <div className="card-header text-white border-danger font-weight-bold">
                            Good N123123535345
                        </div>
                        
                        <div className="card-body">
                            <h5 className="card-title">iPad PRO</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional
                                content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            <img className="img-thumbnail" src={img2} alt=""/>
                        </div>

                        <div className="card-footer bg-light">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>

                    <div className="card bg-secondary mx-auto">
                        <div className="card-header text-white border-danger font-weight-bold">
                            Good N123123535345
                        </div>
                        
                        <div className="card-body">
                            <h5 className="card-title">Lenove Legion</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional
                                content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            <img className="img-thumbnail" src={img3} alt=""/>
                        </div>

                        <div className="card-footer bg-light ">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>


                    <div className="card bg-secondary mx-auto">
                        <div className="card-header text-white border-danger font-weight-bold">
                            Good N190
                        </div>
                        
                        <div className="card-body">
                            <h5 className="card-title">Asus ROG</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional
                                content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            <img className="img-thumbnail" src={img4} alt="" />
                        </div>

                        <div className="card-footer bg-light ">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>

                    <div className="card bg-secondary mx-auto">
                        <div className="card-header text-white border-danger font-weight-bold">
                            Good N45347
                        </div>
                        
                        <div className="card-body">
                            <h5 className="card-title">Acer A100</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional
                                content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            <img className="img-thumbnail" src={img5} alt=""/>
                        </div>

                        <div className="card-footer bg-light ">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Catalog;