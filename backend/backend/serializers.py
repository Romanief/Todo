from rest_framework import serializers
from django.contrib.auth.models import User

from .models import Task, DailyTask

class TaskSerializer (serializers.ModelSerializer):
  class Meta: 
    model = Task
    fields = ['id', 'name', 'description', 'deadline', 'isCompleted', 'author_id']

class DailyTaskSerializer (serializers.ModelSerializer):
  class Meta: 
    model = DailyTask
    fields = ['id', 'name', 'isCompleted', 'author_id']

class UserSerializer (serializers.ModelSerializer):
  class Meta: 
    model = User
    fields = ['id', 'username', 'password']