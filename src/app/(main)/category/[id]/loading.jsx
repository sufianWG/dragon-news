import { allCategory, NewsCategoryData } from "@/lib/api";

const NewsCardLoadingPage = async ({idFromParam}) => {
    
    const allCategoryData = await allCategory()
    // console.log(allCategoryData);
    const DataLength = allCategoryData.length;

    return (


        < div className="container mx-auto mt-5" >
            <div className="grid grid-cols-12 gap-3 justify-between">
                <div className="col-span-3">
                    <div className="flex w-52 flex-col gap-4">
                        {
                            Array.from({ length: DataLength }).map((_, ind) => {
                                return <div key={ind} className="skeleton h-12 w-full"></div>
                            })
                        }
                    </div>
                </div>

                <div className="col-span-6">
                    {
                        Array.from({ length: DataLength }).map((_, indItem) => {
                            return <div key={indItem} className="flex w-full max-w-129.5 flex-col gap-4">
                                <div className="skeleton h-32 w-full"></div>
                                <div className="skeleton h-4 w-full"></div>
                                <div className="skeleton h-4 w-full"></div>
                                <div className="skeleton h-4 w-full"></div>
                            </div>
                        })
                    }
                </div>
                <div className="col-span-3">
                    <div className="flex w-full flex-col gap-4">
                        {
                            Array.from({ length: 4 }).map((_, ind) => {
                                return <div key={ind} className="skeleton h-8 w-full"></div>
                            })
                        }

                        
                    </div>
                </div>
            </div>
        </div >

    );
};

export default NewsCardLoadingPage;