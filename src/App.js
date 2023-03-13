import { useState } from "react";

function App() {
	const [data, setData] = useState([]);

	fetch("https://www.descope-escape-room.com/api/data", {
		method: "POST",
		headers: {
			Accept: "application/json, text/plain, */*",
			"Content-Type": "application/json",
		},
	})
		.then((response) => response.json())
		.then((data) => setData(data));

	return (
		<div>
			<div id="login">
			</div>
			<code>{data.body}</code>
		</div>
	);
}

export default App;
