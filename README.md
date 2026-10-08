# Cases Ares — GitHub Pages version

This version has been converted from PHP to a static GitHub Pages site.

## What was changed

- PHP page files were converted to `.html`.
- The shared `menu_cat.html`, `menu_esp.html`, `idioma_cat.html` and `idioma_esp.html`
  content is embedded directly into the pages, so PHP includes are no longer required.
- The old PHP date output (`date("d/m/Y")`) is replaced by a small client-side JavaScript
  date display in `github-pages.js`.
- Internal links were changed from `.php` to `.html` and made relative, so they work under
  a GitHub Pages project URL such as `https://USERNAME.github.io/REPOSITORY/`.
- Apache `.htaccess` and PHP files were removed.
- The old PHP contact-mail handler cannot run on GitHub Pages. The contact form now validates
  the fields in the browser and opens the visitor's email client with a pre-filled message
  addressed to `conchaares@hotmail.com`.

## GitHub Pages

Publish the contents of this directory as the repository's site (for example, from the
`main` branch and `/ (root)`), then enable GitHub Pages under the repository settings.

The site should use:

- `index.html` for the Catalan home page.
- `index_es.html` for the Spanish home page.

## Contact form

The contact form uses `mailto:` because GitHub Pages does not provide server-side PHP.
For a web-based form that sends without opening the visitor's email client, replace the
client-side handler with a third-party form service such as Formspree or an equivalent
service and use its supplied endpoint.
