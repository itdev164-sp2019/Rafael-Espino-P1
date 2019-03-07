import React from "react"

import BcBurger from "../images/baconburger.jpg"
import bruChicken from "../images/bruschettachicken.jpg"
import buffalopizza from "../images/buffalopizza.jpg"
import catfishMango from "../images/CatfishMangoSalsa.jpg"
import cheeseBSoup from "../images/cheeseburgersoup.jpg"
import cheesesteakjoe from "../images/cheesesteakjoe.jpg"
import chipotlepork from "../images/chipotlepork.jpg"
import cuban from "../images/cubanpork.jpg"
import frSoup from "../images/frenchSoup.jpg"
import PorkgLaze from "../images/Glazed-chops.jpg"
import salmongLaze from "../images/GlazedSalmon.jpg"
import lemonfish from "../images/lemonfish.jpg"
import limechicken from "../images/limechicken1.jpg"
import PorkFJ from "../images/Pork-Fajitas.jpg"
import KoreanBeef from "../images/PotKoreanBeef.jpg"
import pulledpork from "../images/pulledpork.jpg"
import salmondill from "../images/Salmon-Dill-Sauce.jpg"
import cookedBeef from "../images/SlowCookerBeef.jpg"
import tilapiacorn from "../images/Tilapia-Corn-Salsa.jpg"
import verdechick from "../images/verdechicken.jpg"

import {
  Box,
  Card,
  Image,
  Heading,
  Text
} from 'rebass'


