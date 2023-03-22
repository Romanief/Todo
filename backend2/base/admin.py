from django.contrib import admin

# Register your models here.

from .models import Task, DailyTask

admin.site.register(Task)
admin.site.register(DailyTask)
