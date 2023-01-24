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