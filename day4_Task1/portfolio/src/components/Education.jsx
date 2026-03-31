// import './Education.css';

export default function Education() {
  const educationData = [
    {
      degree: "Fellowship in Software Engineering",
      school: "Navgurukul Foundation for Social Welfare, Jashpur",
      date: "July 2024 - Present",
      desc: "Participating in intensive, real-world oriented training and projects focused on coding, problem-solving, and technical skills development."
    },
    {
      degree: "12th Grade",
      school: "Govt Girls H.S.S. SURANGPANI",
      date: "2019 - 2020",
      desc: "Completed higher secondary schooling with a foundation in core subjects."
    },
    {
      degree: "10th Grade",
      school: "Holy Cross H.S.S. Pathalgaon",
      date: "2017 - 2018",
      desc: "Completed secondary schooling with a focus on overall academic fundamentals."
    }
  ];

  return (
    <section id="education" className="education-section">
      <h2 className="section-title">Education & Qualifications</h2>
      
      <div className="edu-list">
        {educationData.map((item, index) => (
          <div key={index} className="edu-item">
            <div className="edu-header">
              <h3 className="edu-degree">{item.degree}</h3>
              <span className="edu-date">{item.date}</span>
            </div>
            <span className="edu-school">{item.school}</span>
            <p className="edu-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
