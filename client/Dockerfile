FROM node:16-alpine3.15

ENV NODE_ENV=development
ENV ROOTPATH=/app
WORKDIR ${ROOTPATH}

RUN apk add --no-cache --virtual .gyp python3 make g++
COPY package*.json ${ROOTPATH}
RUN npm install

EXPOSE 3000
CMD ["npm", "run", "dev" ]
