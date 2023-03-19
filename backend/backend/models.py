from django.db import models 
from django.contrib.auth.models import User

class Task(models.Model):
  name = models.CharField(max_length=200)
  description = models.CharField(max_length=200)
  deadline = models.DateField()
  isCompleted = models.BooleanField(default=False)
  author = models.ForeignKey(User, on_delete=models.CASCADE)

  def __str__(self):
    return self.name

class DailyTask(models.Model):
  name = models.CharField(max_length=200)
  isCompleted = models.BooleanField(default=False)
  author = models.ForeignKey(User, on_delete=models.CASCADE)

  def __str__(self):
    return self.name