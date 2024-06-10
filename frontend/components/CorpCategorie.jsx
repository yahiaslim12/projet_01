"use client";
import { useState , useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import CardComponent from './cards/CardComponent';
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import  Drawer  from '@mui/material/Drawer';
import Skeleton from '@mui/material/Skeleton';
import { Arrow , Plus } from '../svg/bag';
import { List } from '../svg/bag';
import { searching } from '@/app/api/getpr/getprs';



export default function CorpCategorie() {
  const [search,setSearch] = useState('');
  const [showDetails, setShowDetails] = useState([false, false]);
  const [value, setValue] = useState([0, 2500]);
  const [isDrawerOpen,setIsDrawerOpen] = useState(false);
  const [products, setProducts] = useState();
  const [productsSelected, setProductsSelected] = useState();
  const [categorie, setCategorie] = useState();
  const [cat, setCat] = useState();
  const [count,setCount] = useState(0);
  const [showed,setShowed] = useState(6);
  const [pages , setPages] = useState(Math.ceil(count/showed));
  const [currentPage , setCurrentPage] = useState(Math.ceil(1));
  const [supplementaire , setSupplementaire ] = useState('Any');


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

  useEffect(() => {
    fetchingAll();
  }, [])

  function fetchingAll(){
    fetch('/api/getpr')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
      })
  }

  useEffect(() => {
    getProductSelected();
  }, [products ,  categorie , value ,currentPage , showed ])
  useEffect(()=>{
    getProductSelectedCount();
  },[productsSelected])
  useEffect(()=>{
    getProductSelectedPages();
  },[count , showed])
  

  function getProductSelected(){
    products &&
    ( categorie ? setProductsSelected(products.filter(product =>{
      return product.category === categorie &&
      product.price >= value [0] &&
      product.price <= value [1] ;
     }))
    :setProductsSelected(products.filter(product =>{
     return parseFloat(product.price) >= value[0] && parseFloat(product.price) <= value[1];
    }) ))
  }

  function getProductSelectedCount(){
    products && ( productsSelected ?
    setCount(productsSelected.length)
    :
    setCount(0)
    )
  }
  function getProductSelectedPages(){
    setPages(Math.ceil(count/showed))
  }
  function productsSelected99(){
    return ( supplementaire ==="Any"?
    productsSelected.slice((currentPage-1)*showed,(currentPage)*showed)
    :
    productsSelected.sort((a, b) => supplementaire === "Low to High" ? parseFloat(a.price) - parseFloat(b.price) :parseFloat(b.price) - parseFloat(a.price) ).slice((currentPage-1)*showed,(currentPage)*showed)
  )
  }
  const handlePageChange = (event, page) => {

    setCurrentPage(page);

  };

  useEffect(() => {
    if (search.trim().length > 0) {
      searchIfExist();
    } else {
      fetchingAll();
    }
  }, [search]);

  const searchIfExist = async(e) => {
    const res = await searching(search)
    setProducts(res.rows)
  }

  useEffect(() =>{
    categorie ==="Turkish" || categorie ==="maghrébin" || categorie ==="Middle East" || categorie ==="Near East" 
    ?
    setCat("Oriental Pastry")
    :
    setCat("Occidental Pastry")

  },[categorie])


  return (

    <div className="main-container ">
          <button className='btn border d-md-none' style={{position :"absolute" , width:"100px" , height :"60px"}} onClick={()=>toggleDrawer(true)}><List />Filter</button>
    <div className="sidebar d-none d-md-block">
    <form className="gap-2 ms-3">
              <input style={{margin:"auto"}} className="d-block input-search-cat form rounded border mr-sm-2 p-2" type="search" placeholder="Search by ingredient or name" aria-label="Search" value={search} onChange={(e)=>setSearch(e.target.value)}/>
              <button  className="d-block btn-search-cat btn my-2 " type="button">Search</button>
      </form>
      <h5 className='m-3 mt-5' style={{fontWeight:"bold"}}>Categories</h5>
      <ul  >
        <li className="p-lg-3 brd-btm" onClick={() => toggleDetails(0)}>
          <Plus/> Oriental Pastry
          {showDetails[0] && (
            <ul className="ms-lg-2 my-lg-2">
              <li onClick={()=>{setCategorie("Turkish"); setCurrentPage(1)}}>Turkish <Arrow/></li>
              <li onClick={()=>{setCategorie("maghrébin"); setCurrentPage(1)}}>maghrébin<Arrow/></li>
              <li onClick={()=>{setCategorie("Middle East"); setCurrentPage(1)}} >Middle East <Arrow/></li>
              <li onClick={()=>{setCategorie("Near East"); setCurrentPage(1)}} >Near East <Arrow/></li>
            </ul>
          )}
        </li>
        <li className="p-lg-3 brd-btm"    onClick={() => toggleDetails(1)}>
          <Plus/> Occidental Pastry
          {showDetails[1] && (
            <ul className="ms-lg-2 my-lg-2">
              <li  onClick={()=>{setCategorie("Cake"); setCurrentPage(1)}}>Cake <Arrow/></li>
              <li  onClick={()=>{setCategorie("Cookies"); setCurrentPage(1)}}>Cookies <Arrow/></li>
              <li  onClick={()=>{setCategorie("Cheesecake"); setCurrentPage(1)}}>Cheesecake <Arrow/></li>
              <li  onClick={()=>{setCategorie("Muffins"); setCurrentPage(1)}}>Muffins <Arrow/></li>
              <li  onClick={()=>{setCategorie("Dessert"); setCurrentPage(1)}}>Dessert <Arrow/></li>
              <li  onClick={()=>{setCategorie("Brownies"); setCurrentPage(1)}}>Brownies <Arrow/></li>
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
              className='d-lg-none drawer'     
              >
      <form className="gap-2 mt-5" style={{width:"65vw"}}   >
              <input style={{margin:"auto"}} className="d-block input-search-cat form rounded border mr-sm-2 p-2" type="search" placeholder="Search by ingredient or name" aria-label="Search" value={search} onChange={(e)=>setSearch(e.target.value)}/>
              <button style={{margin:"auto"}}  className="d-block btn-search-cat btn my-2" type="button">Search</button>
      </form>
      <h5 className='m-3 mt-5' style={{fontWeight:"bold"}}>Categories</h5>
      <ul  >
        <li className="p-lg-3 brd-btm" onClick={() => toggleDetails(0)}>
          <Plus/> Oriental Pastry
          {showDetails[0] && (
            <ul className=" my-2">
              <li onClick={()=>{setCategorie("Turkish"); setCurrentPage(1)}}>Turkish <Arrow/></li>
              <li onClick={()=>{setCategorie("maghrébin"); setCurrentPage(1)}}>maghrébin<Arrow/></li>
              <li onClick={()=>{setCategorie("Middle"); setCurrentPage(1)}} >Middle East <Arrow/></li>
              <li onClick={()=>{setCategorie("Near East"); setCurrentPage(1)}} >Near East <Arrow/></li>
            </ul>
          )}
        </li>
        <li className="p-lg-3 brd-btm"    onClick={() => toggleDetails(1)}>
        <Plus/> Occidental Pastry
          {showDetails[1] && (
            <ul className=" my-2">
              <li  onClick={()=>{setCategorie("Cake"); setCurrentPage(1)}}>Cake <Arrow/></li>
              <li  onClick={()=>{setCategorie("Cookies"); setCurrentPage(1)}}>Cookies <Arrow/></li>
              <li  onClick={()=>{setCategorie("Cheesecake"); setCurrentPage(1)}}>Cheesecake <Arrow/></li>
              <li  onClick={()=>{setCategorie("Muffins"); setCurrentPage(1)}}>Muffins <Arrow/></li>
              <li  onClick={()=>{setCategorie("Dessert"); setCurrentPage(1)}}>Dessert <Arrow/></li>
              <li  onClick={()=>{setCategorie("Brownies"); setCurrentPage(1)}}>Brownies <Arrow/></li>
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
    <div className="content-cat ">
      <div className='me-5 gap-2 d-none d-sm-flex' style={{float :"right"}}>       
            <select className='p-2 border rounded'   value={showed} onChange={(e) => {setShowed(e.target.value) ; }}>
              <option value="50">Show : 50</option>
              <option value="25">Show : 25</option>
              <option value="10">Show : 10</option>
              <option value="6">Show : 6</option>
            </select>
            <select className='p-2 border rounded' value={supplementaire} onChange={(e)=> setSupplementaire(e.target.value)} >
                 <option value="Low to High" >Price : Low to high</option>
                 <option value="High to Low">Price : High to Low</option>
                 <option value="Any">Any</option>
            </select>
      </div>

      <Container>
        <Row className='my-5 '>
        {productsSelected ?( productsSelected99().map(product => (
          <Col key={product.id_product} xs={12} md={6} lg={4} className="text-center d-flex justify-content-center mt-5">
            <CardComponent product={product} />
          </Col>
        )) ): <Skeleton className='mx-3' style={{height :"60vh" , width:"100%"}}/>}
        </Row>
      </Container>
      <div className='d-flex justify-content-center align-items-center my-3'>
          <Pagination page={currentPage} count={pages} onChange={handlePageChange} />
      </div>
    </div>
  </div>

  );
}