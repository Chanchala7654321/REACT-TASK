import React from 'react';

const EmployeeList = ({ employees }) => {
  return (
    <ul>
      {employees.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
};

export default EmployeeList;
