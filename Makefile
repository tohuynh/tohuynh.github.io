DEV_COMPOSE_FILE=docker-compose-dev.yml
RUNTIME_COMPOSE_FILE=docker-compose-runtime.yml

.PHONY: compose-up-build-dev
compose-up-build-dev:
	docker compose -f $(DEV_COMPOSE_FILE) up --build

.PHONY: compose-down-dev
compose-down-dev:
	docker compose -f $(DEV_COMPOSE_FILE) down

.PHONY: compose-up-build-runtime
compose-up-build-runtime:
	docker compose -f $(RUNTIME_COMPOSE_FILE) up --build

.PHONY: compose-down-runtime
compose-down-runtime:
	docker compose -f $(RUNTIME_COMPOSE_FILE) down
