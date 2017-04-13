from __future__ import unicode_literals

from django.db import models

class Message(models.Model):
    message = models.CharField(max_length=100)
    status = models.BooleanField(default=True)
