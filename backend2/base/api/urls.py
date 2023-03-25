from django.urls import path
from . import views

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
  path('', views.getRoutes),
  path('tasks/', views.getNotes),
  path('dailytasks/', views.getDailyNotes),
  path('tasks/<int:id>', views.task_detail),
  path('dailytasks/<int:id>', views.daily_task_detail),

  path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
  path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]