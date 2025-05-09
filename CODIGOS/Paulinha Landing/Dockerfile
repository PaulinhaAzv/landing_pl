# Etapa de build
FROM node:18 as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Etapa de produção
FROM node:18 as production

WORKDIR /app

# Instala o serve para servir a aplicação estática
RUN npm install -g serve

COPY --from=build /app/dist ./dist

EXPOSE 3000

CMD ["serve", "dist", "-l", "3000"] 