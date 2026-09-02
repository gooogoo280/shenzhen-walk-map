'use strict';

var GROUPS = [
  { key: 'origin',  label: '原点热身', color: '#10b981' },
  { key: 'nanshan',  label: '南山', color: '#3b82f6' },
  { key: 'futian',   label: '福田', color: '#8b5cf6' },
  { key: 'luohu',    label: '罗湖', color: '#ef4444' },
  { key: 'yantian',  label: '盐田', color: '#0ea5e9' },
  { key: 'baoan',    label: '宝安', color: '#f59e0b' },
  { key: 'guangming',label: '光明', color: '#14b8a6' },
  { key: 'longhua',  label: '龙华', color: '#f97316' },
  { key: 'longgang', label: '龙岗', color: '#84cc16' },
  { key: 'pingshan', label: '坪山', color: '#06b6d4' },
  { key: 'dapeng',   label: '大鹏', color: '#ec4899' },
  { key: 'routes',   label: '主题路线', color: '#64748b' }
];

var ITEMS = [
  // 原点热身
  { g: 'origin', t: '训练', n: '深圳大学丽湖校区', d: '原点。先走透自己的校园：宿舍-教学-运动-食堂怎么分区，绿化与水系怎么组织。' },
  { g: 'origin', t: '山海', n: '塘朗山郊野公园', d: '最近的山，约430米。山顶能俯瞰大学城、西丽与科技园，适合建立全城方位感。' },
  { g: 'origin', t: '河流', n: '大沙河生态长廊', d: '13.7公里，长岭陂水库到深圳湾。一条河看完大学城-科技园-总部区-海湾的剖面。' },
  { g: 'origin', t: '水源', n: '西丽湖 / 西丽水库', d: '深圳重要水源地，多数岸线封闭。沿周边道路感受山-水-城的边界。' },
  { g: 'origin', t: '科教', n: '大学城组团（南科大/清华/北大/哈工大深研院）', d: '和丽湖同处西丽湖国际科教城：一个大学改变片区的活样本。' },
  { g: 'origin', t: '产业', n: '留仙洞总部基地', d: '大疆「天空之城」、中兴等总部：总部经济长什么样。' },
  { g: 'origin', t: '街市', n: '西丽老墟 / 新围村', d: '城中村：房租、烟火气与城市更新前的样本，以后对比所有城中村的基准线。' },
  { g: 'origin', t: '山海', n: '阳台山（旧称羊台山，西丽/石岩侧）', d: '深圳中部最高峰约587米。抗战时期曾掩护文化名人转移。' },
  // 南山
  { g: 'nanshan', t: '科教', n: '深大粤海校区', d: '老校区对比新校区：文山湖、荔园、深圳大学站，体会校园与城市的共生。' },
  { g: 'nanshan', t: '产业', n: '南山科技园', d: '腾讯大厦、中兴等：深圳「中国硅谷」的心脏，观察写字楼与配套。' },
  { g: 'nanshan', t: '规划', n: '深圳湾超级总部基地 / 人才公园', d: '正在生长的天际线：看一块规划用地如何逐步落地。' },
  { g: 'nanshan', t: '历史', n: '南头古城', d: '1700年古城，深港历史之根。城墙、城门、县衙，和旁边的中山公园连游。' },
  { g: 'nanshan', t: '历史', n: '中山公园（南头）', d: '深圳最早的公园之一，紧邻南头古城，适合作为古城之行的起点。' },
  { g: 'nanshan', t: '改革', n: '蛇口海上世界 / 女娲像', d: '「开山炮」的地方，改革开放起点。对比老蛇口与新蛇口。' },
  { g: 'nanshan', t: '改革', n: '招商局历史博物馆 / 蛇口网谷', d: '「时间就是金钱，效率就是生命」——特区精神的实物现场。' },
  { g: 'nanshan', t: '更新', n: '华侨城创意园 OCT-LOFT', d: '旧厂房改造：工业遗产的另一种活法。' },
  { g: 'nanshan', t: '文化', n: '世界之窗 / 锦绣中华（可选）', d: '微缩景观：反向理解「地理通」——用模型认识世界再回到真实世界。' },
  { g: 'nanshan', t: '生态', n: '深圳湾公园 / 红树林', d: '城市与湿地：看候鸟与城市天际线同框。' },
  { g: 'nanshan', t: '边界', n: '深圳湾口岸', d: '深港跨界：一地两检如何运作，看跨境人流与车流。' },
  { g: 'nanshan', t: '规划', n: '前海石公园 / 前海合作区', d: '深圳的「未来实验」：填海新城的城市肌理，和罗湖老城对比。' },
  { g: 'nanshan', t: '建筑', n: '深圳湾体育中心（春茧）', d: '2011大运会主场馆：大型赛事遗产如何被日常使用。' },
  { g: 'nanshan', t: '街市', n: '桂庙新村 / 白石洲（改造中）', d: '城中村观察：被拆之前看一眼，理解深圳的城市更新。' },
  // 福田
  { g: 'futian', t: '中轴', n: '市民中心 + 深圳博物馆（新馆）', d: '深圳的城市中轴与城市史。博物馆免费，值得反复去。' },
  { g: 'futian', t: '中轴', n: '莲花山公园 / 邓小平像', d: '山顶看CBD：特区叙事的地标，也是城市中轴线的制高点。' },
  { g: 'futian', t: '规划', n: '深圳当代艺术与城市规划馆', d: '看深圳规划展：理解城市如何被设计、被想象。' },
  { g: 'futian', t: '产业', n: '华强北', d: '电子第一街：从柜台到跨境电商的变迁，观察一个商圈的生命周期。' },
  { g: 'futian', t: '建筑', n: '平安金融中心（可选观光）', d: '深圳最高楼：登顶看全城格局，理解天际线的意义。' },
  { g: 'futian', t: '街市', n: '皇岗村 / 水围村', d: '城中村美食与宗祠：原住民与移民如何共享空间。' },
  { g: 'futian', t: '生态', n: '深圳湾公园福田段 / 红树林自然保护区', d: '与南山段对比，看同一片海湾在不同区的打开方式。' },
  { g: 'futian', t: '规划', n: '香蜜湖 / 香蜜公园', d: '曾经的游乐场变身城市公园：公共空间的迭代。' },
  { g: 'futian', t: '边界', n: '福田口岸 / 皇岗口岸', d: '24小时口岸：深港通勤观察，看边界如何被日常化。' },
  { g: 'futian', t: '文化', n: '深圳图书馆 / 音乐厅 / 中心书城', d: '城市文化设施集群，理解深圳的公共文化供给。' },
  { g: 'futian', t: '山海', n: '梅林山郊野径', d: '城市中央的山野步道：关内「绿线」与城市的关系。' },
  { g: 'futian', t: '建筑', n: '深业上城 / 莲花山-笔架山廊桥', d: '城市设计案例：商业、公园与廊桥如何缝合。' },
  // 罗湖
  { g: 'luohu', t: '历史', n: '东门老街', d: '深圳商业的起点：老字号与步行街，深圳的「昨天」。' },
  { g: 'luohu', t: '建筑', n: '国贸大厦 / 地王大厦 / 京基100', d: '三座地标看深圳高度史：从三天一层楼到600米。' },
  { g: 'luohu', t: '历史', n: '深圳博物馆古代艺术馆', d: '古代文物：深圳也有「古」，从这里重新认识岭南。' },
  { g: 'luohu', t: '街市', n: '湖贝古村', d: '深圳最老的城中村之一，改造争议的活样本。' },
  { g: 'luohu', t: '边界', n: '罗湖口岸 / 罗湖桥', d: '深港第一口岸：看出入境人流，理解「一国两制」的物理接口。' },
  { g: 'luohu', t: '改革', n: '渔民村', d: '「万元户村」到现代化社区：特区农村城市化的样本。' },
  { g: 'luohu', t: '河流', n: '深圳河 / 布吉河口', d: '界河治理：一条河如何成为边界，又如何被共同治理。' },
  { g: 'luohu', t: '山海', n: '梧桐山（罗湖侧/莲塘登山道）', d: '鹏城第一峰943.7米。罗湖侧莲塘、盐田侧秀桐道都可以登顶。' },
  { g: 'luohu', t: '生态', n: '仙湖植物园 / 弘法寺', d: '植物地理 + 宗教建筑：一个看植物，一个看信仰与空间。' },
  { g: 'luohu', t: '水源', n: '东湖公园 / 深圳水库', d: '东深供水工程终点：香港的「生命之水」从这里出发。' },
  { g: 'luohu', t: '产业', n: '笋岗-清水河', d: '曾经的「中华第一仓」：仓库区如何转型为家居与消费中心。' },
  { g: 'luohu', t: '街市', n: '向西村 / 洪湖公园', d: '夜市美食与荷花：老罗湖的生活层。' },
  // 盐田
  { g: 'yantian', t: '边界', n: '中英街', d: '一街两制。免费办证：身份证原件+官方小程序预约，通行9:00-22:00。' },
  { g: 'yantian', t: '海岸', n: '沙头角海滨栈道 / 古塔公园', d: '盐田19.5公里海滨栈道的西起点。' },
  { g: 'yantian', t: '产业', n: '盐田港', d: '世界级集装箱大港：看港口经济与城市的关系。' },
  { g: 'yantian', t: '街市', n: '盐田海鲜街', d: '吃 + 看渔船：海洋城市的生活层。' },
  { g: 'yantian', t: '海岸', n: '大梅沙海滨公园', d: '免费海滨（旺季需预约）：深圳人的海滩文化。' },
  { g: 'yantian', t: '海岸', n: '小梅沙', d: '升级重开后的海滨度假区，与对面大鹏海岸线隔湾相望。' },
  { g: 'yantian', t: '海岸', n: '揹仔角灯塔', d: '盐田栈道东端：深圳东部海岸线的一个端点。' },
  { g: 'yantian', t: '山海', n: '梅沙尖', d: '深圳第三高峰753米，南望大小梅沙与三洲田。' },
  { g: 'yantian', t: '山海', n: '梧桐山（盐田侧/秀桐道）', d: '最快登顶路线之一，下山可直达中英街一带。' },
  // 宝安
  { g: 'baoan', t: '规划', n: '宝安中心区 / 欢乐港湾', d: '湾区之光摩天轮：宝安新城样本，看看填海与造城。' },
  { g: 'baoan', t: '生态', n: '西湾红树林公园', d: '沿江高速桥下看海：深圳西海岸与航空天际线。' },
  { g: 'baoan', t: '产业', n: '深圳宝安国际机场', d: '机场观景区：航空枢纽如何带动临空经济带。' },
  { g: 'baoan', t: '历史', n: '凤凰古村', d: '文天祥后裔村落：广府古村，深圳西部的「古」。' },
  { g: 'baoan', t: '产业', n: '沙井蚝乡 / 沙井古墟', d: '千年蚝乡：特色海洋渔业地理，也是传统墟市样本。' },
  { g: 'baoan', t: '会展', n: '深圳国际会展中心（福海）', d: '世界级会展中心：会展经济如何带动一片新城。' },
  { g: 'baoan', t: '生态', n: '海上田园（可选）', d: '滩涂生态与农渔体验，理解西部滨海湿地。' },
  { g: 'baoan', t: '水源', n: '石岩湖 / 石岩老街', d: '客家与广府交界处，湖与工业区并存。' },
  { g: 'baoan', t: '河流', n: '茅洲河（松岗/碧头段）', d: '广东污染最重河流的逆袭：治水如何改变一座城。' },
  { g: 'baoan', t: '产业', n: '松岗 / 燕罗', d: '茅洲河源头与制造业小镇：关外工业区的日常。' },
  { g: 'baoan', t: '街市', n: '固戍 / 西乡老街', d: '老宝安街市：城中村、夜市与本地生活。' },
  // 光明
  { g: 'guangming', t: '科教', n: '光明科学城 / 科学公园', d: '深圳的「未来实验室」：大科学装置与城市的关系。' },
  { g: 'guangming', t: '建筑', n: '虹桥公园', d: '网红红桥：一条步道如何成为城市名片。' },
  { g: 'guangming', t: '产业', n: '光明农场大观园', d: '乳鸽、牛奶、牛初乳：农垦历史与「光明」品牌。' },
  { g: 'guangming', t: '农业', n: '光明小镇 / 欢乐田园', d: '都市农业：农田如何在城市里存活。' },
  { g: 'guangming', t: '历史', n: '公明老街 / 公明墟', d: '老墟市：广府传统商业的遗存。' },
  { g: 'guangming', t: '河流', n: '茅洲河光明段', d: '治水 + 碧道：曾经的黑臭河怎么变成公园。' },
  { g: 'guangming', t: '街市', n: '红花山公园', d: '光明老城区的生活中心。' },
  { g: 'guangming', t: '枢纽', n: '光明城站', d: '高铁站如何带动新城：对比深圳北站与福田站。' },
  // 龙华
  { g: 'longhua', t: '枢纽', n: '深圳北站 / 北站商务区', d: '高铁枢纽 + 商务区：流量如何变成城市。' },
  { g: 'longhua', t: '历史', n: '观澜版画村 / 观澜古墟', d: '客家村落 + 版画基地 + 百年墟市：龙华的文化层。' },
  { g: 'longhua', t: '河流', n: '观澜河 / 龙华河碧道', d: '河流与城市：龙华的母亲河。' },
  { g: 'longhua', t: '产业', n: '龙华富士康 / 观澜园区', d: '制造业巨头的「城中之城」：观察产城关系。' },
  { g: 'longhua', t: '产业', n: '大浪时尚小镇', d: '服装产业集聚：从代工到品牌的转型样本。' },
  { g: 'longhua', t: '山海', n: '阳台山（龙华/大浪侧）', d: '「英雄山」：东江纵队阳台山抗日根据地。' },
  { g: 'longhua', t: '历史', n: '白石龙中国文化名人大营救纪念馆', d: '香港文化名人脱险之路：深港联动的一段历史。' },
  { g: 'longhua', t: '文化', n: '深圳美术馆（新馆） / 龙华书城', d: '文化设施向「关外」下沉：公平与均衡的样本。' },
  { g: 'longhua', t: '街市', n: '龙华老墟 / 老街', d: '客家墟市与城市更新的交界。' },
  // 龙岗
  { g: 'longgang', t: '产业', n: '大芬油画村', d: '全球最大油画产业村之一：一个产业集群如何长出来。' },
  { g: 'longgang', t: '历史', n: '甘坑客家小镇', d: '客家围屋 + 文旅开发：传统村落的另一种活法。' },
  { g: 'longgang', t: '历史', n: '鹤湖新居（龙岗客家民俗博物馆）', d: '深圳最大的客家围屋之一：读懂客家人如何扎根。' },
  { g: 'longgang', t: '规划', n: '大运中心 / 大运公园', d: '2011大运会遗产：大型场馆的赛后利用。' },
  { g: 'longgang', t: '产业', n: '坂田华为基地 / 坂雪岗科技城', d: '科技制造：围绕一家企业的城市片区。' },
  { g: 'longgang', t: '边界', n: '布吉老街 / 布吉关', d: '关内关外的分界记忆：二线关拆掉后的城市。' },
  { g: 'longgang', t: '历史', n: '平湖老街 / 平湖火车站', d: '百年火车站：广九铁路与铁路小镇的记忆。' },
  { g: 'longgang', t: '河流', n: '龙岗河 / 龙园', d: '龙岗母亲河：看治水与社区公园。' },
  { g: 'longgang', t: '产业', n: '横岗眼镜城', d: '眼镜产业集聚：一个镇的全球分工。' },
  { g: 'longgang', t: '规划', n: '深圳国际低碳城（坪地）', d: '低碳实验：一个城区如何定义未来。' },
  // 坪山
  { g: 'pingshan', t: '产业', n: '坪山比亚迪总部（六角大楼）', d: '新能源巨头：制造业 + 总部 + 园区的复合体。' },
  { g: 'pingshan', t: '历史', n: '大万世居', d: '客家围屋：坪山客家历史的载体。' },
  { g: 'pingshan', t: '文化', n: '坪山美术馆 / 坪山图书馆', d: '区级文化设施的「坪山模式」：文化如何下沉。' },
  { g: 'pingshan', t: '山海', n: '马峦山郊野公园', d: '瀑布群 + 山海视野：深圳东部的自然肌理。' },
  { g: 'pingshan', t: '历史', n: '东江纵队纪念馆（东纵路）', d: '红色历史：东江纵队在坪山的重要纪念地。' },
  { g: 'pingshan', t: '科教', n: '深圳技术大学', d: '应用型大学：高等教育的另一种形态。' },
  { g: 'pingshan', t: '规划', n: '燕子湖 / 坪山中心公园', d: '新城公共空间：坪山未来城市的客厅。' },
  { g: 'pingshan', t: '历史', n: '龙田世居 / 客家围屋群', d: '更多客家围屋：坪山是深圳客家文化最密集的区之一。' },
  // 大鹏
  { g: 'dapeng', t: '历史', n: '大鹏所城', d: '六百年海防古城：深圳「鹏城」之名的来源，免费开放。' },
  { g: 'dapeng', t: '街市', n: '较场尾', d: '民宿村：海岸线文旅经济的一个样本。' },
  { g: 'dapeng', t: '山海', n: '杨梅坑 / 鹿嘴', d: '《美人鱼》取景地：海蚀地貌与海岸线。' },
  { g: 'dapeng', t: '山海', n: '东西涌海岸线穿越', d: '深圳最美海岸徒步（约8公里，查潮汐、量力而行）。' },
  { g: 'dapeng', t: '山海', n: '大鹏半岛国家地质公园 / 七娘山', d: '火山地貌博物馆 + 深圳第二高峰869.7米。' },
  { g: 'dapeng', t: '街市', n: '南澳渔港', d: '渔村 + 海鲜市场：海洋渔业的日常。' },
  { g: 'dapeng', t: '历史', n: '东江纵队司令部旧址（葵涌土洋）', d: '红色遗址：司令部曾设于土洋村。' },
  { g: 'dapeng', t: '历史', n: '沙鱼涌', d: '古港 + 海战遗址：大鹏半岛的旧航运记忆。' },
  { g: 'dapeng', t: '生态', n: '坝光古银叶树保护区', d: '红树林湿地：深圳东部最古老的红树群落之一。' },
  { g: 'dapeng', t: '海岸', n: '西涌海滩', d: '曾被《国家地理》提名的中国最美海滩之一。' },
  // 主题路线
  { g: 'routes', t: '路线', n: '深南大道全程（25.6公里）', d: '骑行4-5小时或分三段逐段走：从罗湖老城到南山科技园的城市史长卷。' },
  { g: 'routes', t: '路线', n: '深圳湾滨海休闲带（约15公里）', d: '骑行2-3小时：红树林 → 深圳湾公园 → 人才公园 → 蛇口。' },
  { g: 'routes', t: '路线', n: '大沙河生态长廊（13.7公里）', d: '骑行1.5-2小时：长岭陂水库到深圳湾，一条河看完城市剖面。' },
  { g: 'routes', t: '路线', n: '盐田海滨栈道（19.5公里）', d: '分两段走：中英街 → 盐田港 → 大小梅沙 → 揹仔角。' },
  { g: 'routes', t: '路线', n: '二线关遗迹之旅', d: '南头关、同乐关、梅林关、布吉关：特区边界的记忆（1982-2018）。' },
  { g: 'routes', t: '路线', n: '地铁1号线全程', d: '罗湖到机场东：深圳第一条地铁，沿线即城市史。' },
  { g: 'routes', t: '路线', n: '地铁4号线全程', d: '福田口岸到牛湖：口岸-福田-龙华-观澜的城市中轴延伸。' },
  { g: 'routes', t: '路线', n: '客家围屋之旅', d: '大万世居 → 鹤湖新居 → 甘坑 → 观澜版画村：读懂客家迁徙与扎根。' },
  { g: 'routes', t: '路线', n: '古城古村之旅', d: '南头古城 → 凤凰古村 → 大鹏所城 → 沙鱼涌：深圳的「古」在四角。' },
  { g: 'routes', t: '路线', n: '城中村美食之旅', d: '桂庙新村 → 白石洲 → 皇岗 → 水围 → 湖贝 → 向西村：傍晚出没。' },
  { g: 'routes', t: '路线', n: '科技产业之旅', d: '华强北 → 南山科技园 → 留仙洞 → 坂田华为 → 光明科学城。' },
  { g: 'routes', t: '路线', n: '港口与枢纽之旅', d: '蛇口港 → 深圳湾口岸 → 盐田港 → 宝安机场 → 深圳北站。' },
  { g: 'routes', t: '路线', n: '深圳十峰挑战', d: '梧桐山943.7m → 七娘山869.7m → 梅沙尖753m → 阳台山587m → 塘朗山430m…每月1-2座。' },
  { g: 'routes', t: '路线', n: '深汕特别合作区（进阶）', d: '高铁到鲘门：深圳的「飞地」，小漠湾与鲘门，理解区域协调。' }
];

