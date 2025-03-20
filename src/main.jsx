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
import { WishlistProvider } from 'react-use-wishlist'
import { Provider } from 'react-redux'
import store from './tools/store.js'
import { AuthProvider } from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
 <Provider store={store}>
  <AuthProvider>
  <WishlistProvider>
    <ApiProvider>
      <CartProvider>
        <ProductProvider>
          <ThemeProvider>
              <App />
          </ThemeProvider>
        </ProductProvider>
      </CartProvider>
    </ApiProvider>
  </WishlistProvider>
  </AuthProvider>
 </Provider>
)
