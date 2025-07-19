# 🏠 Real Estate Property Listing UI

A responsive and scalable frontend for a mock real estate platform built with **React.js**. This project showcases properties in a grid layout, detailed view pages, a favorites system, and essential filters — simulating a real-world property listing interface.

## 🎥 Video Demo
https://github.com/user-attachments/assets/a15ba3e2-95cd-4763-97dc-31696638f315


# 🔗 [**Deployed on Vercel**](https://assign1-rho.vercel.app/)

## 🖥️ Features

### 1. **Homepage** `/`

* Responsive grid of **12+ properties**
* Each card shows:

  * Image
  * Title
  * Location
  * Price
  * "View Details" button
* **Filters**:

  * 💰 Budget Range (Min–Max)
  * 🏘️ Property Type (Apartment, Villa, Plot, etc.)
  * 🛏️ Bedrooms (1BHK, 2BHK, etc.)

### 2. **Property Details Page** `/property/:id`

* Image **carousel**
* Embedded **Google Maps / Leaflet.js** map for location
* Detailed information: Price, Area, Description, BHK, Amenities
* “Enquire” button opens a **form popup**

### 3. **Favorites Page** `/favorites`

* Users can ❤️ **Save to Favorites**
* Favorite properties are stored in **localStorage**
* View all saved properties

---

## 🧰 Tech Stack

* **React.js** (Functional Components + Hooks)
* **React Router DOM**
* **Axios** for API calls (using [DummyJSON](https://dummyjson.com) / mock JSON)
* **Tailwind CSS** for styling
* **Vercel** for deployment

---

## ⚙️ Optional Enhancements (Bonus)

* ✅ **State Management** with **Zustand** (optional)
* ✅ Loading skeletons using **react-loading-skeleton**
* ✅ Smooth transitions with **Framer Motion**
* ✅ Fully **Responsive Mobile Version**
* ✅ Error boundaries for fallback UI

---

## 📸 Screenshots

### Homepage

![Homepage Screenshot](https://github.com/user-attachments/assets/35b5fcc2-3042-4604-b9c9-d0ee978d3c0e)
### Property Details

![Property Details](https://github.com/user-attachments/assets/4c7216ed-f89c-4d54-b201-00ac582f39d2)

### Favorites

### 💖 Favorites Page

![Favorites Page](https://github.com/user-attachments/assets/d5e9b541-86c9-4965-8939-ce42cf9a510e)

---
## 📦 Folder Structure

```
src/
├── assets/
├── components/
│   ├── Navbar.jsx
│   ├── PropertyCard.jsx
│   ├── FilterBar.jsx
│   └── ...
├── pages/
│   ├── Home.jsx
│   ├── PropertyDetails.jsx
│   ├── Favorites.jsx
├── context/ or store/
├── App.jsx
├── main.jsx
```
## Thanks...
