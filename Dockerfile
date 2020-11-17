FROM nginx:alpine

ENV USER=vuestro

# nginx conf
COPY nginx.conf /etc/nginx/

# extract to root
ADD dist /dist

# Create a user for the nginx process and configure file system ownership for
# necessary directories
RUN set -x \
    && adduser $USER -DH \
    && [ `id -u $USER` -eq 1000 ] \
    && [ `id -g $USER` -eq 1000 ] \
    && chown -R "$USER:$USER" /dist

ENTRYPOINT nginx -g "daemon off;"