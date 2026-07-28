function ClientForm({ clientName, setClientName }) {
  return (
    <>
      <h2 className="section-title">Client</h2>
      <input
        className="inv-input"
        placeholder="Client name"
        value={clientName}
        onChange={(e) => setClientName(e.target.value)}
      />
    </>
  );
}

export default ClientForm;
