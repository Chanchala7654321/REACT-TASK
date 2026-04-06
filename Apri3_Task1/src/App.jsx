import './App.css';
import data from './Data';

function App() {  
  const featuredJobs = data.filter(item => item.featured === true);

  return (
    <div className='itemBox'>
      {featuredJobs.map((item) => (
        <div key={item.id} className='post featured-style'>
          
          <div className="header">
            <span className="company-name">{item.company}</span>
            {item.new && <span className="newJob">NEW!</span>}
            <span className="featuredBadge">FEATURED</span>
          </div>

          <h2 className="position-title">{item.position}</h2>
          
          <div className="info">
            {item.postedAt} • {item.contract} • {item.location}
          </div>

          <div className="tags">
            {[...item.languages, ...item.tools].map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      ))}
      
      {featuredJobs.length === 0 && <p>No featured jobs available.</p>}
    </div>
  );
}

export default App;