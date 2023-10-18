FROM mcr.microsoft.com/playwright:v1.35.0-jammy

WORKDIR /app-playwright

COPY package*.json ./

RUN npx playwright install

#Install Java for allure report generation
RUN apt-get update && apt-get install -y openjdk-11-jre-headless

COPY . .

RUN npm install

CMD npx playwright test