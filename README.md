# Invoice Generator

A clean, responsive invoice generator built with React. Fill in business, client, and item details, watch the invoice build live in a preview panel, and download a professionally styled PDF — all in the browser, no backend required.

**Live demo:** [add your Vercel link here]

![Invoice Generator screenshot](add-screenshot-path-here.png)

## Features

- **Live invoice preview** — updates instantly as you type, no page reloads
- **PDF export** — styled, branded PDF with header band, gold accent divider, and shaded item table
- **Form validation** — checks for valid email, required fields, and item pricing before generating
- **Free item support** — items can be explicitly priced at 0 without triggering validation errors
- **Multi-page PDF support** — automatically adds new pages if the item list overflows one page
- **Fully responsive** — the layout stacks cleanly on mobile, with the preview moving below the form

## Tech stack

- React (Vite)
- jsPDF for PDF generation
- Plain CSS (component-scoped styling, no framework dependency)

## Project structure

```
src/
├── InvoiceForm.jsx          — main component, holds state
├── InvoiceForm.css          — all styling
├── components/
│   ├── BusinessForm.jsx
│   ├── InvoiceDetailsForm.jsx
│   ├── ClientForm.jsx
│   ├── ItemsForm.jsx
│   └── InvoicePreview.jsx
└── utils/
    ├── format.js             — number formatting helper
    ├── validateInvoice.js    — validation logic
    └── generatePDF.js        — PDF generation logic
```

The app is split into focused components and utility modules — validation, PDF generation, and UI are kept separate so each piece is easy to read, test, and extend independently.

## Running locally

```bash
git clone https://github.com/awaishussainsoomro/invoice-generator.git
cd invoice-generator
npm install
npm run dev
```

## What I'd build next

- Save invoice history (localStorage or a backend)
- Multiple invoice templates/themes
- Recurring invoice support for subscription-style billing

---

Built by [Awais Hussain Soomro](https://github.com/awaishussainsoomro)
