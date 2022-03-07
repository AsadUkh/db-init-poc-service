FROM docker.io/mongo
ENV MONGO_INITDB_ROOT_USERNAME adminuser
ENV MONGO_INITDB_ROOT_PASSWORD password123
ENV MONGO_INITDB_DATABASE admin
COPY mysetup.js /docker-entrypoint-initdb.d/
