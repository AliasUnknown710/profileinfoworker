# Contributing to Profile Info Worker

First off, thanks for taking the time to contribute! 🎉

The following is a set of guidelines for contributing to Profile Info Worker. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Style Guidelines](#style-guidelines)
- [Testing](#testing)

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

### Our Pledge

We pledge to make participation in our project a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When you are creating a bug report, please include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples to demonstrate the steps**
- **Describe the behavior you observed and what behavior you expected**
- **Include details about your configuration and environment**

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

- **Use a clear and descriptive title**
- **Provide a step-by-step description of the suggested enhancement**
- **Provide specific examples to demonstrate the steps**
- **Describe the current behavior and explain which behavior you expected to see**
- **Explain why this enhancement would be useful**

### Your First Code Contribution

Unsure where to begin contributing? You can start by looking through these `beginner` and `help-wanted` issues:

- **Beginner issues** - issues which should only require a few lines of code
- **Help wanted issues** - issues which should be a bit more involved than beginner issues

### Pull Requests

- Fill in the required template
- Do not include issue numbers in the PR title
- Include screenshots and animated GIFs in your pull request whenever possible
- Follow the JavaScript/Node.js style guides
- Include thoughtfully-worded, well-structured tests
- Document new code based on the documentation style guide
- End all files with a newline

## Development Setup

### Prerequisites

- Node.js 18 or higher
- npm or yarn
- Cloudflare account (for deployment)
- Git

### Getting Started

1. **Fork and clone the repository**
   ```bash
   git clone https://github.com/your-username/profile-info-worker.git
   cd profile-info-worker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up your development environment**
   ```bash
   cp wrangler.toml.example wrangler.toml
   # Edit wrangler.toml with your configuration
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open the test page**
   Open `test.html` in your browser to test the worker locally

### Project Structure

```
profile-info-worker/
├── index.js              # Entry point
├── ProfileInfoWorker.js   # Main worker logic
├── package.json           # Project configuration
├── wrangler.toml.example  # Cloudflare Worker config template
├── test.html              # Interactive test page
├── README.md              # Project documentation
├── CHANGELOG.md           # Version history
├── CONTRIBUTING.md        # This file
├── LICENSE                # MIT license
└── readme.txt            # Additional notes
```

## Pull Request Process

1. **Create a feature branch** from `main`
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following the style guidelines

3. **Add or update tests** for your changes

4. **Update documentation** as needed

5. **Run the test suite**
   ```bash
   npm test
   npm run lint
   ```

6. **Commit your changes** with a clear commit message
   ```bash
   git commit -m "Add feature: brief description of changes"
   ```

7. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

8. **Submit a pull request** with:
   - Clear title and description
   - Reference to any related issues
   - Screenshots or GIFs if applicable

## Style Guidelines

### JavaScript Style Guide

- Use ES6+ features where appropriate
- Use `const` for immutable variables, `let` for mutable ones
- Use descriptive variable and function names
- Add JSDoc comments for public functions
- Keep functions small and focused
- Use async/await instead of Promises where possible

#### Example:

```javascript
/**
 * Retrieves user profile information from the database
 * @param {string} userId - The unique user identifier
 * @returns {Promise<Object|null>} User profile object or null if not found
 */
async function getUserProfile(userId) {
  // Implementation here
}
```

### Commit Message Guidelines

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line

#### Types of commits:

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools

## Testing

### Running Tests

```bash
# Run all tests
npm test

# Run linting
npm run lint

# Run formatting
npm run format
```

### Test Guidelines

- Write tests for all new functionality
- Ensure tests are deterministic and isolated
- Use descriptive test names
- Include both positive and negative test cases
- Test edge cases and error conditions

### Manual Testing

Use the provided `test.html` file to manually test the worker:

1. Start the development server: `npm run dev`
2. Open `test.html` in your browser
3. Test various scenarios:
   - Valid authentication
   - Invalid/missing authentication
   - Different endpoints
   - Error conditions

## Questions?

Feel free to open an issue with the `question` label if you have any questions about contributing!

## Recognition

Contributors will be recognized in the project README and release notes. Thank you for your contributions! 🙏
