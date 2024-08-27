from django.db import models
from django.contrib.auth.models import User

class Dream(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    content = models.TextField()
    tags = models.CharField(max_length=255)  # Comma-separated tags
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

