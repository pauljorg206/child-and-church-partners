# Production Checklist for Child & Church Partners Website

This checklist covers everything needed to launch the site in production.

---

## 1. CRITICAL - Must Complete Before Launch

### 1.1 Contact Form Backend
**Status:** Not implemented
**Location:** `src/app/contact/page.tsx` (line 51-53)

The contact form currently has a placeholder that simulates sending. You need to:

**Option A: Use a form service (Recommended for simplicity)**
- [Formspree](https://formspree.io) - Free tier: 50 submissions/month
- [Getform](https://getform.io) - Free tier: 50 submissions/month
- [Web3Forms](https://web3forms.com) - Free: 250 submissions/month

**Option B: Create API route**
```bash
# Create file: src/app/api/contact/route.ts
# Use nodemailer or a service like SendGrid/Resend
```

**Option C: Use Vercel's form handling**
- If deploying to Vercel, you can use their serverless functions

### 1.2 PayPal Donation Integration
**Status:** Placeholder buttons only
**Location:** `src/app/donate/page.tsx`

The donate page has styled PayPal/card buttons but no actual integration. Options:

**Option A: PayPal Donate Button (Simplest)**
1. Go to [PayPal Donate Button](https://www.paypal.com/donate/buttons)
2. Create a hosted button
3. Replace the placeholder with the embed code

**Option B: PayPal JS SDK (More control)**
```bash
npm install @paypal/react-paypal-js
```
- Requires PayPal Business account
- Set `NEXT_PUBLIC_PAYPAL_CLIENT_ID` in environment

### 1.3 Social Media Links
**Status:** Placeholder URLs
**Location:** `src/app/contact/page.tsx` (lines 6-34)

Update these placeholder URLs:
- Facebook: `https://facebook.com` → actual page URL
- Twitter: `https://twitter.com` → actual profile URL
- YouTube: `https://youtube.com` → actual channel URL

Also update in Footer component if present.

### 1.4 Update Gallery Page with New Images
**Status:** Using old image paths
**Location:** `src/app/gallery/page.tsx`

The gallery page references old image paths. Update to use the 236 SEO-optimized images in `/public/images/photo-gallery/`.

---

## 2. HIGH PRIORITY - Complete Before or Shortly After Launch

### 2.1 Environment Variables
Create a `.env.local` file (not committed to git):

```env
# Site URL (used for sitemap, Open Graph, etc.)
NEXT_PUBLIC_SITE_URL=https://childandchurchpartners.org

# PayPal (if using SDK)
NEXT_PUBLIC_PAYPAL_CLIENT_ID=your_client_id

# Contact form (if using API route)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_email
SMTP_PASS=your_password
CONTACT_EMAIL=info@childandchurchpartners.org

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### 2.2 Domain & Hosting Setup

**Recommended: Vercel (Free for hobby projects)**
1. Push repo to GitHub
2. Connect to Vercel at [vercel.com](https://vercel.com)
3. Configure custom domain: `childandchurchpartners.org`
4. Add environment variables in Vercel dashboard
5. Enable automatic HTTPS

**Alternative: Netlify, Cloudflare Pages, or self-hosted**

### 2.3 DNS Configuration
Point your domain to your hosting provider:
- A record or CNAME as per provider instructions
- Verify SSL certificate is active

### 2.4 Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add and verify your property
3. Submit sitemap: `https://childandchurchpartners.org/sitemap.xml`

### 2.5 Analytics Setup
**Option A: Google Analytics 4**
```bash
# Add to layout.tsx or use next/script
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

**Option B: Vercel Analytics (if on Vercel)**
```bash
npm install @vercel/analytics
```

**Option C: Plausible/Fathom (Privacy-focused)**

---

## 3. RECOMMENDED - Improve Quality

### 3.1 Image Optimization
- [ ] Ensure all images have proper alt text
- [ ] Consider converting large JPEGs to WebP format
- [ ] Add `sizes` prop to Next.js Image components for responsive loading

### 3.2 Performance Testing
Run these before launch:
- [ ] [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] [GTmetrix](https://gtmetrix.com/)
- [ ] [WebPageTest](https://webpagetest.org/)

Target scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

### 3.3 Accessibility Audit
- [ ] Test with keyboard navigation
- [ ] Test with screen reader (VoiceOver/NVDA)
- [ ] Check color contrast ratios
- [ ] Verify all interactive elements are focusable

### 3.4 Cross-Browser Testing
Test on:
- [ ] Chrome (desktop & mobile)
- [ ] Safari (desktop & iOS)
- [ ] Firefox
- [ ] Edge

### 3.5 Mobile Responsiveness
- [ ] Test all pages on mobile viewport (375px)
- [ ] Test on tablet viewport (768px)
- [ ] Verify touch targets are at least 44x44px

---

## 4. LEGAL & COMPLIANCE

### 4.1 Review Legal Pages
- [ ] `/privacy` - Privacy Policy (update contact info, verify accuracy)
- [ ] `/terms` - Terms of Service (verify organization details)
- [ ] `/cookies` - Cookie Policy (update if adding analytics)

### 4.2 501(c)(3) Compliance
- [ ] EIN number displayed correctly
- [ ] Tax-deductible donation language is accurate
- [ ] Required nonprofit disclosures present

### 4.3 Cookie Consent (if using analytics)
If adding Google Analytics or similar:
- [ ] Add cookie consent banner
- [ ] Don't load tracking scripts until consent given

---

## 5. SECURITY

### 5.1 Security Headers
Add to `next.config.mjs`:
```javascript
const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
];

// Add to config:
async headers() {
  return [{ source: '/:path*', headers: securityHeaders }];
}
```

### 5.2 Form Security
- [ ] Rate limiting on contact form API
- [ ] CAPTCHA if spam becomes an issue (hCaptcha/reCAPTCHA)
- [ ] Input validation on server side

---

## 6. POST-LAUNCH

### 6.1 Monitoring
- [ ] Set up uptime monitoring (UptimeRobot, Pingdom free tier)
- [ ] Enable error tracking (Sentry free tier)
- [ ] Review analytics weekly

### 6.2 Content Updates
- [ ] Plan regular gallery photo updates
- [ ] Keep FAQ updated based on common questions
- [ ] Update statistics annually

### 6.3 Backup Strategy
- [ ] Code is in Git (covered)
- [ ] If adding a database later, set up backups

---

## Quick Start Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run production build locally
npm start

# Check for lint errors
npm run lint
```

---

## File Structure Overview

```
child-and-church-partners/
├── public/
│   └── images/
│       └── photo-gallery/     # 236 SEO-optimized images
├── src/
│   ├── app/                   # 25 pages (Next.js App Router)
│   ├── components/            # Reusable UI components
│   └── lib/                   # Utilities
├── .env.local                 # Environment variables (create this)
├── .gitignore
├── next.config.mjs
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## Summary: Launch Order

1. **Set up hosting** (Vercel recommended)
2. **Connect domain** and verify SSL
3. **Add PayPal donation** integration
4. **Set up contact form** backend
5. **Update social media** links
6. **Update gallery** with new images
7. **Add analytics**
8. **Submit to Google Search Console**
9. **Test everything** on production URL
10. **Launch!**

---

*Checklist created: January 2026*
