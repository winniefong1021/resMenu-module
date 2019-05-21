import React from 'react';
import Description from './Description.jsx';
import { review_icon, price_icon, cuisine_icon, crossStreet_icon, diningStyle_icon } from './Icons.jsx';
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
const Title = styled.h1`
  font-size: 3em;
  text-align: left;
`;
const Wrapper = styled.section`
  padding: 4em;
`;
const StyledTextLine = styled.span`
      color:#333333 100%;
      font-size: 17px;
      font-family: NeuropoliticalRg-Regular;
      word-spacing:0px;
`;

var Header =  ({res})=>{
  var pricelevel_verbal;
  switch (res.priceLevel) {
      case 0: pricelevel_verbal = '$0 to $30'
      case 1: pricelevel_verbal = '$31 to $50'
      case 2: pricelevel_verbal = '$51 to 80'
      case 3: pricelevel_verbal = 'Over $100'
  }
  var topTag = Array(res.topTags);
  var item = <div></div>;
  if (res.topTags !== undefined) {
      item = res.topTags.map( (i, idx)=>(
          <Button key={idx.toString()}>
          {i}
          </Button>
          
      ))
  }
  return (
    <Wrapper>
            <Title>
            {res.name}
            </Title>
            <StyledTextLine></StyledTextLine>
            <div>
                <span>star symbols</span>
                <span>{res.star}</span>
                <span>review symbol</span>
                <span>{res.reviewCount} </span>
                <span>{price_icon} {pricelevel_verbal} </span>
                <span>{diningStyle_icon} {res.cuisine}</span>
            </div>
            <div>
                Top Tags: {item}
            </div>
            <div>
                <Description description={res.description}/>
            </div>
    </Wrapper>

    
    );
}

export default Header;