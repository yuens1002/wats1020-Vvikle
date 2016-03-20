from django.shortcuts import render

def vinyl_list(request):
    return render(request, 'ap_vkl/vinyl_list.html', {})
