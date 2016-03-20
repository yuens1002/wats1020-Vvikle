from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.vinyl_list, name='vinyl_list'),
]