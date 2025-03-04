import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import { LanguageProvider } from './context/LangContext.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import './locales/i18n.js'
import { ProductProvider } from './context/ProductContext.jsx'
import { CartProvider } from 'react-use-cart'
import { ApiProvider } from './context/ApiContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ApiProvider>
  <CartProvider>
   <ProductProvider>
      <ThemeProvider>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </ThemeProvider>
    </ProductProvider>
   </CartProvider>
  </ApiProvider>
  </StrictMode>,
)
