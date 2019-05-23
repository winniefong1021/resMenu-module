import React from 'react';
import styled from 'styled-components';

const SidebarBox = styled.div`
  background-color: white;
  display: flex;
  max-height: 200px;
  position: relative;
  overflow: hidden;
  .Readmore{
    position: absolute; 
    bottom: 0; 
    left: 0;
    width: 100%; 
    text-align: center; 
    margin: 0; padding: 30px 0; 
    /* "transparent" only works here because == rgba(0,0,0,0) */
    background-image: linear-gradient(to bottom, transparent, white);  
  }
`

const Float = styled.button`
	position:fixed;
	width:0.5* vw;
	height:0.1* vh;
	bottom:40px;
    left:vw;
	background-color:white;
    color:black;
    text: 6px;
    border: .2rem solid white;
    :hover {
        border: .2rem solid red;
      }
	// border-radius:50px;
	text-align:center;
	// box-shadow: 2px 2px 3px #999;
`


const Flexrow = styled.div`
  background-color: white;
  display: flex;
`

const Flexcolumn = styled.div`
  text-align: left;
  border: .2rem solid white;
  width: ${(props) => props.size / 2 * 100}vw;
`
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid lightgrey;
  :hover {
    border: 2px solid red;
  }
  &:focus {
    outline:0
    border: 2px solid red;

  };
  
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
            subMenu: this.props.menus[0],
            collapse: true
        })
        this.switchMenu = this.switchMenu.bind(this);
        this.expandMenu = this.expandMenu.bind(this);
        this.makeButtons = this.makeButtons.bind(this);
    }
    switchMenu(e) {
        this.setState({
            subMenu: this.props.menus[e.target.name]
        })

    }
    expandMenu(e) {
        this.setState({
            collapse: !this.state.collapse
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
                <div><SubMenu subMenu={this.state.subMenu} collapse={this.state.collapse} expand={this.expandMenu} /></div>
            </div>
        );
    }
}

var SubMenu = ({ subMenu, collapse, expand }) => {
    var descrip = subMenu.description;
    subMenu.menus = subMenu.menus.slice(0, 6);
    var longMenu = subMenu.menus.map((i, idx) => {
        return (
            <SubSubMenu key={idx.toString()} subsubMenu={i}>
            </SubSubMenu>
        )
    })
    if (!collapse) {
        return (
            <div>
                {longMenu}
                <Float>
                    <a href="#" className="button" onClick={expand}>Collapse</a>
                </Float>
            </div>)
    } else {
        return (
            <SidebarBox>
                <SubSubMenu subsubMenu={subMenu.menus[0]}></SubSubMenu>
                <SubSubMenu subsubMenu={subMenu.menus[1]}></SubSubMenu>
                <div className="Readmore">
                </div>
                <Float>
                    <a href="#" className="button" onClick={expand}>Expand</a>
                </Float>
            </SidebarBox>

        )
    }
}

var SubSubMenu = ({ subsubMenu }) => {
    var leftSide = subsubMenu.items.filter((i, idx) => idx % 2 === 0).map((i, idx) => {
        return (
            <div key={idx.toString()} >
                <div>{i.name}</div>
                <div>{i.description}</div>
                <div>{i.basePrice}</div>
            </div>
        )
    });
    var rightSide = subsubMenu.items.filter((i, idx) => idx % 2 === 1).map((i, idx) => {
        return (
            <div key={(idx + 10).toString()} >
                <div>{i.name}</div>
                <div>{i.description}</div>
                <div>{i.basePrice}</div>
            </div>
        )
    });


    return (
        <div>
            <h5>{subsubMenu.name}</h5>
            <Flexrow>
                <Flexcolumn size={1}>
                    {leftSide}
                </Flexcolumn>
                <Flexcolumn size={1}>
                    {rightSide}
                </Flexcolumn>
            </Flexrow>

        </div>
    )
}
export default Menu;