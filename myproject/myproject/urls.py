
from django.contrib import admin
from django.urls import path,include
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.main_page),  # Include URLs from your app
    path('subscribe', views.subscribe, name= "subscribe"),
    path('contact', views.contact, name= "contact"),
    
]
