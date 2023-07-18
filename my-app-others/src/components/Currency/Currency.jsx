// import React, { useEffect, useState } from "react";
// import "./currency.css";
// import axios from 'axios';

// const CurrencyExchanger = () => {
//   const [text1, settext1] = useState(1);
//   const [text2, settext2] = useState(1);
//   const [country, setcountry] = useState([]);
//   const [country2, setcountry2] = useState([]);
//   const [value1, setvalue1] = useState(1);
//   const [value2, setvalue2] = useState(1);

//   const changeHandler = (e) => {
//     settext1(e.target.value);
//   };

//   const changeValue = (e) =>{
//     setvalue1(e.target.value)
//   }

//   const changeValue2 = (e) =>{
//     setvalue2(e.target.value)
//   } 

//   useEffect(()=>{
//     getdata();
//   },[])

//   async function getdata (){
//     const result = await axios.get("http://data.fixer.io/api/latest?access_key=aca51b6306e2ebda2824d2cb47a5a048")
//     console.log(result.data);
//     setcountry(result.data);
//     setcountry2(result.data.rates);
//   }

//   const convert = () =>{}

//   return (
//     <div>
//       <div className="paper">
//         <h1>Currency Converter</h1>
//         <form action="" onSubmit={convert}>
//           <div>
//             <textarea varient="outlined" value={text1 || ""} onChange={changeHandler} autoComplete="off" />
//             <div className="dropdown" varient="outlined" onChange={changeValue}>
//               <select>
//                 <option>{Object.keys(country).map((value, index) =>(
//                     <option key={index} value ={country[value]}>
//                         {value}
//                     </option>
//                 ))}</option>
//               </select>
//             </div>
//           </div>
//           <div>
//             <textarea varient="outlined" value={text2 || ""} />
//             <div className="dropdown" varient="outlined" onChange={changeValue2}>
//               <select native>
//                 <option>abc</option>
//               </select>
//             </div>
//           </div>
//           <button type="submit" className="button" varient="contained">
//             convert
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CurrencyExchanger;
