import React, { useState } from 'react';
import './App.css';

// Home Component
const Home = () => {
  return (
    <div className="home">
      <video 
        className="background-video" 
        autoPlay 
        muted 
        loop 
        playsInline
      >
        <source src="/earth-video(1).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="overlay">
        <div className="hero-content">
          <h1>Certified IT & Geospatial Solutions Partner</h1>
          <p>Empowering businesses with cutting-edge geospatial technology, innovative IT solutions, and expert consulting services. Transform your operations with our proven expertise.</p>
          
          <div className="stats-container">
            <div className="stat-box">
              <h2>15+</h2>
              <div className="stat-label">
                <p>Years</p>
                <p>Experience</p>
              </div>
            </div>
            
            <div className="stat-box">
              <h2>500+</h2>
              <div className="stat-label">
                <p>Happy</p>
                <p>Clients</p>
              </div>
            </div>
            
            <div className="stat-box">
              <h2>1000+</h2>
              <div className="stat-label">
                <p>Projects</p>
                <p>completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// About Us Component
const AboutUs = () => {
  return (
    <div className="page-content">
      <div className="container">
        <h1>About Us</h1>
        <div className="content-section">
          <h2>Our Story</h2>
          <p>With over 15 years of experience in the IT and geospatial industry, we have established ourselves as a trusted partner for businesses looking to leverage cutting-edge technology solutions. Our journey began with a vision to bridge the gap between complex geospatial data and practical business applications.</p>
          
          <h2>Our Mission</h2>
          <p>To empower businesses with innovative IT and geospatial solutions that drive growth, efficiency, and competitive advantage. We believe in transforming complex data into actionable insights that fuel business success.</p>
          
          <h2>Our Values</h2>
          <ul>
            <li><strong>Innovation:</strong> We stay at the forefront of technology trends</li>
            <li><strong>Excellence:</strong> We deliver high-quality solutions every time</li>
            <li><strong>Integrity:</strong> We build trust through transparent communication</li>
            <li><strong>Partnership:</strong> We work closely with our clients as strategic partners</li>
          </ul>
          
          <h2>Our Team</h2>
          <p>Our diverse team of experts includes certified IT professionals, geospatial analysts, software engineers, and project managers who bring decades of combined experience to every project.</p>
        </div>
      </div>
    </div>
  );
};

// Products Component
const Products = () => {
  return (
    <div className="page-content">
      <div className="container">
        <h1>Our Products</h1>
        <div className="content-section">
          <div className="product-grid">
            <div className="product-card">
              <h3>GeoSpatial Analytics Platform</h3>
              <p>Advanced geospatial data analysis and visualization tools for informed decision-making.</p>
              <ul>
                <li>Real-time data processing</li>
                <li>Interactive mapping</li>
                <li>Custom reporting</li>
                <li>API integration</li>
              </ul>
            </div>
            
            <div className="product-card">
              <h3>IT Infrastructure Solutions</h3>
              <p>Comprehensive IT infrastructure design, implementation, and management services.</p>
              <ul>
                <li>Cloud migration</li>
                <li>Network security</li>
                <li>Data backup solutions</li>
                <li>System monitoring</li>
              </ul>
            </div>
            
            <div className="product-card">
              <h3>Custom Software Development</h3>
              <p>Tailored software solutions designed to meet your specific business requirements.</p>
              <ul>
                <li>Web applications</li>
                <li>Mobile apps</li>
                <li>Database systems</li>
                <li>Integration services</li>
              </ul>
            </div>
            
            <div className="product-card">
              <h3>GIS Consulting Services</h3>
              <p>Expert GIS consulting to help you make the most of your spatial data investments.</p>
              <ul>
                <li>Spatial analysis</li>
                <li>Map production</li>
                <li>Data conversion</li>
                <li>Training programs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Services Component
const Services = () => {
  return (
    <div className="page-content">
      <div className="container">
        <h1>Our Services</h1>
        <div className="content-section">
          <h2>IT Services</h2>
          <div className="service-list">
            <div className="service-item">
              <h4>System Integration</h4>
              <p>Seamlessly connect your existing systems with new technologies for improved efficiency.</p>
            </div>
            <div className="service-item">
              <h4>Cloud Solutions</h4>
              <p>Migrate to the cloud with confidence using our proven methodologies and best practices.</p>
            </div>
            <div className="service-item">
              <h4>Cybersecurity</h4>
              <p>Protect your business with comprehensive security solutions and monitoring services.</p>
            </div>
          </div>
          
          <h2>Geospatial Services</h2>
          <div className="service-list">
            <div className="service-item">
              <h4>Spatial Data Analysis</h4>
              <p>Transform raw spatial data into valuable business insights and actionable intelligence.</p>
            </div>
            <div className="service-item">
              <h4>Mapping Solutions</h4>
              <p>Create custom maps and visualizations that tell your data's story effectively.</p>
            </div>
            <div className="service-item">
              <h4>Location Intelligence</h4>
              <p>Leverage location-based insights to optimize operations and drive strategic decisions.</p>
            </div>
          </div>
          
          <h2>Consulting Services</h2>
          <div className="service-list">
            <div className="service-item">
              <h4>Technology Assessment</h4>
              <p>Evaluate your current technology stack and identify opportunities for improvement.</p>
            </div>
            <div className="service-item">
              <h4>Digital Transformation</h4>
              <p>Guide your organization through digital transformation with strategic planning and execution.</p>
            </div>
            <div className="service-item">
              <h4>Project Management</h4>
              <p>Professional project management services to ensure successful delivery of your initiatives.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Events Component
const Events = () => {
  return (
    <div className="page-content">
      <div className="container">
        <h1>Events & News</h1>
        <div className="content-section">
          <div className="events-grid">
            <div className="event-card">
              <div className="event-date">Dec 15, 2024</div>
              <h3>GIS Innovation Summit 2024</h3>
              <p>Join us at the annual GIS Innovation Summit where we'll showcase the latest trends in geospatial technology and their business applications.</p>
              <span className="event-type">Conference</span>
            </div>
            
            <div className="event-card">
              <div className="event-date">Jan 22, 2025</div>
              <h3>Webinar: Cloud Migration Best Practices</h3>
              <p>A comprehensive webinar covering proven strategies for successful cloud migration projects.</p>
              <span className="event-type">Webinar</span>
            </div>
            
            <div className="event-card">
              <div className="event-date">Feb 10, 2025</div>
              <h3>Training Workshop: Advanced GIS Analytics</h3>
              <p>Hands-on workshop covering advanced GIS analytics techniques and tools for professional development.</p>
              <span className="event-type">Workshop</span>
            </div>
            
            <div className="event-card">
              <div className="event-date">Mar 5, 2025</div>
              <h3>Industry Roundtable: Digital Transformation</h3>
              <p>Connect with industry leaders to discuss digital transformation challenges and solutions.</p>
              <span className="event-type">Roundtable</span>
            </div>
          </div>
          
          <h2>Latest News</h2>
          <div className="news-section">
            <div className="news-item">
              <h4>Partnership Announcement</h4>
              <p>We're excited to announce our new strategic partnership with leading cloud infrastructure providers.</p>
            </div>
            <div className="news-item">
              <h4>Award Recognition</h4>
              <p>Honored to receive the "Excellence in Geospatial Solutions" award at the National GIS Conference.</p>
            </div>
            <div className="news-item">
              <h4>New Office Opening</h4>
              <p>Expanding our presence with a new regional office to better serve our growing client base.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Clients Component
const Clients = () => {
  return (
    <div className="page-content">
      <div className="container">
        <h1>Our Clients</h1>
        <div className="content-section">
          <p className="intro-text">We're proud to work with organizations across various industries, from startups to Fortune 500 companies. Our clients trust us to deliver innovative solutions that drive their business forward.</p>
          
          <h2>Industries We Serve</h2>
          <div className="industries-grid">
            <div className="industry-card">
              <h4>Government & Public Sector</h4>
              <p>Supporting government agencies with GIS solutions, data management, and digital transformation initiatives.</p>
            </div>
            <div className="industry-card">
              <h4>Energy & Utilities</h4>
              <p>Optimizing operations with spatial analytics, infrastructure mapping, and smart grid solutions.</p>
            </div>
            <div className="industry-card">
              <h4>Transportation & Logistics</h4>
              <p>Enhancing route optimization, fleet management, and supply chain visibility through location intelligence.</p>
            </div>
            <div className="industry-card">
              <h4>Real Estate & Construction</h4>
              <p>Providing site analysis, project visualization, and asset management solutions for development projects.</p>
            </div>
            <div className="industry-card">
              <h4>Environmental Services</h4>
              <p>Supporting environmental monitoring, impact assessment, and sustainability initiatives with advanced analytics.</p>
            </div>
            <div className="industry-card">
              <h4>Healthcare</h4>
              <p>Improving healthcare delivery through location-based analytics and facility management solutions.</p>
            </div>
          </div>
          
          <h2>Client Testimonials</h2>
          <div className="testimonials">
            <div className="testimonial">
              <p>"Their expertise in geospatial technology transformed how we approach our infrastructure planning. The results exceeded our expectations."</p>
              <cite>- Director of Operations, Municipal Government</cite>
            </div>
            <div className="testimonial">
              <p>"The custom software solution they developed has streamlined our operations and improved our decision-making process significantly."</p>
              <cite>- CTO, Energy Company</cite>
            </div>
            <div className="testimonial">
              <p>"Professional, knowledgeable, and reliable. They delivered exactly what they promised, on time and within budget."</p>
              <cite>- Project Manager, Construction Firm</cite>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Contact Us Component
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="page-content">
      <div className="container">
        <h1>Contact Us</h1>
        <div className="contact-content">
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p>Ready to transform your business with innovative IT and geospatial solutions? We'd love to hear from you.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <h4>Office Address</h4>
                <p>123 Technology Drive<br />Innovation District<br />Tech City, TC 12345</p>
              </div>
              
              <div className="contact-item">
                <h4>Phone</h4>
                <p>+1 (555) 123-4567</p>
              </div>
              
              <div className="contact-item">
                <h4>Email</h4>
                <p>info@geotechsolutions.com</p>
              </div>
              
              <div className="contact-item">
                <h4>Business Hours</h4>
                <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 2:00 PM<br />Sunday: Closed</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    switch(currentPage) {
      case 'Home': return <Home />;
      case 'About us': return <AboutUs />;
      case 'Products': return <Products />;
      case 'Services': return <Services />;
      case 'Events': return <Events />;
      case 'Clients': return <Clients />;
      case 'Contact us': return <ContactUs />;
      default: return <Home />;
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <div className="logo-circle">
              <span className="logo-text">G</span>
              <span className="logo-subtext">GEOTECH</span>
            </div>
          </div>
          
          <div className="nav-menu">
            {['Home', 'About us', 'Products', 'Services', 'Events', 'Clients', 'Contact us'].map((item) => (
              <button
                key={item}
                className={`nav-item ${currentPage === item ? 'active' : ''}`}
                onClick={() => setCurrentPage(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>
      
      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  );
};

export default App;