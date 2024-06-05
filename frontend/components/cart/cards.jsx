'use client'
import { Modal, Box } from "@mui/material";
import { colors } from "../../styles/ele";
import { Edit, Remove, Close } from "../../svg/bag";
import Alert from "./Alert";
import { useState } from "react";

export default function Cards() {
  const [cardModal, setCardModal] = useState({});
  const [open, setOpen] = useState(false);
  const [cards, setCards] = useState([
    {
      id: 1,
      src: './photos/products/mad2.jpg',
      name: 'Madlan Chocolat',
      qte: 250,
      count : 1,
      price: 1500
    },
    {
      id: 2,
      src: './photos/products/mad2.jpg',
      name: 'Madlan Chocolat',
      qte: 250,
      count : 1,
      price: 1500
    },
    {
      id: 3,
      src: './photos/products/mad2.jpg',
      name: 'Madlan Chocolat',
      qte: 250,
      count : 1,
      price: 1500
    },
    {
      id: 4,
      src: './photos/products/mad2.jpg',
      name: 'Madlan Chocolat',
      qte: 250,
      count : 1,
      price: 1500
    },
    {
      id: 5,
      src: './photos/products/mad2.jpg',
      name: 'Madlan Chocolat',
      qte: 250,
      count : 1,
      price: 1500
    },
  ]);

  const [detail, setDetail] = useState([
    { name: 'Farine', qte: 350, change: false, modify: true },
    { name: 'Sucre', qte: 210, change: false, modify: false },
    { name: 'Chocolat', qte: 11, change: false, modify: true },
    { name: 'Smid', qte: 44, change: false, modify: false },
    { name: 'Anything', qte: 44, change: false, modify: true },
    { name: 'Testing', qte: 44, change: false, modify: false },
  ]);

  const handleChange = (id, type,method) => {
     if(method === 'modal'){
        setCardModal(prev => ({
            ...prev,
            count : cardModal.count + 1
        }))
    }
    setCards(prevCards =>
        prevCards.map(card => {
          if (card.id === id) {
            if (type === '-' && card.qte > 1) {
              return { ...card, count: card.count - 1 };
            } else if (type === '+') {
              return { ...card, count: card.count + 1 };
            }
          }
          return card;
        })
      );
  };

  const handleModify = (element, e) => {
    if (element.modify) {
      setDetail(prev =>
        prev.map(x => {
          if (x.name === element.name) {
            if (e === 'open') {
              return { ...x, change: true };
            } else {
              return { ...x, qte: e.target.value };
            }
          }
          return x;
        })
      );
    } else {
      console.log('Cannot modify it');
    }
  };

  const handleOpen = (item) => {
    setCardModal(item);
    setOpen(true);
  };
  const handleClose = () => {
     setOpen(false)
  }
  return (
    <section className="cards">
      <Alert />
      <div style={{ height: cards.length <= 3 ? 'auto' : '400px', overflowY: 'auto' }}>
        {cards.map(card => (
          <div key={card.id} className="border-top border-bottom d-flex justify-content-between align-items-center py-2">
            <div className="d-flex ">
              <img width={80} src={card.src} alt="product_img" />
              <div className="d-flex flex-column gap-1">
                <h6 style={{ color: colors.dark_title, fontWeight: '500 !important' }}>{card.name}</h6>
                <small style={{ color: colors.gray_small, fontWeight: '500 !important' }}>{card.qte}g</small>
                <small className="d-flex align-items-center" style={{ color: colors.gray_small }}><Remove width={25} height={25} /> Remove</small>
              </div>
            </div>
            <div className="gap-2 d-none d-sm-flex">
              <button onClick={() => handleChange(card.id, '-','normal')} className="btn border rounded">-</button>
              <span className="border p-2 rounded d-flex align-items-center justify-content-center">
                <p>{card.count}</p>
              </span>
              <button onClick={() => handleChange(card.id, '+','normal')} className="btn border rounded">+</button>
            </div>
            <div className="d-flex gap-1 align-items-center">
              <h6 className="fw-bold" style={{ color: colors.dark_title }}>
                {card.price} DA
              </h6>
            </div>
            <button className="btn border rounded" title="edit" onClick={() => handleOpen(card)}><Edit width={20} height={20} /></button>
          </div>
        ))}
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box className="cards_modal">
          <div className="d-flex flex-column gap-3">
            <div className="title d-flex justify-content-between border-bottom py-3 px-2">
              <div>
                <h3 style={{ marginBottom: '0px' }}>
                  {cardModal ? `Produit ${cardModal.id}` : ''}
                </h3>
                <p style={{ marginBottom: '0px', color: colors.gray_p }}>
                  {cardModal ? 'This paragraph is a description for this produit' : ''}
                </p>
              </div>
              <Close state={open} setState={handleClose} type={"close"} />
            </div>
            <h5>Table of ingredient</h5>
            <div className="table_detail border rounded">
              <div className="thead d-flex justify-content-between border-bottom py-2">
                <h6 className="px-2 text-center">
                  Ingredient Name
                </h6>
                <h6 className="px-2 text-center">
                  Ingredient quantity
                </h6>
                <h6 className="px-2 text-center">
                  Change Status
                </h6>
              </div>
              <div className="tbody" style={{ height: '400px', overflowY: "auto" }}>
                {detail.map((item, index) => (
                  <div key={index} className="tr border-bottom d-flex justify-content-between py-2">
                    <span className="px-3 d-flex justify-content-center align-items-center" style={{ color: colors.gray_p }}>
                      <p className="text-center">{item.name}</p>
                    </span>
                    <span className="px-3 d-flex justify-content-center align-items-center" style={{ color: colors.gray_p }}>
                      {item.change ? (
                        <input
                          value={item.qte}
                          onChange={(e) => handleModify(item, e)}
                          style={{ outline: 'none', width: "50px" }}
                          type="text"
                          className="border rounded px-2 py-1"
                        />
                      ) : (
                        <p className="text-center" onDoubleClick={() => handleModify(item, 'open')}>{item.qte} g</p>
                      )}
                    </span>
                    <span className="px-3 d-flex justify-content-center align-items-center">
                      <small className="rounded text-light fw-bold px-2 py-1" style={{ backgroundColor: item.modify ? colors.primary : "red" }}>
                        {item.modify ? 'You can modify' : 'You cannot'}
                      </small>
                    </span>
                  </div>
                ))}
              </div>
              <div className="tfoot d-flex justify-content-between border-bottom py-2 px-3">
                <small className="fw-bold">Total quantity</small>
                <div className="gap-2 d-flex">
                  <button onClick={() => handleChange(cardModal.id, '-','modal')} className="btn border rounded">-</button>
                  <span className="border p-2 rounded d-flex align-items-center justify-content-center">
                    <p>{cardModal && cardModal.count}</p>
                  </span>
                  <button onClick={() => handleChange(cardModal.id, '+','modal')} className="btn border rounded">+</button>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </section>
  );
}
