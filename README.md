# 🧪 Playwright Test

This project automates a sample test scenario on [**SauceDemo**](https://www.saucedemo.com/) using **Playwright (JavaScript)**.  
It demonstrates a basic E2E test: login → add product to cart → verify → logout.

---

## 📋 **Test Scenario**

**Steps performed by the automation script:**
1. Navigate to the SauceDemo login page.  
2. Log in with valid credentials (`standard_user` / `secret_sauce`).  
3. Add the first product to the cart.  
4. Verify the product name in the cart.  
5. Log out successfully.

---

## ⚙️ **Tech Stack**
- **Playwright** — for browser automation  
- **Node.js** — runtime environment  
- **JavaScript** — scripting language  

---

## 🚀 **Setup Instructions**

### 1. Clone the repository
```bash
git clone https://github.com/<your-username>/bitmaskot.git
cd bitmaskot
```

### 2. Install dependencies
```bash
npm install
```
### 3. Install Playwright browsers
```bash
npx playwright install
```

## ▶️ Run Tests
Run in headless mode:
```bash
npm test
```

Run with browser UI (headed mode):
```bash
npm run test:headed
```

Show the last test report:
```bash
npm run report
```

## 📄 License
This project is licensed under the ISC License.
Feel free to use and modify for your learning or demo purposes.

