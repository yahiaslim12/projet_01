'use client'
import { Modal, Box } from "@mui/material";
import { colors } from "../../styles/ele";
import { Edit, Remove, Close } from "../../svg/bag";
import Alert from "./Alert";
import { useState ,useEffect} from "react";
import { useSession } from "next-auth/react";
import {GET_ING,UPDATE_ING} from "@/app/api/products";
import { Change_QTE } from "@/app/api/products";
export default function Cards({cards,get_Cards,handleChange,cardModal,handleCardModal,changeQte,delete_pro}) {
  const {data: session,status} = useSession()
  const [open, setOpen] = useState(false);
  const [detail, setDetail] = useState([]);
  const change =async (id,qte)=>{
      await Change_QTE([qte,id,session.user.email])
  }


  const handleModify = async (element, e) => {
    const newQte = e.target.value;
    console.log(newQte);
    const { id_product, name_ingredient } = element;

    setDetail(prev => 
      prev.map(item => {
        if (item === element) {
          console.log(item);
          return { ...item, qte: Number(newQte) };
        }
        return item;
      })
    );
    console.log(detail);
    await UPDATE_ING([session.user.email, id_product, name_ingredient, Number(newQte)]);
    getIng(cardModal);
  };

  const getIng = async(item) => {
    const res = await GET_ING(item.id_product,session.user.email)
    setDetail(res)
  }
  const handleOpen = async(item) => {
    handleCardModal(item)
    getIng(item)
    setOpen(true);
  };
  const handleClose = () => {
     setOpen(false)
  }
  
  useEffect(()=>{
    get_Cards()
  },[])
  
  useEffect(()=>{
     change(changeQte[0],changeQte[1])
     get_Cards()
  },[changeQte])
  return (
    <section className="cards">
      <Alert />
      <div style={{ height: cards.length <= 3 ? 'auto' : '400px', overflowY: 'auto' }}>
        {cards.map(card => (
          <div key={card.id_product} className="border-top border-bottom d-flex justify-content-between align-items-center py-2">
            <div className="d-flex ">
              <img width={80} height={80} style={{objectFit : 'cover'}} src={`.${card.img}`} alt="product_img" />
              <div className="d-flex flex-column gap-1">
                <h6 style={{ color: colors.dark_title, fontWeight: '500 !important' }}>{card.name}</h6>
                <small style={{ color: colors.gray_small, fontWeight: '500 !important' }}>{card.words}</small>
                <small className="d-flex align-items-center btn" style={{ color: colors.gray_small }} onClick={()=>delete_pro(card.id_product,session.user.email)}><Remove width={25} height={25} /> Remove</small>
              </div>
            </div>
            <div className="gap-2 d-none d-sm-flex">
              <button onClick={() => handleChange(card.id_product, '-','normal')} className="btn border rounded">-</button>
              <span className="border p-2 rounded d-flex align-items-center justify-content-center">
                <p>{card.qte}</p>
              </span>
              <button onClick={() => handleChange(card.id_product, '+','normal')} className="btn border rounded">+</button>
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
                  {cardModal ? `Produit : ${cardModal.name}` : ''}
                </h3>
                <p style={{ marginBottom: '0px', color: colors.gray_p }}>
                  {cardModal ? cardModal.s_desc : ''}
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
                {detail.map((item) => (
                  <div key={item.name_ingredient} className="tr border-bottom d-flex justify-content-between py-2">
                    <span className="px-3 d-flex justify-content-center align-items-center" style={{ color: colors.gray_p }}>
                      <p className="text-center">{item.name_ingredient}</p>
                    </span>
                    <span className="px-3 d-flex justify-content-center align-items-center" style={{ color: colors.gray_p }}>
                      {item.modify ? (
                        <input
                          value={item.qte}
                          onChange={(e) => handleModify(item, e)}
                          style={{ outline: 'none', width: "50px" }}
                          type="text"
                          className="border rounded px-2 py-1"
                        />
                      ) : (
                        <p className="text-center" >{item.qte} g</p>
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
                    <p>{cardModal && cardModal.qte}</p>
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
