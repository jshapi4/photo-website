# api/serializers.py
from rest_framework import serializers
from photos.models import Photo, Category
from pages.models import Page
from testimonials.models import Testimonial
from pricing.models import PricingPackage, PricingItem
from faqs.models import FAQ
from contact.models import ContactSubmission

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'slug']

class PhotoSerializer(serializers.ModelSerializer):
    category_name = serializers.ReadOnlyField(source='category.name')
    
    class Meta:
        model = Photo
        fields = ['id', 'title', 'image', 'thumbnail', 'category', 'category_name', 
                  'description', 'featured', 'date_added']

class PageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Page
        fields = ['id', 'title', 'slug', 'content']

class TestimonialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Testimonial
        fields = ['id', 'name', 'position', 'quote', 'image']

class PricingItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = PricingItem
        fields = ['id', 'description']

class PricingPackageSerializer(serializers.ModelSerializer):
    items = PricingItemSerializer(many=True, read_only=True)
    
    class Meta:
        model = PricingPackage
        fields = ['id', 'name', 'price', 'description', 'is_featured', 'items']

class FAQSerializer(serializers.ModelSerializer):
    class Meta:
        model = FAQ
        fields = ['id', 'question', 'answer']

class ContactSubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactSubmission
        fields = ['id', 'first_name', 'last_name', 'email', 'phone', 'message']