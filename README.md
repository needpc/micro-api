# micro-api

## Require

* Docker,
* RamlHTML,
* Java (UML Database).


## Apps (Dev)

### Docker

All micro-services are build with Docker.
You can build and run with this command : `docker-compose -f dev-docker-compose.yml up --build`

This action open different ports :   

| App | Port |
| ----|:----:|
Nginx (Gateway) | 80 |
Redis | 6379 |
PostgreSQL | 5432 |
Frontend (unit) | 19000 |
micro 404 (unit) | 20000 |
micro GPU (unit) | 20001 |
micro CPU (unit) | 20002 |
micro Brand (unit) | 20003 |
micro Ask (unit) | 20004 |
micro Activity (unit) | 20005 |
micro Computers (unit) | 20006 |
micro Computers-ID (unit) | 20007 |


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


## Apps (Prod)

### Kubernetes

Work in progress ...