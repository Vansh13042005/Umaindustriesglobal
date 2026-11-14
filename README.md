# UMA Industries — React Website

Home, About Us, Products aur Contact Us pages ke saath ek React JS website, common Header aur Footer ke saath. Content aur images `umaindustriesglobal.com` (aapki current Wix site) se liye gaye hain.

## Run karne ke liye

```bash
npm install
npm start
```

Yeh `http://localhost:3000` par site khol dega.

## Production build banane ke liye

```bash
npm run build
```

`build/` folder ban jayega — usse kisi bhi static hosting (Netlify, Vercel, Hostinger, cPanel, etc.) par upload kar sakte hain.

## Folder structure

```
src/
  components/   Header aur Footer (sab pages me common)
  pages/        Home, About, Products, Contact
  data/         products.js — product list, industries, stats, contact info (yahan edit karke content update kar sakte hain)
  styles/       tokens.css (colors/fonts) aur global.css (shared styles)
```

## Content update karna

- Product list, industries, stats aur contact details `src/data/products.js` me hain — naya product add karna ho to yahin array me object add karein.
- Colors/fonts `src/styles/tokens.css` me hain.
- Contact form (`src/pages/Contact.jsx`) abhi koi backend se connected nahi hai — real enquiries receive karne ke liye ismein apna email service (Formspree, EmailJS, ya apna API) connect karna hoga.
