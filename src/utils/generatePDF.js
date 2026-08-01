import jsPDF from 'jspdf';
import { fmt } from './format';


export function generateInvoicePDF({ businessName, email, invoiceNo, date, clientName, items, total }) {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();

  // Header band
  doc.setFillColor(22, 27, 51);
  doc.rect(0, 0, pageWidth, 40, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(20);
  doc.text(businessName, 15, 20);
  doc.setFontSize(10);
  doc.text(email || '', 15, 28);

  // Gold divider under header
  doc.setDrawColor(201, 162, 75);
  doc.setLineWidth(1);
  doc.line(0, 40, pageWidth, 40);

  doc.setTextColor(22, 27, 51);
  doc.setFontSize(11);
  doc.text(invoiceNo || 'INV-001', pageWidth - 45, 18);
  doc.setFontSize(9);
  doc.setTextColor(120, 120, 120);
  doc.text(date, pageWidth - 45, 25);

  doc.setFontSize(10);
  doc.setTextColor(80, 80, 80);
  doc.text(`Billed to: ${clientName}`, 15, 52);

  // Table header
  let y = 65;
  doc.setFillColor(22, 27, 51);
  doc.rect(15, y - 6, pageWidth - 30, 8, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(9);
  doc.text('ITEM', 18, y);
  doc.text('QTY', 120, y);
  doc.text('PRICE', 145, y);
  doc.text('AMOUNT', 175, y);

  // Table rows
  y += 10;
  doc.setTextColor(30, 30, 30);
  const nameColWidth = 95; 

  items.forEach((item, i) => {
    
    if (y > 265) {
      doc.addPage();
      y = 25;
    }
    const qtyNum = Number(item.qty) || 0;
    const priceNum = Number(item.price) || 0;

    if (i % 2 === 0) {
      doc.setFillColor(245, 243, 238);
      doc.rect(15, y - 6, pageWidth - 30, 8, 'F');
    }
    doc.setFontSize(9);

    const nameLines = doc.splitTextToSize(item.name || '-', nameColWidth);
    doc.text(nameLines[0], 18, y);
    doc.text(String(qtyNum), 120, y);
    doc.text(fmt(priceNum), 145, y);
    doc.text(fmt(qtyNum * priceNum), 175, y);
    y += 9;
  });

  // guard total box + footer too
  if (y > 250) {
    doc.addPage();
    y = 25;
  }

  y += 8;
  doc.setDrawColor(201, 162, 75);
  doc.setLineWidth(0.8);
  doc.rect(140, y - 8, 45, 12);
  doc.setFontSize(11);
  doc.setTextColor(22, 27, 51);
  doc.text(`Total: ${fmt(total)}`, 143, y);

  doc.setFontSize(8);
  doc.setTextColor(150, 150, 150);
  doc.text('Thank you for your business.', 15, y + 20);

  doc.save(`invoice-${clientName}.pdf`);
}