ITEMS.forEach(function (it, idx) { it.id = 'i' + idx; });

var ASPECT_ORDER = ['地理', '水利', '工程与建筑', '交通', '产业与供应链', '历史人文', '观察提示'];

var EXP = {
  '深圳大学丽湖校区': {
    '工程与建筑': '2017年起陆续启用的新校园，采用书院式组团布局，教学、宿舍、运动区由连廊和环形路网连接，人工水系与绿地兼顾景观与雨水调蓄。',
    '交通': '地铁5号线塘朗站B口步行约900米；2024年12月开通的7号线二期直达“深大丽湖站”。',
    '观察提示': '把它当“大学规划”教材：对比教学区与生活区的距离、食堂分布、夜间人流，想想为什么这样设计。'
  },
  '塘朗山郊野公园': {
    '地理': '海拔约430米，是深圳中心城区少有的完整山体，北望阳台山、南望深圳湾，是建立全城方位感的最佳观测点。',
    '水利': '山体是长岭陂、西丽等水库的重要水源涵养区，雨天可以观察雨水如何汇入山谷溪流。',
    '观察提示': '在山顶找到三条线索：北边的山、南边的海、东西向的城市中轴，然后把它们在地图上连起来。'
  },
  '大沙河生态长廊': {
    '水利': '发源于羊台山一带，纵贯南山注入深圳湾，曾是城市排洪渠，2018年起生态化改造为13.7公里碧道，是“治水+城市更新”的活教材。',
    '工程与建筑': '采用生态驳岸、湿地、跌水曝气等工程手段，沿河桥、闸、驿站串联成完整的慢行系统。',
    '观察提示': '从长岭陂骑到深圳湾，数一数河上跨了多少座桥，记录两岸建筑从大学城到总部区的变化。'
  },
  '西丽湖 / 西丽水库': {
    '水利': '深圳重要饮用水源地之一，库区实行封闭式水源保护管理，大部分岸线不可进入。',
    '观察提示': '沿外围道路观察保护设施（围栏、警示牌、检查站），思考“城市的水从哪来、谁来保护它”。'
  },
  '大学城组团（南科大/清华/北大/哈工大深研院）': {
    '交通': '地铁5号线塘朗站、7号线二期北大站和深大丽湖站，加上密集公交，构成“大学城-科技园”的轨道走廊。',
    '历史人文': '南科大、清华/北大/哈工大深圳研究生院与深大丽湖校区聚集在几平方公里内，是少见的“校区+园区”融合样本。',
    '观察提示': '对比高校周边业态（餐饮、租房、书店）与普通社区的区别，看大学如何改变一个片区。'
  },
  '留仙洞总部基地': {
    '产业与供应链': '深圳总部经济集聚区之一，大疆“天空之城”（2022年启用）、中兴等总部在此，周边配套研发、设计、供应链服务。',
    '工程与建筑': '大疆总部“天空之城”以巨型桁架和悬挂式办公空间著称，是近年深圳最有辨识度的新地标之一。',
    '观察提示': '观察总部大楼的安保、地下车库和周边小店，思考“总部”和“工厂”在城市里的不同位置。'
  },
  '西丽老墟 / 新围村': {
    '历史人文': '城中村是深圳移民史最直观的档案：宗祠、出租屋、夜宵摊共存，人口高度流动。',
    '观察提示': '记录租金价位、店铺业态和一天中的人流曲线，这是理解深圳“2000万人如何居住”的样本。'
  },
  '阳台山（旧称羊台山，西丽/石岩侧）': {
    '地理': '海拔约587米，横跨南山、宝安、龙华交界，山体是深圳中部与西部的地理分界。',
    '水利': '山麓分布石岩湖等水库，是西部重要的水源地。',
    '历史人文': '抗战时期东江纵队曾以此为根据地，并参与“文化名人大营救”。',
    '观察提示': '登顶后看山两侧的城市密度差异，体会“城在山水之间”的格局。'
  },
  '南头古城': {
    '历史人文': '有1700余年建制史，明清时期是新安县城，管辖范围曾涵盖今香港，是深港两地共同的“母城”。',
    '工程与建筑': '保留城门、城墙基址、县衙与岭南民居，近年以“城市更新+文化植入”方式改造，新旧建筑并置。',
    '观察提示': '对比古建与新业态（展览馆、文创店）如何共处，感受老城街道尺度与今天新城的差异。'
  },
  '蛇口海上世界 / 女娲像': {
    '历史人文': '1979年蛇口炸山填海，打响改革开放“第一炮”，招商局在此建设深圳第一个工业区，“时间就是金钱，效率就是生命”诞生于此。',
    '工程与建筑': '主体“明华轮”是1960年代法国建造的远洋客轮，退役后固定岸边成为地标。',
    '观察提示': '沿女娲像走到海上世界，对比老蛇口渔港与新蛇口写字楼，看一个“试验田”如何长成城市。'
  },
  '深圳湾超级总部基地 / 人才公园': {
    '规划': '深圳湾超级总部基地是整体规划的“全球城市会客厅”，楼宇限高、天际线与地下空间统一设计，正在逐年长高。',
    '工程': '深圳湾一带多为填海而成，人才公园建在填海地上，体现“海-城-人”的关系。',
    '观察提示': '每半年去一次，记录在建楼宇的高度变化，看一座CBD如何从图纸变成现实。'
  },
  '前海石公园 / 前海合作区': {
    '地理': '位于珠江口东岸，多为填海区，曾是滩涂和蚝田。',
    '规划': '前海深港现代服务业合作区，主打金融、法律、专业服务开放试验，被称为“特区中的特区”。',
    '观察提示': '对比前海的街道尺度、楼宇命名与老城区，感受“一块白纸上的城市规划”。'
  },
  '深圳湾公园 / 红树林': {
    '生态': '深圳湾是东亚—澳大利西亚候鸟迁徙路线上的重要驿站，冬季可见黑脸琵鹭等珍稀候鸟。',
    '工程': '滨海栈道与红树林保护区相邻，体现“生态保护与市民休闲”的平衡。',
    '观察提示': '看潮汐线、候鸟、对岸香港的山影和身后的CBD同框，这是深圳“山海城”格局的缩影。'
  },
  '华侨城创意园 OCT-LOFT': {
    '历史人文': '由上世纪80年代沙河工业区旧厂房改造而来，2000年代中期转型为文创园区，是深圳最早的旧工业建筑活化样本之一。',
    '工程与建筑': '保留厂房桁架、旧机器与红砖肌理，植入美术馆、设计工作室和咖啡店。',
    '观察提示': '找找建筑上残留的厂房时代痕迹，思考“旧空间如何装下新产业”。'
  },
  '市民中心 + 深圳博物馆（新馆）': {
    '工程与建筑': '市民中心屋顶形似大鹏展翅，正好呼应“鹏城”之名；它连同莲花山、会展中心构成城市中轴线。',
    '历史人文': '深圳博物馆新馆系统讲述“从宝安县到经济特区”的完整历史，是补课最快的地方。',
    '观察提示': '站在中轴线上向北看莲花山、向南看会展中心，体会“轴线”如何组织一座城市。'
  },
  '莲花山公园 / 邓小平像': {
    '历史人文': '山顶邓小平铜像面向市民中心，是深圳特区叙事最重要的地标之一。',
    '地理': '山体不高但位于福田中心，是城市中轴线的“靠山”。',
    '观察提示': '从山顶沿中轴线数出市民中心、平安金融中心、会展中心，建立福田的方位坐标。'
  },
  '华强北': {
    '产业与供应链': '全球知名的电子元器件集散地，从柜台批发到跨境电商，元器件、方案、组装、物流在此形成一条完整链条。',
    '交通': '地铁1、2、3、7号线在华强北交汇，人流即商流。',
    '观察提示': '看档口招牌、拉货小哥和维修柜台，思考“一个柜台背后是一整条供应链”。'
  },
  '深圳当代艺术与城市规划馆': {
    '工程与建筑': '双馆合一的独特建筑，内部空间极具张力，本身就是建筑展品。',
    '规划': '常设深圳城市规划展，从特区成立讲到2035规划，是理解“深圳为什么长这样”的权威入口。',
    '观察提示': '重点看城市总规模型和交通规划图，然后找一座你熟悉的地标验证模型与现实。'
  },
  '东门老街': {
    '历史人文': '深圳商业的原点，明代以来逐渐成墟，老字号与步行街并存。',
    '观察提示': '分辨哪些是老字号、哪些是新连锁，看一条数百年商业街如何迭代。'
  },
  '国贸大厦 / 地王大厦 / 京基100': {
    '工程与建筑': '国贸大厦1985年以“三天一层楼”创下深圳速度；地王大厦是90年代华南地标；京基100以441.8米曾为深圳第一高楼。三座楼就是一部深圳高度史。',
    '观察提示': '站在深南东路看三栋楼的位置关系，理解“地标迁移=城市中心迁移”。'
  },
  '罗湖口岸 / 罗湖桥': {
    '历史人文': '罗湖桥有百年历史，是广九铁路与深港陆路往来的起点，罗湖口岸是内地与香港之间最繁忙的口岸之一。',
    '交通': '口岸连接深圳地铁1号线与香港东铁线，是“轨道上的深港”最直观的接口。',
    '观察提示': '观察过关人流和口岸商业（换汇、免税店、行李箱），理解“流量经济”。'
  },
  '梧桐山（罗湖侧/莲塘登山道）': {
    '地理': '海拔943.7米，深圳最高峰，大梧桐与小梧桐山脊相连，花岗岩山体陡峭。',
    '水利': '山体溪流汇入深圳水库，是东深供水体系的一部分，深港供水同源。',
    '观察提示': '登顶后环视深圳湾、盐田港与香港群山，建立“深圳在山水之间”的整体印象。'
  },
  '东湖公园 / 深圳水库': {
    '水利': '深圳水库是东深供水工程的终点，1965年起向香港供水，是“香港生命之水”的关键节点。',
    '历史人文': '东湖公园是深圳最早的公园之一，承载老深圳人的周末记忆。',
    '观察提示': '沿水库边看保护设施与供水脉络，理解“一座城的水利史”。'
  },
  '中英街': {
    '历史人文': '1898年《展拓香港界址专条》后，沙头角被一分为二，中英街成为“一街两制”的活化石，界碑立在街心。',
    '交通': '进入需提前预约，到办证中心免费取证，通行时间9:00-22:00，需带身份证原件。',
    '观察提示': '数一数街上的界碑，对比街两侧的店铺与氛围，思考“边界”对一座城市的意义。'
  },
  '盐田港': {
    '产业与供应链': '世界级集装箱枢纽港之一，是珠三角制造与全球贸易之间的关键节点，货物经平盐铁路和疏港公路集散。',
    '工程与建筑': '港区可见巨型桥吊、堆场与万吨货轮，“港-城关系”是观察重点。',
    '观察提示': '记录集装箱上的船公司标志，看进港货柜车流，理解“供应链的第一公里和最后一公里”。'
  },
  '大梅沙海滨公园': {
    '地理': '大鹏湾畔的沙质海滩，背后是梧桐山脉，山海相接。',
    '观察提示': '对比旺季与淡季的人流，观察海滩管理和商业配套，思考“免费公共海滩如何运营”。'
  },
  '深圳宝安国际机场': {
    '工程与建筑': '航站楼呈“飞鱼”造型，指廊式布局，跑道平行珠江口，起降方向常随风向调整。',
    '产业与供应链': '机场是深圳的航空货运门户，腹地制造业的快件由此进出，临空经济带（物流园、货站）环绕周边。',
    '观察提示': '在机场周边找观景位看飞机起降，留意客机与货机的比例。'
  },
  '沙井蚝乡 / 沙井古墟': {
    '历史人文': '沙井有近千年养蚝史，“蚝”融入本地人的生活、建筑与文化，老建筑常见蚝壳砌墙。',
    '产业与供应链': '从蚝田养殖、蚝油加工到餐饮，“一只蚝”串起一整条产业链。',
    '观察提示': '找蚝壳墙，去古墟看传统交易空间，理解“特产如何塑造地方”。'
  },
  '凤凰古村': {
    '历史人文': '相传为文天祥后裔聚居的广府古村，祠堂、古井、青砖瓦房保存较好。',
    '工程与建筑': '岭南传统村落的梳式布局，巷道狭窄、前塘后村。',
    '观察提示': '对比古村与旁边的新城，看“老村如何被新城包围”。'
  },
  '茅洲河（松岗/碧头段）': {
    '水利': '茅洲河是深圳最长的河流之一，曾被称为全省污染最严重的河流之一；2016年起大规模治理，如今是碧道与生态岸线。',
    '工程': '截污、清淤、生态驳岸、雨污分流是治水的核心工程。',
    '观察提示': '看现在的鱼鸟与河岸，想象它十年前的样子，理解“治水=城市更新”。'
  },
  '光明科学城 / 科学公园': {
    '规划': '深圳布局的国家级科学城，聚集合成生物、脑科学等重大科技基础设施和科研机构，是“未来产业”的试验场。',
    '产业与供应链': '大科学装置—科研院所—孵化器—企业的链条正在形成，园区建设肉眼可见。',
    '观察提示': '留意工地围挡上的项目名称和入驻机构，记录一个科学城从图纸到运行的过程。'
  },
  '茅洲河光明段': {
    '水利': '茅洲河上游在光明境内，治理后建成碧道，是光明“治水+休闲”的样板段。',
    '观察提示': '沿碧道观察河岸植物、步道设施与周边社区，思考河流如何重新成为生活的一部分。'
  },
  '光明农场大观园': {
    '历史人文': '源自农垦系统的光明农场是深圳的“奶瓶子”，乳鸽、牛奶、牛初乳成为地方名片。',
    '产业与供应链': '从牧场、加工厂到餐桌的链条，是“都市农业”的活样本。',
    '观察提示': '对比农场片区与旁边科学城的气质差异，看“农业地”如何变成“科学城”。'
  },
  '深圳北站 / 北站商务区': {
    '交通': '深圳最大的高铁枢纽之一，接驳广深港高铁等线路，地铁4、5、6号线在此换乘，是“轨道上的大湾区”节点。',
    '工程与建筑': '站房、高架落客、地下地铁与商业综合体一体设计。',
    '观察提示': '观察高铁客流方向与北站商务区的写字楼密度，思考“枢纽如何变成城市”。'
  },
  '观澜版画村 / 观澜古墟': {
    '历史人文': '客家古村与版画产业结合，中国版画博物馆坐落于此，是“传统村落+文化产业”的样本。',
    '工程与建筑': '保留客家排屋、碉楼与水塘，村落格局清晰。',
    '观察提示': '找碉楼和祠堂，对比古村肌理与周边工业区。'
  },
  '龙华富士康 / 观澜园区': {
    '产业与供应链': '富士康龙华/观澜园区是全球电子代工体系的重要节点，数十万人规模的厂区与配套生活区构成“城中之城”。',
    '交通': '上下班高峰的地铁、公交与班车是观察“产业人口”的最佳时间。',
    '观察提示': '在非高峰时间看厂区周边业态（食堂、宿舍、小店），理解制造工厂如何组织一座“小城市”。'
  },
  '大芬油画村': {
    '产业与供应链': '上世纪80年代末起步的油画复制产业村，画工、画商、画廊、材料店聚集，订单从海外画廊到本地画室，构成完整“艺术供应链”。',
    '历史人文': '从临摹到原创，大芬是“艺术如何变成生意”的典型案例。',
    '观察提示': '走进画室看流水线作业，对比出口订单画与原创画的价格逻辑。'
  },
  '鹤湖新居（龙岗客家民俗博物馆）': {
    '工程与建筑': '深圳现存规模最大的客家围屋之一，前有禾坪水塘、内有炮楼祠堂，是客家人“聚族而居+防御”的实体教科书。',
    '历史人文': '龙岗客家民俗博物馆设于此，展示客家人迁徙与扎根深圳的历史。',
    '观察提示': '数一数围屋的房间与炮楼位置，思考“一个家族怎么生活、怎么防御”。'
  },
  '甘坑客家小镇': {
    '历史人文': '客家古村落经文旅改造为小镇，保留炮楼、排屋与客家凉帽文化。',
    '观察提示': '区分哪些是原生建筑、哪些是商业复建，思考文旅开发对老村的影响。'
  },
  '坪山比亚迪总部（六角大楼）': {
    '产业与供应链': '比亚迪总部设于坪山，以电池起家、垂直整合整车产业链，六角大楼是标志性建筑。',
    '观察提示': '看园区规模、试车场与周边配套，理解“一家龙头企业如何带动一座城区”。'
  },
  '大万世居': {
    '工程与建筑': '两百多年历史的客家围屋，坪山客家文化的代表，四角炮楼、中央祠堂格局完整。',
    '观察提示': '对比大万世居与鹤湖新居的规模与保存状态，建立“客家围屋”的空间印象。'
  },
  '马峦山郊野公园': {
    '地理': '深圳东部山地，溪谷与瀑布群是特色，是离市区最近的“野趣”山体之一。',
    '观察提示': '沿溪谷观察瀑布与岩石，理解深圳东部“山-水-海”的格局。'
  },
  '大鹏所城': {
    '历史人文': '始建于1394年（明洪武二十七年）的海防卫所，深圳别称“鹏城”即源于此，抗英名将赖恩爵故居在此。',
    '工程与建筑': '城墙、城门、将军第与古街格局完整，是深圳现存最重要的古城。',
    '观察提示': '找城墙砖上的铭文和将军第门额，感受六百年海防史。'
  },
  '东西涌海岸线穿越': {
    '地理': '大鹏半岛东南海岸，海蚀地貌典型，礁石、海蚀洞、海崖构成约8公里穿越线路，被称为深圳最美海岸线。',
    '观察提示': '穿越前查潮汐，途中观察海浪侵蚀的痕迹，思考海岸线如何塑造大鹏。'
  },
  '大鹏半岛国家地质公园 / 七娘山': {
    '地理': '七娘山海拔869.7米，是深圳第二高峰，大鹏半岛国家地质公园展示火山岩与海岸地貌。',
    '观察提示': '山顶可见大亚湾与大鹏湾两湾同框，是理解“半岛”地形的最佳视角。'
  },
  '深南大道全程（25.6公里）': {
    '方法': '25.6公里一路向西，等于把深圳城市史重走一遍：罗湖老城—福田中轴—南山新城。',
    '观察提示': '分段下车步行，记录每段的建筑年代与产业类型，做成一张“城市年表”。'
  },
  '二线关遗迹之旅': {
    '历史人文': '1982年设立的深圳经济特区管理线（二线关）于2018年撤销，“关内关外”曾深刻影响城市发展。',
    '观察提示': '寻找南头关、同乐关、梅林关等关口的残留建筑与地名，思考边界如何塑造了今天的深圳。'
  },
  '客家围屋之旅': {
    '历史人文': '客家人自明清迁入深圳，东部（龙岗、坪山）留下大量围屋，是理解深圳“原住民”的钥匙。',
    '观察提示': '按大万世居—鹤湖新居—甘坑—观澜的顺序，对比不同围屋的规模、保存与再利用方式。'
  }
};

