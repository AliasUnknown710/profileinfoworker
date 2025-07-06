Profile Info Worker - Secure User Profile Data Access

This is a production-ready Cloudflare Worker designed for secure retrieval of user profile information with authentication and backend integration.

KEY FEATURES:
- Bearer token authentication for secure access
- User profile data retrieval from backend systems
- JWT token validation for authenticated requests
- Comprehensive input validation and authorization
- CORS protection with configurable origins
- Detailed error handling without information leakage
- Production-ready deployment configuration

SETUP REQUIREMENTS:
1. Cloudflare Workers account
2. Backend API endpoint for profile data
3. JWT secret for token validation
4. Wrangler CLI for deployment

QUICK START:
1. Copy wrangler.toml.example to wrangler.toml
2. Configure your backend URL: wrangler secret put BACKEND_URL
3. Set JWT secret: wrangler secret put JWT_SECRET
4. Deploy: wrangler deploy
5. Test using the included test.html file

SECURITY FEATURES:
- All profile requests require valid Bearer token authentication
- JWT token validation ensures secure access
- Authorization checks prevent unauthorized profile access
- Error messages sanitized to prevent information disclosure
- Backend communication secured with proper authentication
- Request method validation (GET only)

This worker is part of a larger user management system and integrates with:
- LoginWorker (for obtaining authentication tokens)
- SignUpWorker (for user registration and profile creation)
- DeleteProfileWorker (for account management)
- ForgotPassWorker (for password reset flows)

For detailed documentation, see README.md
For deployment guidance, see DEPLOYMENT_CHECKLIST.md
For security information, see SECURITY.md
