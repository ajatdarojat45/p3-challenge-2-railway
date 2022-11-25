
FROM node:16.13

WORKDIR /usr/local/user

ENV PORT=4002

COPY package.json package-lock.json /usr/local/user/

RUN npm install && npm cache clean --force

COPY ./ ./

CMD [ "npm", "run", "start" ]
