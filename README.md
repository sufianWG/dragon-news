# 🐉 Dragon News

Dragon News is a modern news portal built as a practice project using **Next.js App Router**. It fetches news data from the Programming Hero News API and allows users to browse news by category, view news summaries, check ratings, and open individual news articles.

The main purpose of this project is to practise modern Next.js concepts such as Server Components, dynamic routing, data fetching, route-level loading UI, reusable components, and optimized images.

---

## ✨ Features

- Browse news from multiple categories
- View category-wise news articles
- Open individual news details using dynamic routes
- Display author name, profile image, and published date
- Display fractional news ratings with stars
- Responsive and optimized news images
- Shortened article descriptions with a “Read More” link
- Skeleton loading interface while route data is loading
- Empty-state message when a category contains no news
- Reusable and organized React components
- Responsive multi-column news layout
- Sidebar and navigation-based interface

---

## 🛠️ Technologies Used

### Core

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- JavaScript
- Next.js App Router

### Styling

- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)

### Packages

- [React Icons](https://react-icons.github.io/react-icons/)
- [React Fast Marquee](https://www.npmjs.com/package/react-fast-marquee)
- [React Rating](https://github.com/smastrom/react-rating)
- [date-fns](https://date-fns.org/)

### Data Source

- [Programming Hero News API](https://openapi.programming-hero.com/api/news/categories)

---

## 📚 Concepts Practised

This project was created to practise and understand:

- Next.js App Router
- Server Components
- Asynchronous Server Components
- Fetching external API data
- Dynamic route segments
- Route parameters
- Nested layouts
- Next.js special files
- Route-level `loading.jsx`
- Skeleton loading UI
- Next.js `Image` optimization
- Responsive image sizing
- Next.js `Link` navigation
- Reusable component design
- Conditional rendering
- Rendering lists with `map()`
- Handling empty API responses
- Optional chaining
- Fractional star ratings
- Tailwind CSS responsive utilities
- DaisyUI components

---

## 🗂️ Main Routes

| Route | Description |
|---|---|
| `/` | Displays the main Dragon News interface |
| `/category/[id]` | Displays news from a selected category |
| `/news/[id]` | Displays the full details of a selected news article |

Here, `[id]` represents a dynamic route parameter.

---

## 🔌 API Endpoints

The project uses the following API endpoints:

### Get all categories

```text
https://openapi.programming-hero.com/api/news/categories
```

### Get news by category

```text
https://openapi.programming-hero.com/api/news/category/{category_id}
```

### Get individual news details

```text
https://openapi.programming-hero.com/api/news/{news_id}
```

---

## 📁 Project Structure

```text
dragon-news/
├── public/
├── src/
│   ├── app/
│   │   ├── (main)/
│   │   │   ├── category/
│   │   │   │   └── [id]/
│   │   │   │       ├── loading.jsx
│   │   │   │       └── page.jsx
│   │   │   └── news/
│   │   │       └── [id]/
│   │   │           └── page.jsx
│   │   ├── globals.css
│   │   └── layout.js
│   │
│   ├── components/
│   │   ├── Homepage/
│   │   │   ├── NewsCard/
│   │   │   └── RightSideBar/
│   │   └── CategoryDetail.jsx
│   │
│   └── lib/
│       └── api.js
│
├── package.json
├── next.config.mjs
└── README.md
```

> The project structure may continue to change as new features are added during the learning process.

---

## 🚀 Getting Started

Follow the steps below to run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/sufianWG/dragon-news.git
```

### 2. Enter the project directory

```bash
cd dragon-news
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the application

Open the following address in your browser:

```text
http://localhost:3000
```

---

## 📜 Available Scripts

### Start development mode

```bash
npm run dev
```

### Create a production build

```bash
npm run build
```

### Start the production server

```bash
npm run start
```

### Run ESLint

```bash
npm run lint
```

---

## 🖼️ Image Configuration

The application uses the Next.js `Image` component for image optimization.

Because news images come from an external API, the remote image hostname must be allowed in the Next.js configuration.

Example:

```js
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
    ],
  },
};

export default nextConfig;
```

The exact hostname should match the image domains returned by the API.

---

## ⭐ Rating System

News ratings are displayed using `@smastrom/react-rating`.

The component supports:

- Full stars
- Empty stars
- Fractional stars
- Read-only ratings
- Custom active and inactive colors

Example:

```jsx
<Rating
  value={4.5}
  readOnly
  fractions={10}
  itemStyles={starStyles}
/>
```

---

## ⏳ Loading UI

The project uses Next.js route-level `loading.jsx` files to display skeleton elements while route content is loading.

Example location:

```text
src/app/(main)/category/[id]/loading.jsx
```

Next.js automatically displays this component while the corresponding route segment is loading.

---

## 🎯 Project Purpose

This is a learning and practice project. It is not currently intended to be a production news platform.

The project focuses on improving practical understanding of:

- Next.js project structure
- App Router conventions
- API integration
- Server-side data fetching
- Dynamic pages
- Loading states
- Component-based UI development
- Responsive web design

---

## 🔮 Possible Future Improvements

- User authentication
- Functional login and registration
- Bookmark functionality
- Share functionality
- News search
- Category filtering
- Sorting news by rating or views
- Pagination or infinite scrolling
- Dark mode
- Improved mobile responsiveness
- Better error handling
- Custom error and not-found pages
- Metadata and SEO optimization
- Loading UI for additional routes
- Deployment to Vercel

---

## 👨‍💻 Author

**Md Abu Sufian**

- GitHub: [@sufianWG](https://github.com/sufianWG)
- Repository: [Dragon News](https://github.com/sufianWG/dragon-news)

---

## 📄 License

This project is created for educational and practice purposes.

You may use the code as a reference for learning Next.js, React, Tailwind CSS, and API-based application development.

---

<div align="center">

### Built with Next.js, React, Tailwind CSS and DaisyUI

⭐ If you find this practice project helpful, consider giving the repository a star.

</div>