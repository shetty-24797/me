# Personal Portfolio Website

A beautiful, modern, and responsive personal portfolio website built with HTML, CSS, and JavaScript.

## Features

- 🎨 Modern and beautiful design with gradient backgrounds
- 📱 Fully responsive (works on all devices)
- ⚡ Smooth animations and transitions
- 🎯 Smooth scrolling navigation
- 🌟 Interactive elements with hover effects
- 📧 Social media integration
- 🎭 Particle effects and animations
- 🍔 Mobile-friendly hamburger menu

## Quick Start

1. Open `index.html` in your web browser to view the website
2. Customize the content by editing the HTML file
3. Modify colors and styling in `styles.css`
4. Add custom functionality in `script.js`

## Customization Guide

### 1. Personal Information

Edit the following in `index.html`:

**Your Name & Title:**
```html
<!-- Replace "Your Name" with your actual name -->
<h2>Your Name</h2>
<h1 class="hero-title">Hello, I'm <span class="highlight">Your Name</span></h1>
```

**Contact Information:**
```html
<!-- Update your location, email, and phone -->
<span>Your Location</span>
<span>your.email@example.com</span>
<span>+1 (555) 123-4567</span>
```

**About Me Section:**
```html
<!-- Update the paragraphs with your personal story -->
<p>Hello! I'm passionate about...</p>
```

### 2. Achievements

Replace the achievement cards with your own accomplishments:

```html
<div class="achievement-card">
    <div class="achievement-icon">
        <i class="fas fa-trophy"></i> <!-- Change icon -->
    </div>
    <h3>Your Achievement Title</h3>
    <p>Description of your achievement</p>
    <span class="achievement-date">Year</span>
</div>
```

**Available Icons:**
- `fa-trophy` - Trophy
- `fa-medal` - Medal  
- `fa-star` - Star
- `fa-certificate` - Certificate
- `fa-graduation-cap` - Education
- `fa-briefcase` - Work
- `fa-award` - Award

### 3. Hobbies & Interests

Customize the hobbies section with your interests:

```html
<div class="hobby-card">
    <div class="hobby-icon">
        <i class="fas fa-camera"></i> <!-- Change icon -->
    </div>
    <h3>Your Hobby</h3>
    <p>Description of your hobby</p>
</div>
```

**Popular Hobby Icons:**
- `fa-camera` - Photography
- `fa-book` - Reading
- `fa-hiking` - Hiking
- `fa-code` - Coding
- `fa-music` - Music
- `fa-gamepad` - Gaming
- `fa-paint-brush` - Art
- `fa-bicycle` - Cycling
- `fa-plane` - Travel
- `fa-dumbbell` - Fitness

### 4. Social Media Links

Update your social media profiles:

```html
<!-- Replace the URLs with your actual profiles -->
<a href="https://linkedin.com/in/yourprofile" target="_blank" class="social-link linkedin">
<a href="https://github.com/yourusername" target="_blank" class="social-link github">
<a href="https://twitter.com/yourusername" target="_blank" class="social-link twitter">
<a href="https://instagram.com/yourusername" target="_blank" class="social-link instagram">
<a href="mailto:your.email@example.com" class="social-link email">
```

### 5. Profile Picture

To add your profile picture, replace the profile placeholder:

```html
<!-- Replace this: -->
<div class="profile-placeholder">
    <i class="fas fa-user"></i>
</div>

<!-- With this: -->
<div class="profile-image">
    <img src="your-photo.jpg" alt="Your Name" />
</div>
```

Then add this CSS to `styles.css`:

```css
.profile-image img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    object-fit: cover;
    border: 5px solid rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease;
}

.profile-image img:hover {
    transform: scale(1.05);
    border-color: rgba(255, 255, 255, 0.4);
}
```

### 6. Color Customization

To change the color scheme, modify these CSS variables in `styles.css`:

```css
/* Main gradient colors */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Accent gradient colors */
background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
```

**Popular Color Schemes:**
- **Blue/Purple:** `#667eea` to `#764ba2`
- **Pink/Red:** `#f093fb` to `#f5576c`  
- **Orange/Red:** `#ff9a9e` to `#fecfef`
- **Green/Blue:** `#a8edea` to `#fed6e3`
- **Purple/Pink:** `#d299c2` to `#fef9d7`

### 7. Adding More Sections

To add new sections, follow this template:

```html
<section id="new-section" class="new-section">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Section Title</h2>
            <p class="section-subtitle">Section description</p>
        </div>
        <div class="section-content">
            <!-- Your content here -->
        </div>
    </div>
</section>
```

Don't forget to add the navigation link:

```html
<a href="#new-section" class="nav-link">New Section</a>
```

## File Structure

```
├── index.html      # Main HTML file
├── styles.css      # Stylesheet
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Browser Support

- Chrome (recommended)
- Firefox
- Safari  
- Edge
- Mobile browsers

## Technologies Used

- HTML5
- CSS3 (Grid, Flexbox, Animations)
- JavaScript (ES6+)
- Font Awesome Icons
- Google Fonts (Inter)

## Tips for Best Results

1. **Images:** Use high-quality images (at least 300x300px for profile)
2. **Content:** Keep descriptions concise but informative
3. **Links:** Test all social media links before publishing
4. **Mobile:** Always test on mobile devices
5. **Performance:** Optimize images for web use

## Deployment

You can deploy this website to:

- **GitHub Pages** (free)
- **Netlify** (free)
- **Vercel** (free)
- **Any web hosting service**

Simply upload the files to your hosting provider or connect your GitHub repository for automatic deployment.

## Need Help?

- Check that all file names match exactly
- Ensure all social media links are valid
- Verify that icon classes exist in Font Awesome
- Test on multiple browsers and devices

---

**Made with ❤️ and creativity** 