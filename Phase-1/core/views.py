import json

from .models import Member
from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.hashers import make_password
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
# Create your views here.
def register(request):
    data = json.loads(request.body)

    name = data.get("name")
    email = data.get("email")
    password = data.get("password")
    membership_type = data.get("membership_type")

    if not name or not email or not password or not membership_type: 
        return HttpResponse("Missing required fields!")

    if Member.objects.filter(email=email).exists():
        return HttpResponse("Email already exists!")

    password_hash = make_password(password)

    member = Member.objects.create(
        name=name,
        email=email,
        password_hash=password_hash,
        membership_type=membership_type
    )

    return HttpResponse("Registration Succesful!")

def login(request):
    return HttpResponse("Login Endpoint")
