## Description

**Jewelry Store** is a React-based web application that provides a shopping experience for jewelry items. Users can view detailed information about jewelry, add items to their cart, and review their cart's contents. This README provides an overview of the project's main components: `CartPage` and `JewelryInfoPage`.

### Table of Contents

- [Features](#features)
- [How to Use](#how-to-use)
- [Technical Details](#technical-details)

### Features

- **Jewelry Information**:

  - **Detailed View**: Displays detailed information about selected jewelry items, including images, titles, prices, and descriptions.
  - **Quantity Adjustment**: Users can adjust the quantity of the jewelry item in their cart directly from the detail page.

- **Shopping Cart**:

  - **Cart Items Display**: Shows items added to the cart with options to adjust quantities or remove items.
  - **Subtotal and Tax Calculation**: Automatically calculates the subtotal, tax, and total amount based on the items in the cart.
  - **Empty Cart Message**: Displays a message when the cart is empty.
  - **Checkout Link**: Provides a link to proceed to the checkout page.

- **Responsive Design**:
  - **Layout**: Designed to be responsive, providing a good user experience across different screen sizes.

### How to Use

1. **Viewing Jewelry Details**:

   - Navigate to a specific jewelry item's page to see detailed information.
   - Adjust the quantity of the item using the "+" and "-" buttons.
   - Click the "Go to cart" button to view the cart page.

2. **Managing the Cart**:

   - View items in the cart with their quantities and prices.
   - Adjust quantities or remove items as needed.
   - Check the subtotal, tax, and total amount.
   - Use the "Checkout" button to proceed to the fake checkout process.

### Technical Details

- **Frontend Framework**: Built with React for dynamic and interactive user interfaces.
- **State Management**: Uses React context to manage items in the cart and update item counts.
- **Styling**: CSS is used for styling, ensuring a visually appealing layout with responsive design.
- **Session Storage**: Retrieves and stores jewelry data using session storage to maintain state between page loads.
