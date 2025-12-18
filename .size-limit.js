/**
 * Bundle Size Configuration for MyWebClass.org
 * 
 * This configuration enforces bundle size limits to ensure optimal performance.
 * Uses size-limit library for monitoring and enforcement.
 * 
 * Install: npm install --save-dev size-limit @size-limit/file
 */

module.exports = [
  {
    name: 'CSS Bundle',
    path: '_site/css/**/*.css',
    limit: '50 KB',
    gzip: true,
  },
  {
    name: 'JavaScript Bundle',
    path: '_site/js/**/*.js',
    limit: '250 KB',
    gzip: true,
  },
  {
    name: 'Critical CSS (inline)',
    path: '_site/css/critical.css',
    limit: '10 KB',
    gzip: false,
  },
  {
    name: 'Main Page (HTML + Inline Assets)',
    path: '_site/index.html',
    limit: '100 KB',
    gzip: true,
  },
  {
    name: 'Gallery Page',
    path: '_site/gallery/index.html',
    limit: '150 KB',
    gzip: true,
  },
];
