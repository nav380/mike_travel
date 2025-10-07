from django.shortcuts import render,redirect
from ..models import TravelQuery

def dashboard(request):
    if request.method == 'Post':
        request.method.GET.get('from-date')
        request.method.GET.get('to-date')
        request.method.GET.get('Destination')   
        request.method.GET.get('adults')
        request.method.GET.get('children')
        TravelQuery.objects.create(
            from_date = request.method.GET.get('from-date'),
            to_date = request.method.GET.get('to-date'),
            destination = request.method.GET.get('Destination'),
            adults = request.method.GET.get('adults'),
            children = request.method.GET.get('children'),
        )
        redirect('dashboard')
        
        
    return render(request, 'dashboard.html')