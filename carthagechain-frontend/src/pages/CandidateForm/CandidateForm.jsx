import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CandidateForm.css';
import { assets } from '../../assets/assets';

const CandidateForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    party: '',
    bio: '',
    proposals: '',
    contactEmail: ''
  });
  const [walletAddress, setWalletAddress] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const navigate = useNavigate();

  // Check if user is connected via MetaMask
  useEffect(() => {
    const checkConnection = async () => {
      const storedAccount = localStorage.getItem('connectedAccount');
      
      if (storedAccount) {
        setWalletAddress(storedAccount);
      } else {
        // Redirect to login if not connected
        navigate('/login', { state: { returnPath: '/candidate-form' } });
      }
    };
    
    checkConnection();
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Here you would typically send the data to your backend
      // For demonstration, we'll simulate an API call
      
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Set success status
      setSubmitStatus({
        type: 'success',
        message: 'Your candidacy request has been submitted for review! The admin will evaluate your application soon.'
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        position: '',
        party: '',
        bio: '',
        proposals: '',
        contactEmail: ''
      });
      
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'There was an error submitting your form. Please try again.'
      });
      console.error("Error submitting candidate form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="candidate-form-container">
      <div className="candidate-form-card">
        <div className="candidate-form-header">
          <img src={assets.logo} alt="CarthageChain Logo" className="candidate-form-logo" />
          <h1>Candidate Registration</h1>
        </div>
        
        {submitStatus ? (
          <div className={`submission-status ${submitStatus.type}`}>
            <p>{submitStatus.message}</p>
            {submitStatus.type === 'success' && (
              <button onClick={() => navigate('/')} className="return-home-button">
                Return to Home
              </button>
            )}
            {submitStatus.type === 'error' && (
              <button onClick={() => setSubmitStatus(null)} className="try-again-button">
                Try Again
              </button>
            )}
          </div>
        ) : (
          <>
            <div className="wallet-info">
              <p>Submitting as: <span className="wallet-address">{walletAddress}</span></p>
            </div>
            
            <form onSubmit={handleSubmit} className="candidate-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
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
                <label htmlFor="position">Position Running For</label>
                <select
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a position</option>
                  <option value="president">President</option>
                  <option value="senator">Senator</option>
                  <option value="representative">Representative</option>
                  <option value="governor">Governor</option>
                  <option value="mayor">Mayor</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="party">Political Party (if applicable)</label>
                <input
                  type="text"
                  id="party"
                  name="party"
                  value={formData.party}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="bio">Candidate Biography</label>
                <textarea
                  id="bio"
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  required
                  rows={4}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="proposals">Key Proposals</label>
                <textarea
                  id="proposals"
                  name="proposals"
                  value={formData.proposals}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Outline your key proposals and campaign promises"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="contactEmail">Contact Email</label>
                <input
                  type="email"
                  id="contactEmail"
                  name="contactEmail"
                  value={formData.contactEmail}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-notice">
                <p>
                  By submitting this form, you agree to have your candidacy reviewed by the CarthageChain admin.
                  Your blockchain address will be associated with this application.
                </p>
              </div>
              
              <button 
                type="submit" 
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default CandidateForm;