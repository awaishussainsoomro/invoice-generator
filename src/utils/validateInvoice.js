export const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateInvoice({ businessName, email, clientName, items }) {
  if (!businessName.trim()) {
    return 'Please enter your business name before generating the invoice.';
  }
  if (!email.trim()) {
    return 'Please enter your business email before generating the invoice.';
  }
  if (!emailPattern.test(email.trim())) {
    return "That email address doesn't look valid. Please check it and try again.";
  }
  if (!clientName.trim()) {
    return 'Please enter the client name before generating the invoice.';
  }

  const filledItems = items.filter((item) => item.name.trim());
  if (filledItems.length === 0) {
    return 'Please add at least one item with a name.';
  }

  const invalidPriceItem = filledItems.find(
    (item) => item.price.trim() === '' || Number(item.price) < 0
  );
  if (invalidPriceItem) {
    return `"${invalidPriceItem.name}" needs a price (enter 0 if it's free).`;
  }

  const invalidQtyItem = filledItems.find((item) => !(Number(item.qty) > 0));
  if (invalidQtyItem) {
    return `"${invalidQtyItem.name}" needs a quantity greater than 0.`;
  }

  return null;
}
