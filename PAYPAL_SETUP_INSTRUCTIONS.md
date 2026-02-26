# PayPal Setup Instructions for Child & Church Partners

These instructions will walk you through setting up PayPal for your website's donation system.

---

## What You'll Need

- Access to the organization's **PayPal Business account**
- About 15-20 minutes

---

## Part 1: Get Your API Credentials

These are needed for ALL donations (one-time and recurring).

1. Go to https://developer.paypal.com/dashboard/
2. Log in with the organization's PayPal Business account
3. Click **"Apps & Credentials"** in the left sidebar
4. At the top of the page, make sure the toggle is set to **"Live"** (not "Sandbox")
5. Click **"Create App"**
6. Enter the app name: `Child and Church Partners Website`
7. Click **"Create App"**
8. You'll see two values on the next screen:
   - **Client ID** — a long string starting with `A` (example: `AaBbCcDd1234...`)
   - **Secret** — click "Show" to reveal it

**Save these two values — you'll need to send them to us:**

| What to copy | Where it goes                  |
| ------------ | ------------------------------ |
| Client ID    | `NEXT_PUBLIC_PAYPAL_CLIENT_ID` |
| Secret       | `PAYPAL_CLIENT_SECRET`         |

> **Important:** Make sure you're copying the **Live** credentials, not Sandbox.

---

## Part 2: Create Subscription Plans

These are needed for monthly recurring donations. You'll create one Product and three Plans.

### Step 1: Create a Product

1. Go to https://developer.paypal.com/dashboard/
2. Make sure **"Live"** is selected (not Sandbox)
3. In the left sidebar, click **"Subscriptions"**
4. Click **"Create Product"** (or "Products" then "Create Product")
5. Fill in:
   - **Product name:** `Monthly Donation`
   - **Product type:** `Service`
   - **Category:** `Charity` (or `Nonprofit` if available)
   - **Description:** `Monthly recurring donation to Child & Church Partners International`
6. Click **"Create Product"**
7. Note the **Product ID** that's generated (starts with `PROD-`). You'll use this for all three plans.

### Step 2: Create Plan 1 — Sponsor a Child ($20/month)

1. From the Subscriptions page, click **"Create Plan"** (or click into your product, then "Create Plan")
2. Select the Product you just created (`Monthly Donation`)
3. Fill in:
   - **Plan name:** `Sponsor a Child - Feeding Outreach`
   - **Description:** `Monthly $20 donation to sponsor a child through the feeding outreach program`
4. Under **Pricing**:
   - **Billing cycle:** `Monthly`
   - **Price:** `$20.00`
   - **Currency:** `USD`
   - **Total cycles:** `0` (this means it continues until cancelled — no end date)
5. Under **Payment Preferences** (if shown):
   - **Setup fee:** `$0.00`
   - **Auto-billing for failed payments:** `Yes`
   - **Payment failure threshold:** `3`
6. Click **"Create Plan"**
7. Copy the **Plan ID** (starts with `P-`, example: `P-1AB23456CD789012E`)

**Save this as: `PAYPAL_PLAN_ID_CHILD`**

### Step 3: Create Plan 2 — Sponsor a Student ($25/month)

1. Click **"Create Plan"** again
2. Select the same Product (`Monthly Donation`)
3. Fill in:
   - **Plan name:** `Sponsor a Student`
   - **Description:** `Monthly $25 donation to sponsor a student's education`
4. Under **Pricing**:
   - **Billing cycle:** `Monthly`
   - **Price:** `$25.00`
   - **Currency:** `USD`
   - **Total cycles:** `0`
5. Same payment preferences as above
6. Click **"Create Plan"**
7. Copy the **Plan ID**

**Save this as: `PAYPAL_PLAN_ID_STUDENT`**

### Step 4: Create Plan 3 — Sponsor a Church ($30/month)

1. Click **"Create Plan"** again
2. Select the same Product (`Monthly Donation`)
3. Fill in:
   - **Plan name:** `Sponsor a Church`
   - **Description:** `Monthly $30 donation to sponsor a rural church pastor`
4. Under **Pricing**:
   - **Billing cycle:** `Monthly`
   - **Price:** `$30.00`
   - **Currency:** `USD`
   - **Total cycles:** `0`
5. Same payment preferences as above
6. Click **"Create Plan"**
7. Copy the **Plan ID**

**Save this as: `PAYPAL_PLAN_ID_CHURCH`**

---

## Part 3: Summary — What to Send Us

After completing the steps above, send us these values (via a secure method, not regular email):

```
NEXT_PUBLIC_PAYPAL_CLIENT_ID = (your Client ID from Part 1)
PAYPAL_CLIENT_SECRET = (your Secret from Part 1)
PAYPAL_PLAN_ID_CHILD = P-xxxxxxxxxxxxx (from Step 2)
PAYPAL_PLAN_ID_STUDENT = P-xxxxxxxxxxxxx (from Step 3)
PAYPAL_PLAN_ID_CHURCH = P-xxxxxxxxxxxxx (from Step 4)
```

We will add these to the website's hosting environment. Once added, both one-time and monthly donations will be fully functional.

---

## Optional: Webhook Setup (Can Be Done Later)

Webhooks allow the website to receive real-time notifications when donations are made. This is not required for launch but is recommended for tracking.

1. In the PayPal Developer Dashboard, go to **"Webhooks"** (under your app)
2. Click **"Add Webhook"**
3. Enter the URL: `https://childandchurchpartners.org/api/paypal/webhook`
4. Select these events:
   - `PAYMENT.CAPTURE.COMPLETED`
   - `BILLING.SUBSCRIPTION.CREATED`
   - `BILLING.SUBSCRIPTION.CANCELLED`
   - `BILLING.SUBSCRIPTION.SUSPENDED`
   - `BILLING.SUBSCRIPTION.PAYMENT.FAILED`
5. Click **"Save"**
6. Copy the **Webhook ID** and send it to us as `PAYPAL_WEBHOOK_ID`

---

## Troubleshooting

- **"Live" vs "Sandbox":** Always make sure the toggle at the top says **Live**. Sandbox is for testing only and won't process real payments.
- **Can't find Subscriptions:** Make sure you're at https://developer.paypal.com/dashboard/ (not the regular paypal.com). You need a PayPal Business account for subscriptions.
- **Product type options look different:** PayPal occasionally updates their dashboard UI. Look for the closest match to the descriptions above.

---

_Document prepared February 2026_
