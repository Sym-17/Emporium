from django.db import models
from django.core.validators import RegexValidator


class User(models.Model):
    ROLE_CHOICES = [
        ("admin", "Admin"),
        ("normal", "Normal User"),
        ("moderator", "Moderator"),
        ("guest", "Guest"),
    ]

    role = models.CharField(
        max_length=20,
        choices=ROLE_CHOICES,
        default="normal",
    )
    firstname = models.CharField(max_length=255)
    lastname = models.CharField(max_length=255)
    address = models.CharField(max_length=500)
    phone = models.CharField(
        max_length=20,
        validators=[
            RegexValidator(
                regex=r"^\+?\d{9,15}$",
                message="Phone number must be entered in the format: '+999999999'. Up to 15 digits allowed.",
            )
        ],
        unique=True,
    )
    email = models.CharField(
        max_length=255,
        validators=[
            RegexValidator(
                regex=r"^[\w\.\+\-]+@[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,}$",
                message="Valid email address must be entered.",
            )
        ],
        unique=True,
    )
    username = models.CharField(max_length=50, unique=True)
    password = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.username}"

    class Meta:
        db_table = "emporium_user"  # Avoid potential conflict with auth_user
        verbose_name = "User"
        verbose_name_plural = "Users"
