emis-website/
├── backend/ # Django project
│ ├── photos/ # Django app for photo management
│ ├── pages/ # Django app for static pages
│ ├── contact/ # Django app for contact form
│ ├── testimonials/ # Django app for testimonials
│ ├── api/ # Django app for REST API
│ └── emis_photo_site/ # Django project settings
└── frontend/ # React application
├── public/
├── src/
│ ├── components/ # Reusable React components
│ ├── pages/ # Page components
│ ├── services/ # API services
│ ├── hooks/ # Custom React hooks
│ └── utils/ # Utility functions
└── package.json

# photos/models.py

class Category(models.Model):
name = models.CharField(max_length=100)
slug = models.SlugField(unique=True)

    def __str__(self):
        return self.name

class Photo(models.Model):
title = models.CharField(max_length=200)
image = models.ImageField(upload_to='photos/')
category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='photos')
description = models.TextField(blank=True)
featured = models.BooleanField(default=False)
date_added = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

# pages/models.py

class Page(models.Model):
title = models.CharField(max_length=200)
slug = models.SlugField(unique=True)
content = models.TextField()

    def __str__(self):
        return self.title

# testimonials/models.py

class Testimonial(models.Model):
name = models.CharField(max_length=100)
position = models.CharField(max_length=100, blank=True)
quote = models.TextField()
image = models.ImageField(upload_to='testimonials/', blank=True, null=True)
display_order = models.IntegerField(default=0)

    def __str__(self):
        return f"Testimonial by {self.name}"

# pricing/models.py

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

# faqs/models.py

class FAQ(models.Model):
question = models.CharField(max_length=255)
answer = models.TextField()
order = models.IntegerField(default=0)

    def __str__(self):
        return self.question

# contact/models.py

class ContactSubmission(models.Model):
first_name = models.CharField(max_length=100)
last_name = models.CharField(max_length=100)
email = models.EmailField()
phone = models.CharField(max_length=20)
message = models.TextField()
created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Contact from {self.first_name} {self.last_name}"

/api/photos/ # List all photos
/api/photos/<id>/ # Get specific photo
/api/photos/categories/ # List all categories
/api/photos/categories/<id>/ # Get photos for specific category
/api/pages/<slug>/ # Get page content (about)
/api/testimonials/ # List all testimonials
/api/pricing/ # List all pricing packages
/api/faqs/ # List all FAQs
/api/contact/ # Submit contact form

# Frontend Design

## Pages

### Home Page

Hero section with featured photos
Brief intro section
Featured gallery
Call to action

### Portfolio Page

Category filter
Gallery grid with pagination
Lightbox for photo viewing

### About Page

Bio content (from Django)
Photographer's image
Experience/credentials

### Testimonials Page

Client testimonials in a carousel/grid

### Pricing Page

Photography packages
Pricing details
Booking CTA

### FAQs Page

Accordion-style Q&A

### Contact Page

Contact form
Contact details
Map (optional)

## Key Components

Gallery Component: For displaying photos in a grid with filtering
PhotoLightbox Component: For viewing photos in fullscreen
TestimonialCard Component: For displaying testimonials
PricingCard Component: For displaying pricing packages
ContactForm Component: For the contact form with validation
