from django.http import JsonResponse
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from .models import Task, DailyTask
from .serializers import TaskSerializer, DailyTaskSerializer, UserSerializer

# Returns all possible routes for the API
@api_view(['GET'])
def getRoutes(request, format=None):
  routes= [
    '/tasks',
    '/dailytasks',
    '/tasks/id',
    '/dailytasks/id',
  ]

  return Response(routes)

# Registration/login and refresh tokens
# Register function will handle registration
@api_view(['POST'])
def register(request, format=None):

  # POST requests will allow to create new users
  if request.method == "POST":
    serializer = UserSerializer(data = request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data, status=status.HTTP_201_CREATED)
    else:
      return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Login function will handle logins
@api_view(['POST'])
def login_view(request, format=None):

  if request.user.is_authenticated: 
    return Response(status = status.HTTP_403_FORBIDDEN)

  if request.method == "POST":
    serializer = UserSerializer(data = request.data)
    username = serializer.initial_data['username']
    password = serializer.initial_data['password']
    user = authenticate(username=username, password=password)

    # If user exists login
    if user is not None:
      login(request, user)
      return Response(status=status.HTTP_200_OK)
    
    # Otherwise return error
    else:
      return Response(status=status.HTTP_401_UNAUTHORIZED)

# Logout function will handle logout
@api_view(['GET'])
def logout_view(request):

  if not request.user.is_authenticated:
    return Response(status=status.HTTP_403_FORBIDDEN)
  
  logout(request)
  return Response(status=status.HTTP_200_OK)

# Return the logged user data
@api_view(['GET'])
def get_user(request):

  if request.user.is_authenticated :
    serializer = UserSerializer(request.user)
    return Response(serializer.data, status=status.HTTP_200_OK)


# Return a list of all the tasks or add a new task to the list
@api_view(['GET', 'POST'])
def task_list(request, format=None):

  # Make sure user is logged in 
  if request.user.is_authenticated:
    user = request.user
  else:
    return Response(status=status.HTTP_403_FORBIDDEN)

  if request.method == "GET":
    task = Task.objects.all().filter(author = user)
    serializer = TaskSerializer(task, many=True)
    return Response(serializer.data)
  
  if request.method == "POST":
    serializer = TaskSerializer(data = request.data)
    if serializer.is_valid():
      serializer.save(author=user)
      return Response(serializer.data, status=status.HTTP_201_CREATED)


# Return a list of all the daily tasks or add a new daily task to the list
@api_view(['GET', 'POST'])
def daily_task_list(request, format=None):

  # Make sure user is logged in
  if request.user.is_authenticated:
    user = request.user
  else:
    return Response(status=status.HTTP_403_FORBIDDEN)

  if request.method == "GET":
    dailytask = DailyTask.objects.all()
    serializer = DailyTaskSerializer(dailytask, many=True)
    return Response(serializer.data)
  
  if request.method == "POST":
    serializer = DailyTaskSerializer(data = request.data)
    if serializer.is_valid():
      serializer.save(author = user)
      return Response(serializer.data, status=status.HTTP_201_CREATED)


# Allows the user to get, modify or delete a single task 
@api_view(['GET', 'PUT', 'DELETE'])
def task_detail(request, id, format=None):

  # Make sure user is logged in
  if request.user.is_authenticated:
    user = request.user
  else:
    return Response(status=status.HTTP_403_FORBIDDEN)

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
      serializer.save()
      return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

  elif request.method == 'DELETE':
    task.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)


# Allows the user to get, modify or delete a single daily task 
@api_view(['GET', 'PUT', 'DELETE'])
def daily_task_detail(request, id, format=None):

  # Make sure user is logged in
  if request.user.is_authenticated:
    user = request.user
  else:
    return Response(status=status.HTTP_403_FORBIDDEN)

  try:
    daily_task = DailyTask.objects.get(pk = id)
  except DailyTask.DoesNotExist:
    return Response(status=status.HTTP_404_NOT_FOUND)

  if request.method == 'GET':
    serializer = DailyTaskSerializer(daily_task)
    return Response(serializer.data)

  elif request.method == 'PUT':
    serializer = DailyTaskSerializer(daily_task, data=request.data)
    if serializer.is_valid():
      serializer.save(author=user)
      return Response()
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

  elif request.method == 'DELETE':
    daily_task.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)


