// import React from 'react';
// import { Route, NavLink, HashRouter } from 'react-router-dom';
// import About from './About';
// import Experience from './Experience';
// import Skills from '../pages/Skills';
// import Contact from './Contact';
import { About, Experience, Skills, Contact } from '../pages';
import '../style.css';
const routes = [
  {
    path: '/About',
    component: About,
  },
  {
    path: '/Experience',
    component: Experience,
  },
  {
    path: '/Skills',
    component: Skills,
  },
  {
    path: '/Contact',
    component: Contact,
  },
];
export default routes;

// import Contact from './Contact';
// const Main = () => {
//   return (
//     <HashRouter>
//       <div>
//         <ul className="header">
//           <li>
//             <NavLink to="/">About</NavLink>
//           </li>
//           <li>
//             <NavLink to="/Skills">Skills</NavLink>
//           </li>
//           <li>
//             <NavLink to="/Experience">Experience</NavLink>
//           </li>
//           <li>
//             <NavLink to="/contact">Contact</NavLink>
//           </li>
//         </ul>
//         <div className="content">
//           <Route exact path="/" component={About} />
//           <Route path="/about" component={About} />
//           <Route path="/Skills" component={Skills} />
//           <Route path="/contact" component={Contact} />
//           <Route path="/Experience" component={Experience} />
//         </div>
//       </div>
//     </HashRouter>
//   );
// };

// export default Main;
