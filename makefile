
.PHONY: all build run clean deepclean test tests debug

all: test clean run

include .env
export

APP_NAME?=app
CONTAINERS=$$(sudo docker ps --filter "name=${APP_NAME}" -q)

###### BUILD and RUN #######
build:
	docker-compose build --no-cache

run: 
	docker-compose up --build -d

###### CLEANING #######

clean:
	sudo docker ps -a
	-docker-compose down --remove-orphans
	
deepclean: clean
	-sudo docker kill $(CONTAINERS)
	-sudo docker container prune -f
	-sudo docker image prune -f
	-sudo docker network prune -f
	-sudo docker system prune -a -f --volumes

###### TESTING #######

debug: clean run
	docker logs -f --since=5m -t $(APP_NAME) &

fulltests: deepclean build
	docker exec -it $(APP_NAME) python -m pytest --cov=app -rx -l -x --log-level=DEBUG --no-cov-on-fail

tests:
	docker-compose up --build -d
	docker exec -it $(APP_NAME) python -m pytest --cov=app -rx -l -x --log-level=DEBUG --no-cov-on-fail

RUNTEST?="test_"
test:
	docker-compose up --build -d
	docker exec -it $(APP_NAME) python -m pytest --log-level=INFO -rx -l -x -k $(RUNTEST)