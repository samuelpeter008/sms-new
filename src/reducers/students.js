const initialState = {
    students: [],
    loading: false,
    error: null,
  };
  
  const studentsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_STUDENTS_REQUEST':
      case 'CREATE_STUDENT_REQUEST':
      case 'UPDATE_STUDENT_REQUEST':
      case 'DELETE_STUDENT_REQUEST':
        return { ...state, loading: true, error: null };
  
      case 'FETCH_STUDENTS_SUCCESS':
        return { ...state, students: action.payload, loading: false };
  
      case 'CREATE_STUDENT_SUCCESS':
        console.log(state.students, action.payload)
        // return { ...state, students: [...state.students, action.payload], loading: false };
        return { ...state, students: [...state.students], loading: false };

  
      case 'UPDATE_STUDENT_SUCCESS':
        const updatedStudents = state.students.map((student) =>
          student.id == action.payload.id ? action.payload : student
        );
        console.log(updatedStudents)
        return { ...state, students: updatedStudents, loading: false };
  
      case 'DELETE_STUDENT_SUCCESS':
        const filteredStudents = state.students.filter((student) => student.id != action.payload);
        return { ...state, students: filteredStudents, loading: false };
  
      case 'FETCH_STUDENTS_FAILURE':
      case 'CREATE_STUDENT_FAILURE':
      case 'UPDATE_STUDENT_FAILURE':
      case 'DELETE_STUDENT_FAILURE':
        return { ...state, loading: false, error: action.error };
  
      default:
        return state;
    }
  };
  
  export default studentsReducer;

  
  