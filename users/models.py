from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class User(AbstractUser):
    phone = models.CharField(max_length=12,null=True, blank=True)
    age = models.IntegerField(null=True, blank=True)
    gender = models.CharField(
        max_length = 10,
        null=True, blank=True,
        choices= [
            ("male", "Male"),
            ("female","Female"),
            ("other","Other"),
        ])
    ROLE_CHOICES = [
    ("reviewee", "Reviewee"),
    ("reviewer", "Reviewer"),
    ]
    role = models.CharField(max_length=20, choices=ROLE_CHOICES,null=True, blank=True)

class ReviewerProfile(models.Model):
    user=models.OneToOneField(
        User,
        on_delete=models.CASCADE
    )
    total_reviews=models.IntegerField(default=0)
    credibility_score=models.FloatField(default=0)
    earnings=models.FloatField(default=0)
    def __str__(self):
        return self.user.username