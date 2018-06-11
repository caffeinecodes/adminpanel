From node

WORKDIR /app

#COPY package.json /app/package.json
COPY . /app
RUN npm install

EXPOSE 3000

#HEALTHCHECK CMD curl --fail http://localhost:3000 || exit 1

CMD ["npm","start"]