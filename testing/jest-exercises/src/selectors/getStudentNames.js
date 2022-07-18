const getStudentNames = (students) => {
    return students.map(student => student.name);
};

export const validateStudent = (student) => {
    if (student.name.match(/^[a-zA-Z]+$/)) {
        return true;
    } else {
        return false;
    }
}

export default getStudentNames;
