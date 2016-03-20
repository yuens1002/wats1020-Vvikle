from django.db import models
from django.utils import timezone

class User(models.Model):
  name = models.CharField(max_length=10, blank=True)
  email = models.EmailField(max_length=128, unique=True, primary_key=True)
  zipcode = models.CharField(max_length=5)
  address = models.CharField(max_length=128, blank=True)
  phone = models.CharField(max_length=10, blank=True)
  
  def __str__(self):
        return self.name
  
class Vinyl(models.Model):
  owner = models.ForeignKey(User, on_delete=models.CASCADE) 
  title = models.CharField(max_length=128)
  artist = models.CharField(max_length=128)
  label = models.CharField(max_length=128)
  catalog = models.CharField(max_length=128, primary_key=True)
  
  def __str__(self):
        return self.title