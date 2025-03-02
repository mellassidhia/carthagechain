
import './TestimonialsSection.css';

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <h2>Trusted by Leading Organizations</h2>
      <div className="testimonials-container">
        <div className="testimonial">
          <div className="testimonial-header">
            <div className="author-info">
              <p className="author-name">Amira Ben Salah</p>
              <p className="author-title">Chief Technology Officer<br/>TechCorp</p>
            </div>
          </div>
          <p className="testimonial-text">
            "CarthageChain's blockchain solution helped us achieve unprecedented transparency and efficiency 
            in our internal voting systems, leading to higher employee participation and greater trust in our decision-making processes."
          </p>
        </div>

        <div className="testimonial">
          <div className="testimonial-header">
            <div className="author-info">
              <p className="author-name">Dr. Kwame Asante</p>
              <p className="author-title">Founder & CEO<br/>Innovate-X</p>
            </div>
          </div>
          <p className="testimonial-text">
            "We've reduced costs and increased accessibility with CarthageChain's blockchain-based voting system. Their 
            secure and transparent process allows us to host virtual shareholder meetings with complete confidence."
          </p>
        </div>

        <div className="testimonial">
          <div className="testimonial-header">
            <div className="author-info">
              <p className="author-name">Maria González</p>
              <p className="author-title">Director of Operations<br/>Ethica Initiative</p>
            </div>
          </div>
          <p className="testimonial-text">
            "CarthageChain’s decentralized architecture and transparent ledger have transformed how we conduct 
            internal governance. We now run our member elections with complete verifiability and zero risk of manipulation."
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
