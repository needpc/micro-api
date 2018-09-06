########################################
#          MICRO-API MAKEFILE          #
#       Author: Aurelien PERRIER       #
########################################

CMD=docker-compose
SOURCEDIR=.
FRONTDIR=./frontend

all: up

build: $(FRONTDIR)
ifneq ("$(wildcard $(FRONTDIR)/dist)","")
	@echo "Frontend dependencies OK"
else
	@cd $(FRONTDIR)
	@npm i
	@ng build
endif
	\$(CMD) build


up: build
	@echo "Run docker-compose ..."
	@$(CMD) up -d


down:
	@echo "Down docker-compose ..."
	@$(CMD) down

clean:
	@echo "Cleaning images ..."
	docker rmi $(docker images -q)
	@echo "Cleaning volumes ..."
	docker volume rm $(docker volume ls -q -f dangling=true)

.PHONY: help up down test