from django.shortcuts import render
from django.http import JsonResponse
from subscriptions .models import EmailSubscription
import requests
from django.core.validators import EmailValidator
from django.core.exceptions import ValidationError



ACCESS_TOKEN ="d9d6744a-b120-4dbb-86bc-56d01a14991c"
def contact(request):
    if request.method == "POST":
        # Get form data from POST request
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')

        # Prepare the data to send to Web3Forms API
        form_data = {
            'access_key': ACCESS_TOKEN,
            'name': name,
            'email': email,
            'message': message
        }

        # Send data to Web3Forms API
        response = requests.post('https://api.web3forms.com/submit', data=form_data)

        # Check if the response is successful
        if response.status_code == 200:
            # If successful, redirect or send a success message
            return JsonResponse({"success": True, "message": "Your message was successfully sent"})
# You can change this to your success template
        else:
            # If failed, send an error message
            return JsonResponse({"success": False, "message": "Failed to send your message"})

    return JsonResponse({"success": False, "message": "Failed to send your message"})



def subscribe(request):
    if request.method == "POST":
        email = request.POST.get("email")
        if email:
            # Validate email format
            validator = EmailValidator()
            try:
                validator(email)  # Raises ValidationError if invalid
            except ValidationError:
                return JsonResponse({"success": False, "message": "Invalid Email Format"})

            # Check if the email is already subscribed
            if EmailSubscription.objects.filter(email=email).exists():
                return JsonResponse({"success": False, "message": "You are already subscribed!"})
            
            # Create a new subscription
            try:
                EmailSubscription.objects.create(email=email)
                return JsonResponse({"success": True, "message": "You have been successfully subscribed!"})
            except Exception as e:
                return JsonResponse({"success": False, "message": f"Error: {str(e)}"})

        return JsonResponse({"success": False, "message": "Invalid Email"})
    return JsonResponse({"success": False, "message": "Invalid request method"})




def main_page(request):
    return render(request, 'index.html')
