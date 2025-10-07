from django.urls import path
from .views import dashboard, contact_view


urlpatterns = [
    path('', dashboard, name='dashboard'),
    path('contact/', contact_view, name='contact'),

]   