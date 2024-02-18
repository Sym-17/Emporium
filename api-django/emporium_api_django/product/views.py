from django.shortcuts import render, HttpResponse
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .serializers import ProductInfoSerializer
from .models import Product
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.pagination import PageNumberPagination

# Create your views here.

@api_view(['POST'])
def post_product_info(request) -> Response:
    serializer = ProductInfoSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)
    else:
        return Response({"status": "error", "data": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def get_all_product_info(request) -> Response:
    paginator = PageNumberPagination()
    paginator.page_size = 25
    result = Product.objects.all()
    result_page = paginator.paginate_queryset(result, request)
    serializers = ProductInfoSerializer(result_page, many=True)
    return paginator.get_paginated_response(serializers.data)