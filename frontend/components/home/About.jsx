import { colors } from "../../styles/ele";
import { Bird, Valid } from "../../svg/bag";

export default function About() {
  return (
    <section className="about_part d-flex container mt-5 py-2 gap-3 flex-wrap flex-lg-nowrap" id="about">
        <div className="part_one d-flex flex-wrap flex-sm-nowrap gap-4 w-100 w-md-50">
                <div className="div_img w-100 w-sm-50">
                    <img className="rounded" src={'./photos/products/gateau2.jpg'} alt="" />
                    <Bird color={colors.primary}/>
                </div>
                <div className="d-flex flex-column gap-4 w-100 w-sm-50">
                     <div className="d-flex gap-4">
                        <span className="w-50 rounded p-2 text-light" style={{backgroundColor : colors.black}}>
                            <h1 className="fw-bold text-center" style={{marginBottom : '0px'}}>+10</h1>
                            <p className="text-center" style={{marginBottom : '0px'}}>Years of experience</p>
                        </span>
                        <span className="w-50 rounded p-2 text-light" style={{backgroundColor : colors.primary}}>
                            <h1 className="fw-bold text-center" style={{marginBottom : '0px'}}>1.2K</h1>
                            <p style={{marginBottom : '0px'}} className="text-center">User is happy</p>
                        </span>
                     </div>
                     <img className="rounded" src={'./photos/products/gateau.jpg'} alt="" />
                </div>
        </div>
        <div className="part_two w-100 w-md-50">
            <span className="bg-light p-2 rounded">🤝 Your gateway to healthy pastry</span>
            <h1 className="fw-bold mt-3">Defining the future of online experiences!</h1>
            <p className="mt-3">Our team of talented pastry chefs is dedicated to creating delightful and delectable treats that bring joy to every bite. From classic pastries to innovative confections, we use only the finest ingredients to ensure the highest quality in every creation</p>
            <ul style={{paddingLeft : '0px'}}>
                <li className="d-flex gap-3 align-items-center mt-4">
                    <Valid color={colors.primary}/>
                    The Best Pastry
                </li>
                <li className="d-flex gap-3 align-items-center mt-4">
                    <Valid color={colors.primary}/>
                    The Best Pastry
                </li>
                <li className="d-flex gap-3 align-items-center mt-4">
                    <Valid color={colors.primary}/>
                    The Best Pastry
                </li>
            </ul>
            <button className="btn mt-5 btn-dark text-light">Show More</button>
        </div>
    </section>
  )
}
