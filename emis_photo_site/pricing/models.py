# pricing/models.py
from django.db import models

class PricingPackage(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()
    is_featured = models.BooleanField(default=False)
    
    def __str__(self):
        return self.name

class PricingItem(models.Model):
    package = models.ForeignKey(PricingPackage, on_delete=models.CASCADE, related_name='items')
    description = models.CharField(max_length=200)
    
    def __str__(self):
        return self.description