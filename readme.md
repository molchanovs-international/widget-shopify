# 📦 Molchanovs Support Feedback Widget

A lightweight JavaScript widget that adds a floating support button to any website.  
When clicked, it opens a responsive popup containing the Molchanovs support form (via iframe).

This widget works on all platforms including Shopify, Webflow, Tilda, Bubble, React, and static HTML sites.

---

## 🚀 Features

- Floating support button in the bottom-right corner  
- Popup with background overlay  
- Fully responsive layout  
- Desktop popup with margins  
- Fullscreen popup on mobile  
- Scroll lock while popup is open  
- Embedded Molchanovs support form

---

## 📥 Installation (How to run it on your website)

Add the following code anywhere in your page — preferably inside `<head>` or before `</body>`:

```html
<script>
  var script = document.createElement('script');
  script.src = 'https://molchanovs-international.github.io/widget-shopify/widget_dev.js';
  script.onload = function () {
      feedback_widget();
  };
  document.head.appendChild(script);
</script>