var MARKERS = [
  { g: 'origin',  label: '深大丽湖', lat: 22.588, lng: 113.997 },
  { g: 'nanshan', label: '南山', lat: 22.515, lng: 113.929 },
  { g: 'futian',  label: '福田', lat: 22.543, lng: 114.057 },
  { g: 'luohu',   label: '罗湖', lat: 22.546, lng: 114.118 },
  { g: 'yantian', label: '盐田', lat: 22.557, lng: 114.236 },
  { g: 'baoan',   label: '宝安', lat: 22.556, lng: 113.882 },
  { g: 'guangming', label: '光明', lat: 22.749, lng: 113.936 },
  { g: 'longhua', label: '龙华', lat: 22.610, lng: 114.030 },
  { g: 'longgang', label: '龙岗', lat: 22.720, lng: 114.248 },
  { g: 'pingshan', label: '坪山', lat: 22.690, lng: 114.348 },
  { g: 'dapeng',  label: '大鹏', lat: 22.600, lng: 114.498 },
  // 地标锚点
  { g: 'nanshan', label: '南头古城', lat: 22.5327, lng: 113.9222, anchor: true },
  { g: 'futian',  label: '市民中心', lat: 22.543, lng: 114.057, anchor: true },
  { g: 'luohu',   label: '东门老街', lat: 22.5465, lng: 114.1183, anchor: true },
  { g: 'luohu',   label: '梧桐山', lat: 22.580, lng: 114.215, anchor: true },
  { g: 'yantian', label: '中英街', lat: 22.5485, lng: 114.225, anchor: true },
  { g: 'yantian', label: '盐田港', lat: 22.571, lng: 114.271, anchor: true },
  { g: 'baoan',   label: '宝安机场', lat: 22.639, lng: 113.812, anchor: true },
  { g: 'longhua', label: '深圳北站', lat: 22.6105, lng: 114.0289, anchor: true },
  { g: 'longgang', label: '大芬油画村', lat: 22.612, lng: 114.134, anchor: true },
  { g: 'dapeng',  label: '大鹏所城', lat: 22.6000, lng: 114.4980, anchor: true }
];

