
import './App.css'

function App() {

  return (
    <>
      <div className="container">
        <section className='profileSection'>
          <img src="./profile.jpg" alt="Profile" />
          <h2>Suman Sidar</h2>
          <p>Software Engineer</p>
        </section>
        <section className='statusSection'>
          <div className='status'>
            <h3>Following</h3>
            <p>1k</p>
          </div>
          <div className='status'>
            <h3>Followers</h3>
            <p>8k</p>
          </div>
          <div className='status'>
            <h3>Posts</h3>
            <p>500</p>
          </div>
        </section>
        <section className='actionSection'>
          <button>Send Message</button>
          <button>Follow Request</button>
        </section>
      </div>
    </>
  )
}

export default App
