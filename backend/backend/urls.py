from django.contrib import admin
from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

from backend import views


urlpatterns = [
    path('', views.getRoutes),
    path('admin/', admin.site.urls),
    path('tasks/', views.task_list),
    path('tasks/<int:id>', views.task_detail),
    path('dailytasks/', views.daily_task_list),
    path('dailytasks/<int:id>', views.daily_task_detail),
    path('register', views.register),
    path('login', views.login_view),   
    path('logout', views.logout_view),  
    path('getUser', views.get_user),
]

urlpatterns = format_suffix_patterns(urlpatterns)