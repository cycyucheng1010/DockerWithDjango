# DockerWithDjango
* My first docker image with Django
* 2023.07.27
## Step

1. create a virtual environment
```python
virtualenv -p /usr/bin/python3 env
source env/bin/activate
# if wanna leave the env type following command:
deactivate
```

2. install Django & run the project
* just pip, I think it's easy to you

3. write the Dockerfile

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

4. build the docker image and run it
```
docker build --tag dockerdemo:latest .
docker run --name dockerdemo -d -p 8000:8000 dockerdemo:latest
``` 

## notice
* I think you do not use python-3.8, because I have some trouble in module "backports.zoneinfo". My solustion is using python3.9 and not install it. (other solution can't fix my problem)
