from rest_framework import serializers
from .models import Product

# This serializer class can be defined as below:
class ProductInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('__all__')