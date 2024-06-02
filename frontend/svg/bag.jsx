"use client";
export function Bag() {
  return (
    <svg
      width={30}
      height={30}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M20.0164 16.2572C19.5294 18.5297 19.2859 19.666 18.4608 20.333C17.6357 21 16.4737 21 14.1495 21H9.85053C7.52639 21 6.36432 21 5.53925 20.333C4.71418 19.666 4.47069 18.5297 3.98372 16.2572L3.55514 14.2572C2.83668 10.9043 2.47745 9.22793 3.378 8.11397C4.27855 7 5.99302 7 9.42196 7H14.5781C18.0071 7 19.7215 7 20.6221 8.11397C21.2929 8.94376 21.2647 10.0856 20.9097 12"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
        ></path>{" "}
        <path
          d="M16 12H12M9 12H8"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
        <path
          d="M10 15H14"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
        <path
          d="M18 9L15 3"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
        <path
          d="M6 9L9 3"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
      </g>
    </svg>
  );
}
export function Person() {
  return (
    <svg
      fill="#000000"
      width={25}
      height={25}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z"></path>
      </g>
    </svg>
  );
}
export function List() {
  return (
    <svg
      width={30}
      height={30}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_blackgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M20 7L4 7"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
        ></path>{" "}
        <path
          d="M15 12L4 12"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
        ></path>{" "}
        <path
          d="M9 17H4"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
        ></path>{" "}
      </g>
    </svg>
  );
}
export function Search() {
  return (
    <svg
      width={25}
      height={25}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
      </g>
    </svg>
  );
}
export function Close({ setState, type }) {
  return (
    <svg
      className="close"
      width={30}
      height={30}
      viewBox="-0.5 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={type === "close" && setState}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M3 21.32L21 3.32001"
          stroke="#000000"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
        <path
          d="M3 3.32001L21 21.32"
          stroke="#000000"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
      </g>
    </svg>
  );
}
export function Right() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width={20}>
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M2 12.0701H22"
          stroke="#85A26A"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
        <path
          d="M16 5L21.16 10C21.4324 10.2571 21.6494 10.567 21.7977 10.9109C21.946 11.2548 22.0226 11.6255 22.0226 12C22.0226 12.3745 21.946 12.7452 21.7977 13.0891C21.6494 13.433 21.4324 13.7429 21.16 14L16 19"
          stroke="#85A26A"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
      </g>
    </svg>
  );
}
export function Cart(){
  return(
<svg width={20}viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.5 9.5L18.7896 6.89465C18.5157 5.89005 18.3787 5.38775 18.0978 5.00946C17.818 4.63273 17.4378 4.34234 17.0008 4.17152C16.5619 4 16.0413 4 15 4M4.5 9.5L5.2104 6.89465C5.48432 5.89005 5.62128 5.38775 5.90221 5.00946C6.18199 4.63273 6.56216 4.34234 6.99922 4.17152C7.43808 4 7.95872 4 9 4" stroke="#ffff" stroke-width="1.5"/>
<path d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4C15 4.55228 14.5523 5 14 5H10C9.44772 5 9 4.55228 9 4Z" stroke="#ffff" stroke-width="1.5"/>
<path d="M8 13V17" stroke="#ffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 13V17" stroke="#ffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 13V17" stroke="#ffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.864 16.4552C4.40967 18.6379 4.68251 19.7292 5.49629 20.3646C6.31008 21 7.435 21 9.68486 21H14.3155C16.5654 21 17.6903 21 18.5041 20.3646C19.3179 19.7292 19.5907 18.6379 20.1364 16.4552C20.9943 13.0234 21.4233 11.3075 20.5225 10.1538C19.6217 9 17.853 9 14.3155 9H9.68486C6.14745 9 4.37875 9 3.47791 10.1538C2.94912 10.831 2.87855 11.702 3.08398 13" stroke="#ffff" stroke-width="1.5" stroke-linecap="round"/>
</svg>

);
}
export function CadeauRond(){
  return (
  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 75.833 75.833">
  <g id="Groupe_25361" data-name="Groupe 25361" transform="translate(-1087.665 -615.083)">
    <circle id="Ellipse_1606" data-name="Ellipse 1606" cx="37.082" cy="37.082" r="37.082" transform="translate(1088.5 615.918)" fill="#85a26a" stroke="#85a26a" stroke-width="1.67"/>
    <g id="Icon_feather-gift" data-name="Icon feather-gift" transform="translate(1108 635.16)">
      <path id="Tracé_52803" data-name="Tracé 52803" d="M35.407,18V36.379H6V18" transform="translate(-2.324 0.379)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.67"/>
      <path id="Tracé_52804" data-name="Tracé 52804" d="M3,10.5H39.758v9.19H3Z" transform="translate(-3 -1.31)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.67"/>
      <path id="Tracé_52805" data-name="Tracé 52805" d="M18,38.069V10.5" transform="translate(0.379 -1.31)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.67"/>
      <path id="Tracé_52806" data-name="Tracé 52806" d="M20.365,12.19H12.095a4.595,4.595,0,1,1,0-9.19C18.528,3,20.365,12.19,20.365,12.19Z" transform="translate(-1.986 -3)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.67"/>
      <path id="Tracé_52807" data-name="Tracé 52807" d="M18,12.19h8.271a4.595,4.595,0,1,0,0-9.19C19.838,3,18,12.19,18,12.19Z" transform="translate(0.379 -3)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.67"/>
    </g>
  </g>
</svg>

);
}
export function CamionRond(){
  return (
<svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 75.833 75.833">
  <g id="Groupe_24258" data-name="Groupe 24258" transform="translate(-753.665 -629.665)">
    <circle id="Ellipse_1605" data-name="Ellipse 1605" cx="37.082" cy="37.082" r="37.082" transform="translate(754.5 630.5)" fill="#85a26a" stroke="#85a26a" stroke-width="1.67"/>
    <g id="Icon_feather-truck" data-name="Icon feather-truck" transform="translate(774 653)">
      <path id="Tracé_52799" data-name="Tracé 52799" d="M1.5,4.5H26.265V25.963H1.5Z" transform="translate(-1.5 -4.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.67"/>
      <path id="Tracé_52800" data-name="Tracé 52800" d="M24,12h6.6l4.953,4.953v8.255H24Z" transform="translate(0.765 -3.745)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.67"/>
      <path id="Tracé_52801" data-name="Tracé 52801" d="M12.755,28.127A4.127,4.127,0,1,1,8.627,24a4.127,4.127,0,0,1,4.127,4.127Z" transform="translate(-1.198 -2.537)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.67"/>
      <path id="Tracé_52802" data-name="Tracé 52802" d="M32.255,28.127A4.127,4.127,0,1,1,28.127,24a4.127,4.127,0,0,1,4.127,4.127Z" transform="translate(0.765 -2.537)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.67"/>
    </g>
  </g>
</svg>
  );

}
export function SupportRond(){
  return (
<svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 75.833 75.833">
  <g id="Groupe_24257" data-name="Groupe 24257" transform="translate(-419.665 -618.413)">
    <circle id="Ellipse_1604" data-name="Ellipse 1604" cx="37.082" cy="37.082" r="37.082" transform="translate(420.5 619.248)" fill="#85a26a" stroke="#85a26a" stroke-width="1.67"/>
    <path id="customer-service_1_" data-name="customer-service (1)" d="M45.439,23.744l-2.068-1.451a18.251,18.251,0,0,0-36.488,0L4.821,23.744a.606.606,0,0,0-.258.5v6.44a.605.605,0,0,0,.255.493l2.314,1.653a.606.606,0,0,0,.351.114h2.3a.606.606,0,0,0,.606-.606v-9.68c0-.008,0-.017,0-.025a14.734,14.734,0,1,1,29.468,0,.247.247,0,0,0,0,.066v9.638a.606.606,0,0,0,.606.606h.546v.7a3.86,3.86,0,0,1-3.27,3.806A13.711,13.711,0,0,0,38.919,31.9V23.022a13.791,13.791,0,0,0-27.582,0V31.9A13.787,13.787,0,0,0,37.114,38.7h.048a5.074,5.074,0,0,0,5.069-5.069v-.7h.546a.606.606,0,0,0,.352-.113l2.314-1.653a.605.605,0,0,0,.254-.493V24.24a.606.606,0,0,0-.258-.5Zm-20.312-13.3a12.6,12.6,0,0,1,12.58,12.58v3.261a12.355,12.355,0,0,1-12.056-6.157.606.606,0,0,0-1.048,0,12.355,12.355,0,0,1-12.056,6.157V23.022a12.6,12.6,0,0,1,12.58-12.58Zm0,34.035A12.6,12.6,0,0,1,12.548,31.9V27.5c.42.038.842.065,1.264.065a13.734,13.734,0,0,0,11.315-6,13.734,13.734,0,0,0,11.319,6c.422,0,.844-.027,1.264-.065v4.4a12.5,12.5,0,0,1-1.319,5.6H30.71a1.975,1.975,0,0,0-1.877-1.367h-2.4a1.972,1.972,0,1,0,0,3.945h2.4A1.976,1.976,0,0,0,30.709,38.7H35.7a12.576,12.576,0,0,1-10.571,5.773Zm4.464-6.341a.761.761,0,0,1-.758.725h-2.4a.761.761,0,1,1,0-1.523h2.4a.761.761,0,0,1,.758.725c0,.012,0,.024,0,.037S29.59,38.124,29.591,38.136ZM9.181,31.728h-1.5l-1.9-1.359V24.556l1.9-1.333H9.18ZM25.128,6.987A16.038,16.038,0,0,0,9.207,22.011H8.1a17.045,17.045,0,0,1,34.054,0H41.047A16.038,16.038,0,0,0,25.128,6.985ZM44.486,30.371l-1.9,1.359h-1.5V23.222h1.507l1.9,1.333Z" transform="translate(432.437 631.212)" fill="#fff"/>
  </g>
</svg>

    );
}
export function Arrow(){
  return (
    <svg width={30} height={30} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#85a26a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
}
export function Plus(){
  return (
  
<svg width={30} height={30} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4 12H20M12 4V20" stroke="#85a26a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  );
}


