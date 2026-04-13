import IssueCard from './IssueCard';

function IssueList({ issues, onDelete, onUpdateStatus }) {
	return (
		<div>
			{issues.map((issue) => (
				<IssueCard key={issue.id} issue={issue} onDelete={onDelete} onUpdateStatus={onUpdateStatus} />
			))}
		</div>
	);
}

export default IssueList;
