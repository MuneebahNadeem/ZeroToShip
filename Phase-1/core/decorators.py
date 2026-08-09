from django.http import HttpResponse
from .models import Member


def admin_required(view_function):
    def wrapper(request):

        member_id = request.session.get("member_id")

        if not member_id:
            return HttpResponse("Please login first")

        member = Member.objects.filter(member_id=member_id).first()

        if not member:
            return HttpResponse("Member not found")

        if member.membership_type != "Admin":
            return HttpResponse("Access Denied!")

        return view_function(request)

    return wrapper