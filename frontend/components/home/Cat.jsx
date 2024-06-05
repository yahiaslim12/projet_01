import { Right } from "../../svg/bag";
import { useRouter } from "next/navigation";

export default function Cat() {
  const router = useRouter()
  const handleRouter = () => {
     router.push('./categories')
  }
  return (
    <div className="container mt-3" id="category">
    <h1 style={{fontSize: 'calc(1.27813rem + .3375vw)'}}>Category</h1>
    <div className=" d-flex gap-3 mt-3 flex-wrap flex-sm-nowrap">
        <div className="cat1 rounded w-100 w-sm-50" style={{position : 'relative',height : '200px'}}>
            <img className="rounded" src="./photos/products/cat1.jpg" alt="cat1" style={{width : '100%',height:'100%',objectFit : 'cover'}}/>
            <div className="text-light" style={{position : 'absolute', top : '1rem',left : '1rem'}}>
                <h3>Oriental Pastry</h3>
                <button onClick={()=>handleRouter} className="rounded fw-bold p-2 btn btn-dark text-light mt-3 d-flex align-items-center gap-3">Shop Now <Right color={'white'}/></button>
            </div>
        </div>
        <div className="cat2 rounded w-100 w-sm-50" style={{position : 'relative',height : '200px'}}>
            <img className="rounded" src="./photos/products/cat2.jpg" alt="cat2" style={{width : '100%',height:'100%',objectFit : 'cover'}}/>
            <div className="text-light" style={{position : 'absolute', top : '1rem',left : '1rem'}}>
                <h3>Occidental Pastry</h3>
                <button onClick={()=>handleRouter} className="rounded fw-bold p-2 btn btn-dark text-light mt-3 d-flex align-items-center gap-3">Shop Now <Right color={'white'}/></button>
            </div>
        </div>
    </div>
    </div>
  )
}
