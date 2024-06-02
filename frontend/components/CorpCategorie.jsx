"use client";
import { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import CardComponent from './cards/CardComponent';
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import  Drawer  from '@mui/material/Drawer';
import { Arrow , Plus } from '../svg/bag';
import { List } from '../svg/bag';



export default function CorpCategorie() {
  const [search,setSearch] = useState('');
  const [showDetails, setShowDetails] = useState([false, false]);
  const [value, setValue] = useState([0, 2500]);
  const [isDrawerOpen,setIsDrawerOpen] = useState(false);

  function toggleDrawer(open){
    setIsDrawerOpen(open)
  }

  const toggleDetails = (index) => {
    const newShowDetails = [...showDetails];
    newShowDetails[index] = !newShowDetails[index];
    setShowDetails(newShowDetails);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (

    <div className="main-container ">
          <button className='btn border d-md-none' style={{position :"absolute" , width:"100px" , height :"60px"}} onClick={()=>toggleDrawer(true)}><List />Filter</button>
    <div className="sidebar d-none d-md-block">
    <form className="gap-2">
              <input style={{margin:"auto"}} className="d-block input-search-cat form rounded border mr-sm-2 p-2" type="search" placeholder="Search by ingredient or name" aria-label="Search" value={search} onChange={(e)=>setSearch(e.target.value)}/>
              <button style={{margin:"auto"}}  className="d-block btn-search-cat btn my-2" type="button">Search</button>
      </form>
      <h5 className='m-3 mt-5' style={{fontWeight:"bold"}}>Categories</h5>
      <ul  >
        <li className="p-lg-3 brd-btm" onClick={() => toggleDetails(0)}>
          <Plus/> Parent Item 1
          {showDetails[0] && (
            <ul className="ms-lg-2 my-lg-2">
              <li >Detail 1-1 <Arrow/></li>
              <li  >Detail 1-2 <Arrow/></li>
              <li  >Detail 1-3 <Arrow/></li>
              <li  >Detail 1-4 <Arrow/></li>
            </ul>
          )}
        </li>
        <li className="p-lg-3 brd-btm"    onClick={() => toggleDetails(1)}>
        <Plus/> Parent Item 2
          {showDetails[1] && (
            <ul className="ms-lg-2 my-lg-2">
              <li  >Detail 2-1 <Arrow/></li>
              <li  >Detail 2-2 <Arrow/></li>
              <li  >Detail 2-3 <Arrow/></li>
              <li  >Detail 2-4 <Arrow/></li>
            </ul>
          )}
        </li>
      </ul>
      <h5 className='m-3 mt-5' style={{fontWeight:"bold"}}>Prices</h5>
      <Box style={{width :"65%" , display:"block" , margin :"auto"}} >
                  <Slider
                    min={0}
                    max={2500}
                    getAriaLabel={() => 'Price slider'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay='auto'
                    style={{color:"#85a26a" }}
                  />
      </Box>
      <span className='align-self-start d-block text-center' > {value[0]}DA - {value[1]}DA</span> 
    <Drawer 
              anchor='left' 
              open={isDrawerOpen} 
              onClose={()=>toggleDrawer(false)} 
              className='d-lg-none'        
              >
      <form className="gap-2 mt-5">
              <input style={{margin:"auto"}} className="d-block input-search-cat form rounded border mr-sm-2 p-2" type="search" placeholder="Search by ingredient or name" aria-label="Search" value={search} onChange={(e)=>setSearch(e.target.value)}/>
              <button style={{margin:"auto"}}  className="d-block btn-search-cat btn my-2" type="button">Search</button>
      </form>
      <h5 className='m-3 mt-5' style={{fontWeight:"bold"}}>Categories</h5>
      <ul  >
        <li className="p-lg-3 brd-btm" onClick={() => toggleDetails(0)}>
          <Plus/> Parent Item 1
          {showDetails[0] && (
            <ul className=" my-2">
              <li >Detail 1-1 <Arrow/></li>
              <li  >Detail 1-2 <Arrow/></li>
              <li  >Detail 1-3 <Arrow/></li>
              <li  >Detail 1-4 <Arrow/></li>
            </ul>
          )}
        </li>
        <li className="p-lg-3 brd-btm"    onClick={() => toggleDetails(1)}>
        <Plus/> Parent Item 2
          {showDetails[1] && (
            <ul className=" my-2">
              <li  >Detail 2-1 <Arrow/></li>
              <li  >Detail 2-2 <Arrow/></li>
              <li  >Detail 2-3 <Arrow/></li>
              <li  >Detail 2-4 <Arrow/></li>
            </ul>
          )}
        </li>
      </ul>
      <h5 className='m-3 mt-5' style={{fontWeight:"bold"}}>Prices</h5>
      <Box className="cntr" style={{width :"65%" , display:"flex"  }} >
                  <Slider
                    min={0}
                    max={2500}
                    getAriaLabel={() => 'Price slider'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay='auto'
                    style={{color:"#85a26a" }}
                  />
      </Box>
      <span className='d-block text-center align-self' > {value[0]}DA - {value[1]}DA</span>
      </Drawer>
    </div>
    <div className="content ">
      <div className='me-5 gap-2 d-none d-sm-flex' style={{float :"right"}}>       
            <select className='p-2 border rounded'   value={10} >
              <option value="50">Show : 50</option>
              <option value="30">Show : 30</option>
              <option value="20">Show : 20</option>
              <option value="10">Show : 10</option>
            </select>
            <select className='p-2 border rounded' value={"Low to High"} >
                 <option value="Low to High" >Price : Low to high</option>
                 <option value="High to Low">Price : High to Low</option>
                 <option value="Release Date">Release Date</option>
            </select>
      </div>

      <Container>
        <Row className='my-5 '>
          <Col xs={12} md={6} lg={4} className="text-center d-flex justify-content-center mt-5">
            <CardComponent/>
          </Col>
          <Col xs={12} md={6} lg={4} className="text-center d-flex justify-content-center mt-5">
            <CardComponent/>
          </Col>
          <Col xs={12} md={6} lg={4} className="text-center d-flex justify-content-center mt-5">
            <CardComponent/>
          </Col>
          <Col xs={12} md={6} lg={4} className="text-center  d-flex justify-content-center mt-5">
            <CardComponent/>
          </Col>
          <Col xs={12} md={6} lg={4} className="text-center d-flex justify-content-center mt-5">
            <CardComponent/>
          </Col>
        </Row>
      </Container>
      <div className='d-flex justify-content-center align-items-center my-3'>
          <Pagination count={10} />
      </div>
    </div>
  </div>

  );
}
