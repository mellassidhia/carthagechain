import './About.css'; // Ensure you have the CSS file for styling

const About = () => {
return (
    <div className="about-container">
        <section className="intro">
            <h1>CarthageChain</h1>
            <h2>“ Reimagining Democracy Through Blockchain Innovation ”</h2>
            <p>
                CarthageChain is reshaping modern voting by leveraging <span className="highlight">decentralized blockchain technology</span>.  
                Developed under <span className="highlight">Kais Manager Solutions</span> in 2024, this initiative embodies our commitment to 
                <span className="highlight"> secure, transparent, and accessible elections</span>.
            </p>
        </section>

        <section className="why-we-exist">
            <h2>Why We Exist</h2>
            <p className="quote">"In a digital era where trust is fading, we're restoring confidence in democracy—one immutable vote at a time."</p>
            <div className="stats">
                <div className="stat-item"><span className="highlight">2.3 billion</span> people live in countries with disputed elections.</div>
                <div className="stat-item"><span className="highlight">$15 billion</span> spent annually on electoral processes.</div>
                <div className="stat-item"><span className="highlight">43%</span> of voters distrust traditional voting systems.</div>
            </div>
            <p>We are here to build an electoral system that is <span className="highlight">fundamentally transparent, secure, and universally accessible</span>.</p>
        </section>

        <section className="tech-edge">
            <h2>Our Technological Edge</h2>
            <div className="features">
                <div className="feature">
                    <h3>🔒 Military-Grade Security</h3>
                    <p>End-to-end encrypted votes using <span className="highlight">AES-256 & quantum-resistant algorithms</span>.</p>
                    <p><span className="highlight">Multi-signature smart contracts</span> on Ethereum.</p>
                    <p><span className="highlight">Decentralized identity verification</span> through DID standards.</p>
                </div>
                <div className="feature">
                    <h3>🌍 Universal Accessibility</h3>
                    <p>Vote via <span className="highlight">smartphone, computer, or SMS</span>.</p>
                    <p><span className="highlight">Multi-language support</span> with AI-powered translation.</p>
                    <p><span className="highlight">ADA-compliant interface</span> for accessibility.</p>
                </div>
                <div className="feature">
                    <h3>🔍 Unprecedented Transparency</h3>
                    <p><span className="highlight">Real-time public audit trails</span>.</p>
                    <p><span className="highlight">Zero-Knowledge Proofs</span> for privacy-preserving verification.</p>
                    <p><span className="highlight">Immutable records</span> on decentralized nodes.</p>
                </div>
            </div>
        </section>

        <section className="values">
            <h2>Our Core Values</h2>
            <ul>
                <li><span className="highlight">Integrity First</span> – Every line of code undergoes rigorous verification.</li>
                <li><span className="highlight">Democratic Equality</span> – Zero-knowledge proofs ensure <span className="highlight">one person = one vote</span>.</li>
                <li><span className="highlight">Technological Neutrality</span> – Supports multiple blockchain protocols.</li>
            </ul>
        </section>

        <section className="journey">
            <h2>Our Journey</h2>
            <ul>
                <li><span className="highlight">2025</span> – Kais Manager Solutions launches CarthageChain.</li>
                <li><span className="highlight">2026</span> – First pilot election with 10,000+ votes.</li>
                <li><span className="highlight">2027</span> – Expanding to enterprise board voting solutions.</li>
            </ul>
        </section>

        <section className="team">
    <h2>The Team Behind CarthageChain</h2>
    <div className="team-members">
        <div className="team-member">
          
            <h3 className="highlight">Safouene Kais</h3>
            <p className="position">Founder & CEO of Kais Manager Solutions</p>
            <p className="bio">Expert in decentralized governance solutions and blockchain innovation.</p>
        </div>
        
        <div className="team-member">
         
            <h3 className="highlight">Dhia Mellassi</h3>
            <p className="position">Lead Blockchain Developer</p>
            <p className="bio">Specializing in Ethereum smart contracts, blockchain security, and DApp development.</p>
        </div>
    </div>
</section>


        <section className="cta">
            <h2>Join the Future of Secure Voting</h2>
            <p>Are you ready to transform democracy with us?</p>
            <div className="cta-buttons">
                <button>Register Now</button>
                <button>Log In</button>
            </div>
        </section>
    </div>
);
};

export default About;
