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
#CMD ['sh',"command.sh"]