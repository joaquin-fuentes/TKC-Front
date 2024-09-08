

// Importa la función defineConfig de Vite para definir la configuración
import { defineConfig } from 'vite'

// Importa el plugin de React para Vite, que proporciona soporte para JSX y otras características de React
import react from '@vitejs/plugin-react'

// Exporta la configuración de Vite usando la función defineConfig
export default defineConfig({
  // Incluye el plugin de React en la configuración de Vite
  plugins: [react()],
})
