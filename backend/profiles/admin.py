from django.contrib import admin
from .models import Profile,ProfilePhoto,ProfileVersion
# Register your models here.
admin.site.register(Profile)
admin.site.register(ProfilePhoto)
admin.site.register(ProfileVersion)
