# api/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    PhotoViewSet, CategoryViewSet, PageDetailView,
    TestimonialListView, PricingPackageListView, FAQListView,
    ContactSubmissionCreateView
)

router = DefaultRouter()
router.register(r'photos', PhotoViewSet)
router.register(r'categories', CategoryViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('pages/<slug:slug>/', PageDetailView.as_view(), name='page-detail'),
    path('testimonials/', TestimonialListView.as_view(), name='testimonial-list'),
    path('pricing/', PricingPackageListView.as_view(), name='pricing-list'),
    path('faqs/', FAQListView.as_view(), name='faq-list'),
    path('contact/', ContactSubmissionCreateView.as_view(), name='contact-create'),
]