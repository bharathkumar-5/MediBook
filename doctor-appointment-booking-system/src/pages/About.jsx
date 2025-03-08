import React from 'react';
import TeamMemberCard from '../components/TeamMemberCard';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Dr. John Doe',
      role: 'Cardiologist',
      image: 'https://tse4.mm.bing.net/th?id=OIP.l96BdnBni68Vv9r_AgP7UgHaHa&pid=Api&P=0&h=180',
    },
    {
      id: 2,
      name: 'Dr. Jane Smith',
      role: 'Dermatologist',
      image: 'https://tse2.mm.bing.net/th?id=OIP.3GO8CJYQbs_JPaY6jr2t1wHaHp&pid=Api&P=0&h=180',
    },
    {
      id: 3,
      name: 'Dr. Emily Johnson',
      role: 'Pediatrician',
      image: 'https://tse1.mm.bing.net/th?id=OIP.BCW0cPnEqEV9xnmHeWMM0wHaLJ&pid=Api&P=0&h=180',
    },
    {
      id: 4,
      name: 'Dr. Michael Brown',
      role: 'Orthopedic Surgeon',
      image: 'https://tse2.mm.bing.net/th?id=OIP.B97fQfkfWspQMJ3QQF3j6AHaLu&pid=Api&P=0&h=180',
    },
  ];

  const achievements = [
    {
      id: 1,
      title: '10,000+ Appointments',
      description: 'Successfully managed over 10,000 appointments.',
    },
    {
      id: 2,
      title: '500+ Doctors',
      description: 'Trusted by more than 500 doctors worldwide.',
    },
    {
      id: 3,
      title: '24/7 Support',
      description: 'Providing round-the-clock support to our users.',
    },
  ];

  return (
    <div className="about-page">
      <div className="about-section">
        <h1>About Us</h1>
        <p>
          MediBook is a leading platform that connects patients with the best
          doctors in their area. Our mission is to make healthcare accessible and
          convenient for everyone.
        </p>
      </div>

      <div className="mission-vision">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            To provide a seamless and efficient platform for patients to book
            appointments with trusted doctors.
          </p>
        </div>
        <div className="vision">
          <h2>Our Vision</h2>
          <p>
            To revolutionize healthcare by making it more accessible and
            patient-centric.
          </p>
        </div>
      </div>

      <div className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-list">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>

      <div className="achievements-section">
        <h2>Our Achievements</h2>
        <div className="achievements-list">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="achievement-card">
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="call-to-action">
        <h2>Join Us Today</h2>
        <p>
          Experience the future of healthcare with MediBook. Sign up now to
          book appointments with the best doctors.
        </p>
        <button onClick={() => (window.location.href = '/signup')}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default About;