from django.contrib import admin
from .models import LoginDetails

class LoginDetailsAdmin(admin.ModelAdmin):
    list_display = ('user', 'phone', 'otp', 'password')

admin.site.register(LoginDetails, LoginDetailsAdmin)
