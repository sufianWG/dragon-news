export const allCategory = async() => {
    const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
    const categoriesData = await res.json();
    return categoriesData.data.news_category;
}
export const NewsCategoryData = async(category_id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`);
    const catData = await res.json();
    return catData.data;
}
export const NewsDetail = async(newsDetailId) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/${newsDetailId}`);
    const newsDetails = await res.json();
    return newsDetails.data;
}
