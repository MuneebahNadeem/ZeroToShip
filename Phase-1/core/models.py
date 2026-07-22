from django.db import models

# Create your models here.
class Member(models.Model):
    MEMBERSHIP_CHOICES = [
        ('Student', 'Student'),
        ('Admin', 'Admin'),
    ]

    member_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length = 100)
    email = models.EmailField(unique = True)
    password_hash = models.CharField(max_length=255)
    membership_type = models.CharField(
        max_length = 20,
        choices = MEMBERSHIP_CHOICES,
    )

    def __str__(self):
        return self.name

class SportsClub(models.Model):
    club_id = models.AutoField(primary_key=True)
    club_name = models.CharField(max_length=100)
    coach_name = models.CharField(max_length=100)
    max_capacity_students = models.IntegerField()

    def __str__(self):
        return self.club_name

class Roster(models.Model):
    roster_id = models.AutoField(primary_key=True)

    member = models.ForeignKey(
        Member,
        on_delete = models.CASCADE,
    )

    club = models.ForeignKey(
        SportsClub,
        on_delete = models.CASCADE,
    )

    join_date = models.DateField()

    def __str__(self):
        return f"{self.member.name} - {self.club.club_name}"
