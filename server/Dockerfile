FROM node:alpine

WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .

ENV MONGO_URL=mongodb+srv://AdityaGusain:AdityaGusain@zomato-master.3flxm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
ENV GOOGLE_CLIENT_ID=340910053462-dndhpbkvukd5jg5rsglnu9d7i1son355.apps.googleusercontent.com
ENV GOOGLE_CLIENT_SECRET=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
ENV AWS_S3_ACCESS_KEY=AKIAS2KUM2FU4TJUJF7N
ENV AWS_S3_SECRET_KEY=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
ENV NODE_ENV=production
ENV PORT=4000

RUN npm run build

CMD ["npm", "run", "start"]