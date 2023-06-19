// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import MenuItem from '@mui/material/MenuItem';
// import Select from '@mui/material/Select';
// import './Dashboard.css';


// const Dashboard = () => {
//   const [students, setStudents] = useState([]);
//   const [selectedCourse, setSelectedCourse] = useState('React.js');
//   const [selectedStudentId, setSelectedStudentId] = useState(null);
//   const [modifiedName, setModifiedName] = useState('');
//   const [modifiedEmail, setModifiedEmail] = useState('');
//   const [modifiedPhoneNumber, setModifiedPhoneNumber] = useState('');

//   useEffect(() => {
//     getdata();
//   }, []);

//   const getdata = (id) => {
//     axios.get('http://localhost:3000/api/students')
//       .then((response) => {
//         console.log(response)
//         setStudents(response.data);
//         // setStudents([...students, response.data]);
//       })
//       .catch((error) => {
//         console.error('Error fetching students:', error);
//       });
//   };


//   const handleCreateStudent = (student) => {
//     console.log(student)
//     var data = student;
//     axios.post('http://localhost:3000/api/students', data)
//     .then((response) => {
//       console.log(response)
//       // setStudents(response.data);
//       getdata();

//     })
//     .catch((error) => {
//       console.error('Error fetching students:', error);
//     });
//     // setStudents([...students, student]);
//   };

//   const handleModifyStudent = (id, modifiedName, modifiedEmail, modifiedPhoneNumber, modifiedCourse) => {
//     const updatedStudents = students.map((student) =>
//       student.id == id
//         ? {
//             ...student,
//             name: modifiedName,
//             email: modifiedEmail,
//             phoneNumber: modifiedPhoneNumber,
//             course: modifiedCourse,
//           }
//         : student
//     );
//     setStudents(updatedStudents);
//     setSelectedStudentId(null);
//     setModifiedName('');
//     setModifiedEmail('');
//     setModifiedPhoneNumber('');

//     var data = {            
//       name: modifiedName,
//       email: modifiedEmail,
//       phoneNumber: modifiedPhoneNumber,
//       course: modifiedCourse};
//     axios.put(`http://localhost:3000/api/students/${id}`, data)
//     .then((response) => {
//       console.log(response)
//       // setStudents(response.data);
//       getdata();
//     })
//     .catch((error) => {
//       console.error('Error fetching students:', error);
//     });

//   };

//   const handleDeleteStudent = (id) => {

//     // Make the API call
//     axios.delete(`http://localhost:3000/api/students/${id}`)
//       .then(response => {
//         // Handle the API response
//         console.log(response.data);
//         getdata();
//       })
//       .catch(error => {
//         // Handle any errors
//         console.error(error);
//       });

//     // const updatedStudents = students.filter((student) => student.id !== id);
//     // setStudents(updatedStudents);
//   };

//   const courseOptions = ['React.js', 'JavaScript', 'Python', 'Java', 'HTML/CSS'];

//   const handleModify = () => {
//     handleModifyStudent(
//       selectedStudentId,
//       modifiedName,
//       modifiedEmail,
//       modifiedPhoneNumber,
//       selectedCourse
//     );
//   };

