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

  var a = document.createElement('a');
  a.className = 'link';
  a.href = amapUrl(it.n);
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  a.textContent = '查看位置';

  li.appendChild(label);
  li.appendChild(note);
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
        var txt = i.n + i.t + i.d + (notes[i.id] || '');
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
