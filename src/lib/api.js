export const allCategory = async() => {
    const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
    const categoriesData = await res.json();
    return categoriesData.data.news_category;
}
