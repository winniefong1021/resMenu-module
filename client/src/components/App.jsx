import React from 'react';


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = ({
            restaurantName : 'Bask',
            repo: {}
        });
        this.searchR = this.searchR.bind(this);
    }
    searchR(q){
        
    }

    componentDidMount(){
        this.searchR(this.state.restaurantName)
    }
    render(){
        return (
            <h1>Hi</h1>
        )
    }
}

export default App ;


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
