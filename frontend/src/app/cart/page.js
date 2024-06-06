import Cards from "../../../components/cart/cards";
import Head from "../../../components/cart/head";
import Payment from "../../../components/cart/payment";

export default function Index() {
  return (
    <>
    <Head/>
    <main className="bag_main container mt-5 d-flex ">
      <Cards/>
      <Payment/>
    </main>
    </>
  )
}
