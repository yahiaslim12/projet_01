'use client'
import Cards from "../../../components/cart/cards";
import Head from "../../../components/cart/head";
import Payment from "../../../components/cart/payment";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useContext ,useEffect,useState} from "react";
import AuthContext from "../../../components/AuthProvider";
import { GET_PRO_BAG ,Change_QTE, DELETE_PRO_BAG} from "../api/products";
import { insert } from "../api/cmd";
export default function Index() {
  const router = useRouter()
  const {data :session,status} = useSession()
  const {handleOpenL} = useContext(AuthContext)
  const [cards,setCards] = useState([])
  const [cardModal, setCardModal] = useState({});
  const [changeQte,setChangeQte] = useState([])
  const [som,setSom] = useState(0)
  const [openC,setOpenC] = useState(false)
  const [text,setText] = useState('')
  const [ids,setIds] = useState([])
  const [count,setCount] = useState(0)
  const handleText = (e) => {
    setText(e.target.value)
  }
  const closeOpenC = () => {
     setOpenC(false)
  }
  const openOpenC = () => {
     setOpenC(true)
  }
  const handleCardModal = (item)=>{
     setCardModal(item)
  }
  const handleChange = (id, type,method) => {
    if(method === 'modal'){
     if (type === '-') {
       setCardModal(prev => {
         const newQte = prev.qte >= 2 ? prev.qte - 1 : 1;
         setChangeQte([prev.id_product, newQte]);
         return {
           ...prev,
           qte: newQte
         };
       });
     } else {
       setCardModal(prev => {
         const newQte = prev.qte + 1;
         setChangeQte([prev.id_product, newQte]);
         return {
           ...prev,
           qte: newQte
         };
       });
     }
   }
   setCards(prevCards =>
       prevCards.map(card => {
         if (card.id_product === id) {
           if (type === '-') {
             setChangeQte([id,card.qte >= 2 ? card.qte - 1 : 1])
             return { ...card, qte: card.qte >= 2 ? card.qte - 1 : 1};
           } else if (type === '+') {
             setChangeQte([id,card.qte + 1])
             return { ...card, qte: card.qte + 1 };
           }
         }
         return card;
       })
     );
 };
 const confirm_cmd = async ()=>{
   closeOpenC()
   console.log(ids);
   const res = await insert([session.user.email,ids,text,som + 700])
   console.log(res);
   get_Cards()
 }
 const delete_pro = async (id,email)=>{
    await DELETE_PRO_BAG([id,email])
    get_Cards()
 }
  const handleIds = () => {
    setIds([])
    cards.forEach(item =>{
      setIds(prev => [
        ...prev,
        {id :item.id_product ,qte : item.qte}
      ])
   })
  }
  const get_Cards = async ()=>{
    if(session){
      const res = await GET_PRO_BAG(session.user.email)
      setCards(res[0])
      handleIds()
    }
  }
  useEffect(() => {
    let totalSum = 0;
    cards.forEach(item => {
      totalSum += Number(item.price) * Number(item.qte);
    });
    setSom(totalSum);
    handleIds()
    setCount(cards.length)
  }, [cards]);
  useEffect(()=>{
    if(status === 'loading') return ;
    if(!session){
        handleOpenL()
        router.push('/')
    }
  },[session,status])
  if(status === 'loading'){
    return (
      <div style={{height:'600px'}} className="d-flex justify-content-center align-items-center">
      <h1>Loading ...</h1>
      </div>
    )
  }
  if(!session){
    return <div style={{height:'600px'}} className="d-flex justify-content-center align-itemst-center">
       <h1>redirect to home page ...</h1>
    </div>
  }
  return (
    <>
    <Head count = {count}/>
    <main className="bag_main container mt-5 d-flex ">
      <Cards cards={cards} get_Cards={get_Cards} handleChange={handleChange} cardModal={cardModal} handleCardModal = {handleCardModal} changeQte = {changeQte} delete_pro = {delete_pro}/>
      <Payment som = {som} openC={openC} closeOpenC={closeOpenC} openOpenC = {openOpenC} text={text} handleText={handleText} confirm_cmd = {confirm_cmd} count={count}/>
    </main>
    </>
  )
}
