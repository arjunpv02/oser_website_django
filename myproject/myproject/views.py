from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from subscriptions .models import EmailSubscription


def subscribe(request):
    if request.method == "POST":
        email = request.POST.get("email")
        if email:
            if EmailSubscription.objects.filter(email=email).exists():
                return JsonResponse({"success": False, "message": "You are already subscribed!"})
            else:
                EmailSubscription.objects.create(email=email)
                return JsonResponse({"success": True, "message": "You have been successfully subscribed!"})
        return JsonResponse({"success": False, "message": "Invalid Email"})
    return JsonResponse({"success": False, "message": "Invalid request method"})






"""def subscribe(request):
    if request.method == "POST":
        email = request.POST.get("email")
        if email:
            if EmailSubscription.objects.filter(email=email).exists():
                success = "You are already subscribed!"
                return HttpResponse(success)
            else:
                EmailSubscription.objects.create(email=email)
                success = "You have been successfully subscribed!"
                return HttpResponse(success)
        success = "Invalid Email"
        return HttpResponse(success)
    success = "Invalid Email"
    return HttpResponse(success)"""

def welcome(request):
    return render(request, 'index.html')
