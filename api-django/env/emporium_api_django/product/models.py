from django.db import models

# Create your models here.
class Product(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=250, null=False)
    category = models.CharField(max_length=250, null=False)
    subcategory = models.CharField(max_length=250, null=False)
    price = models.IntegerField(null=False)
    description = models.CharField(max_length=500, null=False)

    class Meta:
        db_table = "product_info"