import { fetch as profileFetch } from './ProfileInfoWorker.js';

// Re-export the main fetch function
export default {
  async fetch(request, env, ctx) {
    return profileFetch(request, env, ctx);
  }
};

// Named export for compatibility
export { profileFetch as fetch };
