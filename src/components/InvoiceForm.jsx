import { useState, useRef } from 'react';
import './InvoiceForm.css';
import BusinessForm from './BusinessForm';
import InvoiceDetailsForm from './InvoiceDetailsForm';
import ClientForm from './ClientForm';
import ItemsForm from './ItemsForm';
import InvoicePreview from './InvoicePreview';
import { generateInvoicePDF } from '../utils/generatePDF';
import { validateInvoice, emailPattern } from '../utils/validateInvoice';
import { fmt } from '../utils/format';

function InvoiceForm() {
  const [businessName, setBusinessName] = useState('');
  const [email, setEmail] = useState('');
  const [clientName, setClientName] = useState('');
  const [invoiceNo, setInvoiceNo] = useState('INV-001');
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [items, setItems] = useState([{ id: 1, name: '', qty: '1', price: '' }]);
  const nextIdRef = useRef(2);

  const updateItem = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value; // kept as raw string while typing — see format.js
    setItems(newItems);
  };

  const addItem = () => {
    setItems([...items, { id: nextIdRef.current, name: '', qty: '1', price: '' }]);
    nextIdRef.current += 1;
  };

  const removeItem = (index) => {
    if (items.length === 1) return; // always keep at least one row
    setItems(items.filter((_, i) => i !== index));
  };

  const total = items.reduce(
    (sum, item) => sum + (Number(item.qty) || 0) * (Number(item.price) || 0),
    0
  );

  const isEmailValid = email.trim() === '' || emailPattern.test(email.trim());

  const handleDownload = () => {
    const errorMessage = validateInvoice({ businessName, email, clientName, items });
    if (errorMessage) {
      alert(errorMessage);
      return;
    }
    generateInvoicePDF({ businessName, email, invoiceNo, date, clientName, items, total });
  };

  return (
    <div className="invoice-page">
      <div className="invoice-container">
        <h1 className="invoice-title">Invoice generator</h1>
        <p className="invoice-subtitle">Fill in the details — the invoice builds live on the right.</p>

        <div className="invoice-grid">
          <div className="card form-card">
            <BusinessForm
              businessName={businessName}
              setBusinessName={setBusinessName}
              email={email}
              setEmail={setEmail}
              isEmailValid={isEmailValid}
            />
            <InvoiceDetailsForm
              invoiceNo={invoiceNo}
              setInvoiceNo={setInvoiceNo}
              date={date}
              setDate={setDate}
            />
            <ClientForm clientName={clientName} setClientName={setClientName} />
            <ItemsForm items={items} updateItem={updateItem} addItem={addItem} removeItem={removeItem} />

            <button className="download-btn" onClick={handleDownload}>
              Download PDF invoice
            </button>
          </div>

          <InvoicePreview
            businessName={businessName}
            email={email}
            invoiceNo={invoiceNo}
            date={date}
            clientName={clientName}
            items={items}
            total={total}
            fmt={fmt}
          />
        </div>
      </div>
    </div>
  );
}

export default InvoiceForm;
