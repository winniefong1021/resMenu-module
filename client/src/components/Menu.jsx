import React from 'react';
import styled from 'styled-components';
import SubSubMenu from './SubSubMenu.jsx';
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.section`
  padding: 0.5rem;
  border-bottom: 1px solid #d8d9db;
  margin: 0 0 0.25rem;
  font-size : 2rem
`;

const SubMenuWrapper = styled.section`
  padding: 0.5rem;
  border-bottom: 1px solid #d8d9db;
  margin: 0 0 0.25rem;
  font-size : 1rem
`;

const LongMenuBox = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
`
const MenuBox = styled.div`
  background-color: white;
  display: flex;
  max-height: 500px;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  .Readmore{
    position: absolute; 
    bottom: 0; 
    left: 0;
    height: 400px;
    width: 100%; 
    text-align: center; 
    margin: 0; padding: 30px 0; 
    /* "transparent" only works here because == rgba(0,0,0,0) */
    background-image: linear-gradient(to bottom, transparent, white);  
  }
`

const Float = styled.button`
    align-self: center;
    border: 1px solid #d8d9db;
    width: 20%;
    font-family: 'Montserrat',sans-serif;
    font-size: .875rem;
    font-weight: 500;
    line-height: 1;
    background: transparent;
    border: 1px solid lightgrey;
    :hover {
    border: 2px solid red;
    }
    &:focus {
    outline:0
    border: 2px solid red;
    };
    margin: 1em;
    padding: 0.5em;
    position: fixed;
	bottom:40px;
	background-color:white;
    :hover {
        border: 2px solid red;
      }
	text-align:center;
`



const SubMenuButton = styled.section`
    border-bottom: 1px solid #d8d9db;
    display: flex-wrap;
    align-items: center;
    height: 4rem;
`;
const Button = styled.button`
    align-items: center;
    border: 1px solid #d8d9db;
    font-family: 'Montserrat',sans-serif;
    font-size: .875rem;
    font-weight: 500;
    line-height: 1;
    background: transparent;
    border: 1px solid lightgrey;
    :hover {
    border: 2px solid red;
    }
    &:focus {
    outline:0
    border: 2px solid red;
    };
    margin: 1em;
    padding: 0.5em;
`
class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listing: this.props.menus.map(i => {
                return i.name
            }),
            subMenu: this.props.menus[0],
            collapse: true
        }
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
            <Container>
                <Wrapper>Menu</Wrapper>
                <SubMenuButton>
                    {this.makeButtons()}
                </SubMenuButton>
                <SubMenuWrapper>
                    <SubMenu subMenu={this.state.subMenu} collapse={this.state.collapse} expand={this.expandMenu} />
                </SubMenuWrapper>
            </Container>
        );
    }
}

var SubMenu = ({ subMenu, collapse, expand }) => {
    subMenu.menus = subMenu.menus.slice(0, 6);
    var longMenu = subMenu.menus.map((i, idx) => {
        return (
            <SubSubMenu key={idx.toString()} subsubMenu={i}>
            </SubSubMenu>
        )
    })
    if (!collapse) {
        return (
            <LongMenuBox>
                {longMenu}
                <Float>
                    <div href="#" className="menuButton" onClick={expand}>Collapse</div>
                </Float>
            </LongMenuBox>)
    } else {
        return (
            <MenuBox>
                <SubSubMenu subsubMenu={subMenu.menus[0]}></SubSubMenu>
                <div className="Readmore">
                </div>
                <Float>
                    <div href="#" className="menuButton" onClick={expand}>Expand</div>
                </Float>
            </MenuBox>
        )
    }
}

export default Menu;