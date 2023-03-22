from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from .serializers import TaskSerializer
from base.models import Task


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

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getNotes(request):
  user = request.user
  tasks = user.task_set.all()
  # tasks = Task.objects.all()
  serializer = TaskSerializer(tasks, many=True)
  return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getDailyNotes(request):
  user = request.user
  tasks = user.dailytask_set.all()
  # tasks = Task.objects.all()
  serializer = TaskSerializer(tasks, many=True)
  return Response(serializer.data)