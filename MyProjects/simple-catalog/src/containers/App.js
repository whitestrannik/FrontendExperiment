import React, { Component } from "react";
import Catalog from "../components/Catalog";
import NavigationBar from "../components/NavigationBar";
import "./App.css";
import logo from "../design_concept/logo_transparent.png";

class App extends Component {
    constructor() {
        super();

        this.state = {
            goods: [],
            region: "",
            searchString: "",
        };
    }

    onRegionChanged = (regionName) => 
    {
        this.setState({ region: regionName });
    }

    onSearchChanged = (event) => 
    {
        this.setState({ searchString: event.target.value });
        console.log(event.target.value);
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/albums")
            .then((response) => response.json())
            .then((json) => {
                const data = json.map((good, i) =>
                {
                    return {
                        id: `ID${good.id}00001`,
                        name: good.title,
                        description: "Descrption: " + good.title,
                        lastUpdate: Math.floor(Math.random() * 10),
                        region: this.getRegion(),
                        img: `https://robohash.org/${good.id}?size=200x200`,
                    };
                });

                this.setState({ goods: data });
            });
    }

    render() {
        const resultGoods = this.state.goods
            .filter((good, i) => {
                return i < 20 && 
                    (this.state.region === "" || good.region === this.state.region) &&
                    (!this.state.searchString || this.state.searchString === "" || good.name.toLowerCase().includes(this.state.searchString.toLowerCase()));
            });

        return (
            <div>
                <header className="sc-header jumbotron jumbotron-fluid text-center text-white">
                    <div className="container p-0">
                        <div className="row align-items-center">
                            <div className="col-sm-3">
                                <img
                                    className="sc-logo mx-auto"
                                    src={logo}
                                    alt="Logo"
                                />
                            </div>

                            <div className="col-sm-9">
                                <h2>Simple catalog portal</h2>
                                <h6 className="text-light">
                                    There you can find all that you need for
                                    daily life and a lot of other usefull staff
                                </h6>
                            </div>
                        </div>
                    </div>
                </header>

                <NavigationBar onRegionChanged={this.onRegionChanged} onSearchChanged={this.onSearchChanged} />

                <div className="sc-content">
                    <Catalog goods={resultGoods} />
                </div>

                <footer className="sc-footer ">
                    <p className="text-center my-auto mx-auto text-white">
                        Footer. All right reserved (c)!
                    </p>
                </footer>
            </div>
        );
    }

    getRegion() {
        let result = '';
        const key = Math.floor(Math.random() * Math.floor(4))

        switch (key) {
            case 0:
                result = 'Ukraine';
                break;
            case 1:
                result = 'Canada';
                break;
            case 2:
                result = 'USA';
                break;
            case 3:
                result = 'Moldova';
                break;
        
            default:
                console.log("Strange!: " + key);
                break;
        }
        return result;
    }
}

export default App;
