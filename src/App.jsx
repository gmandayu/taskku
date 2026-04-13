import IssueList from './components/IssueList';
import { issues } from './features/issues/data';

function App() {
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
				<IssueList issues={issues} />
			</div>
		</main>
	);
}

export default App;
