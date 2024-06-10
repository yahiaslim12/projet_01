import styles from "./prodStyle.css"
import ProductContainer from "../../../components/ProductContainer"

export default function Product({params}) {
  return (
    <>
    <ProductContainer id_produit={params.id_produit} />
    </>
  )
}