var G = {};
GROUPS.forEach(function (x) { G[x.key] = x; });

var state = { group: 'all', q: '' };
var done = new Set();
var notes = {};
try {
  var raw = localStorage.getItem('walk-sz-done');
  if (raw) { done = new Set(JSON.parse(raw)); }
} catch (e) { /* ignore */ }
try {
  var rawNotes = localStorage.getItem('walk-sz-notes');
  if (rawNotes) { notes = JSON.parse(rawNotes); }
} catch (e) { /* ignore */ }

var total = ITEMS.length;
var map = null;

function $(id) { return document.getElementById(id); }

function saveDone() {
  try { localStorage.setItem('walk-sz-done', JSON.stringify(Array.from(done))); } catch (e) { /* ignore */ }
}

function saveNotes() {
  try { localStorage.setItem('walk-sz-notes', JSON.stringify(notes)); } catch (e) { /* ignore */ }
}

function notesCount() {
  var c = 0;
  for (var k in notes) {
    if (notes[k] && String(notes[k]).trim()) { c += 1; }
  }
  return c;
}

function updateNotesCount() {
  var el = $('notesCnt');
  if (el) { el.textContent = '笔记 ' + notesCount() + ' / ' + total; }
}

function countFor(g) {
  return ITEMS.filter(function (i) { return i.g === g; }).length;
}

