FROM cypress/factory

WORKDIR /app

COPY package.json /app/
COPY cypress /app/cypress
COPY cypress.config.js /app/

RUN npm install

COPY . .

CMD [ "npx", "cypress", "run" ]
