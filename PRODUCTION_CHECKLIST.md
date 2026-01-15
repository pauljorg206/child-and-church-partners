# Production Checklist for Child & Church Partners Website

This checklist covers everything needed to launch the site in production.

**Last Updated:** January 2026

---

## 1. CRITICAL - Must Complete Before Launch

### 1.1 Contact Form Backend

**Status:** ✅ COMPLETE - Using Web3Forms
**Location:** `src/app/contact/page.tsx`

Web3Forms integration is implemented. Need to add environment variable in Vercel:

```env
NEXT_PUBLIC_WEB3FORMS_KEY=your_access_key
```

Get your free access key at: https://web3forms.com

### 1.2 PayPal Donation Integration

**Status:** ✅ COMPLETE - Full integration
**Location:** `src/app/donate/page.tsx`, `src/app/api/paypal/`

PayPal integration includes:

- One-time donations
- Recurring subscriptions
- Order creation and capture
- Webhook handling
- Thank you page

Need to add environment variables in Vercel:

```env
NEXT_PUBLIC_PAYPAL_CLIENT_ID=your_client_id
PAYPAL_CLIENT_SECRET=your_client_secret
```

### 1.3 Social Media Links

**Status:** ✅ COMPLETE - Removed (no accounts exist)

Social media placeholders have been removed from the contact page and footer since the organization doesn't have official social media accounts yet.

### 1.4 Gallery Page

**Status:** ✅ COMPLETE
**Location:** `src/app/gallery/page.tsx`

Updated with 236 SEO-optimized images organized into 5 categories:

- Children (48 images)
- Youth (36 images)
- Churches (36 images)
- Feeding Program (36 images)
- Community (80 images)

Features pagination (24 images at a time) with "Load More" functionality.

---

## 2. HIGH PRIORITY - Complete Before or Shortly After Launch

### 2.1 Environment Variables (Vercel Dashboard)

Add these in your Vercel project settings → Environment Variables:

```env
# Contact Form (required)
NEXT_PUBLIC_WEB3FORMS_KEY=your_access_key

# PayPal (required for donations)
NEXT_PUBLIC_PAYPAL_CLIENT_ID=your_client_id
PAYPAL_CLIENT_SECRET=your_client_secret

# Analytics (optional)
NEXT_PUBLIC_GA_TRACKING_ID=G-XXXXXXXXXX
```

### 2.2 Domain & Hosting Setup

**Status:** ✅ Deployed to Vercel

- [x] Code pushed to GitHub: https://github.com/pauljorg206/child-and-church-partners
- [x] Connected to Vercel
- [ ] Configure custom domain: `childandchurchpartners.org`
- [ ] Verify SSL certificate is active

### 2.3 DNS Configuration

Point your domain to Vercel:

- Add CNAME record pointing to `cname.vercel-dns.com`
- Or A record to `76.76.21.21`
- Verify SSL certificate is active after DNS propagates

### 2.4 Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add and verify your property
3. Submit sitemap: `https://childandchurchpartners.org/sitemap.xml`

### 2.5 Analytics Setup

**Status:** ✅ COMPLETE

- Vercel Analytics installed and configured
- Google Analytics ready (set `NEXT_PUBLIC_GA_TRACKING_ID` to enable)

---

## 3. COMPLETED FEATURES

### 3.1 Error Handling

- [x] Custom 404 page (`not-found.tsx`)
- [x] Error boundary (`error.tsx`)
- [x] Global error handler (`global-error.tsx`)

### 3.2 Legal Pages

- [x] Privacy Policy (`/privacy`)
- [x] Terms of Service (`/terms`)
- [x] Cookie Policy (`/cookies`)

### 3.3 SEO Optimization

- [x] XML Sitemap (`/sitemap.xml`)
- [x] Robots.txt (`/robots.txt`)
- [x] Dynamic Open Graph image
- [x] Structured data (JSON-LD): Organization, Website, FAQ, DonateAction schemas
- [x] metadataBase configured
- [x] Proper meta tags on all pages

### 3.4 PWA Support

- [x] Web app manifest (`/manifest.json`)
- [x] PWA icons (192x192, 512x512)
- [x] Favicon and Apple touch icon

### 3.5 Security Headers

