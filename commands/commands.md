- `docker run -v $(pwd):/app  -p 3000:3000 -d --name node-image node-app`
- `docker build -t node-app .`
- `docker rm node-image -f`
- `docker exec -it node-image bash`
- `docker run -p 3000:3000 -d --name   node-image node-app`
- `docker image rm ecc5ad4229ea`
- `docker ps` - Shows running containers
- `docker ps -a` - Shows all containers that are started or stopped.
- `docker log image_name` - Shows all the log messages.
- `docker run -v $(pwd):/app -v /app/node_modules -p 3000:3000 -d --name node-image node-app` - In this -v , A new volume is created which says don't touch the node_modules folder in this directory.
- `docker run -v $(pwd):/app:ro -v /app/node_modules -p 3000:3000 -d --name node-image node-app` - In this, `/app:ro` defines that this container has read only permission
# how to make use of env 
in dockerfile-
`ENV PORT 3000
EXPOSE $PORT`

- `--env PORT=4000`  or `-e PORT=4000` - use env
- `--env-file ./.env` - this help to access all environment variable present in env file
- `docker volume ls` - shows all the volumes running
- `docker rm node-image -fv` - removes all the volumes as well
- `docker-compose up -d` - this build the docker image using compose file.
- `docker-compose down -v ` - shut down the container and `-v` this flag is used to delete all the volumes.
- `docker-compose up -d --build` - build the container before starting
- `docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d` - run the docker-compose file for the production environment
- `docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d` - run the docker-compose file for the development environment

CONTAINER ID   IMAGE                 COMMAND                  CREATED          STATUS                       PORTS                                       NAMES
ab233f747439   mongo                 "docker-entrypoint.s…"   18 seconds ago   Exited (132) 8 seconds ago                                               docker-app_mongo_1
1f101f8710ec   docker-app_node-app   "docker-entrypoint.s…"   18 seconds ago   Up 8 seconds                 0.0.0.0:3000->3000/tcp, :::3000->3000/tcp   docker-app_node-app_1
e14f1e73d5ba   mysql                 "docker-entrypoint.s…"   9 days ago       Exited (1) 9 days ago                                                    brave_franklin
08b104d68a3b   ubuntu                "bash"                   9 days ago       Exited (0) 9 days ago                                                    pensive_einstein
a4d077e5e5a5   hello-world           "/hello"                 9 days ago       Exited (0) 9 days ago                                                    charming_dubinsky
118f85d60494   ubuntu                "bash"                   9 days ago       Exited (2) 9 days ago                                                    zealous_agnesi
cd61f222fc96   hello-world           "/hello"                 9 days ago       Exited (0) 9 days ago                                                    gracious_babbage