from django.urls import path

from user import views

urlpatterns = [
    path("user/", views.HelloWorldView.as_view(), name="user"),
    path("user/signup", views.UserSignUpView.as_view(), name="sign_up"),
    path("user/login", views.UserLogInView.as_view(), name="log_in"),
    path(
        "user/refresh-token",
        views.RefreshAccessToken.as_view(),
        name="refresh_access_token",
    ),
]
