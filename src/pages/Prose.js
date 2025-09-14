import React from "react";
import { Link } from "react-router-dom";
export default function BlogPostGrid() {
  const blogPosts = [
    {
      id: 1,
      title: "《八月蟬想》",
      date: "2025-08-31",
      category: "散文",
      fullcontent: `
      隔著冷冷的屏幕，我窺看一場生命的蛻變。<br/><br/>
      我早就知道再看一眼腦袋就會融掉，但心生好奇，未有轉走。那蟬困在殼中，那殼又囿於眼前的玻璃中，掙扎著，彷彿也要把我心底某些東西一併扯出。忽然蟬卡在蟬殼裏，怎料只是訊號不良，畫面停頓，刹那就是永恆，讓我若有所失。<br/><br/>
      ：蟬的幼蟲要在土裏埋藏多年，才得見天日。<br/><br/>
      蟬若有幼蟲時的記憶，想必在蛻變後定感到暢快無比。路邊真正的蟬破窗而入，開始共鳴。抬頭望去，陽光穿過雲層，透過樹葉灑落，那蟬早已振翅高飛，留下空殼在枝頭搖曳。<br/><br/>
      我才恍然：原來蟬、蟲不是可惡之物。蛻殼掙扎，是向死而生；振翔高鳴，不是喧囂，只是同頻共鳴。<br/><br/>
      你將整個盛夏連同蟬翼、咖啡因及威士忌，全部扔進雪克杯裏瘋狂搖蕩，蟬鳴、濃縮咖啡機的震動與搖晃的冰塊在同一頻率下混成一團，難以分解。<br/><br/>
      我開始明白我們都是都市裏的蟬。你選擇在混凝土深處潛伏，等待在某個盛夏突圍；我卻妄想將咖啡因釀成醉生夢死的酒，在石屎森林裏偽裝成適者生存的模樣。<br/><br/>
      也許我從來都不適應在城市寄生，但我還是一次又一次拒絕歸隱的可能，陪你走到不屬於你的高度。但咖啡是咖啡，酒是酒，你是你，我是我...<br/><br/>
      我們終究要完成屬於自己的蛻變。`,
    },
    {
      id: 2,
      title: "《七月滯暑》",
      date: "2024-08-01",
      image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc",
      category: "散文",
      fullcontent: `
      咖啡機發出「嘟~」的哀鳴，幾顆咖啡豆乖巧地溜進黑色的漩渦，在不見天日的齒輪間碎成齏粉。熱蒸氣率先獻祭自己，化成綿密的奶泡，傾瀉入不鏽鋼的保溫杯。深褐色的岩漿隨之而來，讓奶白開成了深淺交錯的花紋，四散開去。<br/><br/>
      明明是盛夏難得舒暢的一杯咖啡，怎麼又開始多愁善感？<br/><br/>
      也許，<br/>
      想到未來可能變得絕對，那杯咖啡就過於純粹，純粹得只剩下苦澀。<br/><br/>
      對嗎？<br/><br/>
      咖啡香沿著各路神經走，直抵回憶的深處。咖啡不斷在心中翻滾，一時三刻未能停下。思緒像卡住的齒輪，徒然轉動卻咬合不上。我想起妳總說七月的咖啡該加冰加水，卻在今年悄悄換成了他的海鹽焦糖配方。<br/><br/>
      蒸氣在杯壁凝結，凝結的水珠企圖沿著不鏽鋼曲線逃亡。但逃不過地心吸力，物理法則讓它與滯悶的午後沉下去。咖啡表面的奶花早已潰散成破碎的島鏈，而我的倒影正在褐色液體裏，一點一點溶解成妳再也認不得的模樣。`,
    },
    {
      id: 3,
      title: "Digital Art Revolution",
      excerpt: "How NFTs are changing the art marketplace",
      date: "Maria Garcia",
      image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5",
      category: "Art",
    },
    {
      id: 4,
      title: "Future of Remote Work",
      excerpt: "Navigating the hybrid workplace model",
      date: "Alex Thompson",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      category: "Business",
    },
    {
      id: 5,
      title: "Mindful Photography",
      excerpt: "Capturing moments with intention",
      date: "David Kim",
      image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d",
      category: "Photography",
    },
    {
      id: 6,
      title: "Urban Gardening Guide",
      excerpt: "Growing your own food in limited spaces",
      date: "Emma Roberts",
      image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
      category: "Gardening",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {blogPosts.map((post) => (
        <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
          {post.id >= 1 && post.id <= 8 ? (
            <div className="w-full h-48 overflow-hidden flex items-center justify-center">
              <iframe
                src={post.id === 1 ? "https://drive.google.com/file/d/1hRM2tg-MQRDV7b4BpzjGmkiNXMsoXLlS/preview" : post.id === 2 ? "https://drive.google.com/file/d/1XTG2T965SMYsXYRhgdPQzQRlQ5ljUiq0/preview" : post.id === 3 ? "https://drive.google.com/file/d/1fUrFKHJ43uaJXpN7j89uQ8_jZAyXUjr9/preview" : post.id === 4 ? "https://drive.google.com/file/d/1MKRAKcb3CcpkN3PNqa497MVxVf9B3SJT/preview" : post.id === 5 ? "https://drive.google.com/file/d/1OrCjkzWt1Bh3Gpdj-3AXJapLPikjKVAh/preview" : post.id === 6 ? "https://drive.google.com/file/d/1rGxrseT4wSm0jqbfM-_EZR98dfvoI9QZ/preview" : post.id === 7 ? "https://drive.google.com/file/d/1NOvVap4IZC5M6SZd4WeXf9x7fEdx_0Kr/preview" : post.id === 8 ? "https://drive.google.com/file/d/1POBU73WKAu5DYyk7d0WYlZ-h4BAbESpy/preview" : ""}
                className="w-full h-full"
                allow="autoplay"
                title={`Google Drive Preview ${post.id}`}
                style={{
                  border: "none",
                  transform: "scale(5.0)",
                  transformOrigin: "center",
                }}
              />
            </div>
          ) : (
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
          )}

          <div className="p-6">
            <p className="font-mono text-sm text-gray-500 mb-2">{post.category}</p>
            <h2 className="font-tc text-2xl font-bold mb-2">{post.title}</h2>
            <p className="font-sans text-gray-600 mb-4">{post.excerpt}</p>
            <p className="font-dfkai text-xl text-gray-00 mb-2" dangerouslySetInnerHTML={{ __html: post.fullcontent }}></p>
            <p className="font-sans italic text-sm text-gray-500">On {post.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
