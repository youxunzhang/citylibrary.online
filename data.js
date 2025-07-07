const libraryData = [
  {
    city: "北京",
    libraries: [
      {
        name: "国家图书馆",
        address: "北京市海淀区中关村南大街33号",
        phone: "010-88545426",
        website: "http://www.nlc.cn/",
        description: "中国最大的图书馆，拥有丰富的馆藏和现代化的服务设施。"
      },
      {
        name: "首都图书馆",
        address: "北京市朝阳区东三环南路88号",
        phone: "010-67358114",
        website: "http://www.clcn.net.cn/",
        description: "北京市重要的公共图书馆，服务广大市民。"
      }
    ]
  },
  {
    city: "上海",
    libraries: [
      {
        name: "上海图书馆",
        address: "上海市徐汇区淮海中路1555号",
        phone: "021-64455555",
        website: "https://www.library.sh.cn/",
        description: "中国著名的现代化大型图书馆。"
      }
    ]
  },
  {
    city: "广州",
    libraries: [
      {
        name: "广州图书馆",
        address: "广州市珠江东路4号",
        phone: "020-83836666",
        website: "https://www.gzlib.org.cn/",
        description: "位于珠江新城的现代化图书馆，建筑风格独特。"
      }
    ]
  },
  {
    city: "深圳",
    libraries: [
      {
        name: "深圳图书馆",
        address: "深圳市福田区福中路2014号",
        phone: "0755-82841200",
        website: "https://www.szlib.org.cn/",
        description: "深圳市标志性文化设施之一。"
      }
    ]
  },
  {
    city: "杭州",
    libraries: [
      {
        name: "杭州图书馆",
        address: "杭州市江干区解放东路58号",
        phone: "0571-86535000",
        website: "https://www.hzlib.net/",
        description: "杭州市重要的公共图书馆，环境优美，服务完善。"
      }
    ]
  },
  {
    city: "南京",
    libraries: [
      {
        name: "南京图书馆",
        address: "南京市玄武区中山东路189号",
        phone: "025-84356000",
        website: "https://www.jslib.org.cn/",
        description: "江苏省最大的公共图书馆，历史悠久，馆藏丰富。"
      }
    ]
  },
  {
    city: "成都",
    libraries: [
      {
        name: "成都图书馆",
        address: "成都市青羊区文翁路98号",
        phone: "028-86126155",
        website: "https://www.cdclib.org/",
        description: "成都市重要的文化设施，为市民提供优质的阅读服务。"
      }
    ]
  },
  {
    city: "武汉",
    libraries: [
      {
        name: "武汉图书馆",
        address: "武汉市江汉区建设大道861号",
        phone: "027-85718003",
        website: "https://www.whlib.org.cn/",
        description: "武汉市重要的公共图书馆，现代化设施完善。"
      }
    ]
  },
  {
    city: "西安",
    libraries: [
      {
        name: "陕西省图书馆",
        address: "西安市碑林区长安北路18号",
        phone: "029-85360000",
        website: "https://www.sxlib.org.cn/",
        description: "陕西省最大的公共图书馆，历史悠久，馆藏丰富。"
      }
    ]
  },
  {
    city: "重庆",
    libraries: [
      {
        name: "重庆图书馆",
        address: "重庆市渝中区长江一路11号",
        phone: "023-63850361",
        website: "https://www.cqlib.cn/",
        description: "重庆市重要的公共图书馆，服务山城人民。"
      }
    ]
  },
  {
    city: "天津",
    libraries: [
      {
        name: "天津图书馆",
        address: "天津市河西区平江道58号",
        phone: "022-83883600",
        website: "https://www.tjl.tj.cn/",
        description: "天津市重要的公共图书馆，现代化设施完善。"
      }
    ]
  },
  {
    city: "青岛",
    libraries: [
      {
        name: "青岛市图书馆",
        address: "青岛市市南区延吉路109号",
        phone: "0532-85013611",
        website: "https://www.qdlib.net/",
        description: "青岛市重要的公共图书馆，环境优美，服务完善。"
      }
    ]
  },
  {
    city: "大连",
    libraries: [
      {
        name: "大连图书馆",
        address: "大连市西岗区长白街7号",
        phone: "0411-83633755",
        website: "https://www.dl-library.com.cn/",
        description: "大连市重要的公共图书馆，现代化设施完善。"
      }
    ]
  },
  {
    city: "厦门",
    libraries: [
      {
        name: "厦门市图书馆",
        address: "厦门市思明区体育路95号",
        phone: "0592-5371880",
        website: "https://www.xmlib.net/",
        description: "厦门市重要的公共图书馆，环境优美，服务完善。"
      }
    ]
  },
  {
    city: "苏州",
    libraries: [
      {
        name: "苏州图书馆",
        address: "苏州市姑苏区人民路918号",
        phone: "0512-65220089",
        website: "https://www.szlib.com/",
        description: "苏州市重要的公共图书馆，现代化设施完善。"
      }
    ]
  },
  {
    city: "无锡",
    libraries: [
      {
        name: "无锡市图书馆",
        address: "无锡市梁溪区钟书路1号",
        phone: "0510-85757830",
        website: "https://www.wxlib.cn/",
        description: "无锡市重要的公共图书馆，环境优美，服务完善。"
      }
    ]
  },
  {
    city: "宁波",
    libraries: [
      {
        name: "宁波市图书馆",
        address: "宁波市海曙区永丰路135号",
        phone: "0574-87249246",
        website: "https://www.nblib.cn/",
        description: "宁波市重要的公共图书馆，现代化设施完善。"
      }
    ]
  },
  {
    city: "长沙",
    libraries: [
      {
        name: "湖南省图书馆",
        address: "长沙市开福区韶山北路169号",
        phone: "0731-84174166",
        website: "https://www.library.hn.cn/",
        description: "湖南省最大的公共图书馆，历史悠久，馆藏丰富。"
      }
    ]
  },
  {
    city: "郑州",
    libraries: [
      {
        name: "河南省图书馆",
        address: "郑州市金水区农业东路8号",
        phone: "0371-67181499",
        website: "https://www.henanlib.gov.cn/",
        description: "河南省最大的公共图书馆，现代化设施完善。"
      }
    ]
  },
  {
    city: "济南",
    libraries: [
      {
        name: "山东省图书馆",
        address: "济南市历下区二环东路2912号",
        phone: "0531-85590666",
        website: "https://www.sdlib.com/",
        description: "山东省最大的公共图书馆，历史悠久，馆藏丰富。"
      }
    ]
  },
  {
    city: "合肥",
    libraries: [
      {
        name: "安徽省图书馆",
        address: "合肥市包河区芜湖路74号",
        phone: "0551-62881000",
        website: "https://www.ahlib.com/",
        description: "安徽省最大的公共图书馆，现代化设施完善。"
      }
    ]
  },
  {
    city: "福州",
    libraries: [
      {
        name: "福建省图书馆",
        address: "福州市鼓楼区湖东路227号",
        phone: "0591-87592800",
        website: "https://www.fjlib.net/",
        description: "福建省最大的公共图书馆，历史悠久，馆藏丰富。"
      }
    ]
  },
  {
    city: "南昌",
    libraries: [
      {
        name: "江西省图书馆",
        address: "南昌市东湖区洪都北大道198号",
        phone: "0791-88508972",
        website: "https://www.jxlib.gov.cn/",
        description: "江西省最大的公共图书馆，现代化设施完善。"
      }
    ]
  },
  {
    city: "昆明",
    libraries: [
      {
        name: "云南省图书馆",
        address: "昆明市五华区翠湖南路141号",
        phone: "0871-63161650",
        website: "https://www.ynlib.cn/",
        description: "云南省最大的公共图书馆，环境优美，服务完善。"
      }
    ]
  },
  {
    city: "贵阳",
    libraries: [
      {
        name: "贵州省图书馆",
        address: "贵阳市云岩区北京路136号",
        phone: "0851-86831680",
        website: "https://www.gzlib.org.cn/",
        description: "贵州省最大的公共图书馆，现代化设施完善。"
      }
    ]
  },
  {
    city: "南宁",
    libraries: [
      {
        name: "广西壮族自治区图书馆",
        address: "南宁市青秀区民族大道61号",
        phone: "0771-5860247",
        website: "https://www.gxlib.org.cn/",
        description: "广西壮族自治区最大的公共图书馆，历史悠久，馆藏丰富。"
      }
    ]
  },
  {
    city: "海口",
    libraries: [
      {
        name: "海南省图书馆",
        address: "海口市美兰区国兴大道36号",
        phone: "0898-65231666",
        website: "https://www.hilib.com/",
        description: "海南省最大的公共图书馆，现代化设施完善。"
      }
    ]
  },
  {
    city: "拉萨",
    libraries: [
      {
        name: "西藏自治区图书馆",
        address: "拉萨市城关区北京中路10号",
        phone: "0891-6332954",
        website: "https://www.tibetlib.com/",
        description: "西藏自治区最大的公共图书馆，具有浓郁的民族特色。"
      }
    ]
  },
  {
    city: "银川",
    libraries: [
      {
        name: "宁夏回族自治区图书馆",
        address: "银川市兴庆区解放东街102号",
        phone: "0951-6021276",
        website: "https://www.nxlib.org.cn/",
        description: "宁夏回族自治区最大的公共图书馆，现代化设施完善。"
      }
    ]
  },
  {
    city: "乌鲁木齐",
    libraries: [
      {
        name: "新疆维吾尔自治区图书馆",
        address: "乌鲁木齐市沙依巴克区北京南路4号",
        phone: "0991-8559000",
        website: "https://www.xjlib.org.cn/",
        description: "新疆维吾尔自治区最大的公共图书馆，具有浓郁的民族特色。"
      }
    ]
  },
  {
    city: "呼和浩特",
    libraries: [
      {
        name: "内蒙古自治区图书馆",
        address: "呼和浩特市赛罕区乌兰察布东路15号",
        phone: "0471-6293111",
        website: "https://www.nmglib.com/",
        description: "内蒙古自治区最大的公共图书馆，具有浓郁的民族特色。"
      }
    ]
  }
]; 