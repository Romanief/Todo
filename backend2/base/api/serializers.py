from rest_framework.serializers import ModelSerializer
from base.models import Task, DailyTask

class TaskSerializer(ModelSerializer):
  class Meta: 
    model = Task
    fields = '__all__'

class DailyTaskSerializer(ModelSerializer):
  class Meta: 
    model = DailyTask
    fields = '__all__'