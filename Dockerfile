FROM node

WORKDIR /usr/src/app

COPY . .

EXPOSE 10010

CMD ["sh", "runme.sh"]