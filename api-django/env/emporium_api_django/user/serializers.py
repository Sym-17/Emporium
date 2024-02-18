from rest_framework import serializers
from .models import User

# This serializer class can be defined as below:
class UserInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('__all__')