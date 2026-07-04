import CateggoryItems from "@/components/Homepage/left";
import NewsCard from "@/components/Homepage/NewsCard/NewsCard";
import RightSideBar from "@/components/Homepage/RightSideBar";
import { allCategory, NewsCategoryData } from "@/lib/api";


const CategoryPage = async({params}) => {
    const categories = await allCategory();
    const {id} = await params;

    const categoryNews = await NewsCategoryData(id);
    // console.log(categoryNews);

    return (
        <div className="container mx-auto mt-5">
            <div className="grid grid-cols-12 gap-3 justify-between">
                <div className="col-span-3">
                    <CateggoryItems categories={categories} activeId={id}></CateggoryItems>
                </div>
                <div className="col-span-6">
                   <NewsCard categoryNews={categoryNews}></NewsCard>    
                </div>
                <div className="col-span-3">
                    <RightSideBar></RightSideBar>
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;