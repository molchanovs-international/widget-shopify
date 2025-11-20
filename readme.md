# 📦 Molchanovs Support Feedback Widget

A lightweight JavaScript widget that adds a floating support button to any website.  
When clicked, it opens a responsive popup containing the Molchanovs support form (via iframe).

This widget works on all platforms including Shopify, Webflow, Tilda, Bubble, React, and static HTML sites.

---

## 🚀 Features

- Floating support button in the bottom-right corner  
- Popup with background overlay  
- Fully responsive layout  
- Desktop popup with top/bottom margins  
- Fullscreen popup on mobile  
- Scroll lock while popup is open  
- Embedded Molchanovs support form (with tracking via `utm_source_id`)

---

## 🔑 Required parameter: `utm_source_id`

To activate the widget, you **must provide a unique `utm_source_id`**, which identifies the store, website, or integration source.

You can obtain your unique `utm_source_id` from the development team at **move.molchanovs.com**.

This value allows Molchanovs to correctly link support requests to your store or system.

---

## 📥 Installation (How to run it on your website)

Add the code below anywhere on your page — preferably inside `<head>` or before `</body>`.  
Replace `"YOUR_UTM_SOURCE_ID"` with the value provided by the Molchanovs development team.

```html
<script>
  var script = document.createElement('script');
  script.src = 'https://molchanovs-international.github.io/widget-shopify/widget_dev.js';

  script.onload = function () {
      feedback_widget("YOUR_UTM_SOURCE_ID"); // required unique key
  };

  document.head.appendChild(script);
</script>
```

Example:

```js
feedback_widget("shopify_store_us");
```

---

## 🎯 Purpose

This widget provides a fast and seamless way for customers to contact  
**Molchanovs International Support**, directly from your website, with correct attribution of source via `utm_source_id`.
