# Orbix Hub Technologies - Vite React SPA

## Deployment Configuration for Client-Side Routing

This project uses React Router DOM for client-side routing. To prevent 404 errors on direct page access or refresh, the following configurations are included:

### ✅ Verified Working Configuration

The build has been tested and all routes are correctly served:
- `/` - Home page ✓
- `/services` - Services page ✓
- `/about` - About page ✓
- `/work` - Work page ✓
- `/contact` - Contact page ✓

### Included Routing Fallback Files (in `/dist`):

1. **`_redirects`** - For Netlify deployment
   ```
   /*    /index.html   200
   ```

2. **`_routes.json`** - For Cloudflare Pages deployment
   ```json
   {
     "rewrites": [
       { "source": "**", "destination": "/index.html" }
     ]
   }
   ```

### Additional Platform Configurations:

#### For Vercel:
Create a `vercel.json` file in the root:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

#### For Apache:
Create a `.htaccess` file in the `dist` folder:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

#### For Nginx:
Add to your nginx config:
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

#### For GitHub Pages:
Add to `vite.config.js`:
```javascript
base: '/your-repo-name/',
```

And create a `404.html` that redirects to index.html with proper path handling.

### Build & Deploy:

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy dist folder to your hosting platform
```

### Current vite.config.js Settings:
- `base: '/'` - Root path deployment
- `build.outDir: 'dist'` - Output directory
- Code splitting with manual chunks for optimal loading:
  - `three-vendor` - Three.js and React Three Fiber
  - `gsap-vendor` - GSAP animations
  - `react-vendor` - React, React DOM, React Router

### Build Output:
```
dist/index.html                             1.12 kB
dist/assets/index-*.css                     3.23 kB
dist/assets/rolldown-runtime-*.js           0.58 kB
dist/assets/index-*.js                     62.20 kB
dist/assets/gsap-vendor-*.js              112.83 kB
dist/assets/react-vendor-*.js             257.41 kB
dist/assets/three-vendor-*.js             538.07 kB
```
