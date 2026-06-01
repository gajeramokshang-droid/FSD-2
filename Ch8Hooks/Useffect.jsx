import React, { useState, useEffect } from 'react';

function TodoList() {
  // 1. Create a state variable to store the array
  const [data, setData] = useState([]);

  useEffect(() => {
    // 2. Fetch the data from the API
    fetch('https://jsonplaceholder.typicode.com/todos') 
      .then(response => response.json())
      // 3. Update the state with the fetched data
      .then(json => setData(json))
      .catch(error => console.error("Error fetching data:", error));
  }, []); // Empty array means this runs once when the component loads

  // 4. Render the state data
  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}

export default TodoList;
