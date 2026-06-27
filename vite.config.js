 import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        login: 'login.html',
        analises: 'analises.html',
        chatbot: 'chatbot.html',
        contato: 'contato.html',
        sobre: 'sobre.html',
        loginn: 'loginn.html',
        passForget: 'passForget.html'
        perfil: 'perfil.html'
      }
    }
  }
})