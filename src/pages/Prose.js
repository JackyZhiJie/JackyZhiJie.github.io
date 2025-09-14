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
      title: "《六月浮云》",
      date: "2025-07-02",
      image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5",
      category: "散文",
      fullcontent: `
      白雲被六月的陽光照射，像融化的雪糕，黏稠地澆築在輕鐵的強化玻璃上。我站在窗邊俯瞰「叮叮」走過，那些錯綜複雜的路軌讓我回想起論文草稿時，原子筆劃出的彩色蚯蚓。那些自有記憶以來就絡繹的輕鐵在這刻與記憶中的原子蚯蚓交疊，證明回憶不必是線性。<br/><br/>
      Joker講過: "Nobody's panic when things go according to plan. Even if the plan is horrifying."<br/><br/>
    事若循軌而行，即使籌策駭人，亦無人驚怕。<br/><br/>
    書本及筆記在案頭上飄浮，字句如絮，一路綿延到窗外的白雲。白雲亂舞，恍惚與拋棄在書房角落那疊皺起的履歷重疊，碎成幾片難以名狀的惘然。看著這個將不可能變成可能的方寸之地，嘴角不自覺地彎起。那些挑燈的夜、挫敗的嘆息、靈光一現的瞬間，此刻如泉水湧現，肆意在腦海中奔馳。這種失控的美，難以言喻，卻又真實得令人心動。<br/><br/>
    是混沌，是有序，或許已經不再重要。<br/><br/>
    也許，脫軌馳騁是一種快意暢然；依轍而行是一種安穩自在。軌內軌外，皆是風景，更是存在的最佳證據。
      `,
    },
    {
      id: 4,
      title: "《五月囀音》",
      date: "2025-05-31",
      category: "散文",
      fullcontent: `
      五月的熱浪紛沓而至，為夏日掀起序幕。暮春初夏的猶疑早已消失得無影無蹤，風穿新葉的窸窣颯颯過渡到斑鳩的嚎叫，囀成夏蟬試聲。<br/><br/>
      溫度總算穩定下來，但開始爬升到躁動不安的程度，葉子也按捺不住了。一年下來，寥寥可數的綠葉已經開遍整個花圃。滿地綠葉堆積，但沒有花，就會被拋棄嗎？葉子一片疊着另一片，在某個角度看，更像一片片青翠的花瓣。我已分不清是幻覺，還是現實。但在我看來，這種「花朵」比起野生的更稀有、更美麗。<br/><br/>
      那個沒有表情的下午，我坐在石屎造的園圃的一隅，正當點開無聊時就會沉迷的遊戲時...<br/><br/>
      「喂，唔該...」<br/><br/>
      聽筒的另一邊是熟悉的聲音、熟悉的語句，像種特定的肥料，終於徐徐讓葉附近的花苞破繭而出。或許這種植物沒有指定的養分支持，便無法預期綻放。花的遲到反讓幽香在時差釀得更醇、更迷人。我想也是一種好事多磨吧。此刻不是永恆，來日方長；不是失敗，只是花開未至。更何況，即使沒有花，蔥蔥蘢蘢何嘗不是另一種絢爛豔麗？<br/><br/>
      葉蔭影間，被踏碎的沙石之間亮起反光，像路軌中的綠意絕處逢生。不管轉成什麼樣子、什麼季節，我和城市依然活着。
      `,
    },
    {
      id: 5,
      title: "《四月囈語》",
      date: "2025-05-01",
      category: "散文",
      fullcontent: `
      「明年春暖花開日，就是我們再會之時。」<br/><br/>
      你想起上一年說過的話時，一片花瓣剛好降落在你的眉梢，未能到地，像一句不能兌現的承諾。萬紫千紅，究竟那一種花才可以落地生根、發芽長葉，再開花結果？<br/><br/>
      今年的春天早已消失得不見蹤影，「春暖」卻來得格外遲疑 — 你甚至感受不到柔春之美，溫室裏的牡丹、玫瑰遲遲未能綻放。你每日都駐足看看那株「牡丹」，那株被悉心照料卻只得綠葉的「牡丹」。你像Perfect Days的主角一樣，每隔一段時間，都會為它們拍下一式一樣的照片。數數照片，日子就這樣過了。那幾片綠得蔥蘢的葉子裏，想必藏着一整年未盡的絮語。這堆只有葉的花是春日的囈語者，它們從未認真說話，只會東飄西蕩，隨風飄揚，像極了夢境中那些沒頭沒尾的詩句。有時沾在衣襟上，成了褪不去的夢痕；有時掉進流水，化在未寫完的詩裏。<br/><br/>
      其實種子才可以落地生根，花又怎能栽種出花？根本是天方夜譚。看著那堆花作的種子、不能長出花的葉，你就知，這場春夢早該散了。`,
    },
    {
      id: 6,
      title: "《三月獨白》",
      date: "2025-04-01",
      category: "散文",
      fullcontent: `
      三月的氣溫是激進的，熱得可怕，冷得更可怕。雨也是猶豫的，下的輕，停得也輕。酷熱的日子希望下雨降溫；冰冷的日子祈求放晴保暖。但遺憾的總是事與願違。路邊磚塊砌成的小下陷處盛了幾點雨水，像剛上墨水的鋼筆在稿紙落淚。墨色暈開，字句便化了。<br/><br/>
      村口的木棉倒是開了，獨自美麗。今年的花期遲了嗎？我猜想，花和樹也許未達成共識吧。就像某些互動，不管有多努力，沒有共識，也是徒然。幾句話在心裏轉了幾轉，時份不合，終究沒有說出口。<br/><br/>
      夜裏翻着相簿，滾到月頭一張村口的照片。片中的樹還是青綠，綠得有些寂寞。幡然醒悟，有些孤獨等待，不過是為了證明時間的存在。<br/><br/>
      三月的高低跌宕煉成那灘濃得化不開的墨水。墨水書寫一字一句，滲在紙與紙之間，再化淡了。
      `,
    },
    {
      id: 7,
      title: "《二月雜言》",
      date: "2025-03-01",
      category: "詩",
      fullcontent: `
    放眼望去 處處紅紅綠綠<br/>
    是氧氣養分水分<br/>
    還是禱告土地草地才可以栽出果實？<br/><br/>
    拔去粉紅濾鏡後<br/>
    幡然醒悟 區區灰灰白白<br/>
    放晴兩天後回復一遍迷茫朦朧<br/><br/>
    天空的幾寸積雲<br/>
    是未來遺落的方程式<br/>
    懸而未決<br/>
    等待拆解<br/><br/>
    我會在未結果的房間<br/>
    等候下一個晴天<br/>
    等候下一趟果期<br/>
    像望天打掛的農夫一樣<br/>
      靜候`,
    },
    {
      id: 8,
      title: "《一月絮語》",
      date: "2025-02-10",
      category: "散文",
      fullcontent: `
      一月的感覺最不真實。畢竟連年份都會寫錯的月份，又怎能有明確的方向？<br/><br/>
      新年伊始，令人神傷的並不是身心靈依然沉浸在忽冷忽暖的天氣，而是上一年的內外問題積壓到新的一年。<br/><br/>
      某個早上，太陽剛探出頭來，綻放出半絲和暖。暖意悄悄鑽入那個不見天日的房子，填滿了那雜亂無章的帷幕。時間一分一秒的過去，他似乎亦知道時間的存在。但他不太想在意，畢竟誰不想躺平？但他知道又不能不起，內在的時間開始加快這副早已荒廢的引擎啟動。<br/><br/>
      「反正藏起來是一件不可能的事。至少不能在這一年、不可以是現在」他想。<br/><br/>
      他就這樣一鼓作氣，奮力撐起，遠行去了。與不斷流走的時間一樣，溫度也是個奇怪的存在，永恆地變幻，似凍非凍。或許讓人無所適從的，是外冷內熱的張力。由荒蕪之地穿越到繁華高樓，他一邊嘗試喚醒內在的半絲慧根，一邊四處尋找有用的資訊...<br/><br/>
      「於是，就成了饕餮之徒，一直沉淪下去嗎？」<br/>
      「其實...」<br/><br/>
      「不覺得悲傷嗎？」<br/>
      「大概會吧。」我說。`,
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
            <p className="font-sans italic text-sm text-gray-500">{post.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
