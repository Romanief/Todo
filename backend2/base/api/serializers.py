from rest_framework.serializers import ModelSerializer
from django.contrib.auth.models import User
from base.models import Task, DailyTask


class TaskSerializer(ModelSerializer):
  class Meta: 
    model = Task
    fields = '__all__'

class DailyTaskSerializer(ModelSerializer):
  class Meta: 
    model = DailyTask
    fields = '__all__'

class UserSerializer(ModelSerializer):
  class Meta: 
    model = User
    fields = '__all__'