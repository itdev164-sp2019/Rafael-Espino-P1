import React from "react"
import {Button} from "reactstrap"
import Vegies from "../components/hidebutton"
import styled from "styled-components"

const Meat = styled.button`
color:blueviolet;
width: 100%;
border-left-style: none;
border-top-style: none;
border-bottom-style: ridge;
border-right-style: none;
background-color: transparent;
text-align: left;


`;

const Veggies = styled.button`
color:royalblue;
width: 100%;
border-left-style: none;
border-top-style: none;
border-bottom-style: ridge;
border-right-style: none;
background-color: transparent;
text-align: left;
`;

const Spices = styled.button`
color:royalblue;
width: 100%;
border-left-style: none;
border-top-style: none;
border-bottom-style: ridge;
border-right-style: none;
background-color: transparent;
text-align: left;
`;
// const Veggies = styled(Meat)`
//     color: red;
// `;

export default class Example extends React.Component{
    render()
    {
        return(
            <menu className='Menu'>
            <div>
            <Meat onClick={Vegies()} className='beef'>Beef</Meat>
            <Meat onClick={Vegies()} className='chicken'>Chicken</Meat>
            <Meat onClick={Vegies()} className='fish'>Fish</Meat>
            <Meat onClick={Vegies()} className='pork'>Pork</Meat>
            </div>
            <br/>
            
            <div id='vegies'>
            <Veggies className='onion'>Onion</Veggies>
            <Veggies className='lettuce'>Lettuce</Veggies>
            <Veggies className='tomato'>Tomato</Veggies>
            <Veggies className='avocado'>Avocado</Veggies>
          </div>
          <br/>
            
            <div id='spices'>
              <Spices className='blkPepper'>Blk Pepper</Spices>
              <Spices className='oliveOil'>Olive Oil</Spices>
              <Spices className='paprika'>Paprika</Spices>
              <Spices className='garlic'>Garlic</Spices>
          </div>
          <br/>
          </menu>
        );
    }
}