from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Task(models.Model):
  user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
  name = models.TextField()
  description = models.TextField(default="No description")
  deadline = models.DateField(null = True)
  isCompleted = models.BooleanField(default = False)
  
class DailyTask(models.Model):
  user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
  name = models.TextField()
  isCompleted = models.BooleanField(default = False)