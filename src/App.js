// import React from 'react';
// import './App.css';
// import { Route, Switch, BrowserRouter } from 'react-router-dom';
// import routes from './config/route';
// import Header from './header';
// const App = () => {
//   // const listName = ['Felia', 'Citra', 'Dwiyani'];
//   // const headerMapped = listName.map((name) => {
//   //   return <Header headerName={name} />;
//   // });
//   return (
//     <BrowserRouter>
//       <Switch>
//         <Route path="/" component={menu} key="/" />
//       </Switch>
//     </BrowserRouter>
//   );
// };

// export default App;
import React, { useState } from 'react';
import './App.css';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import routes from './config/route';
import Header from './header';

import ThemeContext, { themes } from './pages/theme-context';

// const isUserAuthenticated = true;
// const PrivateRoute = ({ component: Component }) => {
//   return (
//     <Route
//       render={() => {
//         if (isUserAuthenticated) {
//           return <Component />;
//         }
//         return <Redirect to="/login" />;
//       }}
//     />
//   );
// };

const App = () => {
  const [theme, setTheme] = useState(themes.dark);
  const toggleTheme = () =>
    theme == themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
  return (
    <ThemeContext.Provider value={theme}>
      <BrowserRouter>
        <Header />
        <button onClick={toggleTheme}>Change theme</button>
        <Switch>
          {routes.map(
            (route) => {
              // if (route.isPublic) {
              return (
                <Route
                  path={route.path}
                  component={route.component}
                  key={route.path}
                />
              );
            }
            // return (
            //   <PrivateRoute
            //     path={route.path}
            //     component={route.component}
            //     key={route.path}
            //   />
            // );
          )}
        </Switch>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};

export default App;
