
import CategoryDetail from "@/components/CategoryDetail";
import RightSideBar from "@/components/Homepage/RightSideBar";
import { NewsDetail } from "@/lib/api";

const NewsDetailPage = async ({ params }) => {
    const { id } = await params;
    const newsDetailData = await NewsDetail(id);
    // console.log(newsDetailData);
    const actualDetailData = newsDetailData[0];
    
    return (
        <div className="mt-3 container mx-auto">
            <h1 className='text-xl text-gray-950 font-semibold mb-4'>Dragon News</h1>
            <div className="grid grid-cols-12">
                <div className="col-span-9">
                    <CategoryDetail newsDetailData={actualDetailData}></CategoryDetail>
                </div>
                <div className="col-span-3">
                <RightSideBar></RightSideBar>
                </div>
            </div>
        </div>
    );
};

export default NewsDetailPage;