const Cards = props => (
  <div className='cards'>
  <div className='column' >
  <Box width={200}   >
  <a id="cardlink" href="https://cookiesandcups.com/candied-bacon-maple-cheddar-burger/">
  <Card
    p={1}
    borderRadius={2}
    boxShadow='0 0 16px rgba(0, 0, 0, .25)'>
    <Image src={BcBurger} />
    <Box px={2}>
      <Heading as='h3'>
      Candied Bacon Burger
      </Heading>
    </Box>
  </Card>
  </a>
</Box>
</div>
<div className='column'>
<Box width={200}>
<a id="cardlink" href="https://cookiesandcups.com/bruschetta-chicken/">
  <Card
    p={1}
    borderRadius={2}
    boxShadow='0 0 16px rgba(0, 0, 0, .25)'>
    <Image src={bruChicken} /> 
    <Box px={2}>
      <Heading as='h3'>
      Bruschetta Chicken
      </Heading>
    </Box>
  </Card>
  </a>
</Box>
</div>
<div className='column'>
<Box width={200}>
<a id="cardlink" href="https://cookiesandcups.com/bruschetta-chicken/">
  <Card
    p={1}
    borderRadius={2}
    boxShadow='0 0 16px rgba(0, 0, 0, .25)'>
    <Image src={buffalopizza} />
    <Box px={2}>
      <Heading as='h3'>
      Buffalo Chicken Pizza
      </Heading>
    </Box>
  </Card>
  </a>
</Box>
</div>
<div className='column'>
<Box width={200}>
<a id="cardlink" href="https://www.tasteofhome.com/recipes/blackened-catfish-with-mango-avocado-salsa/">
  <Card
    p={1}
    borderRadius={2}
    boxShadow='0 0 16px rgba(0, 0, 0, .25)'>
    <Image src={catfishMango} />
    <Box px={2}>
      <Heading as='h3'>
      Catfish In Mango Salsa
      </Heading>
    </Box>
  </Card>
  </a>
</Box>
</div>
<div className='column'>
<Box width={200}>
<a id="cardlink" href="https://cookiesandcups.com/cheeseburger-soup/">
  <Card
    p={1}
    borderRadius={2}
    boxShadow='0 0 16px rgba(0, 0, 0, .25)'>
    <Image src={cheeseBSoup} />
    <Box px={2}>
      <Heading as='h3'>
      Cheese Burger Soup
      </Heading>
    </Box>
  </Card>
  </a>
</Box>
</div>
<div className='column'>
<Box width={200}>
<a id="cardlink" href="https://cookiesandcups.com/crock-pot-philly-cheesesteak-sloppy-joes/">
  <Card
    p={1}
    borderRadius={2}
    boxShadow='0 0 16px rgba(0, 0, 0, .25)'>
    <Image src={cheesesteakjoe} />
    <Box px={2}>
      <Heading as='h3'>
      Cheese Steak Joe
      </Heading>
    </Box>
  </Card>
  </a>
</Box>
</div>
<div className='column'>
<Box width={200}>
<a id="cardlink" href="https://cookiesandcups.com//?s=chipotle+pork">
  <Card
    p={1}
    borderRadius={2}
    boxShadow='0 0 16px rgba(0, 0, 0, .25)'>
    <Image src={chipotlepork} />
    <Box px={2}>
      <Heading as='h3'>
      Chipotle Pork<br></br>
        <br></br>
      </Heading>
    </Box>
  </Card>
  </a>
</Box>
</div>
<div className='column'>
<Box width={200}>
<a id="cardlink" href="https://cookiesandcups.com/easy-crock-pot-cuban-style-pork/">
  <Card
    p={1}
    borderRadius={2}
    boxShadow='0 0 16px rgba(0, 0, 0, .25)'>
    <Image src={cuban} />
    <Box px={2}>
      <Heading as='h3'>
      Cuban Pork<br></br>
      <br></br>
      </Heading>
    </Box>
  </Card>
  </a>
</Box>
</div>
<div className='column'>
<Box width={200}>
<a id="cardlink" href="https://cookiesandcups.com/french-onion-soup/">
  <Card
    p={1}
    borderRadius={2}
    boxShadow='0 0 16px rgba(0, 0, 0, .25)'>
    <Image src={frSoup} />
    <Box px={2}>
      <Heading as='h3'>
      French Chicken Soup
      </Heading>
    </Box>
  </Card>
  </a>
</Box>
</div>
<div className='column'>
<Box width={200}>
<a id="cardlink" href="http://www.midwestliving.com/recipe/pork/pork-chops-with-pear-maple-sauce">
  <Card
    p={1}
    borderRadius={2}
    boxShadow='0 0 16px rgba(0, 0, 0, .25)'>
    <Image src={PorkgLaze} />
    <Box px={2}>
      <Heading as='h3'>
      Glazed Pork Chops
      </Heading>
     
    </Box>
  </Card>
  </a>
</Box>
</div>
<div className='column'>
<Box width={200}>
<a id="cardlink" href="https://damndelicious.net/2014/08/18/honey-glazed-salmon/">
  <Card
    p={1}
    borderRadius={2}
    boxShadow='0 0 16px rgba(0, 0, 0, .25)'>
    <Image src={salmongLaze} />
    <Box px={2}>
      <Heading as='h3'>
      Glazed Salmon<br></br>
      <br></br>
      </Heading>
    </Box>
  </Card>
  </a>
</Box>
</div>
<div className='column'>
<Box width={200}>
<a id="cardlink" href="http://www.chewoutloud.com/2017/06/06/easy-lemon-butter-fish-15-minutes/">
  <Card
    p={1}
    borderRadius={2}
    boxShadow='0 0 16px rgba(0, 0, 0, .25)'>
    <Image src={lemonfish} />
    <Box px={2}>
      <Heading as='h3'>
      Lemon Tilapia<br></br><br></br>
      </Heading>
    </Box>
  </Card>
  </a>
</Box>
</div>
<div className='column'>
<Box width={200}>
<a id="cardlink" href="https://cookiesandcups.com/spicy-skillet-lime-chicken/">
  <Card
    p={1}
    borderRadius={2}
    boxShadow='0 0 16px rgba(0, 0, 0, .25)'>
    <Image src={limechicken} />
    <Box px={2}>
      <Heading as='h3'>
      Lime Chicken<br></br><br></br>
      </Heading>
    </Box>
  </Card>
  </a>
</Box>
</div>
<div className='column'>
<Box width={200}>
<a id="cardlink" href="https://www.foodandwine.com/recipes/pork-tenderloin-fajitas">
  <Card
    p={1}
    borderRadius={2}
    boxShadow='0 0 16px rgba(0, 0, 0, .25)'>
    <Image src={PorkFJ} />
    <Box px={2}>
      <Heading as='h3'>
      Pork Fajitas<br></br><br></br>
      </Heading>
    </Box>
  </Card>
  </a>
</Box>
</div>
<div className='column'>
<Box width={200}>
<a id="cardlink" href="https://cookiesandcups.com/instant-pot-korean-beef/">
  <Card
    p={1}
    borderRadius={2}
    boxShadow='0 0 16px rgba(0, 0, 0, .25)'>
    <Image src={KoreanBeef} />
    <Box px={2}>
      <Heading as='h3'>
      Pot Korean Beef
      </Heading>
    </Box>
  </Card>
  </a>
</Box>
</div>
<div className='column'>
<Box width={200}>
<a id="cardlink" href="https://cookiesandcups.com/root-beer-pulled-pork-with-root-beer-bbq-sauce/">
  <Card
    p={1}
    borderRadius={2}
    boxShadow='0 0 16px rgba(0, 0, 0, .25)'>
    <Image src={pulledpork} />
    <Box px={2}>
      <Heading as='h3'>
      Beer Pork Joe<br></br><br></br>
      </Heading>
    </Box>
  </Card>
  </a>
</Box>
</div>
<div className='column'>
<Box width={200}>
<a id="cardlink" href="https://www.tasteofhome.com/recipes/salmon-with-creamy-dill-sauce/">
  <Card
    p={1}
    borderRadius={2}
    boxShadow='0 0 16px rgba(0, 0, 0, .25)'>
    <Image src={salmondill} />
    <Box px={2}>
      <Heading as='h3'>
      Salmon In Dill Sauce
      </Heading>
      {/* <Text fontSize={0}>
        *Chicken
      </Text> */}
    </Box>
  </Card>
  </a>
</Box>
</div>
<div className='column'>
<Box width={200}>
<a id="cardlink" href="https://cookiesandcups.com/easy-slow-cooker-beef-tips/">
  <Card
    p={1}
    borderRadius={2}
    boxShadow='0 0 16px rgba(0, 0, 0, .25)'>
    <Image src={cookedBeef} />
    <Box px={2}>
      <Heading as='h3'>
      Slow Cooked Beef
      </Heading>
    </Box>
  </Card>
  </a>
</Box>
</div>
<div className='column'>
<Box width={200}>
<a id="cardlink" href="https://www.tasteofhome.com/recipes/tilapia-with-corn-salsa/">
  <Card
    p={1}
    borderRadius={2}
    boxShadow='0 0 16px rgba(0, 0, 0, .25)'>
    <Image src={tilapiacorn} />
    <Box px={2}>
      <Heading as='h3'>
      Tilapia With Corn Salas
      </Heading>
    </Box>
  </Card>
  </a>
</Box>
</div>
<div className='column'>
<Box width={200}>
<a id="cardlink" href="https://cookiesandcups.com/instant-pot-salsa-verde-chicken/">
  <Card
    p={1}
    borderRadius={2}
    boxShadow='0 0 16px rgba(0, 0, 0, .25)'>
    <Image src={verdechick} />
    <Box px={2}>
      <Heading as='h3'>
      Chicken In Salsa Verde
      </Heading>
    </Box>
  </Card>
  </a>
</Box>
</div>
</div>
)

export default Cards