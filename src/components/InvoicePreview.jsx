function InvoicePreview({ businessName, email, invoiceNo, date, clientName, items, total, fmt }) {
  return (
    <div className="card preview-card">
      <div className="preview-header">
        <div>
          <p className="preview-business-name">{businessName || 'Your Business'}</p>
          <p className="preview-business-email">{email || 'your@email.com'}</p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <p className="preview-invoice-no">{invoiceNo}</p>
          <p className="preview-date">{date}</p>
        </div>
      </div>

      <div className="preview-body">
        <p className="preview-billed-to">Billed to: {clientName || '—'}</p>

        <table className="preview-table">
          <thead>
            <tr>
              <th style={{ textAlign: 'left' }}>ITEM</th>
              <th>QTY</th>
              <th style={{ textAlign: 'right' }}>AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => (
              <tr key={item.id} className={i % 2 === 0 ? 'row-even' : 'row-odd'}>
                <td className="item-name-cell">{item.name || '—'}</td>
                <td style={{ textAlign: 'center' }} className="mono">{item.qty}</td>
                <td style={{ textAlign: 'right' }} className="mono">
                  {fmt((Number(item.qty) || 0) * (Number(item.price) || 0))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="total-wrap">
          <div className="total-box">
            <p className="total-label">TOTAL</p>
            <p className="total-value">{fmt(total)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvoicePreview;
