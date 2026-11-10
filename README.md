# Merge Three Sorted Collections (TypeScript)

This project implements a `merge(collection_1, collection_2, collection_3)` function in TypeScript that merges three pre-sorted integer arrays into a single ascendingly sorted array using a **Three-Pointer approach** ($O(n_1 + n_2 + n_3)$ time complexity) without using any built-in `sort` functions.

## Problem Specification
- `collection_1`: already sorted from min (0) to max
- `collection_2`: already sorted from min (0) to max
- `collection_3`: already sorted from max to min (0)

## Prerequisites
- **Node.js** (v18 or higher recommended)
- **npm**

## 1. How to Setup Dependencies
Clone this repository and install the required packages:

```bash
git clone https://github.com/Tanakit-Kit/tech_test_1.git
cd tech_test_1
npm install
```

## 2. How to Execute Code
To run the example execution script (`src/index.ts`):

```bash
npm start
```

*(Optional)* To compile the TypeScript code into JavaScript (`dist/`):

```bash
npm run build
```

## 3. How to Run Unit Tests
To execute the unit tests (`tests/merge.test.ts`) using Jest:

```bash
npm test
```

## Project Structure
```text
├── src/
│   ├── merge.ts         # Implementation of the merge function
│   └── index.ts         # Example usage script
├── tests/
│   └── merge.test.ts    # Unit tests (Jest)
├── jest.config.js       # Jest configuration
├── package.json         # Dependencies and scripts
└── tsconfig.json        # TypeScript configuration
```