from django.shortcuts import render
from django.utils import timezone
from .models import User

def vinyl_list(request):
    vinyls = User.objects.order_by('zipcode')
    return render(request, 'ap_vkl/vinyl_list.html', {'vinyls': vinyls})