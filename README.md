# Ivanko Super Gripper Force Finder

## Overview

The Ivanko Super Gripper Force Finder is a web application designed to help athletes and fitness enthusiasts find the optimal spring configuration for their desired hand gripper closing force. This tool takes the guesswork out of adjusting hand grippers by providing precise spring position recommendations.

## Features

- 🎯 Precise Force Matching
- 📊 Comprehensive Spring Configuration Database
- 🖥️ Simple, User-Friendly Interface
- ⚠️ Helpful Guidance and Warnings

## How It Works

1. Enter your desired closing force in pounds
2. Instantly see the recommended spring positions
3. Get detailed information about the actual force and configuration

### Key Functionality

- Searches through 12x12 matrix of spring configurations
- Finds the closest matching force to your input
- Provides exact spring positions
- Warns about significant force discrepancies

## Usage Notes

### Important Gripper Adjustment Guidelines

- Always return the gripper to the unlocked position when adjusting springs
- Leave at least one notch between springs
- Actual force may slightly differ from desired force

## Example Scenarios

### Scenario 1: Precise Match
- Desired Force: 120 lbs
- Result: Exact configuration for 120 lbs

### Scenario 2: Closest Match
- Desired Force: 135 lbs
- Result: Nearest available configuration with explanation

## Limitations

- Force range limited to documented configurations
- Precision depends on original manufacturer's data

## Technical Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Docker (optional, for containerization)

### Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/SuperGripper.git
cd SuperGripper
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview the production build locally

### Docker Support

To build and run the application using Docker:

```bash
# Build the Docker image
docker build -t supergripper .

# Run the container
docker run -p 8080:80 supergripper
```

## Technologies

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)

## Disclaimer

This tool is intended to assist in hand gripper configuration. Always follow manufacturer guidelines and exercise caution when adjusting fitness equipment.
