// import React, { useState } from 'react';
// import Login from './components/Login';
// import Dashboard from './components/Dashboard';

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//   };

//   return (
//     <div className="App">
//       {isLoggedIn ? (
//         <Dashboard />
//       ) : (
//         <Login onLogin={handleLogin} />
//       )}
//     </div>
//   );
// };

// export default App;;



































import React, { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Container maxWidth="sm">
      <Box mt={4}>
        {isLoggedIn ? (
          <Dashboard />
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </Box>
    </Container>
  );
};

export default App;
