# Profile Info Worker

A secure Cloudflare Worker for retrieving user profile information with authentication and backend integration.

## Features

- 🔒 **Secure Authentication**: Bearer token validation
- 🛡️ **Authorization**: Role-based access control
- 🌐 **Backend Integration**: Secure communication with profile API
- 📊 **Error Handling**: Detailed error responses and logging
- 🚀 **CORS Support**: Proper cross-origin request handling
- 🔐 **JWT Token Support**: Secure token validation
- ⚡ **High Performance**: Optimized for Cloudflare Edge
- 📝 **Data Validation**: Comprehensive response validation

## Quick Setup

### 1. Set Your Backend URL

```bash
wrangler secret put BACKEND_URL
```

### 2. Set JWT Secret

```bash
wrangler secret put JWT_SECRET
```

### 3. Deploy

```bash
wrangler deploy
```

## API Endpoint

### GET /

Retrieves user profile information.

**Headers:**
- `Authorization: Bearer <token>` (required)

**Response:**
- `200 OK`: Profile retrieved successfully
  ```json
  {
    "username": "alexl",
    "email": "alexl@example.com",
    "fullName": "Alex L.",
    "joined": "2023-01-01",
    "profilePicture": "https://example.com/avatar.jpg",
    "bio": "Software developer"
  }
  ```
- `401 Unauthorized`: Missing or invalid token
- `404 Not Found`: User profile not found
- `405 Method Not Allowed`: Non-GET request
- `500 Internal Server Error`: Backend error

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `BACKEND_URL` | Backend API endpoint for profile data | Yes |
| `JWT_SECRET` | Secret key for JWT token validation | Yes |

## Security Features

- Bearer token authentication
- JWT token validation
- Authorization header validation
- Secure backend communication
- Error message sanitization
- Request method validation
- CORS protection

## Development

1. Copy `wrangler.toml.example` to `wrangler.toml`
2. Configure your environment variables
3. Test using `test.html`
4. Deploy with `wrangler deploy`

## Testing

Use the provided `test.html` file to test the worker functionality locally or after deployment.

## Usage

This worker is typically used after a successful login to retrieve user profile information for dashboard or profile pages. It requires a valid authentication token obtained from the LoginWorker.

## Integration

Works seamlessly with:
- LoginWorker (for obtaining authentication tokens)
- SignUpWorker (for user registration)
- DeleteProfileWorker (for profile management)
