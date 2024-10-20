# Xsauce Date Library (TypeScript)

Xsauce Date Library is a custom TypeScript-based library for handling common date operations such as formatting, comparing, and manipulating dates. The library follows a structured approach with extensive use of types, interfaces, and classes, ensuring a high-quality and maintainable codebase.

## Features

- **Date Formatting**: Format dates in various standard formats (e.g., `MM-DD-YYYY`, `YYYY-MM-DD`).
- **Date Manipulation**: Add or subtract days from a given date.
- **Date Comparison**: Compare dates to determine if one is before or after another.
- **Utility Functions**:
  - Check if a year is a leap year.
  - Determine if a date falls on a weekend.
  - Get the start or end of a day.
- **Strong Typing**: Utilizes TypeScript's types and interfaces for type safety.
- **Object-Oriented Design**: Follows a modular approach using classes for different operations.

## Project Structure

```plaintext
.
├── src
│   ├── format.ts            # DateFormatter class for date formatting
│   ├── manipulate.ts        # DateManipulator class for date manipulation
│   ├── compare.ts           # DateComparer class for date comparison
│   ├── utils.ts             # DateUtilities class for utility functions
│   └── index.ts             # Exporting instances of each class
├── tests                    # Unit tests for each module
│   ├── format.test.ts
│   ├── manipulate.test.ts
│   ├── compare.test.ts
│   └── utils.test.ts
├── .github
│   └── workflows
│       └── ci.yml           # GitHub Actions workflow for CI
├── eslint.config.mjs        # ESLint configuration
├── jest.config.js           # Jest configuration for tests
├── package.json             # NPM configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # Project documentation