from django.contrib import admin
from .models import Task, DailyTask

admin.site.register(Task)
admin.site.register(DailyTask)