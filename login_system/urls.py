from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home_screen'),
    path('email/', views.email_screen, name='email_screen'),
    path('password/', views.password_screen, name='password_screen'),
    path('phone/', views.phone_screen, name='phone_screen'),
    path('otp/', views.otp_screen, name='otp_screen'),
    path('main/', views.main_screen, name='main_screen'),
]
