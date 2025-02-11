import "./App.css";

function About() {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <header className="about-header">
        <h1 style={{color:"black"}}>About Us</h1>
        <p style={{color:"black"}}>Your favorite food, delivered fast and fresh!</p>
      </header>

      {/* Introduction */}
      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          We are a passionate team dedicated to bringing you the best food from
          your favorite restaurants. Whether it's breakfast, lunch, or dinner,
          we ensure quick delivery, fresh meals, and a seamless ordering
          experience.
        </p>
      </section>

      {/* Our Commitment */}
      <section className="about-section">
        <h2>Our Commitment</h2>
        <p>
          We believe in quality, speed, and customer satisfaction. Our team
          works tirelessly to ensure that every meal reaches you in the best
          condition.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="about-section">
        <h2>Why Choose Us?</h2>
        <ul >
          <li>✔ Wide range of cuisines</li>
          <li>✔ Fast and reliable delivery</li>
          <li>✔ Best prices and discounts</li>
          <li>✔ Fresh and hygienic food</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="about-section contact-section">
        <h2>Get in Touch</h2>
        <p>📞 Customer Support: +91 87129 99774</p>
        <p>📧 Email: testybite@foodapp.com</p>
      </section>
    </div>
  );
}

export default About;
