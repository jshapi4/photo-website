# testimonials/models.py
from django.db import models

class Testimonial(models.Model):
    name = models.CharField(max_length=100)
    position = models.CharField(max_length=100, blank=True)
    quote = models.TextField()
    image = models.ImageField(upload_to='testimonials/', blank=True, null=True)
    display_order = models.IntegerField(default=0)
    
    def __str__(self):
        return f"Testimonial by {self.name}"
