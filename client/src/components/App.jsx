import React from 'react';
import $ from 'jquery';
import Header from './Header.jsx';
import Menu from './Menu.jsx';
import Sidebar from './Sidebar.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
    }


    componentDidMount() {
        console.log(this.props);
    }
    render() {
        return (
            <div>
                <Header repo = {this.props.repo}/>
                <Menu repo = {this.props.repo}/>
                <Sidebar repo = {this.props.repo} />
            </div>

        )
    }
}

export default App;


// https://github.com/ganderzz/react-scroll-to
//https://newyork-anthonyng.github.io/articles/deliberate_practice/005_react_scroll_to/source.html
//https://codeburst.io/what-i-learned-from-reading-react-scroll-to-5018ed3726fa
// switch (this.state.page) {
//     case 'Overview':
//     case 'Photos':
//     case 'Menu':
//     case 'Reviews':
//     case 'Twitter':
// }
