import { useState } from 'react';
import IssueList from './components/IssueList';
import { issues as initialIssues } from './features/issues/data';

function App() {
	const [issues, setIssues] = useState(initialIssues);
	const [title, setTitle] = useState('');
	const [priority, setPriority] = useState('medium');
	const [assignee, setAssignee] = useState('');

	const handleAddIssue = (e) => {
		e.preventDefault();

		if (!title.trim()) return;

		const newIssue = {
			id: Date.now(),
			title: title.trim(),
			status: 'todo',
			priority,
			assignee: assignee.trim() || 'Unassigned',
		};

		setIssues([newIssue, ...issues]);
		setTitle('');
		setPriority('medium');
		setAssignee('');
	};

	return (
		<main
			style={{
				minHeight: '100vh',
				backgroundColor: '#f9fafb',
				padding: '32px',
				fontFamily: 'Arial, sans-serif',
			}}>
			<div style={{ maxWidth: '800px', margin: '0 auto' }}>
				<h1 style={{ marginBottom: '24px' }}>Taskku Issues</h1>

				<form
					onSubmit={handleAddIssue}
					style={{
						backgroundColor: '#fff',
						border: '1px solid #e5e7eb',
						borderRadius: '12px',
						padding: '16px',
						marginBottom: '24px',
					}}>
					<h2 style={{ marginTop: 0 }}>Add New Issue</h2>

					<div style={{ marginBottom: '12px' }}>
						<input
							type="text"
							placeholder="Issue title"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							style={{
								width: '100%',
								padding: '10px',
								borderRadius: '8px',
								border: '1px solid #d1d5db',
							}}
						/>
					</div>

					<div style={{ display: 'flex', gap: '12px', marginBottom: '12px' }}>
						<select
							value={priority}
							onChange={(e) => setPriority(e.target.value)}
							style={{
								flex: 1,
								padding: '10px',
								borderRadius: '8px',
								border: '1px solid #d1d5db',
							}}>
							<option value="low">Low</option>
							<option value="medium">Medium</option>
							<option value="high">High</option>
						</select>

						<input
							type="text"
							placeholder="Assignee"
							value={assignee}
							onChange={(e) => setAssignee(e.target.value)}
							style={{
								flex: 1,
								padding: '10px',
								borderRadius: '8px',
								border: '1px solid #d1d5db',
							}}
						/>
					</div>

					<button
						type="submit"
						style={{
							padding: '10px 16px',
							border: 'none',
							borderRadius: '8px',
							cursor: 'pointer',
						}}>
						Add Issue
					</button>
				</form>

				<IssueList issues={issues} />
			</div>
		</main>
	);
}

export default App;
