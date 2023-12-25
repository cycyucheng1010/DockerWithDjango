from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
import datetime

# Create your views here.

@api_view(['GET'])
def index(request):
    print('userIP:',request.META['REMOTE_ADDR'])
    message = {'msg':'hello django restful api','code':'200','now':datetime.datetime.now()}
    return Response(message)