from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DreamViewSet

router = DefaultRouter()
router.register(r'dreams', DreamViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

