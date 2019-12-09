// 简体中文
const CN = {
  header: {
    text1: '登录',
    text2: '注册',
    text3: '交易Quin',
    text4: '实体资产与加密世界的桥梁',
    newsList: [
      {
        text: '1.李嘉诚出手！拿下伦敦瑞银UBS大楼，收租金融城地标',
        show: true
      },
      {
        text: '2.Q.Arthur将首发1亿英镑Quin币',
        show: true
      },
      {
        text: '3.数字货币+金融地产加速布局全球投资领域  各大资本强力加持Quin',
        show: true
      }
    ],
    navList: [
      {
        name: 'Q.Arthur',
        path: '/home',
        dropDownFlag: false,
        dropDown: [
          {
            name: 'Quin抗通胀属性',
            anchor: 'Aarea'
          },
          {
            name: 'Quin资产收益率',
            anchor: 'Barea'
          },
          {
            name: 'Quin广泛参与性',
            anchor: 'Carea'
          },
          {
            name: 'Quin资产流动性',
            anchor: 'Earea'
          },
          {
            name: 'Quin的溢价空间',
            anchor: 'Farea'
          },
          {
            name: 'Quin的保障体系',
            anchor: 'Garea'
          },
          {
            name: '流通的英格兰银行',
            anchor: 'Darea'
          }
        ]
      },
      {
        name: 'Quin百科',
        path: '/wiki',
        dropDownFlag: false,
        dropDown: [
          {
            name: 'Quin简介',
            anchor: 'dropIntroduction',
            top: 15,
            childer: [
              {
                name: '1.1 首次发行价格',
                anchor: 'childPrice',
                top: 55
              },
              {
                name: '1.2 首次发行规模',
                anchor: 'childScale',
                top: 89
              },
              {
                name: '1.3 Quin的结构图',
                anchor: 'childStructure',
                top: 123
              }

            ]
          },
          {
            name: 'Quin的设计理念',
            anchor: 'dropPhilosophy',
            top: 157,
            childer: [
              {
                name: '2.1 价值保全',
                anchor: 'childValue',
                top: 197
              },
              {
                name: '2.2 资金流动',
                anchor: 'childFlow',
                top: 231
              },
              {
                name: '2.3 对投资者的优势',
                anchor: 'childAdvantages',
                top: 265
              }

            ]
          },
          {
            name: '资产组合和资产选择',
            anchor: 'dropAsset',
            top: 299,
            childer: [
              {
                name: '3.1 资产选择',
                anchor: 'childSelect',
                top: 339
              },
              {
                name: '3.2 房地产主要投资风格和盈利模式',
                anchor: 'childInvesting',
                top: 373
              },
              {
                name: '3.3 商业地产现金流构成',
                anchor: 'childCash',
                top: 407
              },
              {
                name: '3.4 伦敦金融城',
                anchor: 'childCity',
                top: 441
              },
              {
                name: '3.5 Quin的远期目标',
                anchor: 'childGoal',
                top: 475
              }
            ]
          },
          {
            name: '业绩表现和分配',
            anchor: 'dropPerformance',
            top: 509,
            childer: [
              {
                name: '4.1 分配流程图',
                anchor: 'childDistribution',
                top: 549
              },
              {
                name: '4.2 案例说明',
                anchor: 'childCase',
                top: 583
              }
            ]
          },
          {
            name: 'Quin的共识机制',
            anchor: 'dropConsensus',
            top: 617,
            childer: [
              {
                name: '5.1 Quin的愿景',
                anchor: 'childVision',
                top: 657
              },
              {
                name: '5.2 主链&侧链模式',
                anchor: 'childMain',
                top: 691
              }
            ]
          }
        ]
      },
      {
        name: '资产背书',
        path: '/strategy/assetRecite',
        centerFlag: true
        // dropDown: [
        //   {name: 'aaa', path: ''},
        //   {name: 'bbb', path: ''}
        // ]
      },
      {
        name: '动态',
        path: '/newView',
        dropDownFlag: false,
        centerFlag: true
        // dropDown: [
        //   {name: '行业新闻', anchor: 'aaa'},
        //   {name: 'Quin资讯', anchor: 'bbb'}
        // ]
      },
      {
        name: '关于我们',
        path: '/about',
        dropDownFlag: false,
        dropDown: [
          {name: '我们的价值', anchor: 'aaa'},
          {name: '我们的理念', anchor: 'bbb'},
          {name: '先锋和创新者', anchor: 'ccc'}
        ]
      }
    ]
  },
  home: {
    text1: '现实世界与加密世界的桥梁',
    text2: 'Quin，一款去中心化加密货币，以全球最核心的资产背书',
    text3: '伦敦金融城，历史悠久的欧洲金融中心，地产租客均来自银行、保险、大型基金等顶尖机构。我们的资产正是位于伦敦金融城，投资Quin就等同于持有伦敦金融城这类世界绝对中心区域的商业地产。',
    text4: '比银行存款更安全，而收益远远超过银行利率！',
    text5: 'Quin的背书资产享有5%+50%的超额分红，每季度按公司利润分红。Quin还具备抗通胀属性，保护资产不缩水。区块链技术保障Quin的安全性，持有Quin比投资银行更安全，因为银行可能破产，而Quin不会。',
    text6: '持有Quin比直接持有房产更具有流动性',
    text7: '持有Quin就代表持有房产。Quin是一款以房产交易为主的远期投资项目。全球上百家区块链数字货币交易平台，可随时提供交易服务。',
    text8: '对标其他无资产背书的货币，Quin可信度更高',
    text9: 'Quin是加密货币中的“稳定币”。所谓稳定币，是指加密市场上的最安全稳定的代币之一。也就是说，它是由资产“背书”或“支撑”的代币，对比其他加密货币，其价格波动更小。',
    text10: '参与原本属于少数人的游戏！',
    text11: '金融食物链顶端的资产，因为区块链技术，终于让普通人也能参与，享受被资本追逐的快感。',
    text12: '强大的法律保障与财务审计',
    text13: '全球顶级律师事务所确保Quin与资产绑定。普华永道会计师事务所确保资产收益安全透明。',
    text14: '“地球上最好的投资就是地球本身”',
    text15: '引自美国著名地产投资家-路易斯•格里克曼（Louis J. Glickman）',
    text16: '我们以全球优质传统资产的安全性作为基础，使用新的区块链技术为客户提供资产保护，连接新旧经济，重塑资产新世界。',
    text17: 'FAQ',
    text21: '多语言'
  },
  wike: {
    imgUrl: {
      img1: require('../../assets/images/wiki/1.2_zn.svg'),
      img2: require('../../assets/images/wiki/1.3_zn.svg'),
      img3: require('../../assets/images/wiki/2.2_zn.svg'),
      img4: require('../../assets/images/wiki/3.1_zn.svg'),
      img5: require('../../assets/images/wiki/3.3_zn.svg'),
      img6: require('../../assets/images/wiki/4.1_zn.svg'),
      img7: require('../../assets/images/wiki/5.2-3_zn.svg'),
      img8: require('../../assets/images/wiki/5.2-3_zn.svg')
    },
    childAdvantages: [
      {
        text: '对应资产具备抗通胀属性，安全，收益高，且仍可利用传统金融手段获得加倍回报；'
      },
      {
        text: '代币跨越了国界限制，资产流动性更强；'
      },
      {
        text: '参照其他无资产背书的加密数字货币在流动市场上的价格表现，有资产背书加密数字货币升值空间巨大；'
      },
      {
        text: '以全球最高标准认可的优质资产作为后盾，形成对冲消费者价格指数的资产组合；'
      },
      {
        text: '作为成本效益的最优选择，协助企业和个人实现其财富的全球配置、全球获取和全球支付； '
      },
      {
        text: '在代币份额的投资和赎回方面实现便利性、可持续性和安全性，体现出传统资产数字化后的核心优势；'
      },
      {
        text: '资产管理团队位于伦敦金融城核心区，可以在优质资产被推向市场时在第一时间作出反应，以最优价格和最低 财务成本放大投资收益。'
      }
    ],
    dropAsset: [
      {
        text: '为投资者提供”全天候”的解决方案，以实现长期稳定并通过收入收益实现收益。收入型投资策略指导下的核心地段商业地产符合这一要求。',
        img: require('../../assets/images/wiki/3-1.svg')
      },
      {
        text: '收入型策略提供了一个相对较高和可持续的收入来源，可同时执行高质量和分散化。该策略将当前收入最大化作为其主要目标， 同时仍强调总体回报。该策略可将追求总体回报的积极管理风格与可分配收入的数字化技术有机结合到一起。',
        img: require('../../assets/images/wiki/3-2.svg')

      }
    ],
    childInvesting: [
      {
        img: require('../../assets/images/wiki/3.2-1.svg'),
        title: '核心型',
        text: '主要是写字楼，以及若干拥有稳定现金流的服务型公寓'
      },
      {
        img: require('../../assets/images/wiki/3.2-2.svg'),
        title: '核心增益型',
        text: '主要是商场和百货大楼'
      },
      {
        img: require('../../assets/images/wiki/3.2-3.svg'),
        title: '增值型',
        text: '主要是开发类项目，比如城镇更新、旧楼改造、工业用地转商业用地等'
      },
      {
        img: require('../../assets/images/wiki/3.2-4.svg'),
        title: '机会型',
        text: '以收购不良资产为主'
      }
    ],
    childGoal: [
      {
        text: '房地产',
        img: require('../../assets/images/wiki/3.5-1.svg')
      },
      {
        text: '能源',
        img: require('../../assets/images/wiki/3.5-2.svg')
      },
      {
        text: '农业',
        img: require('../../assets/images/wiki/3.5-3.svg')
      },
      {
        text: '医疗',
        img: require('../../assets/images/wiki/3.5-4.svg')
      },
      {
        text: '教育',
        img: require('../../assets/images/wiki/3.5-5.svg')
      },
      {
        text: '交通',
        img: require('../../assets/images/wiki/3.5-6.svg')
      }
    ],
    childCase: [
      {
        text: '第一季度： 该基金支付 1,500,000 英镑的股息（1.5％）; 这使其能够自身回购 148 万 Quin，则98,520,000 代币对应 100,000,000 英镑资产净值 （£1.015022/代币）'
      },
      {
        text: '第二季度： 该基金支付 1,500,000 英镑的股息（1.5％）; 这使得它能够回购 147 万 Quin，则97,050,000 代币对应 100,000,000 英镑资产净值 （£1.030397/代币）'
      }
    ],
    childMain: [
      {
        text: '1.对数据区块，按严格顺序，建立第一层 Hash'
      },
      {
        text: '2.每两个第一层的顺序 Hash，建立第二层 Hash'
      },
      {
        text: '3.直到每 8 个区块（2 的 n 次方，可配置），建 立一个顶层 Top Hash '
      },
      {
        text: '4.每个 Top Hash，写入主链交易'
      },
      {
        text: '5.到此，任何节点都能校验该侧链的某个指定区块的批次交易'
      }
    ],
    text1: '一枚数字货币，启发一种新的世界观',
    text2: '对应全球投资组合的数字化资产，源自对冲通胀、伦敦金融城核心商业地产',
    text3: 'Quin简介',
    text4: 'Quin是2018年春季设计的一种新型加密数字货币，旨在为全球货币提供另一种解决方案：获得最高投资标准的确定性，同时确保所有权的安全。',
    text5: '1.1 首次发行价格',
    text6: 'Q (time=0) = 1英镑 = Q.Arthur NAV(0)',
    text7: 'Q (time=0) ：Quin首次发行价格',
    text8: 'Q.Arthur NAV(0): Q.Arthur公司每股NAV估值',
    text9: '1.2 首次发行规模',
    text10: '£100,000,000 由以太坊（Etherum）链运营',
    text11: '1.3 Quin的结构图',
    text12: 'Quin的设计理念',
    text13: 'Quin的设计理念源于为全球货币提供一种新的解决方案：将比特币的理想数字特性与人们在过去数千年中感到安心的传统资产中的内在价值结合起来。',
    text14: '2.1 价值保全',
    text15: '国际金融中心核心地段的房地产等全球优质资产支持的投资，由 Q.Arthur全球资产管理团队经营。',
    text16: '2.2 资金流动',
    text17: '投资者在 Q. Arthur 交易所交易其拥有的 Q代币，以换取法定货币，反之亦然。',
    text18: '2.3 对投资者的优势',
    text19: '资产组合和资产选择',
    text20: '3.1 资产选择',
    text21: '资产选择：具备真实内在价值、类固定收益的另类投资组合',
    text22: '3.2 房地产主要投资风格和盈利模式',
    text23: '按照投资风格和风险偏好以及资产类别大致主要分为四大类：',
    text24: '3.3 商业地产现金流构成',
    text25: '这三个部分的总和就是持有商业地产总的现金流，通过复利原理可以求出这些现金流的内部收益率(IRR)。',
    text26: '3.4 伦敦金融城',
    text27: '伦敦城（City of London），是英国大伦敦的 32 个郡之一，是伦敦著名的圣保罗大教堂东侧，泰晤士河北岸一片面积仅2.6平方公里的土地，也被称为“一平方英里（Square Mile）”。由于该地聚集了包括被称为“银行之王”的英格兰银行等大量金融机构，因此又称伦敦金融城。',
    text28: '3.5 Quin的远期目标',
    text29: '远期目标：流通的数字地球',
    text30: '业绩表现和分配',
    text31: '如果我们将收入型策略应用于房地产投资作为案例研究，那么这种投资结构将从集合来自租户的租金收入中获益。 这消除了处理租金付款和后续再投资的必要性 - 这不可避免地会导致效率低下，特别是涉及多种外汇交易时。',
    text32: '相反，目前我们的结构设计使得投资者可以通过Quins的交易价格，享受到每一次资本增值。',
    text33: 'Q.Token 的数量在减少，每个 Q.Token 的内在价值在增加。',
    text34: '4.1 分配流程图',
    text35: '4.2 案例说明',
    text36: '如设立时：100,000,000 个代币，对应 100,000,000 英镑资产净值（£1/代币）',
    text37: 'Quin的共识机制',
    text38: 'QUIN 区块链是一个单主链（Main Chain）、多侧链（Side Chain）的系统，主链由全网维护，采用 PoW 共识机制。若干条侧链用于不同类别的具体业务，由业务的参与者来维护 ，采用 DPoS 共识机制。',
    text39: '主链 的 PoW 机制保证了网络的安全性和公平性，主链本身不参与具体业务，只提供基础账户信息维护、侧链基本参数维护、侧链数据校验存证、以及侧链的跨链通信等功能。这些功能本身业务逻辑简单，频度较低，对网络处理能力的要求不高，所以在主链上采用 PoW 机制并不会成为网络的性能瓶颈。',
    text40: '5.1 Quin的愿景',
    text41: 'QUIN 的愿景是既要公平、安全，又要经济、高效。我们融合了 PoW 和 DPoS 两种共识机制来实现 QUIN 区块链。',
    text42: '5.2 主链&侧链模式',
    text43: 'QUIN 区块链的这种设计模式，最大程度上匹配了 QUIN 的业务模式。QUIN 设计主要用来资产管理，建立“传统金融与加密世界之桥”，业务模式正好适合组合链的设计。',
    text44: '1. 侧链 - 处理频率大，额度小， 在侧链上处理频度大、额度小、交易参与方组织结构简单高频的业务。在资管类应用中，最典型的就是银行内转账。行内转账必须实时、高效、 并保证分布式系统中的严格一致性。这要求链上交易必须采用 DPoS 类似技术支持。',
    text45: '2. 主链– 处理频率小，额度大在主链上处理额度大、交易参与方组织结构复 杂、频度不高的结算类业务。典型的例子就是跨资产类型结算。两个交易对手方，实现设置信用额度，在用户提出跨资产类型（跨链）兑换等交易时，各自在链内从信用额度里和各自链内账号兑换；在定期清结算时刻，两个链直接进行该时间周期内发生的总资产转移结算。因为清洁算频率较低（如银行间清结算 1 天只有 1 次），主链上的交易用 PoW 协议可以最大程度地保证交易安全。',
    text46: '主侧链的设计方案，需要特别考虑对侧链的“可审计性”。主链是PoW的，安全性有保证，侧链是 DPoS 共识的，偏多中心化，如何加强侧链的信用度？我们特别利用了锚定（Anchoring）技术，使用 Merkle Tree 数据结构，来保证侧链数据的可审计性。可审计的锚定（Anchoring）实现步骤如下图所示：',
    text47: '这种方式吸取了 PoW 和 PoS 共识机制的长处，规避了各自的短处，在最大程度上保证网络公平、安全的同时，也保证了极高的效率，并成为我们 QUIN 场景最合适的底层设计方案。',
    text48: '',
    text49: ''

  },
  assetRecite: {
    context1: '创造未来最好的方法就是参与未来',
    context2: '用重资产背书轻资产形成世界级产业链',
    itemDatas: [
      {
        urlImg: require('../../assets/images/assetRecite/b1.png'),
        title: '伦敦金融城写字楼',
        investment: '投资金额：3940万英镑',
        profit: '投资收益：5.83%',
        category: '投资类别：商业地产',
        london: '地理位置：伦敦，金融城',
        windon: '投资亮点 ',
        explain: '伦敦金融城是英国大伦敦的32个郡之一，位于伦敦著名的圣保罗大教堂东侧，面积2.6平方公里，也被称为“一平方英里（Square Mile）”，由于该地聚集了大量银行、证券交易所、黄金市场等金融机构，所以又称为伦敦金融城。过去十年间，伦敦金融城商业地产的租售比从未低于4%，在全球金融危机2008年上行之时作为避险资金首选之地，一度达到7%。本标的写字楼地理位置十分优越，吸引了众多的知名金融机构进驻，一直是满租状态。',
        network: '交通网络 ',
        workcon: '大楼位置紧靠金融城，步行可基本覆盖整个金融城， 邻近Monument和Bank地铁站。',
        payments: '定期支付',
        paymentscon: '建筑物的利润（租金）将定期支付给投资者，年收益5.83%。',
        detailsBtn: '查看详情',
        auditBtn: '审计报告'
      },
      {
        urlImg: require('../../assets/images/assetRecite/b2.png'),
        title: '伦敦金融城写字楼',
        investment: '投资金额：2160万英镑',
        profit: '投资收益：5.02%',
        category: '投资类别：商业地产',
        london: '地理位置：伦敦，金融城',
        windon: '投资亮点 ',
        explain: '伦敦作为全球“一线中的一线”城市，金融城又是伦敦市的核心城区，其核心地段的商业地产作为一种资产类别，供应量极其有限；作为一种商品，为全球顶级银行争相入驻和租赁的必争之地。本标的写字楼目前被出租给多家金融机构和律师事务所，九成租户的租期都是长达十年之久，其年租金收入预达88.3万英镑。',
        network: '交通网络 ',
        workcon: '步行只需五分钟即可抵达到地铁站Moorgate。',
        payments: '定期支付',
        paymentscon: '建筑物的利润（租金）将定期支付给投资者，年收益5.02%。',
        detailsBtn: '查看详情',
        auditBtn: '审计报告'
      }
    ]
  },
  footer: {
    text1: '快速连接',
    text2: '联系我们',
    text3: '帮助中心',
    text4: '如何投资',
    text5: '如何购买Quin',
    text6: 'Quin交易所',
    text7: '查看更多',
    text8: '关于Q.Arthur',
    text9: '追溯我们的历史到1993年，Q.Arthur是由英国金管局监管的伦敦牛津集团的子公司；伦敦牛津集团由一群前牛津大学从事金融职业的校友成立。',
    text10: ''
  },
  about: {
    text1: '数字未来，始物于行',
    text2: '节点构建新金融，算法引领新未来',
    text3: '为Quin的持有者创造具有价值背书、公平公正、资本保值的成熟流通性金融体系。',
    text4: '注重客户',
    text5: '通过独立、可信和创新的建议与客户建立长期的关系，帮助他们实现卓越的成果',
    text6: '廉正原则',
    text7: '严格遵守在任何时候和任何情况下做正确事情的原则',
    text8: '卓越标准',
    text9: '毫不动摇坚持信念并努力达到最高的质量标准',
    text10: '尊重',
    text11: '拥抱多元化，并以最大的尊重对待所有人',
    text12: '人才',
    text13: '吸引最有才华的人并激励他们发挥最大的潜能，通过付出获得回报的机遇',
    text14: '合伙',
    text15: '倡导鼓励诚实辩论的文化，与优秀的创业者缔结伙伴关系',
    text16: '我们的使命',
    text17: '我们对客户的使命是提供全球范围的优质资产和严格的受托管理，对冲当地宏观经济和通货膨胀冲击的风险。',
    text18: '我们的理念',
    text19: '我们的理念是创建透明、稳定和对冲通胀的数字化资产，并以一揽子高质量传统资产作为后盾，以弥合传统\'法定货币\'资产管理世界与\'加密数字货币\'世界之间的鸿沟。',
    text20: '先锋和创新者',
    text21: '查看更多',
    person: [
      {
        name: 'David Quinn',
        post: '创始人&首席执行官',
        text: 'David Quinn在受监管的资本市场从事交易方面拥有超过15年的从业经验。David经营着一家在直布罗陀受监管的股票经纪公司,日交易量高达1亿美金。David在雷曼兄弟公司开始职业生涯，之后转任贝尔斯登公司董事总经理。离开贝尔斯登之后，David为环球财富投资有限公司（GFI）集团管理其伦敦的股票交易业务。David创建了Q. Arthur数字货币交易平台。'
      },
      {
        name: 'Steve Kelso',
        post: '咨询委员会主席',
        text: 'Steve在发达市场和新兴市场的投资和交易领域拥有22年的职业经验。他在欧洲推出了第一只波动性套利基金，在KBC（DE Shaw 基金的前身）两年内吸引了7亿美元的投资。在加入Q. Arthur之前，他在南非第一兰特银行下属的专业资产管理公司阿什伯顿国际（Ashburton International）担任首席执行官。在此之前，他曾任文艺复兴资本（Renaissance Capital）策略交易组负责人及投资委员会主席。'
      },
      {
        name: 'Chaiyakorn Yingsaeree 博士',
        post: '联合创始人&首席技术官',
        text: 'Chaiyakorn 在金融量化交易行业拥有超过10年的经验。他在伦敦大学（UCL）获金融计算机博士学位，专注于计算金融和算法交易。他目前在一家受英国金管局监管、位于伦敦的资产管理公司担任首席运营官。他曾在纽约Citadel投资集团担任量化交易研究员，负责为美国OTC证券市场的高频率市场做市和做市策略制定价格预测算法。'
      },
      {
        name: 'Allan Lane 博士',
        post: '高级顾问',
        text: 'Allan是Twenty20 Investments的创始合伙人。Allan还曾在投资银行业担任多个高级职位，其中包括在巴克莱全球投资者部门固定收益组和在苏格兰皇家银行全球量化研究部门担任主管。他还曾在法国巴黎银行（Banque Paribas）和JP摩根担任股票衍生品模型负责人。 Allan毕业于牛津大学和剑桥大学数学系，在美国华盛顿大学获博士学位。'
      },
      {
        name: 'Irene Bauer 博士',
        post: '高级顾问',
        text: 'Irene 是Twenty20 Investments的另一创始合伙人。此前，Irene一直在贝莱德集团的 iShares部门，为其客户群提供ETF投资组合解决方案。她在巴克莱全球投资者部门工作期间，艾琳在主动固定收益业务的资产配置团队中工作。 Irene在德国奥格斯堡大学获数学学位，并在德国海德堡大学获数学博士学位。'
      }
    ]
  },
  newViewPage: {
    context1: '聚焦世界中心，洞察未来趋势',
    context2: '未来不可预测，有无数的革新与裂变，我们洞察趋势，为未来每一种可能做好准备',
    context3: '最新资讯',
    text1: '聚焦世界中心，洞察未来趋势',
    text3: '未来不可预测，有无数的革新与裂变，我们洞察趋势，为未来每一种可能做好准备',
    text4: '探索创新者的见解',
    text5: '阅读更多',
    text6: '新视角',
    text7: '您的位置',
    text8: '发布时间',
    text9: '首页',
    text10: '上一页',
    text11: '下一页',
    text12: '末页',
    text13: '跳转',
    text14: '首页'

  },
  faq: {
    title: '问答速递',
    issueData: [
      {
        issueName: 'Q1',
        title: '数字货币Quin在价值保全方面有什么优势吗',
        answerName: 'A1',
        text: '我们的数字货币Quin对应的楼宇房产地处世界金融中心最佳地段，其长期租户均为顶级国际银行，持有代币意味着这些银行在向您支付着租金。即使在“金融海啸”来临时，纸币有可能瞬间作废，权益有可能不被承认，但Quin持有者对房产的所有权依然不变，另外，用户资产在未来某个时间段都能追溯、被赎回，避免资产损失。'
      },
      {
        issueName: 'Q2',
        title: '有做过风险评估吗？对这个项目的前景怎么看？有失败的可能性吗？',
        answerName: 'A2',
        text: '自从1971年法币脱离黄金开始，伦敦核心商业地产年均收益达10%，成为超级避险资产，在过去十年间，伦敦金融城商业地产的租售比从未低于4%。同时，参照其他无资产背书的加密数字货币在流动市场上的价格表现，有资产背书加密数字货币Quin的升值空间巨大。除此之外，所有房产投资都要经过独立方即全球知名会计师事务所详细的验证和审计，以消除欺诈，降低项目风险。'
      },
      {
        issueName: 'Q3',
        title: '持有Quin有什么回报？',
        answerName: 'A3',
        text: 'Quin的转让资产租售比约5%，但这类资产的信用转让可以获得非常高的资金利润和很低的资金成本，使得资本收益可超过12%，这种巨大的投资收益，是商业银行无法提供的。'
      },
      {
        issueName: 'Q4',
        title: '如何保证项目公开透明？',
        answerName: 'A4',
        text: 'Q.Arthur公司官网会进行项目公示，并由全球知名律所担保，确保Quin与资产的绑定关系；由普华永道会计师事务所审计，确保资产收益公开透明。'
      },
      {
        issueName: 'Q5',
        title: 'Quin项目是怎么赚钱的？',
        answerName: 'A5',
        text: 'Quin不仅是抗通货膨胀、去中心化的加密数字货币，更以全球最核心的资产为担保，持有Quin就等同于持有伦敦金融城这类世界绝对中心区域的商业地产，这些地产的租客都是名声显赫的世界级银行、保险、大型基金等金融食物链顶端机构，代表着这个世界的财富，而他们将给Quin持有者交租！'
      },
      {
        issueName: 'Q6',
        title: 'Quin是怎么和现实资产联系的？',
        answerName: 'A6',
        text: 'Quin的资金会投资到现实世界的金融地产，投资地产越多，Quin的价值就越高，它与现实资产的联系就越紧密。'
      },
      {
        issueName: 'Q7',
        title: '我要怎么收租金？',
        answerName: 'A7',
        text: '这个很简单，Q.Arthur公司会定期地向持有Quin的用户账号转入持有资产等比例的分红收益，这笔分红收益就是地产租金。'
      },
      {
        issueName: 'Q8',
        title: 'Quin是怎么发行的？',
        answerName: 'A8',
        text: 'Quin区块链是一个单主链、多侧链的系统，主链由全网维护，采用PoW共识机制。若干条侧链用于不同类别的具体业务，由业务的参与者来维护，采用 DPoS共识。依靠这个来实现Quin的发行。首期发行金额将会达1亿英镑。'
      }
    ]
  }
}
export default CN
