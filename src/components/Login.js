// import React, { useState } from 'react';

// const Login = ({ onLogin }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     // Perform authentication logic here
//     // You can use APIs or mock data for authentication

//     // If authentication is successful, call the onLogin function
//     onLogin();
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default Login;


































// import React, { useState } from 'react';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import './Login.css';

// const Login = ({ onLogin }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     // Perform authentication logic here
//     // You can use APIs or mock data for authentication

//     // If authentication is successful, call the onLogin function
//     onLogin();
//   };

//   return (
//     <div >
//       <h1>STUDENT MANAGEMENT SYSTEM</h1>
      
//       <div class='login-container'>
//       <h2 class='login-title'>Admin Login</h2>
//       <TextField
//         label="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <br></br>
//       <TextField
//         label="Password"
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <br></br>
//       <Button variant="contained" onClick={handleLogin} >Login</Button>
//       </div>
//     </div>
//   );
// };

// export default Login;












































import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Login.css';


const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === 'Admin' && password === 'Admin') {
      
      setError('');
      
      onLogin();
    } else {
      
      setError('Invalid username or password');
    }
  };

  return (
    <div>
       

      <h1>STUDENT MANAGEMENT SYSTEM</h1>
      <div className='login-container'>
        <h2 className='login-title'>Admin Login</h2>
        <TextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br></br>
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <Button variant="contained" onClick={handleLogin}>
          Login
        </Button>
        {error && <p className='error-message'>{error}</p>}
      </div>
    </div>
  );
};

export default Login;

