const getStatusColor = (status) => {
	if (status === 'todo') return '#9ca3af';
	if (status === 'in-progress') return '#f59e0b';
	if (status === 'done') return '#10b981';
};

const getPriorityColor = (priority) => {
	if (priority === 'low') return '#10b981';
	if (priority === 'medium') return '#f59e0b';
	if (priority === 'high') return '#ef4444';
};
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
				<span
					style={{
						backgroundColor: getStatusColor(issue.status),
						color: '#fff',
						padding: '4px 8px',
						borderRadius: '6px',
						fontSize: '12px',
					}}>
					{issue.status}
				</span>
			</div>

			<p style={{ margin: '4px 0' }}>
				<strong>Priority:</strong>{' '}
				<span
					style={{
						backgroundColor: getPriorityColor(issue.priority),
						color: '#fff',
						padding: '4px 8px',
						borderRadius: '6px',
						fontSize: '12px',
					}}>
					{issue.priority}
				</span>
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
