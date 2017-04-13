from django.contrib import admin
from .models import Message
from websocket import create_connection
import json

@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):
    model=Message
    list_display = ('message','status', )
    list_filter = ('message',)
    def save_model(self, request, obj, form, change):

        obj.save()
        ws = create_connection("ws://192.168.1.2:3030")
        ws.send(json.dumps({'status':'ok','id':obj.id, 'message':obj.message, 'count': Message.objects.count()}))
        ws.close()
