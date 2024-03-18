import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const AdminModule = React.lazy(() => import('./Admin'));
const UserModule = React.lazy(() => import('./User'));
const Main = React.lazy(() => import('./Main'));

const App = () => {
  const [loadingTimeout, setLoadingTimeout] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoadingTimeout(false);
    }, 5000); // Adjust the timeout value as needed

    return () => clearTimeout(timeout);
  }, []);
  

  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <Suspense fallback={<div>Loading...</div>}>
              {loadingTimeout && <div>Loading...</div>}
              {!loadingTimeout && <Main />}
            </Suspense>
          }
        />
        <Route
          path='/admin'
          element={
            <Suspense fallback={<div>Loading...</div>}>
              {loadingTimeout && <div>Loading...</div>}
              {!loadingTimeout && <AdminModule />}
            </Suspense>
          }
        />
        <Route
          path='/user'
          element={
            <Suspense fallback={<div>Loading...</div>}>
              {loadingTimeout && <div>Loading...</div>}
              {!loadingTimeout && <UserModule />}
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