//   const isEmailValid = (email) => {
//     // Regular expression to validate email format
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const isPhoneNumberValid = (phoneNumber) => {
//     // Regular expression to validate phone number format
//     const phoneRegex = /^\d{10}$/;
//     return phoneRegex.test(phoneNumber);
//   };

//   return (
//     <div class='dashboard-bg'>
//     <div class='dashboard-container'>
//       <h2 class='dashboard-title'>Dashboard</h2>
//       <Table class='dashboard-table'>
//         <TableHead>
//           <TableRow>
//             <TableCell>Name</TableCell>
//             <TableCell>Email ID</TableCell>
//             <TableCell>Phone Number</TableCell>
//             <TableCell>Course</TableCell>
//             <TableCell>Action</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {students.map((student) => (
//             <TableRow key={student.id}>
//               <TableCell>{student.name}</TableCell>
//               <TableCell>{student.email}</TableCell>
//               <TableCell>{student.phoneNumber}</TableCell>
//               <TableCell>
//                 {student.id === selectedStudentId ? (
//                   <Select
//                     value={selectedCourse}
//                     onChange={(event) => setSelectedCourse(event.target.value)}
//                   >
//                     {courseOptions.map((option) => (
//                       <MenuItem key={option} value={option}>
//                         {option}
//                       </MenuItem>
//                     ))}
//                   </Select>
//                 ) : (
//                   student.course
//                 )}
//               </TableCell>
//               <TableCell>
//                 <Button
//                   variant="contained"
//                   onClick={() => {
//                     setSelectedStudentId(student.id);
//                     setSelectedCourse(student.course);
//                     setModifiedName(student.name);
//                     setModifiedEmail(student.email);
//                     setModifiedPhoneNumber(student.phoneNumber);
//                   }}
//                 >
//                   Modify
//                 </Button>
//                 <Button variant="contained" onClick={() => handleDeleteStudent(student.id)}>
//                   Delete
//                 </Button>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//       {selectedStudentId && (
//         <div>
//           <TextField
//             label="Modified Name"
//             value={modifiedName}
//             onChange={(event) => setModifiedName(event.target.value)}
//           />
//           <TextField
//             label="Modified Email"
//             value={modifiedEmail}
//             onChange={(event) => setModifiedEmail(event.target.value)}
//             error={!isEmailValid(modifiedEmail)}
//             helperText={!isEmailValid(modifiedEmail) && 'Invalid email format'}
//           />
//           <TextField
//             label="Modified Phone Number"
//             value={modifiedPhoneNumber}
//             onChange={(event) => setModifiedPhoneNumber(event.target.value)}
//             error={!isPhoneNumberValid(modifiedPhoneNumber)}
//             helperText={!isPhoneNumberValid(modifiedPhoneNumber) && 'Invalid phone number format'}
//           />
//           <Button variant="contained" onClick={handleModify}>
//             Save Changes
//           </Button>
//         </div>
//       )}
//       <Button
//         variant="contained"
//         onClick={() =>
//           handleCreateStudent({
//             id: Date.now(),
//             name: 'New Student',
//             email: 'newstudent@example.com',
//             phoneNumber: '1234567890',
//             course: selectedCourse,
//           })
//         }
//       >
//         Create Student
//       </Button>
//     </div>
//     </div>
//   );
// };

// export default Dashboard;












































































































import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchStudentsRequest, createStudentRequest, updateStudentRequest, deleteStudentRequest } from '../actions/students';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from "@mui/icons-material/Edit";
import ButtonGroup from '@mui/material/ButtonGroup';
import './Dashboard.css';

