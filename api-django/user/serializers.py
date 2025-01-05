from django.contrib.auth import authenticate
from django.contrib.auth.hashers import check_password
from django.db.models import Q
from rest_framework import serializers

from user.models import User


class UserSignUpSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"


class UserLogInSerializer(serializers.ModelSerializer):
    username_or_email = serializers.CharField(required=True)
    password = serializers.CharField(required=True)

    def validate_user(self, data):
        username_or_email = data.get("username_or_email")
        password = data.get("password")

        if username_or_email and password:
            user = User.objects.filter(
                Q(email=username_or_email) | Q(username=username_or_email)
            ).first()
            if user:
                if check_password(password, user.password):
                    return user
                else:
                    raise serializers.ValidationError({"message": "Invalid Password!"})
            else:
                raise serializers.ValidationError(
                    {"message": "Invalid Username or Email!"}
                )
        else:
            raise serializers.ValidationError({"message": "Both fields are required!"})

    class Meta:
        model = User
        fields = ["username_or_email", "password"]
