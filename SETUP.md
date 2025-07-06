# Setup Guide

This guide will walk you through setting up the Profile Info Worker from scratch to deployment.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js 18+** - [Download from nodejs.org](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** - [Download from git-scm.com](https://git-scm.com/)
- **Cloudflare Account** - [Sign up at cloudflare.com](https://cloudflare.com/)

## Step 1: Clone and Install

### 1.1 Clone the Repository

```bash
# Clone the repository
git clone https://github.com/your-username/profile-info-worker.git
cd profile-info-worker

# Or if using this as a template
# Download or copy the files to your project directory
```

### 1.2 Install Dependencies

```bash
# Install all dependencies
npm install

# Or using yarn
yarn install
```

This will install:
- `wrangler` - Cloudflare Workers CLI
- `@cloudflare/workers-types` - TypeScript types for Workers
- `prettier` - Code formatter
- `eslint` - Code linter

## Step 2: Cloudflare Setup

### 2.1 Install Wrangler CLI

If not already installed globally:

```bash
npm install -g wrangler
```

### 2.2 Authenticate with Cloudflare

```bash
wrangler login
```

This will open your browser and prompt you to log in to Cloudflare.

### 2.3 Verify Authentication

```bash
wrangler whoami
```

## Step 3: Configure Your Worker

### 3.1 Create Configuration File

```bash
# Copy the example configuration
cp wrangler.toml.example wrangler.toml
```

### 3.2 Edit wrangler.toml

Open `wrangler.toml` and customize the following required fields:

```toml
name = "your-worker-name"  # Change this to your preferred worker name
main = "index.js"
compatibility_date = "2024-01-01"

# Add your environment variables
[vars]
AUTH_SECRET = "your-secret-key-here"
# DATABASE_URL = "your-database-url-here"  # Uncomment if using external DB
```

### 3.3 Choose Your Subdomain (Optional)

If you want a custom subdomain:

```bash
wrangler subdomain set your-subdomain
```

Your worker will be available at: `https://your-worker-name.your-subdomain.workers.dev`

## Step 4: Development Setup

### 4.1 Start Development Server

```bash
npm run dev
```

This starts the worker at `http://localhost:8787`

### 4.2 Test Your Worker

Open `test.html` in your browser and:

1. Ensure the Worker URL is set to `http://localhost:8787`
2. Use the demo token: `demo-token`
3. Click "Test Profile API"

You should see a successful response with demo user data.

## Step 5: Advanced Configuration

### 5.1 Environment Variables

Add environment variables to your `wrangler.toml`:

```toml
[vars]
AUTH_SECRET = "your-jwt-secret-key"
API_VERSION = "v1"
DEBUG_MODE = "false"
```

For production secrets, use:

```bash
wrangler secret put SECRET_NAME
```

### 5.2 KV Storage (Optional)

If you need key-value storage:

```bash
# Create KV namespace
wrangler kv:namespace create "PROFILES"
wrangler kv:namespace create "PROFILES" --preview
```

Add to your `wrangler.toml`:

```toml
[[kv_namespaces]]
binding = "PROFILES"
id = "your-kv-namespace-id"
preview_id = "your-preview-kv-namespace-id"
```

### 5.3 D1 Database (Optional)

If you need a SQL database:

```bash
# Create D1 database
wrangler d1 create profile-db
```

Add to your `wrangler.toml`:

```toml
[[d1_databases]]
binding = "DB"
database_name = "profile-db"
database_id = "your-d1-database-id"
```

### 5.4 R2 Storage (Optional)

If you need object storage:

```bash
# Create R2 bucket
wrangler r2 bucket create profile-assets
```

Add to your `wrangler.toml`:

```toml
[[r2_buckets]]
binding = "BUCKET"
bucket_name = "profile-assets"
```

## Step 6: Custom Domain (Optional)

### 6.1 Add Domain to Cloudflare

1. Add your domain to Cloudflare
2. Update nameservers as instructed
3. Wait for DNS propagation

### 6.2 Configure Routes

Add to your `wrangler.toml`:

```toml
[[routes]]
pattern = "api.yourdomain.com/profile/*"
zone_id = "your-zone-id"
```

Or use the dashboard to add routes.

## Step 7: Deployment

### 7.1 Deploy to Production

```bash
npm run deploy
```

### 7.2 Verify Deployment

```bash
# Check deployment status
wrangler deployments list

# Test your deployed worker
curl -H "Authorization: Bearer demo-token" https://your-worker-name.your-subdomain.workers.dev/
```

## Step 8: Monitoring and Logs

### 8.1 View Logs

```bash
# Tail logs in real-time
wrangler tail

# View logs with filtering
wrangler tail --format pretty
```

### 8.2 Analytics

View analytics in the Cloudflare dashboard:
- Go to Workers & Pages
- Select your worker
- Click on the Analytics tab

## Troubleshooting

### Common Issues

#### 1. Authentication Errors

```bash
# Re-authenticate
wrangler logout
wrangler login
```

#### 2. Deployment Failures

```bash
# Check for syntax errors
npm run lint

# Validate wrangler.toml
wrangler validate
```

#### 3. Local Development Issues

```bash
# Clear cache and restart
rm -rf node_modules
npm install
npm run dev
```

#### 4. CORS Issues

Add CORS headers to your worker:

```javascript
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

// Add to your responses
return new Response(JSON.stringify(data), {
  headers: { 
    'Content-Type': 'application/json',
    ...corsHeaders
  }
});
```

### Getting Help

1. **Check the logs**: `wrangler tail`
2. **Review documentation**: [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)
3. **Community support**: [Cloudflare Community](https://community.cloudflare.com/)
4. **GitHub issues**: Create an issue in this repository

## Next Steps

After successful setup:

1. **Customize authentication** - Replace demo token with real authentication
2. **Add database integration** - Connect to your preferred database
3. **Implement caching** - Add caching for better performance
4. **Set up monitoring** - Add error tracking and monitoring
5. **Add tests** - Write comprehensive tests for your endpoints
6. **Security review** - Review security guidelines in SECURITY.md

## Development Workflow

### Daily Development

```bash
# Start development
npm run dev

# In another terminal, tail logs
wrangler tail --local

# Make changes to your code
# The dev server will automatically reload
```

### Before Deployment

```bash
# Run tests
npm test

# Check code style
npm run lint

# Format code
npm run format

# Deploy
npm run deploy
```

### Environment Management

- **Development**: Use `npm run dev` with local environment
- **Staging**: Deploy with staging configuration
- **Production**: Deploy with production secrets and configuration

## Performance Optimization

### Best Practices

1. **Minimize bundle size** - Keep your worker code lean
2. **Use caching** - Implement appropriate caching strategies
3. **Optimize database queries** - Use efficient database patterns
4. **Handle errors gracefully** - Implement proper error handling
5. **Monitor performance** - Use Cloudflare Analytics

### Caching Strategy

```javascript
// Example caching implementation
const cache = caches.default;
const cacheKey = new Request(url, request);

// Try to get from cache first
let response = await cache.match(cacheKey);
if (!response) {
  // Generate response
  response = await generateResponse(request);
  
  // Cache for 5 minutes
  response.headers.set('Cache-Control', 'max-age=300');
  await cache.put(cacheKey, response.clone());
}

return response;
```

## Security Considerations

- **Never commit secrets** to version control
- **Use environment variables** for sensitive data
- **Implement rate limiting** for production use
- **Validate all inputs** properly
- **Use HTTPS** for all communications
- **Review security guidelines** in SECURITY.md

For detailed security information, see [SECURITY.md](SECURITY.md).
