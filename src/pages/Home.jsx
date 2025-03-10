import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import DoctorList from '../components/DoctorList';
import AppointmentModal from '../components/AppointmentModal';
import TestimonialCard from '../components/TestimonialCard';
import BlogCard from '../components/BlogCard';

const Home = () => {
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      name: 'Dr. John Doe',
      specialization: 'Cardiologist',
      clinicAddress: '123 Main St, New York',
      experience: '10 years',
      image: 'https://tse4.mm.bing.net/th?id=OIP.l96BdnBni68Vv9r_AgP7UgHaHa&pid=Api&P=0&h=180',
    },
    {
      id: 2,
      name: 'Dr. Jane Smith',
      specialization: 'Dermatologist',
      clinicAddress: '456 Elm St, Los Angeles',
      experience: '8 years',
      image: 'https://tse2.mm.bing.net/th?id=OIP.3GO8CJYQbs_JPaY6jr2t1wHaHp&pid=Api&P=0&h=180',
    },
    {
      id: 3,
      name: 'Dr. Emily Johnson',
      specialization: 'Pediatrician',
      clinicAddress: '789 Oak St, Chicago',
      experience: '12 years',
      image: 'https://tse1.mm.bing.net/th?id=OIP.BCW0cPnEqEV9xnmHeWMM0wHaLJ&pid=Api&P=0&h=180',
    },
    {
      id: 4,
      name: 'Dr. Michael Brown',
      specialization: 'Orthopedic Surgeon',
      clinicAddress: '321 Pine St, Houston',
      experience: '15 years',
      image: 'https://tse2.mm.bing.net/th?id=OIP.B97fQfkfWspQMJ3QQF3j6AHaLu&pid=Api&P=0&h=180',
    },
    {
      id: 5,
      name: 'Dr. Sarah Lee',
      specialization: 'Gynecologist',
      clinicAddress: '654 Maple St, Phoenix',
      experience: '9 years',
      image: 'https://tse4.mm.bing.net/th?id=OIP.P1IfJNdtz7GmKkfPqR2yNAHaIO&pid=Api&P=0&h=180',
    },
    {
      id: 6,
      name: 'Dr. David Wilson',
      specialization: 'Neurologist',
      clinicAddress: '987 Cedar St, Philadelphia',
      experience: '11 years',
      image: 'https://tse1.mm.bing.net/th?id=OIP.UbOFCypP1hOwBrlartYBBQHaIp&pid=Api&P=0&h=180',
    },
    {
      id: 7,
      name: 'Dr. Laura Garcia',
      specialization: 'Psychiatrist',
      clinicAddress: '159 Birch St, San Antonio',
      experience: '7 years',
      image: 'https://tse3.mm.bing.net/th?id=OIP.JW_4m4RVV4ywf0aiB6TWrgHaLH&pid=Api&P=0&h=180',
    },
    {
      id: 8,
      name: 'Dr. James Martinez',
      specialization: 'Oncologist',
      clinicAddress: '753 Walnut St, San Diego',
      experience: '14 years',
      image: 'https://tse1.mm.bing.net/th?id=OIP.BZMYWjI6gTyDyd50KXbOSwHaHa&pid=Api&P=0&h=180',
    },
    {
      id: 9,
      name: 'Dr. Olivia Davis',
      specialization: 'Endocrinologist',
      clinicAddress: '852 Cherry St, Dallas',
      experience: '6 years',
      image: 'https://tse3.mm.bing.net/th?id=OIP.Rho-htWrLPq2M2ZeafoTxQHaHh&pid=Api&P=0&h=180',
    },
    {
      id: 10,
      name: 'Dr. William Rodriguez',
      specialization: 'Rheumatologist',
      clinicAddress: '369 Elm St, San Jose',
      experience: '13 years',
      image: 'https://tse3.mm.bing.net/th?id=OIP.0Ttue7YQAsl2DKGwh4POzgHaHa&pid=Api&P=0&h=180',
    },
    {
      id: 11,
      name: 'Dr. Sophia Hernandez',
      specialization: 'Pulmonologist',
      clinicAddress: '147 Oak St, Austin',
      experience: '10 years',
      image: 'https://tse1.mm.bing.net/th?id=OIP.qUwPXJShB8gnY9wD1DAGZgHaI6&pid=Api&P=0&h=180',
    },
    {
      id: 12,
      name: 'Dr. Benjamin Moore',
      specialization: 'Nephrologist',
      clinicAddress: '258 Pine St, Jacksonville',
      experience: '8 years',
      image: 'https://tse4.mm.bing.net/th?id=OIP.cC6TF6r_gWquNhtbQ_40qQHaHa&pid=Api&P=0&h=180',
    },
    {
      id: 13,
      name: 'Dr. Ava Taylor',
      specialization: 'Gastroenterologist',
      clinicAddress: '963 Maple St, Fort Worth',
      experience: '12 years',
      image: 'https://tse2.mm.bing.net/th?id=OIP.hzOozN5PXesyldbJ860IRQHaIe&pid=Api&P=0&h=180',
    },
    {
      id: 14,
      name: 'Dr. Liam Anderson',
      specialization: 'Urologist',
      clinicAddress: '741 Cedar St, Columbus',
      experience: '9 years',
      image: 'https://tse1.mm.bing.net/th?id=OIP.YzA6MQtdKURI98kwrPAPwwHaKG&pid=Api&P=0&h=180',
    },
    {
      id: 15,
      name: 'Dr. Mia Thomas',
      specialization: 'Dermatologist',
      clinicAddress: '852 Birch St, Charlotte',
      experience: '7 years',
      image: 'https://tse1.mm.bing.net/th?id=OIP.UFn7j-UrqPvJj8_5Pzs7EQHaI7&pid=Api&P=0&h=180',
    },
    {
      id: 16,
      name: 'Dr. Noah Jackson',
      specialization: 'Cardiologist',
      clinicAddress: '369 Walnut St, San Francisco',
      experience: '11 years',
      image: 'https://tse1.mm.bing.net/th?id=OIP.JbBGL9bwDkxze5KfX12y8AHaE8&pid=Api&P=0&h=180',
    },
    {
      id: 17,
      name: 'Dr. Isabella White',
      specialization: 'Pediatrician',
      clinicAddress: '159 Cherry St, Indianapolis',
      experience: '10 years',
      image: 'https://tse4.mm.bing.net/th?id=OIP.WZuFeD-_Btx-rRmknaI_9AHaHa&pid=Api&P=0&h=180',
    },
    {
      id: 18,
      name: 'Dr. Lucas Harris',
      specialization: 'Orthopedic Surgeon',
      clinicAddress: '753 Elm St, Seattle',
      experience: '14 years',
      image: 'https://tse2.mm.bing.net/th?id=OIP.qNSiJ7PqVb9R24N0D_4bewHaNK&pid=Api&P=0&h=180',
    },
    {
      id: 19,
      name: 'Dr. Amelia Clark',
      specialization: 'Gynecologist',
      clinicAddress: '852 Oak St, Denver',
      experience: '8 years',
      image: 'https://tse4.mm.bing.net/th?id=OIP.zozvUUvD02QucYPrUlSnlgHaJP&pid=Api&P=0&h=180',
    },
    {
      id: 20,
      name: 'Dr. Ethan Lewis',
      specialization: 'Neurologist',
      clinicAddress: '963 Pine St, Washington',
      experience: '12 years',
      image: 'https://tse4.mm.bing.net/th?id=OIP.r5ovKZihyqV0XYT90V42dQHaHa&pid=Api&P=0&h=180',
    },
  ]);

  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const testimonials = [
    {
      id: 1,
      text: 'MediBook made it so easy to find a doctor and book an appointment. Highly recommended!',
      name: 'Alice Johnson',
      location: 'New York',
    },
    {
      id: 2,
      text: 'The doctors are very professional and the platform is user-friendly.',
      name: 'Bob Williams',
      location: 'Los Angeles',
    },
  ];

  const blogPosts = [
    {
      id: 1,
      title: '5 Tips for a Healthy Heart',
      excerpt: 'Learn how to keep your heart healthy with these simple tips.',
      image: 'https://tse3.mm.bing.net/th?id=OIP.ySRRtBYJTrTsIX0tGHmr4wHaHa&pid=Api&P=0&h=180',
    },
    {
      id: 2,
      title: 'Understanding Diabetes',
      excerpt: 'A comprehensive guide to understanding diabetes.',
      image: 'https://tse1.mm.bing.net/th?id=OIP.1a2ofVr-orNHCw-lCArGOgHaI1&pid=Api&P=0&h=180',
    },
  ];

  const handleSearch = (query) => {
    const filteredDoctors = doctors.filter(
      (doctor) =>
        doctor.name.toLowerCase().includes(query.toLowerCase()) ||
        doctor.specialization.toLowerCase().includes(query.toLowerCase())
    );
    setDoctors(filteredDoctors);
  };

  const handleBookAppointment = (doctor) => {
    const isPatientLoggedIn = localStorage.getItem('isPatientLoggedIn');
    if (isPatientLoggedIn) {
      setSelectedDoctor(doctor);
      setShowModal(true);
    } else {
      alert('Please login as a patient to book an appointment.');
    }
  };

  const handleConfirmAppointment = (appointment) => {
    alert(
      `Appointment booked with ${appointment.doctor.name} on ${appointment.date} at ${appointment.time}`
    );
    setShowModal(false);
  };

  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to MediBook</h1>
        <p>Book appointments with the best doctors in your area.</p>
        <SearchBar onSearch={handleSearch} />
      </section>

      <section className="featured-doctors">
        <h2>Featured Doctors</h2>
        <DoctorList doctors={doctors} onBookAppointment={handleBookAppointment} />
      </section>

      <section className="testimonials">
        <h2>What Our Patients Say</h2>
        <div className="testimonial-list">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </section>

      <section className="blog-preview">
        <h2>Latest Blog Posts</h2>
        <div className="blog-list">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      {showModal && (
        <AppointmentModal
          doctor={selectedDoctor}
          onClose={() => setShowModal(false)}
          onConfirm={handleConfirmAppointment}
        />
      )}
    </div>
  );
};

export default Home;