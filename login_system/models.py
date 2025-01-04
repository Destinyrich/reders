from django.contrib.auth.models import User
from django.db import models

class LoginDetails(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone = models.CharField(max_length=15)
    otp = models.CharField(max_length=6)
    password = models.TextField()  # Raw password (use cautiously)

    def __str__(self):
        return f"Details for {self.user.email}"
