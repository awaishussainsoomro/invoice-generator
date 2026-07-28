function BusinessForm({ businessName, setBusinessName, email, setEmail, isEmailValid }) {
  return (
    <>
      <h2 className="section-title">Your business</h2>
      <input
        className="inv-input"
        placeholder="Business name"
        value={businessName}
        onChange={(e) => setBusinessName(e.target.value)}
      />
      <input
        className={`inv-input ${!isEmailValid ? 'error' : ''}`}
        style={{ marginTop: '8px' }}
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {!isEmailValid && (
        <p className="error-text">Enter a valid email address (e.g. name@business.com)</p>
      )}
    </>
  );
}

export default BusinessForm;
