# api/views.py
from rest_framework import viewsets, generics
from rest_framework.response import Response
from django.core.mail import send_mail
from django.conf import settings

from photos.models import Photo, Category
from pages.models import Page
from testimonials.models import Testimonial
from pricing.models import PricingPackage
from faqs.models import FAQ
from contact.models import ContactSubmission

from .serializers import (
    PhotoSerializer, CategorySerializer, PageSerializer,
    TestimonialSerializer, PricingPackageSerializer, FAQSerializer,
    ContactSubmissionSerializer
)

class PhotoViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Photo.objects.all()
    serializer_class = PhotoSerializer
    
    def get_queryset(self):
        queryset = Photo.objects.all()
        category = self.request.query_params.get('category', None)
        featured = self.request.query_params.get('featured', None)
        
        if category is not None:
            queryset = queryset.filter(category__slug=category)
        
        if featured is not None and featured.lower() == 'true':
            queryset = queryset.filter(featured=True)
            
        return queryset

class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class PageDetailView(generics.RetrieveAPIView):
    queryset = Page.objects.all()
    serializer_class = PageSerializer
    lookup_field = 'slug'

class TestimonialListView(generics.ListAPIView):
    queryset = Testimonial.objects.all().order_by('display_order')
    serializer_class = TestimonialSerializer

class PricingPackageListView(generics.ListAPIView):
    queryset = PricingPackage.objects.all()
    serializer_class = PricingPackageSerializer

class FAQListView(generics.ListAPIView):
    queryset = FAQ.objects.all()
    serializer_class = FAQSerializer

class ContactSubmissionCreateView(generics.CreateAPIView):
    queryset = ContactSubmission.objects.all()
    serializer_class = ContactSubmissionSerializer
    
    def perform_create(self, serializer):
        contact = serializer.save()
        
        # Send email notification
        subject = f"New Contact Form Submission from {contact.first_name} {contact.last_name}"
        message = f"""
        You have received a new contact form submission:
        
        Name: {contact.first_name} {contact.last_name}
        Email: {contact.email}
        Phone: {contact.phone}
        
        Message:
        {contact.message}
        """
        from_email = settings.DEFAULT_FROM_EMAIL
        recipient_list = [settings.ADMIN_EMAIL]  # Set this in settings.py
        
        send_mail(subject, message, from_email, recipient_list)