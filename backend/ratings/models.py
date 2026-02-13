from django.db import models
from django.conf import settings
User = settings.AUTH_USER_MODEL 
# Create your models here.
class ReviewerRating(models.Model):
    reviewer = models.ForeignKey(User,on_delete=models.CASCADE, related_name="ratings_received")
    profile_owner = models.ForeignKey(
        User,
        on_delete=models.CASCADE
    )
    rating = models.FloatField()
    feedback = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    