from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import ReviewerProfile
from .serializers import ReviewerProfileSerializer

from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
# Create your views here.
class ReviewerListView(APIView):
    def get(self,request):
        reviewers=ReviewerProfile.objects.filter(
            is_available=True
        )
        gender = request.query_params.get('gender')
        min_age = request.query_params.get('min_age')
        max_age = request.query_params.get('max_age')
        min_score = request.query_params.get('min_score')
        max_score = request.query_params.get('max_score')
        if gender:
            reviewers = reviewers.filter(user__gender__iexact=gender)
        if min_age:
            reviewers = reviewers.filter(user__age__gte=min_age)
        if max_age:
            reviewers = reviewers.filter(user__age__lte=max_age)
        if min_score:
            reviewers = reviewers.filter(credibility_score__gte=min_score)
        if max_score:
            reviewers = reviewers.filter(credibility_score__lte=max_score)
        reviewers = reviewers.order_by('-credibility_score')
        serializer = ReviewerProfileSerializer(reviewers, many=True)
        return Response(serializer.data)
    
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        
        data['role'] = self.user.role 
        data['username'] = self.user.username
        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
