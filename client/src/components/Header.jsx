import React from 'react';
import Description from './Description.jsx';
import { review_icon, price_icon, cuisine_icon, crossStreet_icon, diningStyle_icon, neighborhood_icon, crossSt_icon,hours_icon } from './Icons.jsx';
import styled from 'styled-components'
import StarSymbol from './StarSymbol.jsx';

const Container = styled.div`
`

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 1px solid lightgrey;
  :hover {
    border: 1px solid red;
  }
  &:focus {outline:0};
  color: black;
  margin: 0 1em;
  padding: 0.25em 1em;


`

const ReviewIcon = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  background-repeat: no-repeat;
  background-position: 50%;
  display: inline-block;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' style='background:%23fff'%3E%3Ctitle%3Eicon/ic_review%3C/title%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h24v24H0z'/%3E%3Cpath d='M19 4H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h6l4.36 3.63a1 1 0 0 0 1.64-.77V17h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 11h-4v2.73L11.72 15H5V6h14v9z' fill='%23333' fill-rule='nonzero'/%3E%3C/g%3E%3C/svg%3E")
`



const Title = styled.h1`
  font-size: 3em;
  text-align: left;
`;
const Wrapper = styled.section`
  padding: 4em;
`;

const Block = styled.div`
  height: 1.5rem;
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  .BlockItem{
    padding: 5px;
    width: 1.5rem;
    height: 1.5rem;
    margin-top: 10px;
    line-height: 150px;
    color: tomato;
    font-weight: bold;
    font-size: 3em;
    text-align: center;
  }
`;


var Header = ({ res }) => {
  var pricelevel_verbal;
  switch (res.priceLevel) {
    case 0: pricelevel_verbal = '$0 to $30'
    case 1: pricelevel_verbal = '$31 to $50'
    case 2: pricelevel_verbal = '$51 to 80'
    case 3: pricelevel_verbal = '$80 to $100'
    case 4: pricelevel_verbal = 'Over $100'
  }
  var item = <div></div>;
  if (res.topTags !== undefined) {
    item = res.topTags.map((i, idx) => (
      <Button key={idx.toString()}>
        {i}
      </Button>

    ))
  }
  return (
    <Container>
      <Wrapper>
        <Title>
          {res.name}
        </Title>
      </Wrapper>
      <Block>
        <StarSymbol stars= {res.star}></StarSymbol>
        <ReviewIcon></ReviewIcon>
        <span>{res.reviewCount} reviews</span>
        <span>{price_icon} {pricelevel_verbal}</span>
        <span>{cuisine_icon}</span>
        <span>{res.cuisine}</span>
      </Block>
      <div>
        Top Tags: {item}
      </div>
      <div>
        <Description description={res.description} />
      </div>

    </Container>
  );
}


export default Header;