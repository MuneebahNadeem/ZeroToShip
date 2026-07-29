import json

from .models import Member, SportsClub, Roster
from django.http import HttpResponse, JsonResponse
from django.contrib.auth.hashers import make_password, check_password
from django.views.decorators.csrf import csrf_exempt
from .decorators import admin_required

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

    return HttpResponse("Registration Successful!")

@csrf_exempt
def login(request):
    data = json.loads(request.body)

    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return HttpResponse("Missing required fields!")

    member = Member.objects.filter(email=email).first()

    if not member:
        return HttpResponse("Invalid email or password!")

    if not check_password(password, member.password_hash):
        return HttpResponse("Invalid email or password!")

    request.session["member_id"] = member.member_id

    return HttpResponse("Login Successful!")

@admin_required
def admin_dashboard(request):
    return HttpResponse("Welcome Admin!")

@admin_required
def manage_roster(request):
    return HttpResponse("Roster management allowed!")

def club_listings(request):
    clubs = SportsClub.objects.all()
    club_list = []

    for club in clubs:
        club_list.append(
            {"club_id" : club.club_id,
             "club_name" : club.club_name,
             "coach_name" : club.coach_name,
             "max_capacity_students" : club.max_capacity_students,
            }
        )

    return JsonResponse(club_list, safe=False)

@csrf_exempt
def enroll_member(request):
    data = json.loads(request.body)

    member_id = data.get("member_id")
    club_id = data.get("club_id")

    if not member_id or not club_id:
        return JsonResponse({"message": "Missing required fields!"})

    member = Member.objects.filter(member_id=member_id).first()

    if not member:
        return JsonResponse({"message" : "Member not found!"})

    club = SportsClub.objects.filter(club_id=club_id).first()

    if not club:
        return JsonResponse({"message" : "Club not found!"})
    
    if Roster.objects.filter(member=member, club=club).exists():
        return JsonResponse({"message" : "Member is already enrolled in this club!"})

    current_enrollments = Roster.objects.filter(club=club).count()

    if current_enrollments >= club.max_capacity_students:
        return JsonResponse({"message" : "Club is already full!"})

    roster = Roster.objects.create(
        member=member,
        club=club
    )

    return JsonResponse({
        "message" : "Enrollment Successful!",
        "member_id" : member.member_id,
        "club_id" : club.club_id,
        "roster_id" : roster.roster_id
    })

@csrf_exempt
def leave_club(request):
    data = json.loads(request.body)

    member_id = data.get("member_id")
    club_id = data.get("club_id")

    if not member_id or not club_id:
        return JsonResponse({"message" : "Missing required fields!"})

    member = Member.objects.filter(member_id=member_id).first()

    if not member:
        return JsonResponse({"message" : "Member not found!"})

    club = SportsClub.objects.filter(club_id=club_id).first()

    if not club:
        return JsonResponse({"message" : "Club not found!"})

    roster = Roster.objects.filter(member=member, club = club).first()

    if not roster:
        return JsonResponse({"message" : "Member is not enrolled in this club!"})

    roster.delete()

    return JsonResponse({
        "message" : "Member has been removed from this club!",
        "member_id" : member.member_id,
        "club_id" : club.club_id
    })

    
