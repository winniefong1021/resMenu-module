import { createGlobalStyle } from "styled-components";
import React from 'react';
import $ from 'jquery';
import Header from './Header.jsx';
import Menu from './Menu.jsx';
import Sidebar from './Sidebar.jsx';
import exampleData from './exampleData.js';


const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
    font-family: 'Montserrat', sans-serif;

    // @import url('https://fonts.googleapis.com/css?family=Notable');
    // font-family: 'Notable', sans-serif;

    // @import url('https://fonts.googleapis.com/css?family=Oswald&display=swap')
    // font-family: 'Oswald', sans-serif;

  }
`


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            q: this.props.match.params.name,
            res: {}
        })
    }


    search() {
        $.ajax({
            method: 'GET',
            url: '/API/res/' + this.state.q,
            success: (data) => {
                data = JSON.parse(data);
                this.setState({
                    res: data
                })
            },
            error: (err) => {
                console.log(err);
            }
        })
    }

    componentDidMount() {
        this.search();
    }
    render() {
        if (Object.keys(this.state.res).length === 0) {
            return <div></div>
        } else {
            return (
                <div>
                    <GlobalStyles></GlobalStyles>
                    <Header res={this.state.res} />
                    <Menu menus={this.state.res.menus} />
                    {/* <Sidebar res={this.state.res} /> */}
                </div>

            )
        }

    }
}

export default App;


//https://github.com/ganderzz/react-scroll-to
//https://newyork-anthonyng.github.io/articles/deliberate_practice/005_react_scroll_to/source.html
//https://codeburst.io/what-i-learned-from-reading-react-scroll-to-5018ed3726fa
// switch (this.state.page) {
//     case 'Overview':
//     case 'Photos':
//     case 'Menu':
//     case 'Reviews':
//     case 'Twitter':
// }
