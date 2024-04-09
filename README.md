# DockerWithDjango
* My first docker image with Django
* 2023.07.27
## Step for Django

1. Create a virtual environment
```python
virtualenv -p /usr/bin/python3 env
source env/bin/activate
# if wanna leave the env type following command:
deactivate
```

2. Install Django & run the project
* just pip, I think it's easy to you

3. Write the Dockerfile

```Dockerfile
FROM python:3.9-alpine
WORKDIR /usr/src/app
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN pip install --upgrade pip
COPY ./requirements.txt /usr/src/app
RUN pip install -r requirements.txt

COPY . /usr/src/app

EXPOSE 9487

CMD ["python","manage.py","runserver","0.0.0.0:9487"]
```

4. Build the docker image and run it
```
docker build --tag dockerdemo:latest .
docker run --name dockerdemo -d -p 9487:9487 dockerdemo:latest
``` 

## Notice
* I think you do not use python-3.8, because I have some trouble in module "backports.zoneinfo". My solustion is using python3.9 and not install it. (other solution can't fix my problem)

## Step for React
* How to install nodejs on Ubuntu
```shell
curl -fsSL https://deb.nodesource.com/setup_16.x | bash - 
sudo apt-get install -y nodejs
```
* How to run the react server
```shell
cd frontend
npm start
```
* docker pull image
```
docker pull node:16-alpine
```
* Dockerfile
```
FROM node:16-alpine
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install
EXPOSE 3000
CMD ["npm","start"] 
```
* docker image
```
docker build --tag react:latest .
docker run --name react -d -p 3000:3000 react:latest
```
