# micro-api [![CodeFactor](https://www.codefactor.io/repository/github/needpc/micro-api/badge)](https://www.codefactor.io/repository/github/needpc/micro-api)

Fetch all submodules : `git submodule update --init`


## Require

* Docker,
* NodeJS,
* Angular,
* Golang.

## Optional

* Java (UML Database),
* RamlHTML.


## Apps (Dev)

### Docker

All micro-services are build with Docker.
You can build and run with this command : `make`

This action open different ports :   

| App | Port | Status
| ----| ----|:----:|
Nginx (Endpoint) | 80 | local |
Redis (Caching) | 6379 | local |
PostgreSQL (Database) | 5432 | local |
Frontend (unit) | 19000 | [![Docker Repository on Quay](https://quay.io/repository/needpc/needpc-frontend/status "Docker Repository on Quay")](https://quay.io/repository/needpc/needpc-frontend) |
micro 404 (unit) | 20000 | [![Docker Repository on Quay](https://quay.io/repository/needpc/needpc-api-notfound/status "Docker Repository on Quay")](https://quay.io/repository/needpc/needpc-api-notfound) |
micro GPUs (unit) | 20001 | [![Docker Repository on Quay](https://quay.io/repository/needpc/needpc-api-gpus/status "Docker Repository on Quay")](https://quay.io/repository/needpc/needpc-api-gpus) |
micro CPUs (unit) | 20002 | [![Docker Repository on Quay](https://quay.io/repository/needpc/needpc-api-cpus/status "Docker Repository on Quay")](https://quay.io/repository/needpc/needpc-api-cpus) |
micro Brands (unit) | 20003 | [![Docker Repository on Quay](https://quay.io/repository/needpc/needpc-api-brands/status "Docker Repository on Quay")](https://quay.io/repository/needpc/needpc-api-brands) |
micro Ask (unit) | 20004 | [![Docker Repository on Quay](https://quay.io/repository/needpc/needpc-api-ask/status "Docker Repository on Quay")](https://quay.io/repository/needpc/needpc-api-ask) |
micro Activities (unit) | 20005 | [![Docker Repository on Quay](https://quay.io/repository/needpc/needpc-api-activities/status "Docker Repository on Quay")](https://quay.io/repository/needpc/needpc-api-activities) |
micro Computers (unit) | 20006 | [![Docker Repository on Quay](https://quay.io/repository/needpc/needpc-api-computers/status "Docker Repository on Quay")](https://quay.io/repository/needpc/needpc-api-computers) |


### Database

#### Schema

Look [that](https://github.com/needpc/micro-api/tree/docs/readme/docs/database) :)


#### Start 

You can import the [schema](https://github.com/needpc/micro-api/blob/master/config/postgresql/dump-needpc.sql) in the container :   
`psql -h 127.0.0.1 -U <user> -d <database> -f <dump file>`

Default values :
* Username : `node`,
* Password : `nodejs`.

Easy ? :)