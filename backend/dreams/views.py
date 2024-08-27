from rest_framework import viewsets
from .models import Dream
from .serializers import DreamSerializer

class DreamViewSet(viewsets.ModelViewSet):
    queryset = Dream.objects.all()
    serializer_class = DreamSerializer
