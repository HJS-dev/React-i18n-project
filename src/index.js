import React  from 'react';
import ReactDOM from 'react-dom';
import './i18next/i18n'

import App from './App'

import './styles/App.scss'
// const Ltr = React.lazy(() => import ('./themes/ltr'))
// const Rtl = React.lazy(() => import ('./themes/rlt'))

// const Selector = ({ children }) => {
//         // const Dir = document.body.getAttribute("dir")
//         const Dir = document.body.getAttribute("dir") || 'ltr'


//   return (
//     <>
//       <React.Suspense fallback ={<></>}>
//         {(Dir === 'ltr') && <Ltr />}
//         {(Dir === 'rtl') && <Rtl />}
//       </React.Suspense>
//       {children}
//     </>

//   )
// }



ReactDOM.render(
    
  <React.Suspense fallback={"...Loading"}>
  <React.StrictMode>
      <App />
    </React.StrictMode>
 </React.Suspense>
  ,
  
  document.getElementById('root')
);




































// // import './styles/App.scss'

// function ltr() {
//   const Ltr =  import("./styles/App.css")
//   return Ltr
// }
// function rtl() {
//   const Rtl =  import("./styles/rtl/App.rtl.css");
//   return Rtl
// }

//   const dir = document.body.getAttributeNode('dir').value 
// dir === '' ? ltr() : rtl()

// const StyleSelctor = ({ children }) => {
//   const dir1 = localStorage.getItem("i18nextLng")=== 'en' 
//   console.log(dir1)
//   // const dir1 = dir.value === 'ltr' || 'auto'
  
//     return (
//       <>  
//         <React.Suspense fallback={<></>}>
//             {(dir1 === 'en') && <Ltr />}
//             {(dir1 === 'ar') && <Rtl />}     
//           </React.Suspense>
      
//         {children}
//         </>
//       )
//     }
    

  // const currentLanguageCode = cookies.get('i18next') || 'en'
  // const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  

      
// function ltr() {
//   // const ltrcss = "./src/styles/App.css";
//   // const link = document.createElement("link");
//   // link.href = ltrcss;
//   // link.rel = 'stylesheet'
//   // document.head.appendChild(link);
//   require("./styles/rtl/App.rtl.css")
// }
// function rtl() {
//   // const ltrcss = "./styles/rtl/App.rtl.css";
//   // const link = document.createElement("link");
//   // link.href = ltrcss;
//   // link.rel = "stylesheet";
//   // document.head.appendChild(link);
//   require("./styles/App.css");

// }


