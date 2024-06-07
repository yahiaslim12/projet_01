"use client";
import { useState } from 'react';
import { Container, Row, Col  } from 'react-bootstrap';
import { Cart } from '../svg/bag';

export default function ProductContainer() {

  const [special, setSpecial] = useState("");
  const [quantity, setQuantity] = useState(1);

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


  const [selectedOP1, setSelectedOP1] = useState(null);
  const [selectedOP2, setSelectedOP2] = useState(null);
  const [selectedOP3, setSelectedOP3] = useState(null);
  const [selectedOP4, setSelectedOP4] = useState(null);
  const [selectedOP5, setSelectedOP5] = useState(null);

  const handleSelection1 = (e) => {
    setSelectedOP1(e);
  };
  const handleSelection2 = (e) => {
    setSelectedOP2(e);
  };
  const handleSelection3 = (e) => {
    setSelectedOP3(e);
  };
  const handleSelection4 = (e) => {
    setSelectedOP4(e);
  };
  const handleSelection5 = (e) => {
    setSelectedOP5(e);
  };


  return (
    
    <div className="main-container-prod ">
        <p className='d-flex gap-2'>
          <span style={{color: "#85a26a"}}>Home</span>
          <span className='text-secondary'>/</span>
          <span style={{color: "#85a26a"}}>Categorie</span>
          <span className='text-secondary'>/</span>
          <span className='text-secondary'>Product name</span>
        </p>
        <div className="content ">
            <Container >
                <Row className='my-4 gap-5'>
                    <Col xs={12} lg={6} className="text-center  d-flex justify-content-center p-0">
                      <img src="./photos/cook.jpeg" alt='product_photo' style={{width :"100%" , borderRadius :"18px" , border :"3px solid black" ,}}/>
                    </Col>
                    <Col xs={12} lg={5} className=" p-0">
                    <p className='greenH' style={{cursor :"pointer"}}>Categorie</p>
                    <h3 className='my-1'>Product Name</h3>
                    <div  style={{border :"1px solid rgba(108,117,125 ,  0.15)" , borderRadius :"99px" , marginBottom :"1rem"}}></div>
                    <Row>
                      <Col xs={12} md={3} className='d-flex align-items-center'>
                        Taille
                      </Col >
                      <Col xs={12} md={9}>
                        <div className="option-selector">
                          <div
                            className={`option ${selectedOP1 === 'm' ? 'selected' : ''}`}
                            onClick={() => handleSelection1('m')}
                          >
                            Medium
                          </div>
                          <div
                            className={`option ${selectedOP1 === 'l' ? 'selected' : ''}`}
                            onClick={() => handleSelection1('l')}
                          >
                            Large
                          </div>
                          <div
                            className={`option ${selectedOP1 === 'xl' ? 'selected' : ''}`}
                            onClick={() => handleSelection1('xl')}
                          >
                            XL
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} md={3}>
                        Chocolate
                      </Col >
                      <Col xs={12} md={9}>
                        <div className="option-selector">
                          <div
                            className={'no-option selected'}
                          >
                            With
                          </div>
                          <div
                            className={'no-option'}
                          >
                            Whitout
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} md={3}>
                        Farine
                      </Col >
                      <Col xs={12} md={9}>
                        <div className="option-selector">
                          <div
                            className={'no-option '}
                          >
                            0
                          </div>
                          <div
                            className={'no-option'}
                          >
                            50%
                          </div>
                          <div
                            className={'no-option selected'}
                          >
                            normal
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} md={3}>
                        sugar
                      </Col >
                      <Col xs={12} md={9}>
                        <div className="option-selector">
                          <div
                            className={`option ${selectedOP2 === 0 ? 'selected' : ''}`}
                            onClick={() => handleSelection2(0)}
                          >
                            0
                          </div>
                          <div
                            className={`option ${selectedOP2 === 50 ? 'selected' : ''}`}
                            onClick={() => handleSelection2(50)}
                          >
                            50%
                          </div>
                          <div
                            className={`option ${selectedOP2 === 100 ? 'selected' : ''}`}
                            onClick={() => handleSelection2(100)}
                          >
                            normal
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} md={3}>
                        Special Box
                      </Col >
                      <Col xs={12} md={9}>
                        <div className="option-selector">
                          <div
                            className={`option ${selectedOP3 === 'yes' ? 'selected' : ''}`}
                            onClick={() => handleSelection3('yes')}
                          >
                            of course
                          </div>
                          <div
                            className={`option ${selectedOP3 === 'no' ? 'selected' : ''}`}
                            onClick={() => handleSelection3('no')}
                          >
                            no thank'x
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row >
                      <Col xs={12} lg={9}>
                      <input style={{width :"100%" ,  borderRadius : "13px"}} className="d-block input-special-prod form  border mr-sm-2 p-2"  placeholder="Special demand " aria-label="special" value={special} onChange={(e)=>setSpecial(e.target.value)}/>
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
                        <p className='d-flex gap-2 ms-2'>
                        <span className='text-secondary' style={{textDecoration :"line-through"}}>{750 * 1.2}</span>
                          <span style={{fontWeight :"bold" }}>750 DA</span>
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
              <h2 className="section-title" style={{fontWeight:"bold"}}>COOKI'S CATEGORIE </h2>
              <div className="section-divider" ></div>
            </div>
          </Row>
          <Row className='m-4 gap-5'>
            <Col xs={12} lg={6} className="p-0">
              <h6 className='mb-2' style={{fontWeight:"bold"}}>about the product</h6>
              <p className=' mb-5' style={{textIndent :"20px"}}>Cookie sablé fourré à la pâte à tartiner. Tout juste sorti du four.</p>
              <h6 className='mb-2' style={{fontWeight:"bold"}}>ingredient and preparation details</h6>
              <p className=' mb-5' style={{textIndent :"20px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, tellus iaculis urna bibendum in lacus, integer. Id imperdiet vitae varius sed magnis eu nisi nunc sit. Vel, varius habitant ornare ac rhoncus. Consequat risus facilisis ante ipsum netus risus adipiscing sagittis sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Col>
            <Col xs={12} lg={5} className="p-0 text-secondary" style={{fontSize :"0.9rem"}}>
              <Row>
                <Col className="p-0">Product Code:</Col>
                <Col className="p-0">FBB00255</Col>
              </Row>
              <Row>
                <Col className="p-0">Availability:</Col>
                <Col className="p-0">In Stock</Col>
              </Row>
              <Row>
                <Col className="p-0">Type:</Col>
                <Col className="p-0">Fruits</Col>
              </Row>
              <Row>
                <Col className="p-0">Shipping:</Col>
                <Col className="p-0" style={{fontSize :"0.85rem"}}>01 day shipping. ( Free pickup today)</Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}