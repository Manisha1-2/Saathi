import Container from "@/components/layout/Container";
import breakingNews from "@/data/breakingNews";

import BreakingCard from "./BreakingCard";


export default function BreakingNews(){

return (

<section className="py-16">

<Container>


<div className="mb-10 flex items-center gap-4">

<span className="rounded bg-red-600 px-4 py-2 font-bold text-white">
🔴 Breaking News
</span>


<h2 className="text-3xl font-bold">
Top Headlines
</h2>


</div>


<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">


{
breakingNews.map((news)=>(
<BreakingCard 
key={news.id}
news={news}
/>
))
}


</div>


</Container>

</section>

)

}