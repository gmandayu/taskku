function IssueCard({ issue }) {
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

			<p style={{ margin: '4px 0' }}>
				<strong>Status:</strong> {issue.status}
			</p>

			<p style={{ margin: '4px 0' }}>
				<strong>Priority:</strong> {issue.priority}
			</p>

			<p style={{ margin: '4px 0' }}>
				<strong>Assignee:</strong> {issue.assignee}
			</p>
		</div>
	);
}

export default IssueCard;
