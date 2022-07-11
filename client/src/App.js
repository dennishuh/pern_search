import React, { useState } from 'react';
import axios from 'axios';
import { useReactTable } from '@tanstack/react-table';

import './App.css';

function App() {
	const [search, setSearch] = useState('');
	const [users, setUsers] = useState([]);

	const onSubmit = async (e) => {
		e.preventDefault();
		if (!search) return;
		try {
			const users = await axios.get(`/api/v1/users?query=${search}`);

			console.log('users.data', users.data);

			setUsers(users.data);
		} catch (error) {
			console.error(error.message);
		}
	};
	return (
		<div className="App">
			<h1>Search Users</h1>
			<form onSubmit={onSubmit}>
				<input
					type="text"
					name="search"
					placeholder="Enter user..."
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
				<button type="submit">Submit</button>
			</form>
			<table className="table">
				<thead className="table-header">
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Email</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user) => (
						<tr key={user.user_id}>
							<td>{user.first_name}</td>
							<td>{user.last_name}</td>
							<td>{user.email}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default App;
