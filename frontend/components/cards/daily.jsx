import { colors } from "../../styles/ele";
import { List } from "../../svg/bag";

export default function Daily({src,price,desc,title}) {
  return (
    <div className="daily border rounded">
      <img className="rounded" src={src} alt="" />
      <div className="p-2 d-flex flex-column justify-content-between">

        <div>
            <small style={{ color: colors.gray_small }}>
            Healthy, sweet, delicious
            </small>
            <h6 className="mt-2" style={{ marginBottom: "0px" }}>{title}</h6>
            <p
            className="mt-1"
            style={{ marginBottom: "0px", fontWeight: "500 !important" }}
            >
            {price}
            </p>
            <p style={{color : colors.gray_p}}>
                {desc}
            </p>
            
        </div>
           <button
            style={{
                backgroundColor: colors.primary,
                fontWeight: "500 !important",
            }}
            className="text-light w-100 px-2 mt-2 py-2 d-flex gap-2 align-items-center rounded justify-content-center"
            >
            <List color="white" /> Show Detail
            </button>
      </div>
    </div>
  );
}
