#!/bin/bash

WEBSITE=needpcfr
HAPROXY_VERSION=1.8

# Config https://haproxy.debian.net
# Ubuntu
apt-get install software-properties-common
add-apt-repository ppa:vbernat/haproxy-${HAPROXY_VERSION}

apt-get update
apt-get install haproxy=${HAPROXY_VERSION}.\*

mkdir /etc/ssl/${WEBSITE}/ && chmod -R 400 $_/ && cd $_
openssl req -x509 -newkey rsa:2048 -keyout ${WEBSITE}.key -out ${WEBSITE}.crt -days 365 -nodes -subj "/C=FR/ST=Martinique/L=Fort-de-France/O=Example Corp /OU=Example/CN=example.com"
cat ${WEBSITE}.crt ${WEBSITE}.key > ${WEBSITE}.pem

cp ${HOME}/micro-api/config/haproxy/haproxy.cfg /etc/haproxy/haproxy.cfg
service haproxy restart