import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import EmployeeList from './components/EmployeeList';

function App() {
  const employees = ["Alice", "Bob", "Charlie", "David", "Eve"];
  const [search, setSearch] = useState('');

  const findEmployees = employees.filter(name =>
    name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='box'>
      <h1>Employee Directory</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <EmployeeList employees={findEmployees} />
    </div>
  );
}

export default App
