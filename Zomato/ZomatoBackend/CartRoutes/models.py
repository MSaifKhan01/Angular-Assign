from django.db import models
from django.contrib.auth.models import User
from ZomatoRoutes.models import Menu
# Create your models here.

class Cart(models.Model):
    user=models.OneToOneField(User,on_delete=models.CASCADE)
    product=models.ManyToManyField(Menu)