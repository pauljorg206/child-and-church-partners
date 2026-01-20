# Launch Checklist - Child & Church Partners

**Target Domain:** `childandchurchpartners.org`
**Current Hosting:** Vercel
**Domain Registrar:** Wix
**Last Updated:** January 2026

---

## Pre-Launch Checklist

### 1. Environment Variables (Vercel Dashboard)

Go to: Vercel Dashboard → Project → Settings → Environment Variables

| Variable                       | Status | Action                                        |
| ------------------------------ | ------ | --------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`         | ⬜     | Set to `https://childandchurchpartners.org`   |
| `NEXT_PUBLIC_PAYPAL_CLIENT_ID` | ⬜     | Get from PayPal Developer Dashboard           |
| `PAYPAL_CLIENT_SECRET`         | ⬜     | Get from PayPal Developer Dashboard           |
| `NEXT_PUBLIC_WEB3FORMS_KEY`    | ⬜     | Get from https://web3forms.com (free)         |
| `NEXT_PUBLIC_GA_TRACKING_ID`   | ⬜     | Optional - Google Analytics ID (G-XXXXXXXXXX) |

---

### 2. PayPal Setup

#### 2.1 Get API Credentials

- [ ] Go to https://developer.paypal.com/dashboard/
- [ ] Log in with the organization's PayPal Business account
- [ ] Create a new app (or use existing) under "Apps & Credentials"
- [ ] **For testing:** Use Sandbox credentials first
- [ ] **For production:** Switch to Live credentials
- [ ] Copy `Client ID` → `NEXT_PUBLIC_PAYPAL_CLIENT_ID`
- [ ] Copy `Secret` → `PAYPAL_CLIENT_SECRET`

#### 2.2 PayPal Subscriptions (Optional - for recurring donations)

- [ ] In PayPal Dashboard → Products & Plans
- [ ] Create subscription plans:
  - Child Sponsorship: $35/month
  - Church Partnership: $50/month
- [ ] Add plan IDs to Vercel env vars:
  - `PAYPAL_PLAN_ID_CHILD`
  - `PAYPAL_PLAN_ID_CHURCH`

#### 2.3 PayPal Webhook (Optional - for tracking)

- [ ] In PayPal Dashboard → Webhooks
- [ ] Add webhook URL: `https://childandchurchpartners.org/api/paypal/webhook`
- [ ] Select events: `PAYMENT.CAPTURE.COMPLETED`, `BILLING.SUBSCRIPTION.*`
- [ ] Copy Webhook ID → `PAYPAL_WEBHOOK_ID`

---

### 3. Web3Forms Setup (Contact Form)

- [ ] Go to https://web3forms.com
- [ ] Enter email: `info@childandchurchpartners.org`
- [ ] Get access key (sent to email)
- [ ] Add to Vercel: `NEXT_PUBLIC_WEB3FORMS_KEY`

---

### 4. Domain Transfer from Wix

#### Option A: Point DNS to Vercel (Recommended - Keep domain at Wix)

1. **In Vercel Dashboard:**
   - [ ] Go to Project → Settings → Domains
   - [ ] Add `childandchurchpartners.org`
   - [ ] Add `www.childandchurchpartners.org`
   - [ ] Note the DNS records Vercel provides

2. **In Wix DNS Settings:**
   - [ ] Go to Wix → Domains → Manage DNS
   - [ ] Remove existing A records pointing to Wix
   - [ ] Add A record: `@` → `76.76.21.21`
   - [ ] Add CNAME record: `www` → `cname.vercel-dns.com`

3. **Wait & Verify:**
   - [ ] DNS propagation takes 1-48 hours (usually ~1 hour)
   - [ ] Vercel auto-provisions SSL certificate
   - [ ] Check: https://childandchurchpartners.org loads correctly

#### Option B: Transfer Nameservers to Vercel (Full control)

1. **In Vercel:**
   - [ ] Go to Project → Settings → Domains
   - [ ] Add domain and select "Use Vercel Nameservers"
   - [ ] Note the nameservers (e.g., `ns1.vercel-dns.com`, `ns2.vercel-dns.com`)

2. **In Wix:**
   - [ ] Go to Domains → Advanced → Update Nameservers
   - [ ] Replace Wix nameservers with Vercel's
   - [ ] Save changes

---

### 5. Google Search Console

- [ ] Go to https://search.google.com/search-console
- [ ] Add property: `https://childandchurchpartners.org`
- [ ] Verify via DNS TXT record or HTML file
- [ ] Submit sitemap: `https://childandchurchpartners.org/sitemap.xml`

---

### 6. Pre-Launch Testing

#### Functional Tests

- [ ] Contact form submits successfully (check email delivery)
- [ ] PayPal one-time donation completes
- [ ] PayPal recurring donation completes (if enabled)
- [ ] Thank you page displays after donation
- [ ] All navigation links work
- [ ] Mobile menu opens/closes correctly

#### Page Tests

- [ ] Homepage loads correctly
- [ ] All About pages load
- [ ] Donate page shows PayPal buttons
- [ ] Gallery images load
- [ ] Contact page form works

#### Performance Tests

- [ ] Run https://pagespeed.web.dev/ (target: 90+ performance)
- [ ] Check mobile responsiveness

---

## Known Limitations

### Newsletter Form

**Status:** ⚠️ Not connected to backend

The newsletter signup form in the footer shows a success message but doesn't actually subscribe users. Options:

1. **Remove it** - Edit `src/components/layout/Footer.tsx`
2. **Connect to Mailchimp** - Requires API integration
3. **Connect to Buttondown** - Simpler alternative
4. **Leave as-is** - Collects no data (not recommended)

### PayPal Webhook Data

**Status:** ⚠️ Events received but not persisted

Webhook receives PayPal events but only logs to console. No database storage or confirmation emails. This is fine for MVP but should be addressed for:

- Donation receipts
- Subscription management
- Donor records

---

## Post-Launch Checklist

- [ ] Verify SSL certificate is active (green padlock)
- [ ] Test contact form from production URL
- [ ] Test donation flow from production URL
- [ ] Set up uptime monitoring (free: UptimeRobot, Better Stack)
- [ ] Monitor Vercel Analytics for traffic
- [ ] Check Google Search Console for indexing issues

---

## Quick Reference

### URLs

- **Production:** https://childandchurchpartners.org
- **Vercel Preview:** https://child-and-church-partners.vercel.app
- **GitHub:** https://github.com/pauljorg206/child-and-church-partners

### Key Files

- PayPal integration: `src/app/api/paypal/`
- Contact form: `src/app/contact/page.tsx`
- Newsletter form: `src/components/forms/NewsletterForm.tsx`
- Environment example: `.env.local.example`

### Support

- Vercel Docs: https://vercel.com/docs
- PayPal Developer: https://developer.paypal.com
- Web3Forms: https://web3forms.com/docs

---

## Launch Day Commands

```bash
# Verify build passes
npm run build

# Check for any lint errors
npm run lint

# Run tests
npm test
```

After DNS is configured, Vercel automatically deploys from `main` branch.

---

_Created: January 2026_
