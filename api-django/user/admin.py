from django.contrib import admin
from user.models import User


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = [
        "username",
        "fullname",
        "role",
        "email",
        "phone",
    ]
    list_filter = ["role"]

    readonly_fields = ["password"]

    search_help_text = "Enter username, email or phone to search"
    search_fields = ["username", "email", "phone"]

    def fullname(self, obj):
        return obj.firstname + " " + obj.lastname