const Dashboard = () => {
  const students = useSelector((state) => state.students);
  const [selectedCourse, setSelectedCourse] = useState();
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const [modifiedName, setModifiedName] = useState('');
  const [modifiedEmail, setModifiedEmail] = useState('');
  const [modifiedPhoneNumber, setModifiedPhoneNumber] = useState('')
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStudentsRequest());
  }, []);

  const handleCreateStudent = () => {
   
      const newStudent = {
      id: Date.now(),
      name: 'New Student',
      email: 'newstudent@example.com',
      phoneNumber: '1234567890',
      course: 'React.js',
    };

    const {type, payload} = dispatch(createStudentRequest(newStudent));
    console.log(payload);
    students.push(payload);
    console.log(students, students.length);
    
  };

  // const handleModifyStudent = (id, modifiedName, modifiedEmail, modifiedPhoneNumber, modifiedCourse) => {
  //   const updatedStudents = students.map((student) =>
  //     student.id == id
  //       ? {
  //           ...student,
  //           name: modifiedName,
  //           email: modifiedEmail,
  //           phoneNumber: modifiedPhoneNumber,
  //           course: modifiedCourse,
  //         }
  //       : student
  //   );
  //   dispatch(updateStudentRequest(id, updatedStudents));
  // };

  const handleModifyStudent = (id, modifiedName, modifiedEmail, modifiedPhoneNumber, modifiedCourse) => {
    console.log(id, modifiedName, modifiedEmail, modifiedPhoneNumber, modifiedCourse)
    const updatedData = {
      id,
      data: {
        name: modifiedName,
        email: modifiedEmail,
        phoneNumber: modifiedPhoneNumber,
        course: modifiedCourse,
      },
    };
    dispatch(updateStudentRequest(id, updatedData));

    // students = updatedData;
    setSelectedStudentId(null);
    setModifiedName('');
    setModifiedEmail('');
    setModifiedPhoneNumber('');

  };

  const handleDeleteStudent = (id) => {
    dispatch(deleteStudentRequest(id));
  };

  const courseOptions = ['React.js', 'JavaScript', 'Python', 'Java', 'HTML/CSS'];

  // const handleModify = (selectedStudentId, modifiedName, modifiedEmail, modifiedPhoneNumber, selectedCourse) => {
  //   handleModifyStudent(
  //     selectedStudentId,
  //      modifiedName, 
  //      modifiedEmail, 
  //      modifiedPhoneNumber, 
  //      selectedCourse);
  // };

  const handleModify = () => {
    handleModifyStudent(
      selectedStudentId,
      modifiedName,
      modifiedEmail,
      modifiedPhoneNumber,
      selectedCourse
    );
  };

  const isEmailValid = (email) => {
    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isPhoneNumberValid = (phoneNumber) => {
    // Regular expression to validate phone number format
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  return (
    <div className='dashboard-bg'>
      <div className='dashboard-container'>
        <h2 className='dashboard-title'>Dashboard</h2>
        <Table className='dashboard-table'>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Course</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          
          <TableBody>
            {students.map((student) => (
              <TableRow key={student.id}>
              <TableCell>{student.name}</TableCell>
              <TableCell>{student.email}</TableCell>
              <TableCell>{student.phoneNumber}</TableCell>
              
              <TableCell>
              {student.id == selectedStudentId ? (
                  <Select
                    value={selectedCourse}
                    onChange={(event) => setSelectedCourse(event.target.value)}
                  >
                    {courseOptions.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                ) : (
                  student.course
                )}
              </TableCell>
                
                {/* <TableCell>
                  <Select
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                  >
                    {courseOptions.map((course) => (
                      <MenuItem key={course} value={course}>
                        {course}
                      </MenuItem>
                    ))}
                  </Select>
                </TableCell> */}
                <TableCell>
                
                  <ButtonGroup
  disableElevation
  variant="contained"
  aria-label="Disabled elevation buttons"
>
  <Button startIcon={<EditIcon />}
                  variant="contained"
                  onClick={() => {
                    setSelectedStudentId(student.id);
                    setSelectedCourse(student.course);
                    setModifiedName(student.name);
                    setModifiedEmail(student.email);
                    setModifiedPhoneNumber(student.phoneNumber);
                  }}></Button>
  <Button variant="contained" startIcon={<DeleteIcon />} color="primary" onClick={() => handleDeleteStudent(student.id)}></Button>
</ButtonGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>


        {selectedStudentId && (
        <div>
          <TextField
            label="Modified Name"
            value={modifiedName}
            onChange={(event) => setModifiedName(event.target.value)}
          />
          <TextField
            label="Modified Email"
            value={modifiedEmail}
            onChange={(event) => setModifiedEmail(event.target.value)}
            error={!isEmailValid(modifiedEmail)}
            helperText={!isEmailValid(modifiedEmail) && 'Invalid email format'}
          />
          <TextField
            label="Modified Phone Number"
            value={modifiedPhoneNumber}
            onChange={(event) => setModifiedPhoneNumber(event.target.value)}
            error={!isPhoneNumberValid(modifiedPhoneNumber)}
            helperText={!isPhoneNumberValid(modifiedPhoneNumber) && 'Invalid phone number format'}
          />
          <Button variant="contained" onClick={handleModify}>
            Save Changes
          </Button>
        </div>
      )}




        <Button variant="contained" color="primary" onClick={handleCreateStudent} >
          Add Student
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
