"use client";
import { useEffect, useState } from 'react';
import { Container, Row, Col  } from 'react-bootstrap';
import { Cart } from '../svg/bag';
import { getProduct } from '@/app/api/getProduct';
import { getin } from '@/app/api/getin';
import Skeleton from '@mui/material/Skeleton';

export default function ProductContainer({ id_produit }) {

  
  const [special, setSpecial] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState();
  const [ing, setIng] = useState();

  const incrementQuantity = () => {
    if (quantity < 99) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  useEffect(()=>{
    getProduct99()
  },[])
  useEffect(()=>{
    getin99()
  },[product])

  const getProduct99 = async(e) =>{
    const res = await getProduct(id_produit);
    setProduct(res.rows[0])
  }
  const getin99 = async(e) =>{
    const res = await getin(id_produit);
    setIng(res.rows)
  }

   function shipping(decimal) {
    const hours = Math.floor(decimal);
    const minutes = Math.round((decimal - hours) * 60);
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
  };


  const [selectedOP1, setSelectedOP1] = useState(null);


  const handleSelection1 = (e) => {
    setSelectedOP1(e);
  };

  
  return (
    ing ?
    <div className="main-container-prod ">
        <p className='d-flex gap-2'>
          <span style={{color: "#85a26a"}}>Home</span>
          <span className='text-secondary'>/</span>
          <span style={{color: "#85a26a"}}>{product && product.category}</span>
          <span className='text-secondary'>/</span>
          <span className='text-secondary'>{product && product.name}</span>
        </p>
        <div className="content ">
            <Container >
                <Row className='my-4 gap-5'>
                    <Col xs={12} lg={6} className="text-center  d-flex justify-content-center p-0">
                      <img src={product && "."+product.img} alt='product_photo' style={{maxHeight:"80vh" , width :"100%" , borderRadius :"18px" , border :"3px solid black" ,}}/>
                    </Col>
                    <Col xs={12} lg={5} className=" p-0">
                    <p className='greenH' style={{cursor :"pointer"}}>{product && product.category}</p>
                    <h3 className='my-1'>{product && product.name}</h3>
                    <div  style={{border :"1px solid rgba(108,117,125 ,  0.15)" , borderRadius :"99px" , marginBottom :"1rem"}}></div>
                    {ing && ing.map(ingredient => (
                      ingredient.modify ?
                    <Row key={ingredient.name_ingredient+ingredient.id_product}>
                      <Col  xs={12} md={3} className='d-flex align-items-center'>
                        {ingredient.name_ingredient}
                      </Col >
                      <Col xs={12} md={9}>
                        <div className="option-selector">
                          <div
                            className={`option ${selectedOP1 === 'm' ? 'selected' : ''}`}
                            onClick={() => handleSelection1('m')}
                          >
                            {ingredient.qte * 0.5}
                          </div>
                          <div
                            className={`option ${selectedOP1 === 'l' ? 'selected' : ''}`}
                            onClick={() => handleSelection1('l')}
                          >
                            {ingredient.qte}
                          </div>
                          <div
                            className={`option ${selectedOP1 === 'xl' ? 'selected' : ''}`}
                            onClick={() => handleSelection1('xl')}
                          >
                            {ingredient.qte * 1.25}
                          </div>
                        </div>
                      </Col>
                    </Row>
                    :
                    <Row  key={ingredient.name_ingredient+ingredient.id_product}>
                      <Col xs={12} md={3}>
                        {ingredient.name_ingredient}
                      </Col >
                      <Col xs={12} md={9}>
                        <div className="option-selector">
                          <div
                            className={'no-option '}
                          >
                            {ingredient.qte * 0.5}
                          </div>
                          <div
                            className={'no-option selected'}
                          >
                            {ingredient.qte}
                          </div>
                          <div
                            className={'no-option'}
                          >
                            {ingredient.qte * 1.25}
                          </div>
                        </div>
                      </Col>
                    </Row>
                    ))}
                    <Row >
                      <Col xs={12} lg={9}>
                      <input style={{width :"100%" ,  borderRadius : "13px"}} className="d-block input-special-prod form  border mr-sm-2 p-2"  placeholder="additional information " aria-label="special" value={special} onChange={(e)=>setSpecial(e.target.value)}/>
                      </Col>
                    </Row>
                    <div className="quantity-text">Quantité</div>
                    <div className="quantity-controls">
                      <div className="quantity-button" onClick={decrementQuantity}>
                         -
                       </div>
                      <div className="quantity-display">
                        {quantity}
                      </div>
                      <div className="quantity-button" onClick={incrementQuantity}>
                        +
                      </div>
                    </div>
                    <div className='mt-2' style={{border :"1px solid rgba(108,117,125 ,  0.15)" , borderRadius :"99px", marginBottom :"1rem"}}></div>

                    <div className="price-and-add-to-cart">
                      <div className="price">
                        <p className='d-flex gap-2 ms-2 price-text-small'>
                        <span className='text-secondary' style={{textDecoration :"line-through"}}>{product && Math.floor(product.price * 1.2)}</span>
                          <span style={{fontWeight :"bold" }}>{product && Math.floor(product.price)} DA</span>
                        </p>
                      </div>
                      <div className="add-to-cart d-flex gap-2" >
                        <Cart/> add to cart
                      </div>
                    </div>


                    </Col>
                </Row>
            </Container>
        </div>
      <div className='content'>
        <Container >
          <Row>
            <div className="container-section">
              <h2 className="section-title" style={{fontWeight:"bold"}}>DETAILS </h2>
              <div className="section-divider" ></div>
            </div>
          </Row>
          <Row className='m-4 gap-5'>
            <Col xs={12} lg={6} className="p-0">
              <h6 className='mb-2' style={{fontWeight:"bold"}}>about the product</h6>
              <p className=' mb-5' style={{textIndent :"20px"}}>{product && product.s_desc}</p>
              <h6 className='mb-2' style={{fontWeight:"bold"}}>ingredient and preparation details</h6>
              <p className=' mb-5' style={{textIndent :"20px"}}>{product && product.b_desc}</p>
            </Col>
            <Col xs={12} lg={5} className="p-0 text-secondary" style={{fontSize :"0.9rem"}}>
              <Row>
                <Col className="p-0">Product Code:</Col>
                <Col className="p-0">{product && (product.category.substring(0, 2).toUpperCase()+id_produit+product.name.substring(0, 2).toUpperCase()+"00X")}</Col>
              </Row>
              <Row>
                <Col className="p-0">Availability:</Col>
                <Col className="p-0">In Stock</Col>
              </Row>
              <Row>
                <Col className="p-0">Type:</Col>
                <Col className="p-0">{product && product.category}</Col>
              </Row>
              <Row>
                <Col className="p-0">Shipping:</Col>
                <Col className="p-0" style={{fontSize :"0.85rem"}}>{product && shipping(product.shipping)} Time max shipping.</Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
    :
      <>
      <Skeleton style={{width :"100vw" , height :"100vh"}}/>
      </>
  );
}