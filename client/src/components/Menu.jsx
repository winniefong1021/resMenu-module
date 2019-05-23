import React from 'react';
import styled from 'styled-components'

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 1px solid lightgrey;
  :hover {
    border: 1px solid red;
  }
  color: black;
  margin: 0 1em;
  padding: 0.25em 1em;
`
class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            listing: this.props.menus.map(i => {
                return i.name
            }),
            subMenu: this.props[0]
        })
        this.switchMenu = this.switchMenu.bind(this);
    }
    switchMenu(e) {
        this.setState({
            subMenu: this.props.menus[e.target.name]
        })

    }
    makeButtons() {
        var items = this.state.listing.map((i, idx) => {
            return (
                <Button key={idx.toString()} name={idx.toString()} onClick={this.switchMenu}>
                    {i}
                </Button>)
        })
        return items;
    }
    render() {
        return (
            <div>
                <div>
                    {this.makeButtons()}
                </div>
                <div><SubMenu subMenu={this.state.subMenu} /></div>
            </div>
        );
    }
}

var SubMenu = (props) => {

    return <h2></h2>
}
export default Menu;