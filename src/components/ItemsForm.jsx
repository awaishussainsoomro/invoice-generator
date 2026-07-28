function ItemsForm({ items, updateItem, addItem, removeItem }) {
  return (
    <>
      <h2 className="section-title">Items</h2>
      {items.map((item, index) => (
        <div key={item.id} className="item-row">
          <input
            className="inv-input"
            placeholder="Item"
            value={item.name}
            onChange={(e) => updateItem(index, 'name', e.target.value)}
          />
          <input
            className="inv-input mono"
            type="number"
            min="0"
            placeholder="Qty"
            value={item.qty}
            onChange={(e) => updateItem(index, 'qty', e.target.value)}
            onBlur={(e) => {
              if (Number(e.target.value) < 0) updateItem(index, 'qty', '0');
            }}
          />
          <input
            className={`inv-input mono ${item.name.trim() && item.price.trim() === '' ? 'error' : ''}`}
            type="number"
            min="0"
            placeholder="Price (0 = free)"
            value={item.price}
            onChange={(e) => updateItem(index, 'price', e.target.value)}
            onBlur={(e) => {
              if (Number(e.target.value) < 0) updateItem(index, 'price', '0');
            }}
          />
          <button
            className="remove-btn"
            onClick={() => removeItem(index)}
            aria-label="Remove item"
            disabled={items.length === 1}
          >
            ✕
          </button>
        </div>
      ))}
      <button className="add-item-btn" onClick={addItem}>
        + Add item
      </button>
    </>
  );
}

export default ItemsForm;
