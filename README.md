# Profile Info Worker

A Cloudflare Worker for handling user profile information retrieval with authentication.

## Features

- 🔐 Authentication via Authorization header
- 👤 User profile data retrieval
- 🚀 Fast response times with Cloudflare Edge
- 🛡️ Secure token-based authentication
- 📝 JSON API responses

## API Endpoints

### GET /
Retrieves user profile information for authenticated users.

**Headers:**
- `Authorization`: Bearer token (required)

**Response:**
```json
{
  "username": "alexl",
  "email": "alexl@example.com",
  "fullName": "Alex L.",
  "joined": "2023-01-01"
}
```

**Status Codes:**
- `200`: Success
- `401`: Unauthorized (missing or invalid token)
- `404`: User not found

## Development

### Prerequisites
- Node.js 18+
- Cloudflare account
- Wrangler CLI

### Setup

1. Clone the repository:
```bash
git clone https://github.com/your-username/profile-info-worker.git
cd profile-info-worker
```

2. Install dependencies:
```bash
npm install
```

3. Copy the example configuration:
```bash
cp wrangler.toml.example wrangler.toml
```

4. Update `wrangler.toml` with your configuration

### Local Development

Start the development server:
```bash
npm run dev
```

The worker will be available at `http://localhost:8787`

### Testing

Run the test suite:
```bash
npm test
```

Test the worker manually using the included `test.html` file.

### Deployment

Deploy to Cloudflare:
```bash
npm run deploy
```

## Configuration

The worker can be configured through environment variables:

- `AUTH_SECRET`: Secret key for token validation
- `DATABASE_URL`: Database connection string (if using external DB)

## Authentication

Currently supports Bearer token authentication. To test with the demo token:

```bash
curl -H "Authorization: Bearer demo-token" https://your-worker.your-subdomain.workers.dev/
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a detailed history of changes.
