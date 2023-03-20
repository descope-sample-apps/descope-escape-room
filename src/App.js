import { useEffect, useState } from "react";

function App() {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("https://descope-escape-room.com/api/data", {
			method: "POST",
			headers: {
				Accept: "application/json, text/plain, */*",
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((resJson) => {
				setData(resJson);
				console.log(resJson);
				// data = resJson
			});
	}, []);

	return (
		<div>
			<div id="login"></div>
			<code>{data.body}</code>
		</div>
	);
}

export default App;
