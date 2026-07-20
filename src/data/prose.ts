import type { ProseItem } from '@types';

export const proseData: Record<string, ProseItem> = {
  // Existing English Reflections
  //   empathy: {
  //     key: 'empathy',
  //     title: 'On Empathy in Engineering',
  //     category: 'Analysis & Society',
  //     date: 'March 12, 2026',
  //     text: `In standard software and systems engineering courses, we are taught to conceptualise problems through pure structural logic. We maximise efficiency, eliminate state leaks, and optimise signal integrity. If we can run a railway signalling pipeline in sub-millisecond durations, we check our achievements boxes and close the terminal shell.

  // However, returning to real world physical structures—such as massive underground railway stations—demonstrates where mathematical boundaries collapse. Systems do not live in isolation; they are built for, and interacted with, by humans. If an automation tool is designed with high complexity but creates operational cognitive fatigue for technicians, it fails as a human interface.

  // Bringing my Journalism and Communications training into daily data engineering tasks at MTR teaches me to prioritize sensory validation. Empathy in engineering demands that we don't just ask "Can we build this system?" but rather "How does this system affect the cognitive rhythm of the person operating it?" This balance forms the direct path to my upcoming research explorations at CityU's BiWell Lab.`,
  //   },
  //   glass: {
  //     key: 'glass',
  //     title: 'City of Glass, City of Steel',
  //     category: 'Urban Systems & Wellness',
  //     date: 'January 20, 2026',
  //     text: `Hong Kong represents the absolute apex of structural vertical density. We stack workspaces, living compartments, and transit tubes on top of each other in tight grids. While this vertical density represents outstanding spatial engineering marvels, it sets massive sensory limits on human sensory well-being.

  // How do occupants interact with natural light when their workspaces are surrounded by monolithic towers blocking the sky? How does the lack of visual natural changes affect circadian rhythms and daily stress metrics?

  // In this investigation, we look at responsive structural envelopes. Using smart color-tuned window facades, we can artificially simulate day-to-evening lighting shifts, dynamically altering workspace environments to restore organic circadian wellness. Through Human-Building Interaction (HBI), we intend to transform static structures into active protectors of occupant mental sanity.`,
  //   },
  walkthroughwalls: {
    key: 'walkthroughwalls',
    title: 'Inspiration from Microwave Festival 2025 Walk Through Walls',
    category: 'City Walk',
    date: 'November 16, 2025',
    text: `Last week, I went to an exhibition at Hong Kong City Hall - Microwave International New Media Art Festival 2025. The festival explores how art and technology help heal social wounds, with a special focus on mental health, connection, shared memories, and community recovery through immersive exhibitions and participatory projects by international and local artists. I attended simply because it seemed interesting; I often visit exhibitions casually and occasionally find artworks or concepts that could be useful in helping me brainstorm. This time, I discovered Pickles by Dominique Chen.

Pickles is a journaling companion that supports reflection and personal growth through AI-assisted insights. It reads your private journals weekly from platforms like Notion or Google Docs, then sends emails highlighting connections you might have missed and suggesting thoughtful questions for deeper reflection. The system treats journaling as both self-care and self-research, describing the process as “fermentation” of experiences into meaningful knowledge. Rather than interpreting your writing definitively, Pickles offers gentle nudges while leaving space for personal discovery. Currently, it’s available only to beta testers.

Although it might not have a direct contribution to my research, I found it fascinating. It connects HCI, journaling, autoethnography, and LLM in interesting ways. 

Source of Pickles: https://ephemere.io/en/pickles-fermenting-memories-with-llm`,
    driveImageIds: [
      '1bX4tD3T2XKpWFUPuDVuEpaNLqBNvwYtR',
      '1XzyxzwzuB24vbXpV-FgXS3Yaj32aexZf'
    ],
  },

  // Chinese Prose Entries
  november_fog: {
    key: 'november_fog',
    title: '《十一月 - 轉乘的霧》',
    category: '散文',
    date: '2025-12-31',
    text: '畢業袍的橙綬在某些地方悶燒著，低透明度的白煙徐徐扶搖直上。隧道很長。門關上的瞬息，所有燈光開始緩緩流動。',
    htmlContent: `畢業袍的橙綬在某些地方悶燒著，低透明度的白煙徐徐扶搖直上。不確定是左邊的揭頁快勞，是右邊的手提電腦；是背後的公共房屋，還是身處的川崎千九。火光照亮某些字句的邊緣，可能是文獻綜述的第二段，也可能是考核表的評語欄。<br/>
隧道很長。有人踩住高跟皮鞋狂奔，捲起陣陣都市冷風，為一整天的燈紅酒綠注入助燃的氣體。荒謬的是，這些人比起自動行人道上的更快、更急。有人推著行李箱奔跑，輪子軋過散落的紙張——看不清是證書還是履歷。自動行人道持續運轉，將相似的背影送往相似的方向。偶爾有風從隧道深處吹來，帶著鐵鏽與灰燼的焦黑氣味。<br/>
玻璃映出重疊的側臉。年輕的那張正在調整呼吸節奏，年長的整理衣領。他們之間隔著幾份尚未填寫的表格，墨水瓶倒在中央，深藍色液體緩慢漫過未來國度的邊界。<br/>
路軌擘成兩份。濃稠灰濕的霧從兩面的深處漸行漸近，讓眼前本來黯黑的隧道變得更沉、更玄。有人反向棄暗投明；有人直視漆黑、轉入更深的陰影。廣播響起時，所有出路都像粉狀顏料灑在沙畫上，暫時的、偶然的留下痕跡，隨即被名叫命運的藝術家抹平。<br/>
某些時刻，你發現自己同時出現在多個場景：左手握著剛打開的邀請函，右手觸及幾近炭化的車門框。熱度從兩端同時傳來，分不清哪邊更接近體溫。<br/>
門關上的瞬息，所有燈光開始緩緩流動。你開始理解，所謂轉乘不過是學習在移動中辨認哪些光來自燈箱，哪些來自燃燒的紙頁，哪些只是玻璃對虛空漆黑的折射。`,
    driveImageId: '1E3FWdX-frSKHqecQjNsih0cG_qgyqfsJ',
    isChinese: true,
  },
  october_mirror: {
    key: 'october_mirror',
    title: '《十月鏡像》',
    category: '散文',
    date: '2025-11-01',
    text: '生活是一面破碎的鏡子，每塊奇怪的碎片皆是奇怪的我造成。原來我恐懼的從來不是新系統，而是發現在它精心打撈的記憶碎片裡，我早已遺失那個會為不完美而心動的自己。',
    htmlContent: `生活是一面破碎的鏡子，每塊奇怪的碎片皆是奇怪的我造成。<br/>
分不清是星期四還是星期六，我與新的手機結成了某種特定關係。面對陌生的電話、陌生的顏色、陌生的系統，我竟有些害怕緊張不適應。它默默記下我在速成輸入法的常用字。起初，想要的字總在下一頁，它學習一陣子，每個字粒就能精準遞上，像茶記夥計記得我那句「照舊」。<br/>
它開始預載我的生活節奏。早上七點鐘，以預設且漸強的幾個音階循環喚醒我；傍晚七點鐘，又為我摺疊一日的新聞摘要。我們的互動就像鬧鐘一樣定時且冰冷，在既定的時間以有限的方式互相理解，沒有溫度，沒有火花，只像一面似曾相識的鏡。<br/>
直至秋天最冷的那日，我在黑屏的手機上看見自己的扭曲倒影。那張被數據豢養的臉孔，正與它為我構建的數位人格緩緩重疊。原來我恐懼的從來不是新系統，而是發現在它精心打撈的記憶碎片裡，我早已遺失那個會為不完美而心動的自己。<br/>
手機螢幕原是鏡中之鏡，比鏡花水月更虛幻，不必為此而傷春悲秋。若這份多愁善感代表著某種異常，那麼當異常成為常態，會不會反而構成了另一種平常？`,
    driveImageId: '1Z4BoKXcrOJIQHOUbRydMDtNZ5PBjvVmn',
    isChinese: true,
  },
  september_dusk: {
    key: 'september_dusk',
    title: '《九月薄暝》',
    category: '散文',
    date: '2025-10-02',
    text: 'Golden hours 如走馬燈一樣經車廂的有機玻璃窗，由溫暖橘紅一幀一幀過渡至冷冽的紺青。出世與入世，你與我，也許永遠都不會和解。',
    htmlContent: `Golden hours 如走馬燈一樣經車廂的有機玻璃窗，由溫暖橘紅一幀一幀過渡至冷冽的紺青。色彩簡單卻斑斕，一分一秒不知不覺全流走。<br/>
窗外燦爛奪目卻奇異地寂靜，這刻熟悉的城市，此刻竟顯陌生。<br/>
下班後都市人的靈魂早已被人事抽乾，輕如微塵，隨地鐵的軀殼飄流。光影在乘客疲憊的側臉上流轉，像老迪士尼電影放映機卡頓的菲林，將每個表情切割成無法拼湊的碎片。<br/>
地鐵全速駛入隧道，黯黑自遠而來，氣溫驟降，猶如Nolan電影中無止上升施帕音，誰也逃不過。<br/>
Harvey Dent: The night is the darkest just before the dawn.
Me: The day is the brightest just before dust.<br/>
黎明之前，夜闌晦極；黃昏之前，絢爛無邊。<br/>
我又不爭氣地想起，總有些人，黎明未到，什麼都沒說就離開了。回望數數天空色階，其實那些轉身的瞬間，正正是日出前最深的晦暗。但既然黑暗的盡頭是光明，那麼黃昏的盡頭會是..？這極致的璀璨，彷彿是白晝最後温柔的謊言。<br/>
當列車衝出隧道那刻，所有折射的色彩瞬間蒸發。只剩玻璃門上反射的倒影，朦朧且迷失，彷彿一切的喜悅從來沒有發生過。。。<br/>
你會否就此愈走愈遠？負面偏差帶來的恐怖念頭紛至沓來，我瞬間多愁善感到無法與自己交流。<br/>
出世與入世，你與我，也許永遠都不會和解 。但如果天亮，就與光影狂舞；如果天暗，就與黝黯漫步，亦不怕迷失，願和光同塵。<br/>
那麼這次沉沒在黑暗之中，真是我自己的選擇，<br/>
嗎？`,
    driveImageId: '1whmGajWw5Uc7QTMXlcH5zgUidfh5gqi5',
    isChinese: true,
  },
  august_cicada: {
    key: 'august_cicada',
    title: '《八月蟬想》',
    category: '散文',
    date: '2025-08-31',
    text: '隔著冷冷的屏幕，我窺看一場生命的蛻變。我開始明白我們都是都市裏的蟬。我們終究要完成屬於自己的蛻變。',
    htmlContent: `隔著冷冷的屏幕，我窺看一場生命的蛻變。<br/>
我早就知道再看一眼腦袋就會融掉，但心生好奇，未有轉走。那蟬困在殼中，那殼又囿於眼前的玻璃中，掙扎著，彷彿也要把我心底某些東西一併扯出。忽然蟬卡在蟬殼裏，怎料只是訊號不良，畫面停頓，刹那就是永恆，讓我若有所失。<br/>
：蟬的幼蟲要在土裏埋藏多年，才得見天日。<br/>
蟬若有幼蟲時的記憶，想必在蛻變後定感到暢快無比。路邊真正的蟬破窗而入，開始共鳴。抬頭望去，陽光穿過雲層，透過樹葉灑落，那蟬早已振翅高飛，留下空殼在枝頭搖曳。<br/>
我才恍然：原來蟬、蟲不是可惡之物。蛻殼掙扎，是向死而生；振翔高鳴，不是喧囂，只是同頻共鳴。<br/>
你將整個盛夏連同蟬翼、咖啡因及威士忌，全部扔進雪克杯裏瘋狂搖蕩，蟬鳴、濃縮咖啡機的震動與搖晃的冰塊在同一頻率下混成一團，難以分解。<br/>
我開始明白我們都是都市裏的蟬。你選擇在混凝土深處潛伏，等待在某個盛夏突圍；我卻妄想將咖啡因釀成醉生夢死的酒，在石屎森林裏偽裝成適者生存的模樣。<br/>
也許我從來都不適應在城市寄生，但我還是一次又一次拒絕歸隱的可能，陪你走到不屬於你的高度。但咖啡是咖啡，酒是酒，你是你，我是我...<br/>
我們終究要完成屬於自己的蛻變。`,
    driveImageId: '1hRM2tg-MQRDV7b4BpzjGmkiNXMsoXLlS',
    isChinese: true,
  },
  july_heat: {
    key: 'july_heat',
    title: '《七月滯暑》',
    category: '散文',
    date: '2024-08-01',
    text: '咖啡機發出「嘟~」的哀鳴，幾顆咖啡豆乖巧地溜進黑色的漩渦。思緒像卡住的齒輪，徒然轉動卻咬合不上。',
    htmlContent: `咖啡機發出「嘟~」的哀鳴，幾顆咖啡豆乖巧地溜進黑色的漩渦，在不見天日的齒輪間碎成齏粉。熱蒸氣率先獻祭自己，化成綿密的奶泡，傾瀉入不鏽鋼的保溫杯。深褐色的岩漿隨之而來，讓奶白開成了深淺交錯的花紋，四散開去。<br/>
明明是盛夏難得舒暢的一杯咖啡，怎麼又開始多愁善感？<br/>
也許，<br/>
想到未來可能變得絕對，那杯咖啡就過於純粹，純粹得只剩下苦澀。<br/>
對嗎？<br/>
咖啡香沿著各路神經走，直抵回憶的深處。咖啡不斷在心中翻滾，一時三刻未能停下。思緒像卡住的齒輪，徒然轉動卻咬合不上。我想起妳總說七月的咖啡該加冰加水，卻在今年悄悄換成了他的海鹽焦糖配方。<br/>
蒸氣在杯壁凝結，凝結的水珠企圖沿著不鏽鋼曲線逃亡。但逃不過地心吸力，物理法則讓它與滯悶的午後沉下去。咖啡表面的奶花早已潰散成破碎的島鏈，而我的倒影正在褐色液體裏，一點一點溶解成妳再也認不得的模樣。`,
    driveImageId: '1XTG2T965SMYsXYRhgdPQzQRlQ5ljUiq0',
    isChinese: true,
  },
  june_clouds: {
    key: 'june_clouds',
    title: '《六月浮云》',
    category: '散文',
    date: '2025-07-02',
    text: '白雲被六月的陽光照射，像融化的雪糕，黏稠地澆築在輕鐵的強化玻璃上。軌內軌外，皆是風景，更是存在的最佳證據。',
    htmlContent: `白雲被六月的陽光照射，像融化的雪糕，黏稠地澆築在輕鐵的強化玻璃上。我站在窗邊俯瞰「叮叮」走過，那些錯綜複雜的路軌讓我回想起論文草稿時，原子筆劃出的彩色蚯蚓。那些自有記憶以來就絡繹的輕鐵在這刻與記憶中的原子蚯蚓交疊，證明回憶不必是線性。<br/>
Joker講過: "Nobody's panic when things go according to plan. Even if the plan is horrifying."<br/>
事若循軌而行，即使籌策駭人，亦無人驚怕。<br/>
書本及筆記在案頭上飄浮，字句如絮，一路綿延到窗外的白雲。白雲亂舞，恍惚與拋棄在書房角落那疊皺起的履歷重疊，碎成幾片難以名狀的惘然。看著這個將不可能變成可能的方寸之地，嘴角不自覺地彎起。那些挑燈的夜、挫敗的嘆息、靈光一現的瞬間，此刻如泉水湧現，肆意在腦海中奔馳。這種失控的美，難以言喻，卻又真實得令人心動。<br/>
是混沌，是有序，或許已經不再重要。<br/>
也許，脫軌馳騁是一種快意暢然；依轍而行是一種安穩自在。軌內軌外，皆是風景，更是存在的最佳證據。`,
    driveImageId: '1fUrFKHJ43uaJXpN7j89uQ8_jZAyXUjr9',
    isChinese: true,
  },
  may_whispers: {
    key: 'may_whispers',
    title: '《五月囀音》',
    category: '散文',
    date: '2025-05-31',
    text: '五月的熱浪紛沓而至，為夏日掀起序幕。花的遲到反讓幽香在時差釀得更醇、更迷人。',
    htmlContent: `五月的熱浪紛沓而至，為夏日掀起序幕。暮春初夏的猶疑早已消失得無影無蹤，風穿新葉的窸窣颯颯過渡到斑鳩的嚎叫，囀成夏蟬試聲。<br/>
溫度總算穩定下來，但開始爬升到躁動不安的程度，葉子也按捺不住了。一年下來，寥寥可數的綠葉已經開遍整個花圃。滿地綠葉堆積，但沒有花，就會被拋棄嗎？葉子一片疊着另一片，在某個角度看，更像一片片青翠的花瓣。我已分不清是幻覺，還是現實。但在我看來，這種「花朵」比起野生的更稀有、更美麗。<br/>
那個沒有表情的下午，我坐在石屎造的園圃的一隅，正當點開無聊時就會沉迷的遊戲時...<br/>
「喂，唔該...」<br/>
聽筒的另一邊是熟悉的聲音、熟悉的語句，像種特定的肥料，終於徐徐讓葉附近的花苞破繭而出。或許這種植物沒有指定的養分支持，便無法預期綻放。花的遲到反讓幽香在時差釀得更醇、更迷人。我想也是一種好事多磨吧。此刻不是永恆，來日方長；不是失敗，只是花開未至。更何況，即使沒有花，蔥蔥蘢蘢何嘗不是另一種絢爛豔麗？<br/>
葉蔭影間，被踏碎的沙石之間亮起反光，像路軌中的綠意絕處逢生。不管轉成什麼樣子、什麼季節，我和城市依然活着。`,
    driveImageId: '1MKRAKcb3CcpkN3PNqa497MVxVf9B3SJT',
    isChinese: true,
  },
  april_delirium: {
    key: 'april_delirium',
    title: '《四月囈語》',
    category: '散文',
    date: '2025-05-01',
    text: '「明年春暖花開日，就是我們再會之時。」這場春夢早該散了。',
    htmlContent: `「明年春暖花開日，就是我們再會之時。」<br/>
你想起上一年說過的話時，一片花瓣剛好降落在你的眉梢，未能到地，像一句不能兌現的承諾。萬紫千紅，究竟那一種花才可以落地生根、發芽長葉，再開花結果？<br/>
今年的春天早已消失得不見蹤影，「春暖」卻來得格外遲疑 — 你甚至感受不到柔春之美，溫室裏的牡丹、玫瑰遲遲未能綻放。你每日都駐足看看那株「牡丹」，那株被悉心照料卻只得綠葉的「牡丹」。你像Perfect Days的主角一樣，每隔一段時間，都會為它們拍下一式一樣的照片。數數照片，日子就這樣過了。那幾片綠得蔥蘢的葉子裏，想必藏着一整年未盡的絮語。這堆只有葉的花是春日的囈語者，它們從未認真說話，只會東飄西蕩，隨風飄揚，像極了夢境中那些沒頭沒尾的詩句。有時沾在衣襟上，成了褪不去的夢痕；有時掉進流水，化在未寫完的詩裏。<br/>
其實種子才可以落地生根，花又怎能栽種出花？根本是天方夜譚。看著那堆花作的種子、不能長出花的葉，你就知，這場春夢早該散了。`,
    driveImageId: '1OrCjkzWt1Bh3Gpdj-3AXJapLPikjKVAh',
    isChinese: true,
  },
  march_monologue: {
    key: 'march_monologue',
    title: '《三月獨白》',
    category: '散文',
    date: '2025-04-01',
    text: '三月的氣溫是激進的，熱得可怕，冷得更可怕。墨水書寫一字一句，滲在紙與紙之間，再化淡了。',
    htmlContent: `三月的氣溫是激進的，熱得可怕，冷得更可怕。雨也是猶豫的，下的輕，停得也輕。酷熱的日子希望下雨降溫；冰冷的日子祈求放晴保暖。但遺憾的總是事與願違。路邊磚塊砌成的小下陷處盛了幾點雨水，像剛上墨水的鋼筆在稿紙落淚。墨色暈開，字句便化了。<br/>
村口的木棉倒是開了，獨自美麗。今年的花期遲了嗎？我猜想，花和樹也許未達成共識吧。就像某些互動，不管有多努力，沒有共識，也是徒然。幾句話在心裏轉了幾轉，時份不合，終究沒有說出口。<br/>
夜裏翻着相簿，滾到月頭一張村口的照片。片中的樹還是青綠，綠得有些寂寞。幡然醒悟，有些孤獨等待，不過是為了證明時間的存在。<br/>
三月的高低跌宕煉成那灘濃得化不開的墨水。墨水書寫一字一句，滲在紙與紙之間，再化淡了。`,
    driveImageId: '1rGxrseT4wSm0jqbfM-_EZR98dfvoI9QZ',
    isChinese: true,
  },
  february_miscellany: {
    key: 'february_miscellany',
    title: '《二月雜言》',
    category: '詩',
    date: '2025-03-01',
    text: '放眼望去 處處紅紅綠綠。我會在未結果的房間，等候下一個晴天，等候下一趟果期。',
    htmlContent: `放眼望去 處處紅紅綠綠
是氧氣養分水分
還是禱告土地草地才可以栽出果實？<br/>
拔去粉紅濾鏡後
幡然醒悟 區區灰灰白白
放晴兩天後回復一遍迷茫朦朧<br/>
天空的幾寸積雲
是未來遺落的方程式
懸而未決
等待拆解<br/>
我會在未結果的房間
等候下一個晴天
等候下一趟果期
像望天打掛的農夫一樣
  靜候`,
    driveImageId: '1NOvVap4IZC5M6SZd4WeXf9x7fEdx_0Kr',
    isChinese: true,
  },
  january_whispers: {
    key: 'january_whispers',
    title: '《一月絮語》',
    category: '散文',
    date: '2025-02-10',
    text: '一月的感覺最不真實。新年伊始，令人神傷的是上一年的內外問題積壓到新的一年。',
    htmlContent: `一月的感覺最不真實。畢計連年份都會寫錯的月份，又怎能有明確的方向？<br/>
新年伊始，令人神傷的並不是身心靈依然沉浸在忽冷忽暖的天氣，而是上一年的內外問題積壓到新的一年。<br/>
某個早上，太陽剛探出頭來，綻放出半絲和暖。暖意悄悄鑽入那個不見天日的房子，填滿了那雜亂無章的帷幕。時間一分一秒的過去，他似乎亦知道時間的存在。但他不太想在意，畢竟誰不想躺平？但他知道又不能不起，內在的時間開始加快這副早已荒廢的引擎啟動。<br/>
「反正藏起來是一件不可能的事。至少不能在這一年、不可以是現在」他想。<br/>
他就這樣一鼓作氣，奮力撐起，遠行去了。與不斷流走的時間一樣，溫度也是個奇怪的存在，永恆地變幻，似凍非凍。或許讓人無所適從的，是外冷內熱張力。由荒蕪之地穿越到繁華高樓，他一邊嘗試喚醒內在的半絲慧根，一邊四處尋找有用的資訊...<br/>
「於是，就成了饕餮之徒，一直沉淪下去嗎？」<br/>
「其實...」<br/>
「不覺得悲傷嗎？」<br/>
「大概會吧。」我說。`,
    driveImageId: '1POBU73WKAu5DYyk7d0WYlZ-h4BAbESpy',
    isChinese: true,
  },
};
