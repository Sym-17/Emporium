from . import views
from django.urls import path

urlpatterns = [
    path('post/', views.post_product_info, name="post_product_info"),
    path('get-all/', views.get_all_product_info, name="get_all_product_info"),
]
