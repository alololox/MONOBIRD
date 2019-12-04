# Local Gateway

The local gateway is an [HAProxy 2.1](http://cbonte.github.io/haproxy-dconv/) app running in a Docker container. It listens on port `80` and currently proxies Landing Pages and CDP.

## Setup

- Point `local.arcteryx.com` to `127.0.0.1` by adding an entry to `/etc/hosts`
- `cp .env.default .env` Within this file entries for the origin "backends". By default these are pointed to our local builds
- Make sure no other services are binding to port `80` such as your built in apache or MAMP, etc. 

## Make it run

- Go to the `landing-pages` app and run `npm install && npm run gateway`
- Go to the `category-display-page` app and run `npm install && npm run gateway`
- In this folder run `docker-compose  -f docker-compose.yml up`
- Go to [local.arcteryx.com](http://local.arcteryx.com)
- To stop you can `ctrl-C`

## Other Backends

You can modify the `.env` file to point the gateway at different backends. For example:
```
LANDING_PAGES_ORIGIN=landing-pages.us-west-2.elasticbeanstalk.com
CDP_PAGES_ORIGIN=category-page-development.us-west-2.elasticbeanstalk.com
```

## TODO

- Make the market configurable
