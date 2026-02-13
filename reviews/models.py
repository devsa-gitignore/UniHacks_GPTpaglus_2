from django.db import models
from django.conf import settings
# Create your models here.
User=settings.AUTH_USER_MODEL
class Review(models.Model):
    review_request=models.OneToOneField(
        "requests.ReviewRequest",
        on_delete=models.CASCADE
    )
    reviewer=models.ForeignKey(
        User,
        on_delete=models.CASCADE
    )
    profile_version = models.ForeignKey(
        "profiles.ProfileVersion",
        on_delete=models.CASCADE
    )
    profile_version = models.ForeignKey(
        "profiles.ProfileVersion",
        on_delete=models.CASCADE
    )
    overall_score=models.FloatField()
    additional_notes=models.TextField(blank=True)
    created_at=models.DateTimeField(auto_now_add=True)

class SectionReview(models.Model):
    review=models.ForeignKey(
        Review,
        on_delete=models.CASCADE,
        related_name="sections"
    )
    section=models.CharField(max_length=20)
    score=models.FloatField()
    liked=models.TextField()
    disliked=models.TextField()
    suggestions=models.TextField()