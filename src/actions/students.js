export const fetchStudentsRequest = () => ({
    type: 'FETCH_STUDENTS_REQUEST',
  });
  
  export const createStudentRequest = (student) => ({
    type: 'CREATE_STUDENT_REQUEST',
    payload: student,
  });
  
  export const updateStudentRequest = (id, data) => ({
    type: 'UPDATE_STUDENT_REQUEST',
    payload: { id, data },
  });
  
  export const deleteStudentRequest = (id) => ({
    type: 'DELETE_STUDENT_REQUEST',
    payload: id,
  });
  