from django.db import models

# Create your models here.

class EmailSubscription(models.Model):
    email = models.EmailField(unique=True)  # Ensures emails are unique
    subscribed_at = models.DateTimeField(auto_now_add=True)  # Tracks when the email was added

    def __str__(self):
        return self.email

