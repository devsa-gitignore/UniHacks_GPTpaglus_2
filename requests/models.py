from django.db import models
from django.conf import settings
# Create your models here.
User=settings.AUTH_USER_MODEL
class ReviewRequest(models.Model):
    profile_version=models.ForeignKey(
        "profiles.ProfileVersion",
        on_delete=models.CASCADE
    )
    reviewer=models.ForeignKey(
        User,
        on_delete=models.CASCADE
    )
    status=models.CharField(
        max_length=20,
        choices=[
            ("pending","Pending"),
            ("accepted","Accepted"),
            ("declined","Declined"),
            ("completed","Completed"),
        ],
        default="pending"
    )
    created_at=models.DateTimeField(auto_now_add=True)