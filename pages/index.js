import CookieStandAdmin from '../components/CookieStandAdmin.js';



export default function Home() {

  return (
    <div>
      <CookieStandAdmin/>
    </div>
  )
}


































// import Head from 'next/head'
// import Link from 'next/link'
// import { useState } from 'react';


// export default function Home() {

//   const [answeredQuestions, setAnsweredQuestions] = useState([]);

//   function questionHandler(event) {
//     event.preventDefault();
//     const question = {
//       location: event.target.location.value,
//       min: event.target.min.value,
//       max: event.target.max.value,
//       avg: event.target.avg.value,
//     }

//     setAnsweredQuestions([...answeredQuestions, question]); 
//   }


//   return (
//     <div className="">
//       <Head>
//         <title>Cookie Stand Admin</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <header className=" font-mono flex justify-between bg-purple-400 text-gray-100 p-3.5 items-center">
//         <h1 className="text-4xl  ">Cookie Stand Admin</h1>
//       </header>


//       <main className="">
//         <form className=" justify-items-center font-serif bg-green-300 text-black flex  bg-gray-200 mx-auto my-4 p-10 mt-8 rounded-2xl w-3/4 " onSubmit={questionHandler}>
//           <div className=" w-3/4  mx-auto my-4   ">
//             <label className="">Location    <input className="flex-auto p-1 " type="text" name="location" placeholder="location" /> </label>
//             <br></br>
//             <br></br>

//             <label>Minimum number of Customers per Hour<input className="flex-auto p-1  " type="number" name="min" placeholder="Minimum number of Customers per Hour" /></label>
//             <br></br>
//             <br></br>
//             <label>Maximum number of Customers per Hour<input className="flex-auto p-1 " type="number" name="max" placeholder="Maximum number of Customers per Hour" /></label>
//             <br></br>
//             <br></br>
//             <label>Averge number of Cookies per customer<input className="flex-auto p-1 " type="number" step="1" name="avg" placeholder="Averge number of Cookies per customer" /></label>
//             <br></br>
//             <br></br>
//             <button className="p-2 bg-purple-400  w-44 -mx-0.5">Add a new branch</button>
//           </div>

//         </form>

//         <p className="text-black  text-center mb-20">
      

//           <div>
//             {
//               answeredQuestions.map(item => {
//                 return (
//                   <h2 className="text-center">{JSON.stringify(item)}</h2>
//                 )
//               })
//             }

//           </div>
//         </p>



//       </main>


//       <footer className="  font-mono flex justify-between bg-purple-400 text-gray-100 p-2 items-center">
//         © Cookies stand by Doa'a 


//       </footer>
//     </div>
//   )
// }