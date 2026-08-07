# Invoice Generator

A clean, responsive invoice generator built with React, fill in business, client, and item details, watch the invoice build live in a preview panel, and download a professionally styled PDF. No backend, no sign-up, everything runs in the browser.

🔗 **Live Demo:** (https://invoice-generator-five-liart.vercel.app/)
📁 **Tech Stack:** React (Vite), jsPDF, component-scoped CSS

![Invoice Generator screenshot](add-screenshot-path-here.png)

## Why I Built It

Most beginner "invoice generator" projects stop at rendering a form. I wanted to go further and solve the part that actually matters for a freelancer: getting a client-ready PDF out the other end with validation so you can't send a broken invoice, and layout logic that doesn't break when the item list gets long.

## What It Does

Freelancers and small businesses need to send professional invoices fast, without opening Word or Excel every time. This tool takes business, client, and line-item details, shows a live preview as you type, and exports a styled, branded PDF ready to send no template file, no manual formatting.

## Key Features

- **Live invoice preview** — updates instantly as you type, no page reloads
- **PDF export** — styled, branded PDF with header band, gold accent divider, and shaded item table
- **Form validation** — checks for valid email, required fields, and item pricing before generating
- **Free item support** — items can be explicitly priced at 0 without triggering validation errors
- **Multi-page PDF support** — automatically adds new pages if the item list overflows one page
- **Fully responsive** — layout stacks cleanly on mobile, with the preview moving below the form

## Project Structure

```
src/
├── App.jsx
├── components/
│   ├── InvoiceForm.jsx        — main component, holds state
│   ├── InvoiceForm.css        — component styling
│   ├── BusinessForm.jsx
│   ├── InvoiceDetailsForm.jsx
│   ├── ClientForm.jsx
│   ├── ItemsForm.jsx
│   └── InvoicePreview.jsx
└── utils/
    ├── format.js               — number formatting helper
    ├── validateInvoice.js      — validation logic
    └── generatePDF.js          — PDF generation logic (jsPDF)
```

Validation, PDF generation, and UI are kept in separate modules so each piece can be read, tested, and extended independently.

## Running Locally

```bash
git clone https://github.com/awaishussainsoomro/invoice-generator.git
cd invoice-generator
npm install
npm run dev
```

## What I'd Improve Next

- Save invoice history (localStorage, then a real backend)
- Multiple invoice templates/themes
- Recurring invoice support for subscription-style billing

---

Built by [Awais Hussain Soomro](https://github.com/awaishussainsoomro)
