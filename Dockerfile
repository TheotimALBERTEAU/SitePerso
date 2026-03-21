# --- ÉTAPE DE BASE ---
FROM node:lts-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# --- CIBLE : DEVELOPMENT ---
FROM base AS development
EXPOSE 4200
CMD ["npm", "start", "--", "--host", "0.0.0.0", "--poll", "2000"]

# --- CIBLE : PRODUCTION ---
FROM base AS build
RUN npm run build -- --configuration=production

FROM nginx:stable-alpine AS production
COPY --from=build /app/dist/ton-projet/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
