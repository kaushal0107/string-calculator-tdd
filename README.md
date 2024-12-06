
# String Calculator TDD

![String Calculator](https://img.shields.io/badge/String-Calculator-blue.svg)  
A web-based **String Calculator** application developed using **React**, **TypeScript**, and **TailwindCSS**, following the principles of **Test-Driven Development (TDD)**.

---

## 🚀 [Live Demo](https://kaushal0107.github.io/string-calculator-tdd/)

Visit the deployed application:  
[https://kaushal0107.github.io/string-calculator-tdd/](https://kaushal0107.github.io/string-calculator-tdd/)

---

## 📖 Project Description

The **String Calculator TDD** project is an implementation of a simple calculator that processes a string of numbers separated by commas or newlines and calculates their sum. The application supports custom delimiters, error handling for invalid input, and displays the calculation history. It is styled using **TailwindCSS** and developed using **React** and **TypeScript**, adhering to best practices of **TDD**.

---

## 🎯 Features

1. **Core Functionality**:
   - Calculates the sum of numbers entered as a string (e.g., `1,2,3` → `6`).
   - Supports multiple delimiters, such as commas `,` and newlines `
`.
   - Handles custom delimiters like `//;
1;2` → `3`.
   - Displays an error for:
     - Negative numbers (e.g., `-1` → "Negative numbers not allowed: -1").
     - Invalid input (e.g., `1,,2` → "Invalid format. Use numbers separated by commas or newlines").
   - Shows the calculation result dynamically.

2. **User-Friendly Features**:
   - **Calculation History**:
     - Tracks all past calculations.
     - Displays each calculation in a list.
   - **Clear History** button to reset the history.
   - Styled using **TailwindCSS** for a modern and responsive design.

3. **Accessibility**:
   - Screen reader-friendly with ARIA roles for error and status messages.

4. **Test-Driven Development**:
   - Fully tested using **Jest** and **React Testing Library**.
   - Covers edge cases, error handling, and UI interactions.

5. **Responsive Design**:
   - Fully responsive UI, works on devices of all sizes.

---

## 🛠️ Technologies Used

- **React** (with TypeScript): Frontend framework for building the UI.
- **TailwindCSS**: For styling the application.
- **Jest**: For unit and integration testing.
- **React Testing Library**: For DOM-based testing.
- **GitHub Pages**: For deployment.

---

## ⚙️ Installation & Setup

To run the project locally, follow these steps:

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v14+)
- **npm** (v6+)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/kaushal0107/string-calculator-tdd.git
   ```

2. Navigate to the project directory:
   ```bash
   cd string-calculator-tdd
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## 📦 Deployment

The project is deployed using **GitHub Pages**. To redeploy:

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

The application will be available at:  
[https://kaushal0107.github.io/string-calculator-tdd/](https://kaushal0107.github.io/string-calculator-tdd/)

---

## 🧪 Testing

The project includes unit and integration tests written using **Jest** and **React Testing Library**.

### Running Tests
To run all tests:
```bash
npm test
```

### Test Coverage
Tests cover:
- Core string calculator logic (e.g., edge cases, negative numbers, custom delimiters).
- UI interactions (e.g., input validation, result display, history updates).
- Error handling and accessibility.

---

## 📂 Project Structure

```
string-calculator-tdd/
├── src/
│   ├── app/
│   │   ├── App.tsx            # Main application component
│   │   ├── styles/            # TailwindCSS styles
│   │   │   └── index.css
│   └── utils/
│       └── stringCalculator.ts # Core string calculator logic
├── tests/                      # Test files
│   ├── stringCalculator.test.ts # Backend logic tests
│   └── App.test.tsx            # Frontend tests
├── public/                     # Static files
│   ├── index.html              # HTML template
├── .gitignore                  # Ignored files for Git
├── package.json                # Project configuration
├── README.md                   # Project documentation
├── tsconfig.json               # TypeScript configuration
├── jest.config.js              # Jest configuration
```

---

## 🔑 Key Files

- **`App.tsx`**: Contains the React component for the main UI.
- **`stringCalculator.ts`**: Implements the core string calculator logic.
- **`App.test.tsx`**: Tests for the React app's UI and interactions.
- **`stringCalculator.test.ts`**: Unit tests for the string calculator logic.

---

## 🤝 How to Use

1. Enter a string of numbers (e.g., `1,2,3`) in the input field.
2. Click the "Calculate" button to see the result.
3. View the calculation history below the form.
4. Use the "Clear History" button to reset the history.