- [x] X-DNS-Prefetch-Control
- [x] X-Frame-Options
- [x] X-Content-Type-Options
- [x] Referrer-Policy
- [x] X-XSS-Protection
- [x] Permissions-Policy

### 3.6 Content Pages

- [x] FAQ page with accordion component
- [x] Where We Work
- [x] About - Inspiration
- [x] About - How Sponsorship Works
- [x] About - Our Approach
- [x] About - What We Believe
- [x] About - Financial Transparency

---

## 4. RECOMMENDED - Improve Quality

### 4.1 Performance Testing

Run these before launch:

- [ ] [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] [GTmetrix](https://gtmetrix.com/)
- [ ] [WebPageTest](https://webpagetest.org/)

Target scores:

- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

### 4.2 Accessibility Audit

- [ ] Test with keyboard navigation
- [ ] Test with screen reader (VoiceOver/NVDA)
- [ ] Check color contrast ratios
- [ ] Verify all interactive elements are focusable

### 4.3 Cross-Browser Testing

Test on:

- [ ] Chrome (desktop & mobile)
- [ ] Safari (desktop & iOS)
- [ ] Firefox
- [ ] Edge

### 4.4 Mobile Responsiveness

- [ ] Test all pages on mobile viewport (375px)
- [ ] Test on tablet viewport (768px)
- [ ] Verify touch targets are at least 44x44px

---

## 5. LEGAL & COMPLIANCE

### 5.1 Review Legal Pages

- [ ] `/privacy` - Privacy Policy (update contact info, verify accuracy)
- [ ] `/terms` - Terms of Service (verify organization details)
- [ ] `/cookies` - Cookie Policy (update if adding analytics)

### 5.2 501(c)(3) Compliance

- [x] EIN number displayed (82-2285185)
- [x] Tax-deductible donation language
- [x] Nonprofit disclosures in structured data

### 5.3 Cookie Consent (if using Google Analytics)

If enabling Google Analytics:

- [ ] Add cookie consent banner
- [ ] Don't load tracking scripts until consent given

---

## 6. POST-LAUNCH

### 6.1 Monitoring

- [ ] Set up uptime monitoring (UptimeRobot, Pingdom free tier)
- [ ] Enable error tracking (Sentry free tier) - optional
- [ ] Review analytics weekly

### 6.2 Content Updates

- [ ] Plan regular gallery photo updates
- [ ] Keep FAQ updated based on common questions
- [ ] Update statistics annually

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

## Build Status

Current build output (33 pages):

```
○  /                          - Homepage
○  /about                     - About Us
○  /about/financial-transparency
○  /about/founders            - Our Founders
○  /about/inspiration         - Our Inspiration
○  /about/our-approach        - Our Approach
○  /about/sponsorship-works   - How Sponsorship Works
○  /about/what-we-believe     - What We Believe
ƒ  /api/paypal/capture-order
ƒ  /api/paypal/create-order
ƒ  /api/paypal/create-subscription
ƒ  /api/paypal/webhook
○  /children                  - Why Children
○  /churches                  - Why Churches
○  /contact                   - Contact Us
○  /cookies                   - Cookie Policy
○  /donate                    - Donate
ƒ  /donate/thank-you          - Thank You
○  /faq                       - FAQ
○  /gallery                   - Photo Gallery
○  /give                      - Make a Difference
○  /give/equip                - Give to Equip
○  /privacy                   - Privacy Policy
○  /robots.txt
○  /sitemap.xml
○  /terms                     - Terms of Service
○  /where-we-work             - Where We Work

○ = Static (prerendered)
ƒ = Dynamic (server-rendered)
```

---

## Summary: Remaining Steps

1. **Add environment variables** in Vercel dashboard:
   - `NEXT_PUBLIC_WEB3FORMS_KEY`
   - `NEXT_PUBLIC_PAYPAL_CLIENT_ID`
   - `PAYPAL_CLIENT_SECRET`
   - `NEXT_PUBLIC_GA_TRACKING_ID` (optional)

2. **Configure custom domain** in Vercel and update DNS

3. **Submit to Google Search Console**

4. **Test everything** on production URL:
   - Contact form submission
   - PayPal donation flow
   - All pages render correctly

5. **Launch!**

---

_Checklist created: January 2026_
