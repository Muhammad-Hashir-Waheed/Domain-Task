# Domain Task

**Onboarding New Companies:**
To onboard a new company (e.g., amazon.ordermade.com):

**Update Data Source**: Add Amazon’s order data to sampleOrders with amazon as the key.
**Add Logo:** Store the Amazon logo in assets or use a live link, then update the LOGO_MAP.
**Subdomain Handling:** The app extracts the subdomain dynamically (window.location.hostname.split(".")[0]) to display relevant data.


- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
