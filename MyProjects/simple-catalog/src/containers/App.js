import React, { Component } from 'react';
import Catalog from '../components/Catalog';
import NavigationBar from '../components/NavigationBar';
import './App.css'
import logo from '../design_concept/logo_transparent.png';

class App extends Component {
    constructor() {
        super();

        this.state = {
            goods : [],
            region: null,
            searchString: ''
        }
    }
    
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/albums')
          .then(response=> response.json())
          .then(json => {this.setState({ goods: json})});
        }


    render() {
        const resultGoods = this.state.goods
            .filter((good, i) => { return (i > 25);  })
            .map((good, i) => {
                return {
                  id: `ID${good.id}234`,
                  name: good.title,
                  description: "Descrption: " + good.title,
                  lastUpdate: Math.floor(Math.random() * 10), 
                  img: `https://robohash.org/${good.id}?size=200x200`   
                };
            });


        return (
            <div>
                <header className="sc-header jumbotron jumbotron-fluid text-center text-white">
                    <div className="container p-0">
                        <div className="row align-items-center">
                            <div className="col-sm-3">
                                <img className="sc-logo mx-auto" src={logo} alt="Logo" />
                            </div>
    
                            <div className="col-sm-9">
                                <h2>Simple catalog portal</h2>
                                <h6 className="text-light">There you can find all that you need for daily life and a lot of other usefull staff</h6>
                            </div>
                        </div>
                    </div>
                </header>

                <NavigationBar />

                <Catalog goods = {resultGoods}/>

                <footer className="sc-footer ">
                    <p className="text-center my-auto mx-auto text-white">Footer. All right reserved (c)!</p>
                </footer>
            </div>
        );
    }
}

export default App;