function doneFor(g) {
  return ITEMS.filter(function (i) { return i.g === g && done.has(i.id); }).length;
}

function amapUrl(n) {
  return 'https://www.amap.com/search?query=' + encodeURIComponent(n + ' 深圳');
}

function updateProgress() {
  var n = done.size;
  $('cnt').textContent = n + ' / ' + total;
  $('fill').style.width = (total ? (n / total * 100) : 0) + '%';
}

function renderTabs() {
  var tabs = $('tabs');
  tabs.textContent = '';
  var defs = [{ key: 'all', label: '全部' }].concat(GROUPS);
  defs.forEach(function (d) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'tab';
    b.setAttribute('aria-pressed', state.group === d.key ? 'true' : 'false');
    b.textContent = d.label;
    if (d.key !== 'all') {
      var span = document.createElement('span');
      span.className = 'n';
      span.textContent = doneFor(d.key) + '/' + countFor(d.key);
      b.appendChild(span);
    }
    b.addEventListener('click', function () { selectTab(d.key); });
    tabs.appendChild(b);
  });
}

function itemRow(it, grp) {
  var li = document.createElement('li');
  li.style.setProperty('--note-c', grp.color);
  var cls = [];
  if (done.has(it.id)) { cls.push('done'); }
  if (notes[it.id] && String(notes[it.id]).trim()) { cls.push('has-note'); }
  li.className = cls.join(' ');

  var label = document.createElement('label');
  var cb = document.createElement('input');
  cb.type = 'checkbox';
  cb.checked = done.has(it.id);
  cb.addEventListener('change', function () {
    if (cb.checked) { done.add(it.id); } else { done.delete(it.id); }
    li.classList.toggle('done', cb.checked);
    saveDone();
    updateProgress();
    renderTabs();
  });

  var body = document.createElement('div');
  body.className = 'body';
  var hd = document.createElement('div');
  hd.className = 'hd';
  var nm = document.createElement('span');
  nm.className = 'nm';
  nm.textContent = it.n;
  var tag = document.createElement('span');
  tag.className = 'tag';
  tag.textContent = it.t;
  tag.style.setProperty('--tagc', grp.color);
  hd.appendChild(nm);
  hd.appendChild(tag);
  var ds = document.createElement('div');
  ds.className = 'ds';
  ds.textContent = it.d;
  body.appendChild(hd);
  body.appendChild(ds);

  label.appendChild(cb);
  label.appendChild(body);

  var note = document.createElement('textarea');
  note.className = 'note';
  note.rows = 2;
  note.placeholder = '记录你的发现、路线、美食、心情…（自动保存）';
  note.value = notes[it.id] || '';
  note.addEventListener('input', function () {
    notes[it.id] = this.value;
    if (this.value.trim()) {
      li.classList.add('has-note');
    } else {
      li.classList.remove('has-note');
    }
    saveNotes();
    updateNotesCount();
  });

  var xp = EXP[it.n];
  var xpBtn = null;
  var xpPanel = null;
  if (xp) {
    xpBtn = document.createElement('button');
    xpBtn.type = 'button';
    xpBtn.className = 'xp-toggle';
    xpBtn.setAttribute('aria-expanded', 'false');
    xpBtn.textContent = '讲解 ▸';
    xpPanel = document.createElement('div');
    xpPanel.className = 'xp-panel';
    xpPanel.style.display = 'none';
    ASPECT_ORDER.forEach(function (k) {
      if (!xp[k]) { return; }
      var row = document.createElement('div');
      row.className = 'xp-row';
      var kk = document.createElement('span');
      kk.className = 'xk';
      kk.textContent = k;
      var vv = document.createElement('span');
      vv.className = 'xv';
      vv.textContent = xp[k];
      row.appendChild(kk);
      row.appendChild(vv);
      xpPanel.appendChild(row);
    });
    xpBtn.addEventListener('click', function () {
      var open = xpPanel.style.display !== 'none';
      xpPanel.style.display = open ? 'none' : 'block';
      xpBtn.setAttribute('aria-expanded', open ? 'false' : 'true');
      xpBtn.textContent = open ? '讲解 ▸' : '讲解 ▾';
    });
  }

  var a = document.createElement('a');
  a.className = 'link';
  a.href = amapUrl(it.n);
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  a.textContent = '查看位置';

  li.appendChild(label);
  li.appendChild(note);
  if (xpBtn) {
    li.appendChild(xpBtn);
    li.appendChild(xpPanel);
  }
  li.appendChild(a);
  return li;
}

