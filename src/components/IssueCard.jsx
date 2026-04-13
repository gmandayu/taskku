function IssueCard({ issue, onDelete, onUpdateStatus }) {
	return (
		<div
			style={{
				border: '1px solid #e5e7eb',
				borderRadius: '12px',
				padding: '16px',
				marginBottom: '12px',
				backgroundColor: '#fff',
			}}>
			<h3 style={{ margin: '0 0 8px 0' }}>{issue.title}</h3>

			<div style={{ marginBottom: '8px' }}>
				<strong>Status:</strong>{' '}
				<select value={issue.status} onChange={(e) => onUpdateStatus(issue.id, e.target.value)}>
					<option value="todo">Todo</option>
					<option value="in-progress">In Progress</option>
					<option value="done">Done</option>
				</select>
			</div>

			<p style={{ margin: '4px 0' }}>
				<strong>Priority:</strong> {issue.priority}
			</p>

			<p style={{ margin: '4px 0' }}>
				<strong>Assignee:</strong> {issue.assignee}
			</p>

			<button
				onClick={() => onDelete(issue.id)}
				style={{
					marginTop: '10px',
					padding: '6px 12px',
					border: 'none',
					borderRadius: '6px',
					cursor: 'pointer',
				}}>
				Delete
			</button>
		</div>
	);
}

export default IssueCard;
