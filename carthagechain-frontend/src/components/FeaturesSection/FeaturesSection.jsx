
import './FeaturesSection.css';

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <h2>Our Features</h2>
      <div className="features-grid">
        <div className="feature-card">
          <h3>Real-Time Vote Verification</h3>
          <p>Ensure your vote is counted and verified in real-time.</p>
        </div>
        <div className="feature-card">
          <h3>Blockchain Security</h3>
          <p>Experience the highest level of security with blockchain technology.</p>
        </div>
        <div className="feature-card">
          <h3>User-Friendly Interface</h3>
          <p>Navigate our platform with ease and confidence.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;