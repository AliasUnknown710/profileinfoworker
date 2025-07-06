Profile Info Worker - Quick Start Guide
=====================================

This is a Cloudflare Worker template for handling user profile information with authentication.

QUICK SETUP:
1. Install dependencies: npm install
2. Copy config: cp wrangler.toml.example wrangler.toml
3. Edit wrangler.toml with your details
4. Start development: npm run dev
5. Test using test.html in your browser

DEMO AUTHENTICATION:
- Use "Bearer demo-token" as Authorization header
- This will return demo user profile data

FILES OVERVIEW:
- index.js: Entry point for the worker
- ProfileInfoWorker.js: Main worker logic with authentication
- package.json: Project dependencies and scripts
- wrangler.toml.example: Cloudflare Worker configuration template
- test.html: Interactive test page for the API
- README.md: Comprehensive documentation
- CONTRIBUTING.md: Guidelines for contributors
- CHANGELOG.md: Version history and release notes
- LICENSE: MIT license terms

DEVELOPMENT COMMANDS:
- npm run dev: Start local development server
- npm run deploy: Deploy to Cloudflare
- npm test: Run tests
- npm run lint: Check code style
- npm run format: Format code

TESTING:
- Open test.html in browser for interactive testing
- Use localhost:8787 for local development
- Demo token: "demo-token"

For detailed documentation, see README.md
For contributing guidelines, see CONTRIBUTING.md
For version history, see CHANGELOG.md

Happy coding! 🚀
