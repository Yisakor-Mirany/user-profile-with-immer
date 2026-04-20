import UserProfileWithImmer from './components/UserProfileWithImmer.jsx'
import './styles/App.css'

// App is the root component. It renders the UserProfileWithImmer demo.
function App() {
  return (
    <div className="app-wrapper">
      <header className="app-header">
        <h1>User Profile Manager</h1>
        <p className="app-subtitle">Powered by React + Immer</p>
      </header>
      <main>
        <UserProfileWithImmer />
      </main>
      <footer className="app-footer">
        <p>Built with React &amp; use-immer</p>
      </footer>
    </div>
  )
}

export default App
