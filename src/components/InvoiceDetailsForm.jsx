function InvoiceDetailsForm({ invoiceNo, setInvoiceNo, date, setDate }) {
  return (
    <>
      <h2 className="section-title">Invoice details</h2>
      <div className="two-col">
        <input
          className="inv-input"
          placeholder="Invoice #"
          value={invoiceNo}
          onChange={(e) => setInvoiceNo(e.target.value)}
        />
        <input
          className="inv-input"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
    </>
  );
}

export default InvoiceDetailsForm;
