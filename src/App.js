import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://www.descope-escape-room.com/api/data", {
			method: "POST",
			headers: {
        Accept: "application/json, text/plain, */*",
				"Content-Type": "application/json",
		  }})
      .then(response => response.json())
      .then(data => setData(data));
  }, []);
  console.log(data)
  return (
    <div>
      <code>{data.body}</code>
        
    </div>
  );
}

export default App;
