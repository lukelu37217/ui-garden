# Build stage
FROM node:20-alpine AS build

WORKDIR /Lu_Luke_ui_garden

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# Production stage
FROM nginx:alpine

WORKDIR /Lu_Luke_ui_garden

COPY --from=build /Lu_Luke_ui_garden/build /usr/share/nginx/html

EXPOSE 8083

CMD ["nginx", "-g", "daemon off;"]
