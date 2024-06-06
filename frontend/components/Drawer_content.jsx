"use client";
import { Close } from "../svg/bag";
import Link from "next/link";
import { link, colors, pallet, ul } from "../styles/ele";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Drawer_content({drawer}) {
  const router = useRouter();
  const [values, setValues] = useState([
    {
      value: "Home",
      focus: true,
      url: "/",
    },
    {
      value: "Category",
      focus: false,
      url: "#categories",
    },
    {
      value: "Bag",
      focus: false,
      url: "/bag",
    },
    {
      value: "About us",
      focus: false,
      url: "/",
    },
  ]);
  return (
    <div className="drawer_content py-2">
      <div className="drawer_head d-flex justify-content-between align-items-center border-bottom px-2 py-2">
        <h3 style={{marginBottom : '0px'}}>Pages List</h3>
        <Close setState={drawer} type={"close"}/>
      </div>
      <div>
        <nav>
          <ul style={ul} className="px-2 mt-3">
            {values.map((item, index) => (
              <li
                className="dl rounded px-2 py-2 mt-3"
                style={{ color : item.focus ? colors.primary : "black" }}
                onClick={() => router.push(`.${item.url}`)}
                key={index}
              >
                {item.value}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