function renderList() {
  var list = $('list');
  list.textContent = '';
  var groups = state.group === 'all' ? GROUPS : GROUPS.filter(function (x) { return x.key === state.group; });
  var visible = 0;
  var q = state.q.trim().toLowerCase();

  groups.forEach(function (grp) {
    var items = ITEMS.filter(function (i) { return i.g === grp.key; });
    if (q) {
      items = items.filter(function (i) {
        var xpTxt = '';
        if (EXP[i.n]) { xpTxt = JSON.stringify(EXP[i.n]); }
        var txt = i.n + i.t + i.d + (notes[i.id] || '') + xpTxt;
        return txt.toLowerCase().indexOf(q) !== -1;
      });
    }
    if (!items.length) { return; }

    var h = document.createElement('div');
    h.className = 'group';
    h.style.setProperty('--tagc', grp.color);
    h.textContent = grp.label;
    var sub = document.createElement('span');
    sub.className = 'gsub';
    sub.textContent = '已完成 ' + doneFor(grp.key) + ' / ' + countFor(grp.key);
    h.appendChild(sub);
    list.appendChild(h);

    var ul = document.createElement('ul');
    items.forEach(function (it) { ul.appendChild(itemRow(it, grp)); });
    list.appendChild(ul);
    visible += items.length;
  });

  if (!visible) {
    var p = document.createElement('p');
    p.className = 'empty';
    p.textContent = '没有匹配的站点，换个关键词试试。';
    list.appendChild(p);
  }
  updateProgress();
  updateNotesCount();
}

