from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from dreams.views import DreamViewSet

router = DefaultRouter()
router.register(r'dreams', DreamViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]

