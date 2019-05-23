import React from 'react';
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
var Sidebar = ({ res }) => {
    var pricelevel_verbal;
    switch (res.priceLevel) {
        case 0: pricelevel_verbal = '$0 to $30'
        case 1: pricelevel_verbal = '$31 to $50'
        case 2: pricelevel_verbal = '$51 to 80'
        case 3: pricelevel_verbal = 'Over $100'
    }
    var topTag = Array(res.topTags);
    var item = <h2>nothing</h2>;
    console.log('what', Array.isArray(topTag));
    console.log(topTag.length)
    if (res.topTags !== undefined) {
        item = res.topTags.map( (i, idx)=>(
            <Button key={idx.toString()}>
            {i}
            </Button>
            
        ))
    }
    console.log(Array.isArray(res.topTags));
    return (
        <div>
            <div>
                star symbols {res.star} review symbol {res.reviewCount} {price_icon} {pricelevel_verbal} {diningStyle_icon} {res.cuisine}
            </div>
            <div>
                Top Tags: {item}
            </div>
            <div>
                {res.description}
            </div>
        </div>);
}

export default Sidebar;