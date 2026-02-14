from django.urls import path
from users.views import MyTokenObtainPairView

urlpatterns = [
    path('api/login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    
]