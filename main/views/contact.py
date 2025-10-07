from django.shortcuts import render,redirect
from ..models import contact

def contact_view(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        message = request.POST.get('message')
        
        contact.objects.create(
            name=name,
            email=email,
            phone=phone,
            message=message
        )
        return redirect('dashboard')
    
    return render(request, 'contact.html')