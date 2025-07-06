import { fetch as profileFetch } from './ProfileInfoWorker.js';

export default {
    async fetch(request, env, ctx) {
        return await profileFetch(request, env, ctx);
    }
};
