# Product updates

The first-phase catalog lives in `src/data/products.ts`.

To add or update a product:

1. Copy an existing item in the `products` array.
2. Keep `id` and `slug` unique and stable.
3. Update `name`, `nameBn`, `category`, and `description`.
4. Add `partner` only when the shop has confirmed the relationship.
5. Add an optional image path such as `/products/roller-set.webp` after placing the file in `public/products/`.
6. Set `visible: false` to hide a product without deleting its record.

Products do not show prices in this phase. Customers are directed to WhatsApp for availability and quotation questions. Keep the product shape API-friendly so it can later be loaded from the Java inventory service.
