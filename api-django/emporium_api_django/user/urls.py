from . import views
from django.urls import path

urlpatterns = [
    path('', views.hello, name="hello"),
    path('signup/', views.post_user_info, name="post_user_info"),
]
