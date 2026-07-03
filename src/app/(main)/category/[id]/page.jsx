import CateggoryItems from "@/components/Homepage/left";
import { allCategory } from "@/lib/api";


const CategoryPage = async({params}) => {
    const categories = await allCategory();
    const {id} = await params;

    return (
        <div className="container mx-auto mt-5">
            <div className="grid grid-cols-12 gap-3 justify-between">
                <div className="col-span-3">
                    <CateggoryItems categories={categories} activeId={id}></CateggoryItems>
                </div>
                <div className="col-span-6">
                    Dragon News Home
                </div>
                <div className="col-span-3">
                    Login with
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;