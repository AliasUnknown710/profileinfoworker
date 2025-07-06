# Contributing to Profile Info Worker

Thank you for your interest in contributing to the Profile Info Worker! This document provides guidelines for contributing to this Cloudflare Worker project.

## Project Overview

This worker is part of a larger authentication and user management system built on Cloudflare Workers. It handles secure retrieval of user profile information with proper authentication, authorization, and backend integration.

## Development Setup

### Prerequisites

- Node.js (v18 or later)
- Wrangler CLI
- Access to Cloudflare Workers
- Backend API for user profile data
- JWT secret for token validation

### Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Copy configuration: `cp wrangler.toml.example wrangler.toml`
4. Configure your environment variables
5. Set up secrets: `wrangler secret put BACKEND_URL`
6. Set JWT secret: `wrangler secret put JWT_SECRET`

## Code Style and Standards

### Security Requirements

- Always validate Bearer tokens before processing requests
- Implement proper authorization checks for profile access
- Use JWT token validation for user context
- Never expose sensitive user information in error messages
- Implement proper CORS configuration
- Follow the principle of least privilege

### Profile Data Handling

- Validate all profile data before returning to client
- Ensure users can only access their own profile data
- Sanitize profile data to prevent XSS attacks
- Handle missing or incomplete profile data gracefully
- Implement proper caching strategies where appropriate

## Testing

### Test Cases to Cover

- Valid profile retrieval requests with proper authentication
- Invalid or expired JWT tokens
- Unauthorized access attempts (accessing other users' profiles)
- Missing authentication headers
- Backend service failures
- CORS preflight requests
- Malformed or missing profile data from backend

## Security Considerations

### Authentication & Authorization

- All profile requests must include valid Bearer tokens
- JWT tokens must be properly validated and verified
- User context must be extracted from validated tokens
- Authorization checks must ensure users access only their own data
- Implement proper session management

### Data Protection

- Never log sensitive profile information
- Sanitize all data before returning to client
- Use HTTPS for all communications
- Implement proper error handling without information leakage
- Validate all backend responses before processing

## Integration

Works seamlessly with:
- LoginWorker (for obtaining authentication tokens)
- SignUpWorker (for user registration and profile creation)
- DeleteProfileWorker (for profile management)
- Backend profile management systems
