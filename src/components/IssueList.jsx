import IssueCard from './IssueCard';

function IssueList({ issues }) {
	return (
		<div>
			{issues.map((issue) => (
				<IssueCard key={issue.id} issue={issue} />
			))}
		</div>
	);
}

export default IssueList;
