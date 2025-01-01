from django.urls import path

from user import views

urlpatterns = [
    path("user/", views.user, name="user"),
    path("user/signup", views.UserSignUpView.as_view(), name="sign_up"),
]
