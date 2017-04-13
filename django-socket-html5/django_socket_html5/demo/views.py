from django.shortcuts import render
from .models import Message
from django.template import loader
from django.http import HttpResponse
# Create your views here.
def index(request):
    count_messages = Message.objects.count()
    
    template = loader.get_template('index.html')
    context = {
        'count_messages': count_messages,
    }
    return HttpResponse(template.render(context, request))