function selectTab(key) {
  state.group = key;
  state.q = '';
  $('search').value = '';
  renderTabs();
  renderList();
}

function initMap() {
  if (typeof L === 'undefined') { return; }
  map = L.map('map');
  L.tileLayer('https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}', {
    subdomains: ['1', '2', '3', '4'],
    maxZoom: 18,
    attribution: '&copy; 高德地图'
  }).addTo(map);
  L.tileLayer('https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}', {
    subdomains: ['1', '2', '3', '4'],
    maxZoom: 18
  }).addTo(map);

  var pts = MARKERS.map(function (m) { return [m.lat, m.lng]; });
  MARKERS.forEach(function (m) {
    var grp = G[m.g];
    var mk = L.circleMarker([m.lat, m.lng], {
      radius: m.anchor ? 7 : 11,
      color: '#ffffff',
      weight: 1.5,
      fillColor: grp.color,
      fillOpacity: 0.92
    });
    mk.bindTooltip(m.label, { direction: 'top' });
    mk.on('click', function () {
      selectTab(m.g);
      var listEl = $('list');
      if (listEl) { listEl.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
    mk.addTo(map);
  });
  map.fitBounds(L.latLngBounds(pts).pad(0.1));
}

$('reset').addEventListener('click', function () {
  if (!window.confirm('确定清空所有打卡和笔记记录吗？')) { return; }
  done = new Set();
  notes = {};
  saveDone();
  saveNotes();
  renderTabs();
  renderList();
});

$('search').addEventListener('input', function () {
  state.q = this.value;
  renderList();
});

renderTabs();
renderList();
updateNotesCount();
initMap();
