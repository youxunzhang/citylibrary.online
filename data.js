const libraryData = [
  {
    city: "Beijing",
    libraries: [
      {
        name: "National Library of China",
        address: "33 Zhongguancun South Street, Haidian District, Beijing",
        phone: "010-88545426",
        website: "http://www.nlc.cn/",
        description: "China's largest library with rich collections and modern service facilities."
      },
      {
        name: "Capital Library",
        address: "88 East Third Ring South Road, Chaoyang District, Beijing",
        phone: "010-67358114",
        website: "http://www.clcn.net.cn/",
        description: "An important public library in Beijing serving the general public."
      },
      {
        name: "Peking University Library",
        address: "5 Yiheyuan Road, Haidian District, Beijing",
        phone: "010-62751051",
        website: "https://lib.pku.edu.cn/",
        description: "Peking University Library with a long history and rich collections."
      },
      {
        name: "Tsinghua University Library",
        address: "1 Tsinghua Garden, Haidian District, Beijing",
        phone: "010-62782137",
        website: "https://lib.tsinghua.edu.cn/",
        description: "Tsinghua University Library with modern facilities."
      },
      {
        name: "Renmin University of China Library",
        address: "59 Zhongguancun Street, Haidian District, Beijing",
        phone: "010-62511373",
        website: "https://lib.ruc.edu.cn/",
        description: "Renmin University Library with rich humanities and social sciences collections."
      },
      {
        name: "Beijing Normal University Library",
        address: "19 Xinjiekou Outer Street, Haidian District, Beijing",
        phone: "010-58806113",
        website: "https://lib.bnu.edu.cn/",
        description: "Beijing Normal University Library with rich educational literature."
      },
      {
        name: "Beijing Institute of Technology Library",
        address: "5 Zhongguancun South Street, Haidian District, Beijing",
        phone: "010-68914263",
        website: "https://lib.bit.edu.cn/",
        description: "Beijing Institute of Technology Library with rich science and engineering collections."
      },
      {
        name: "Beihang University Library",
        address: "37 Xueyuan Road, Haidian District, Beijing",
        phone: "010-82317024",
        website: "https://lib.buaa.edu.cn/",
        description: "Beihang University Library with aerospace literature specialties."
      }
    ]
  },
  {
    city: "Shanghai",
    libraries: [
      {
        name: "Shanghai Library",
        address: "1555 Huaihai Middle Road, Xuhui District, Shanghai",
        phone: "021-64455555",
        website: "https://www.library.sh.cn/",
        description: "A famous modern large-scale library in China."
      },
      {
        name: "Fudan University Library",
        address: "220 Handan Road, Yangpu District, Shanghai",
        phone: "021-65642222",
        website: "https://www.library.fudan.edu.cn/",
        description: "Fudan University Library, a comprehensive university library."
      },
      {
        name: "Shanghai Jiao Tong University Library",
        address: "800 Dongchuan Road, Minhang District, Shanghai",
        phone: "021-34206460",
        website: "https://www.lib.sjtu.edu.cn/",
        description: "Shanghai Jiao Tong University Library with rich science and engineering collections."
      },
      {
        name: "Tongji University Library",
        address: "1239 Siping Road, Yangpu District, Shanghai",
        phone: "021-65982200",
        website: "https://lib.tongji.edu.cn/",
        description: "Tongji University Library with architectural literature specialties."
      },
      {
        name: "East China Normal University Library",
        address: "3663 North Zhongshan Road, Putuo District, Shanghai",
        phone: "021-62232317",
        website: "https://lib.ecnu.edu.cn/",
        description: "East China Normal University Library with rich educational literature."
      }
    ]
  },
  {
    city: "Guangzhou",
    libraries: [
      {
        name: "Guangzhou Library",
        address: "4 Zhujiang East Road, Guangzhou",
        phone: "020-83836666",
        website: "https://www.gzlib.org.cn/",
        description: "A modern library located in Zhujiang New Town with unique architectural style."
      },
      {
        name: "Sun Yat-sen University Library",
        address: "135 Xin'gang West Road, Haizhu District, Guangzhou",
        phone: "020-84111666",
        website: "https://library.sysu.edu.cn/",
        description: "Sun Yat-sen University Library, a comprehensive university library."
      },
      {
        name: "South China University of Technology Library",
        address: "381 Wushan Road, Tianhe District, Guangzhou",
        phone: "020-87111474",
        website: "https://www.lib.scut.edu.cn/",
        description: "South China University of Technology Library with rich science and engineering collections."
      },
      {
        name: "Jinan University Library",
        address: "601 West Huangpu Avenue, Tianhe District, Guangzhou",
        phone: "020-85220223",
        website: "https://lib.jnu.edu.cn/",
        description: "Jinan University Library with overseas Chinese literature specialties."
      }
    ]
  },
  {
    city: "Shenzhen",
    libraries: [
      {
        name: "Shenzhen Library",
        address: "2014 Fuzhong Road, Futian District, Shenzhen",
        phone: "0755-82841200",
        website: "https://www.szlib.org.cn/",
        description: "One of Shenzhen's landmark cultural facilities."
      },
      {
        name: "Shenzhen University Library",
        address: "3688 Nanhai Avenue, Nanshan District, Shenzhen",
        phone: "0755-26536114",
        website: "https://lib.szu.edu.cn/",
        description: "Shenzhen University Library with modern facilities."
      },
      {
        name: "Southern University of Science and Technology Library",
        address: "1088 Xueyuan Avenue, Nanshan District, Shenzhen",
        phone: "0755-88018000",
        website: "https://lib.sustech.edu.cn/",
        description: "Southern University of Science and Technology Library, a new research university library."
      }
    ]
  },
  {
    city: "Hangzhou",
    libraries: [
      {
        name: "Hangzhou Library",
        address: "58 Jiefang East Road, Jianggan District, Hangzhou",
        phone: "0571-86535000",
        website: "https://www.hzlib.net/",
        description: "An important public library in Hangzhou with beautiful environment and excellent services."
      },
      {
        name: "Zhejiang University Library",
        address: "866 Yuhangtang Road, Xihu District, Hangzhou",
        phone: "0571-87951006",
        website: "https://libweb.zju.edu.cn/",
        description: "Zhejiang University Library, a comprehensive research university library."
      },
      {
        name: "Zhejiang Library",
        address: "73 Shuguang Road, Xihu District, Hangzhou",
        phone: "0571-87988500",
        website: "https://www.zjlib.cn/",
        description: "Zhejiang Province's largest public library with a long history."
      }
    ]
  },
  {
    city: "Nanjing",
    libraries: [
      {
        name: "Nanjing Library",
        address: "189 East Zhongshan Road, Xuanwu District, Nanjing",
        phone: "025-84356000",
        website: "https://www.jslib.org.cn/",
        description: "Jiangsu Province's largest public library with a long history and rich collections."
      },
      {
        name: "Nanjing University Library",
        address: "163 Xianlin Avenue, Qixia District, Nanjing",
        phone: "025-83593183",
        website: "https://lib.nju.edu.cn/",
        description: "Nanjing University Library, a comprehensive research university library."
      },
      {
        name: "Southeast University Library",
        address: "2 Sipailou, Xuanwu District, Nanjing",
        phone: "025-83792888",
        website: "https://lib.seu.edu.cn/",
        description: "Southeast University Library with rich engineering and architecture collections."
      }
    ]
  },
  {
    city: "Wuhan",
    libraries: [
      {
        name: "Wuhan Library",
        address: "860 Jiefang Avenue, Jiang'an District, Wuhan",
        phone: "027-85718003",
        website: "https://www.whlib.org.cn/",
        description: "Wuhan's main public library with comprehensive services."
      },
      {
        name: "Wuhan University Library",
        address: "299 Bayi Road, Wuchang District, Wuhan",
        phone: "027-68752740",
        website: "https://lib.whu.edu.cn/",
        description: "Wuhan University Library, one of China's most beautiful university libraries."
      },
      {
        name: "Huazhong University of Science and Technology Library",
        address: "1037 Luoyu Road, Hongshan District, Wuhan",
        phone: "027-87542283",
        website: "https://lib.hust.edu.cn/",
        description: "Huazhong University of Science and Technology Library with excellent science and engineering collections."
      }
    ]
  },
  {
    city: "Chengdu",
    libraries: [
      {
        name: "Chengdu Library",
        address: "2 Wenweng Road, Qingyang District, Chengdu",
        phone: "028-86126155",
        website: "https://www.cdclib.org/",
        description: "Chengdu's main public library with traditional and modern collections."
      },
      {
        name: "Sichuan University Library",
        address: "24 South Section 1, First Ring Road, Wuhou District, Chengdu",
        phone: "028-85412334",
        website: "https://lib.scu.edu.cn/",
        description: "Sichuan University Library, a comprehensive university library."
      },
      {
        name: "University of Electronic Science and Technology Library",
        address: "2006 Xiyuan Avenue, High-tech Zone, Chengdu",
        phone: "028-61831234",
        website: "https://lib.uestc.edu.cn/",
        description: "University of Electronic Science and Technology Library with electronic information specialties."
      }
    ]
  },
  {
    city: "Xi'an",
    libraries: [
      {
        name: "Shaanxi Library",
        address: "146 Chang'an North Road, Beilin District, Xi'an",
        phone: "029-85360063",
        website: "https://www.sxlib.org.cn/",
        description: "Shaanxi Province's largest public library with rich historical collections."
      },
      {
        name: "Xi'an Jiaotong University Library",
        address: "28 Xianning West Road, Beilin District, Xi'an",
        phone: "029-82667853",
        website: "https://lib.xjtu.edu.cn/",
        description: "Xi'an Jiaotong University Library with excellent engineering collections."
      },
      {
        name: "Northwest University Library",
        address: "229 North Taibai Road, Beilin District, Xi'an",
        phone: "029-88302560",
        website: "https://lib.nwu.edu.cn/",
        description: "Northwest University Library with rich humanities and social sciences collections."
      }
    ]
  },
  {
    city: "Tianjin",
    libraries: [
      {
        name: "Tianjin Library",
        address: "31 Youyi Road, Hexi District, Tianjin",
        phone: "022-83883600",
        website: "https://www.tjl.tj.cn/",
        description: "Tianjin's main public library with comprehensive collections and services."
      },
      {
        name: "Nankai University Library",
        address: "94 Weijin Road, Nankai District, Tianjin",
        phone: "022-23508176",
        website: "https://lib.nankai.edu.cn/",
        description: "Nankai University Library, a comprehensive university library."
      },
      {
        name: "Tianjin University Library",
        address: "92 Weijin Road, Nankai District, Tianjin",
        phone: "022-27406258",
        website: "https://lib.tju.edu.cn/",
        description: "Tianjin University Library with excellent engineering collections."
      }
    ]
  }
]; 