from django.http import JsonResponse
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from .serializers import TaskSerializer, DailyTaskSerializer
from base.models import Task, DailyTask


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token


class MyTokenObtainPairView(TokenObtainPairView):
  serializer_class = MyTokenObtainPairSerializer

@api_view(['GET'])
def getRoutes(request): 
  routes = [
    '/api/token',
    '/api/token/refresh',
  ]

  return Response(routes)

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def getNotes(request):
  user = request.user

  if request.method == 'GET':
    tasks = user.task_set.all()
    serializer = TaskSerializer(tasks, many=True)
    return Response(serializer.data)

  elif request.method == 'POST':
    serializer = TaskSerializer(Task, data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(data=serializer.data, status=status.HTTP_200_OK)
    else:
      return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getDailyNotes(request):
  user = request.user
  tasks = user.dailytask_set.all()
  serializer = TaskSerializer(tasks, many=True)
  return Response(serializer.data)



# Allows the user to get, modify or delete a single task 
@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def task_detail(request, id, format=None):
  user = request.user

  try:
    task = Task.objects.get(pk = id)
  except Task.DoesNotExist:
    return Response(status=status.HTTP_404_NOT_FOUND)

  if request.method == 'GET':
    serializer = TaskSerializer(task)
    return Response(serializer.data)

  elif request.method == 'PUT':
    serializer = TaskSerializer(task, data=request.data)
    if serializer.is_valid():
      print(serializer.validated_data)
      serializer.save()
      return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

  elif request.method == 'DELETE':
    task.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def daily_task_detail(request, id, format=None):

  try:
    task = DailyTask.objects.get(pk = id)
  except Task.DoesNotExist:
    return Response(status=status.HTTP_404_NOT_FOUND)

  if request.method == 'GET':
    serializer = DailyTaskSerializer(task)
    return Response(serializer.data)

  elif request.method == 'PUT':
    serializer = DailyTaskSerializer(task, data=request.data)
    if serializer.is_valid():
      print(serializer.validated_data)
      serializer.save()
      return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

  elif request.method == 'DELETE':
    task.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)