// 日语
const JP = {
  header: {
    text1: '登録',
    text2: '新規取得',
    text3: '取引Quin',
    text4: 'Quin：実体資産と暗号世界との架橋',
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
            name: 'Quinインフレ対策属性',
            anchor: 'Aarea'
          },
          {
            name: 'Quin資産収益率',
            anchor: 'Barea'
          },
          {
            name: 'Quin广泛参与性',
            anchor: 'Carea'
          },
          {
            name: 'Quin資産流動性',
            anchor: 'Earea'
          },
          {
            name: 'Quinのプレミアムの余地',
            anchor: 'Farea'
          },
          {
            name: 'Quinの保障体系',
            anchor: 'Garea'
          },
          {
            name: '流通しているイングラン銀行',
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
            name: 'Quin紹介',
            anchor: 'dropIntroduction',
            top: 15,
            childer: [
              {
                name: '1.1 第一期発行の価額',
                anchor: 'childPrice',
                top: 55
              },
              {
                name: '1.2 第一期の発行規模',
                anchor: 'childScale',
                top: 89
              },
              {
                name: '1.3 Quinの構造図',
                anchor: 'childStructure',
                top: 123
              }

            ]
          },
          {
            name: 'Quinの設計理念',
            anchor: 'dropPhilosophy',
            top: 157,
            childer: [
              {
                name: '2.1 価値保全',
                anchor: 'childValue',
                top: 197
              },
              {
                name: '2.2 資金流動',
                anchor: 'childFlow',
                top: 231
              },
              {
                name: '2.3 投資者に対する優勢',
                anchor: 'childAdvantages',
                top: 265
              }

            ]
          },
          {
            name: '資産の組合せと資産の選択',
            anchor: 'dropAsset',
            top: 299,
            childer: [
              {
                name: '3.1 資産の選択',
                anchor: 'childSelect',
                top: 339
              },
              {
                name: '3.2 不動産の主要な投資スタイルと営利モード',
                anchor: 'childInvesting',
                top: 373
              },
              {
                name: '3.3 商業不動産のキャッシュフローの構成',
                anchor: 'childCash',
                top: 407
              },
              {
                name: '3.4 シティ・オブ・ロンドン',
                anchor: 'childCity',
                top: 441
              },
              {
                name: '3.5 Quinの長期的目標',
                anchor: 'childGoal',
                top: 475
              }
            ]
          },
          {
            name: '業績評価と分配',
            anchor: 'dropPerformance',
            top: 509,
            childer: [
              {
                name: '4.1 分配フロー図',
                anchor: 'childDistribution',
                top: 549
              },
              {
                name: '4.2 事例説明',
                anchor: 'childCase',
                top: 583
              }
            ]
          },
          {
            name: 'Quinの共同認識メカニズム',
            anchor: 'dropConsensus',
            top: 617,
            childer: [
              {
                name: '5.1 Quinのビジョン',
                anchor: 'childVision',
                top: 657
              },
              {
                name: '5.2 メインチェーン＆サイドチェーンのモード',
                anchor: 'childMain',
                top: 691
              }
            ]
          }
        ]
      },
      {
        name: '資産裏書',
        path: '/strategy/assetRecite'
      },
      {
        name: '動態',
        path: '/newView',
        dropDownFlag: false
      },
      {
        name: '我々について',
        path: '/about',
        dropDownFlag: false,
        dropDown: [
          {name: '我々の使命', anchor: 'aaa'},
          {name: '我々の理念', anchor: 'bbb'},
          {name: '先陣と創新者', anchor: 'ccc'}
        ]
      }
    ]
  },
  home: {
    text1: 'リアルな世界と、暗号化世界の架け橋',
    text2: 'Quin、世界中でも最もコアとなる資産の裏書をする分散化暗号通貨',
    text3: 'シティ・オブ・ロンドン、ヨーロッパをにおいて悠久たる歴史を持つ金融センター。不動産の賃借人となる銀行や保険、大型ヘッジファンドなどトップな機関が集結しています。シティ・オブ・ロンドンにて資産を所有する当社のQuinに投資することは、シティ・オブ・ロンドンという世界の絶対的な中心地の商業用不動産を所有するのと同然。',
    text4: '銀行預金よりも安全の割には、銀行の金利をはるかに上回っています！',
    text5: 'Quinの裏書き資産はシーズンごとに当社の利益を踏まえた5%+50%の予定額以上の分配が行われます。Quinにインフレ回避の効果もあるため、資産の資産縮小から守ってくれます。ブロックチェーン技術によるQuinの信頼できるセキュリティ性のおかげで、Quinを所有することは銀行以上に安全です。銀行に倒産の可能性がありますが、Quinは決してそうにはなりません。',
    text6: '不動産所有よりもQuin所有の方は流動性が高い',
    text7: 'Quin所有は、不動産所有と同然です。不動産取引に取り組む長期的な投資プロジェクトであるQuinは、ワールドワイドで100以上のブロックチェーンデジタル通貨取引プラットフォームが点在、いつでも取引サービスをご提供します。',
    text8: '資産の裏書きのない他の通貨と比べ、Quinの信頼性が高い',
    text9: '暗号通貨の中でも「ステーブルコイン」とされるQuin。ステーブルコインとは、暗号化市場において最も安定したトークンの一つです。要するに、資産「裏書き」や「支え」となるトークンを持つということなので、他の暗号通貨と比べ、価格変動がより小さいのです。',
    text10: 'Quinにより元々少人数のゲームに参加することができる',
    text11: '金融食物連鎖トップの資産、ブロックチェーン技術により、一般者も参加できるようになり、資本に追われる快感を享受する',
    text12: '力強くサポートしてくれる法令や会計監査',
    text13: '世界トップな法律事務所よりQuinと資産とのバインドを約束してくれます。プライスウォーターハウスクーパースによって資産の安全性や透明性が確保されます。',
    text14: '「この地球では、一番良い投資先は地球そのものだ。」',
    text15: 'アメリカの名不動産投資家-ルイ・グリックマンより（Louis J. Glickman）',
    text16: 'グローバルで従来の上質な資産の安全性をベースに、新ブロックチェーン技術を生かして、お客様の資産を守るよう取り組んでおり、旧経済を新経済につなげて新たな資産の世界を再構築したいと思います。',
    text17: 'FAQ',
    text21: 'language'
  },
  wike: {
    imgUrl: {
      img1: require('../../assets/images/wiki/en/1.2_en.svg'),
      img2: require('../../assets/images/wiki/en/1.3_en.svg'),
      img3: require('../../assets/images/wiki/en/2.2_en.svg'),
      img4: require('../../assets/images/wiki/en/3.1_en.svg'),
      img5: require('../../assets/images/wiki/en/3.3_en.svg'),
      img6: require('../../assets/images/wiki/en/4.1_en.svg'),
      img7: require('../../assets/images/wiki/en/5.2-3_en.svg'),
      img8: require('../../assets/images/wiki/5.2-3_en.svg')
    },
    childAdvantages: [
      {
        text: '資産に対してインフレ対策の属性を持ち、安全、収益が高く、且つ伝統的な金融手段を利用し倍の報いを得ることが出来る。'
      },
      {
        text: '代用硬貨は国という制限を超え、資産の流動性がさらに強い。'
      },
      {
        text: 'そのほか資産裏書のない暗号数字硬貨がマーケット上に置いての価額の状況を参考にし、資産裏書ありの暗号数字硬貨の値上げ空間は巨大である。'
      },
      {
        text: 'グローバルで最高標準認可の上質な資産を後ろ盾とし、消費者価額指数ヘッジの資産組合せを形成する。'
      },
      {
        text: '原価効益の最適な選択として、企業と個人のお手伝いし、その富のグローバル配置を実現させ、グローバル獲得とグローバル支払い。'
      },
      {
        text: '代用硬貨の額分の投資と請戻し面において便利性、持続可能性と安全性を実現し、伝統な資産数字化後の核心優勢を表した。'
      },
      {
        text: '資産管理チームはシティ・オブ・ロンドンの核心地域に所在しているため、上質資産がマーケットに押し出す第一時間に反応を出すことができ、最適な価額と最低な財務原価で投資収益を拡大させることができる。'
      }
    ],
    dropAsset: [
      {
        text: '投資者に対して「オールウエザー」の解決案を提供し、長期安定且つ収入収益を通じ収益を実現させる。収入型投資の策略指導下の核心地理位置の商業不動産はこの要求に満たしている。',
        img: require('../../assets/images/wiki/3-1.svg')
      },
      {
        text: '収入型策略は比較的高いと持続可能な収入源を提供しており、同時に高品質と分散化を実行させることができる。本策略は現在の収入を最大化にし主要目標として、同時に全体の報いを強調している。本策略は全体報いを追求する積極管理スタイルと分配可能な収入の数字化技術を有機結合させることができる。',
        img: require('../../assets/images/wiki/3-2.svg')

      }
    ],
    childInvesting: [
      {
        img: require('../../assets/images/wiki/3.2-1.svg'),
        title: '核心型',
        text: '主にオフィスビル、及び若干な安定キャッシュフローを有すサービス型アパート'
      },
      {
        img: require('../../assets/images/wiki/3.2-2.svg'),
        title: '核心增益型',
        text: '主にデパートと百貨店'
      },
      {
        img: require('../../assets/images/wiki/3.2-3.svg'),
        title: '增值型',
        text: '主に開発類プロジェクト、例えば町の更新、古いビルの改造、工業用地をビジネス用地に転換する開発等'
      },
      {
        img: require('../../assets/images/wiki/3.2-4.svg'),
        title: 'チャンス型 ',
        text: '不良資産の買収を主とする'
      }
    ],
    childGoal: [
      {
        text: '不動産',
        img: require('../../assets/images/wiki/3.5-1.svg')
      },
      {
        text: 'エネルギー',
        img: require('../../assets/images/wiki/3.5-2.svg')
      },
      {
        text: '農業',
        img: require('../../assets/images/wiki/3.5-3.svg')
      },
      {
        text: '医療',
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
        text: '第一四半期： 本基金は1,500,000 ユーロの配当金を支払う（1.5％）; これによりその自身は148万Quinを買い戻しすることが出来、則ち98,520,000 代用硬貨 100,000,000 ユーロの資産純価値対応（£1.015022/代用硬貨）'
      },
      {
        text: '第二四半期： 本基金は1,500,000 ユーロの配当金を支払う（1.5％）; それにより147万Quinを買い戻しすることが出来、即ち97,050,000 代用硬貨 100,000,000 ユーロの資産純価値対応 （£1.030397/代用硬貨）'
      }
    ],
    childMain: [
      {
        text: '１、データブロックに対して、順序に従い、第一段Hashを建てる'
      },
      {
        text: '２、第一段が各二つの順序にHash、第二段Hashを建てる '
      },
      {
        text: '３、各８個のブロック（２のｎ乗、配置可）になり、一つのトップ段を建てる　Top　Hash'
      },
      {
        text: '４、各Top　Hash、メインチェーンの取引に書き込む'
      },
      {
        text: '５、ここまで、全ての節目は本サイドチェーンのある指定ブロックのロット取引を検証すること出来る'
      }
    ],
    text1: 'デジタル通過一枚で、新たな世界観がひらめく',
    text2: 'グルーバルポートフォリオに対応のデジタル化資産は、インフレヘッジやシティ・オブ・ロンドンの中心にある商業用不動産から生まれる',
    text3: 'Quin紹介',
    text4: 'Quinは2018年の春に設計した一種の新型暗号数字硬貨であり、グローバル貨幣のためにもう一種の解決案を提供するためである。最高投資標準の確定性を獲得し、同時に所有権の安全を確保する。',
    text5: '1.1 第一期発行の価額',
    text6: 'Q (time=0) = 1ユーロ = Q.Arthur NAV(0)',
    text7: 'Q (time=0)：Quin第一期発行価額',
    text8: 'Q.Arthur NAV(0)： Q.Arthur社一株のNAVの見積',
    text9: '1.2 第一期の発行規模',
    text10: '£100,000,000，イーサリアム（Etherum）チェーンが運営',
    text11: '1.3 Quinの構造図',
    text12: 'Quinの設計理念',
    text13: 'Quinの設計理念はグローバル貨幣のために一種の新しい解決案を提供するに由来する。ピット硬貨の理想数値特性を人々は過去数千年の間に感じた安心な伝統資産中の内在価値と結合させた。',
    text14: '2.1 価値保全',
    text15: '国際金融中心の核心地理位置の不動産等グローバルで上質な資産が支持している投資であり、Q.Arthurグローバル資産管理チームが経営する。',
    text16: '2.2 資金流動',
    text17: '投資者がQ.Arthur取引所で所持しているQ代用硬貨を取引し、法定貨幣に取り替え、逆の場合も同じ。',
    text18: '2.3 投資者に対する優勢',
    text19: '資産の組合せと資産の選択',
    text20: '3.1 資産の選択',
    text21: '資産の選択：真実的な内在価値、固定収益の別種な投資組み合わせを備えている',
    text22: '3.2 不動産の主要な投資スタイルと営利モード',
    text23: '投資スタイルとリスク好み及び資産別に基づき、主に四大種類に分類する',
    text24: '3.3 商業不動産のキャッシュフローの構成',
    text25: 'この三部分の和は所持する商業不動産の合計キャッシュフローであり、繰り返し原理を通じこれらのキャッシュフローの内部収益率（IRR）を求めることが出来る。',
    text26: '3.4 シティ・オブ・ロンドン',
    text27: 'シティ・オブ・ロンドン（City of London）、イギリスロンドンの３２の区の一つであり、ロンドン著名なセントポール大聖堂の東側に位置し、テムズ河の左岸の面積は2.6平方キロメートルしかなく、故に「1平方マイル」（Square Mile）とも称されている。ここには「銀行の王様」と称されるイングランド銀行等大量な金融期間が並ぶため、シティ・オブ・ロンドンとも称されている。',
    text28: '3.5 Quinの長期的目標',
    text29: '長期的目標：流通している数字地球',
    text30: '業績評価と分配',
    text31: 'もし我々は収入型戦略を不動産投資に応用し事例研究とする場合、この類の投資構造は賃借者の賃借料から収益を得る　。これにより賃借料支払い後とその後の再投資の必要性を消去したー効率低下は下げられず、特に多種の外国為替位取引時。',
    text32: '逆に、現在我々の構造設計は投資者はQuinsの取引価額を通じ、毎回の資本増値を享受することができる。',
    text33: 'Q.Tokenの数量は減少している、各O.Tokenの内在価値は増加している。',
    text34: '4.1 分配フロー図',
    text35: '4.2 事例説明',
    text36: 'もし設立時：100,000,000 個の代用硬貨、 100,000,000 ユーロの資産純価値に対応（£1/代用硬貨）',
    text37: 'Quinの共同認識メカニズム',
    text38: 'Quinはブロックチェーンの一つの単独メインチェーン、マルチサイドチェーンのシステムであり、メインチェーンはセーフティーネットが維持し、PoW共同認識メカニズムを採用している。サイドチェーンは異なる種類の具体業務に使われ、業務の参加者が維持し、DpoS共同認識を採用している。',
    text39: 'メインチェーンのPoWメカニズムはインターネットの安全性と公平性を保証しており、メインチェーン自身は具体的な業務に参加せず、基礎的なアカウント情報の維持、サイドチェーン基本スペックの維持、サイドチェーンデータ検証記録、及びサイドチェーンのクロースチェーン通信等機能のみを提供する。これら機能自身の業務のロジスティクスは簡単で、頻度が低く、インターネット処理に対する要求も高くなく、故にメインチェーン上でPoWメカニズムを採用することはインターネット性能のネックにはならない。',
    text40: '5.1 Quinのビジョン',
    text41: 'Quinのビジョンは公平、安全、且つ経済的、高効率である。我々はPoWとDPoS二種類の共同認識メカニズムを融合しQuinのブロックチェーンを実現した。',
    text42: '5.2 メインチェーン＆サイドチェーンのモード',
    text43: 'Quinブロックチェーンの設計モードは、最大程度にQuinの業務モードとマッチングさせてある。Quinの設計は主に資産管理を用いて、「伝統金融と暗号世界の橋」を発足し、業務モードも組合チェーンの設計にぴったりである。',
    text44: '１、サイドチェーンーの処理頻度が大きく、限度額は小さい、サイドチェーン上では頻度が大きく、限度額が小さい、参加側の組織構造が簡単で高頻度な業務と取引ができる。資産管理応用の中では、最も典型なのは銀行内の振込である。銀行内の振込は必ずリアルタイム、高効率、且つ分布式システム中の一致性を保証しなければならない。故にチェーン上での取引は必ずDPoS類似な技術サポートを採用しなければならない。',
    text45: '２、メインチェーン– 処理頻度が小さく、限度額が大きく、メインチェーン上での処理限度額が大きい、参考側の組織構造が複雑で、頻度が高くない決算類の業務と取引ができる。典型的なのはクロース資産類の決算である。二つの取引相手は信用限度額の設置を実現し、ユーザーがクロース資産類（クロースチェーン）の両替等取引を提出し取引時、各自はチェーン内で信用限度額の中から及び各自チェーン内のアカウントから両替をする。定期決算時、二つのチェーンは直接その時間周期内に発生した総資産移転決算を行う。なぜならば決算頻度が低い場合（もし銀行間の決算であれは一日に一回のみ）、メインチェーン上の取引用のPoW協議は最大程度に取引の安全性を保証できるからである。',
    text46: 'メインサイドチェーンの設計案、特別にサイドチェーンに対する「監査可能性」を考量する必要が有る。メインチェーンはPoWであり、安全性は保証されている、サイドチェーンはDPoS共同認識であり、集中化に偏っており、どうやってサイドチェーンの信用度を増す？我々はアンカリング（Anchoring）技術を利用し、Merkle Treeデータ構造を使い、サイドチェーンデータの監査可能性を保証した。監査可能のアンカリング（Anchoring）の実行手順は以下となる:',
    text47: 'この方法はPoWとPoS共同認識メカニズムの長所を吸収し、各自の短所を避けており最大程度上にインターネットの公平、安全を保証したと同時に、比較的高い効率も保証し、また我々Quinシーンの最適な底層設計案となった。',
    text48: '',
    text49: ''

  },
  assetRecite: {
    context1: '未来最高な方法を創造すること即ち未来に参加する',
    context2: '小さな資産を大きな資産で引っ張っていくことで世界規模を持つサプライチェーンをつくっている',
    itemDatas: [
      {
        urlImg: require('../../assets/images/assetRecite/b1.png'),
        title: 'シティ・オブ・ロンドンオフィスビル',
        investment: '投資金額：３９４０万ユーロ',
        profit: '投資収益：5.83％',
        category: '投資タイプ：商業不動産',
        london: '地理位置：シティ・オブ・ロンドン',
        windon: '投資の注目点 ',
        explain: 'シティ・オブ・ロンドンはイギリスロンドンの３２の区の一つであり、ロンドン著名なセントポール大聖堂の東側に位置し、面積は2.6平方キロメートルしかなく、故に「1平方マイル」（Square Mile）とも称されている、ここに大量な銀行、証券取引所、金マーケット等金融機構が密集しており、故にシティ・オブ・ロンドンとも称されている。過去十年間、シティ・オブ・ロンドンの商業不動産の賃貸販売比率は4％より以下になったことがなく、2018年のグローバル金融危機時リスク回避のための資金のペスト選択の地とされており、一時7％に達したこともあった。今回入札のオフィスビルの地理位置はとてもよく、多数の知名な金融機関の進駐を引きつけており、ずっとフルレント状態でした。',
        network: '交通ネットワーク ',
        workcon: 'ビルの位置はシティ・オブ・ロンドンに連接しており、徒歩でシティ・オブ・ロンドンを回りきることができ、MonumentとBankの地下鉄駅に連接している。',
        payments: '定期支払い ',
        paymentscon: '物件の利益（賃貸料）は定期的に投資者に支払われ、年収益は５.８３％である。',
        detailsBtn: '詳細チェック',
        auditBtn: '監査報告'
      },
      {
        urlImg: require('../../assets/images/assetRecite/b2.png'),
        title: 'シティ・オブ・ロンドンオフィスビル',
        investment: '投資金額：2160万ユーロ',
        profit: '投資収益：5.02％',
        category: '投資タイプ：商業不動産',
        london: '地理位置：シティ・オブ・ロンドン',
        windon: '投資の注目点 ',
        explain: 'ロンドンはグローバルの「一流中の一流」都市として、シティ・オブ・ロンドンはロンドン市の核心地域でもあり、その核心地域の商業不動産を一種の資産タイプとして、その供給量は有限である。一種の商品としては、グローバルトップ銀行が争って進駐したいと賃貸したい場所である。今回入札のオフィスビルは現在既に多数の金融期間と法律事務所に賃貸しており、９割の賃貸者の賃貸期間は十年であり、年間賃貸料収入は88.3万ユーロに達する見込みである。',
        network: '交通ネットワーク ',
        workcon: '徒歩５分で地下鉄駅Moorgateに到着することができる。',
        payments: '定期支払い ',
        paymentscon: '物件の利益（賃貸料）は定期的に投資者に支払われ、年収益は５.02％である。',
        detailsBtn: '詳細チェック',
        auditBtn: '監査報告'
      }
    ]
  },
  footer: {
    text1: 'アクセス',
    text2: 'お問い合わせ',
    text3: 'ヘルプ',
    text4: '投資について',
    text5: 'Quinの買い方',
    text6: 'Quin取引所',
    text7: 'もっと見る',
    text8: 'Q. Arthurについて',
    text9: '我々の歴史は1993年に遡ることができ、Q. Arthurはイギリス金融管理局が管理しているロンドンオクスフォードグループの子会社である。ロンドンオクスフォードグループは以前オクスフォード大学で金融仕事に携わっている学友たちが成立させた会社である。',
    text10: ''
  },
  about: {
    text1: '数字未来、初めに行為があった',
    text2: '節目は新しい金融を構築、算法は新しい未来をリード',
    text3: 'Quinの所持者のために価値のある裏書、公平公正、資本価値保持のある成熟流通性な金融体系を創造する',
    text4: 'お客様重視',
    text5: '独立、信頼可能と創新的な意見を通じお客様と長期的な関係を築き上げ、卓越な成果実現のお手伝いをする',
    text6: '廉潔原則',
    text7: '厳しくいつでもとどんな状況下でも正しいことをする原則を遵守する',
    text8: '卓越な標準',
    text9: '断じて動かず信念を堅持し且つ最高の品質標準に達するように努力する',
    text10: '尊重',
    text11: '多元化に抱きしめ、且つ最大な尊厳と尊重で全ての人に接する',
    text12: '人材',
    text13: '最も才能のある人材を誘い且つ彼らの最大な潜在能力を発揮させ、対価を通じて報いを得るチャンスを得る',
    text14: 'パートナー',
    text15: '励まし誠実弁論な文化を提唱し、優秀な創立者とパートナー関係を締結する',
    text16: '我々の使命',
    text17: '我々がお客様に対する使命は、グローバル範囲の上質な資産と厳しい受託管理を提供し、現地のマクロ経済とインフレのリスクヘッジを行う。',
    text18: '我々の理念',
    text19: '我々の理念は透明、安定とインフレの数字化資産ヘッジを創立することであり、且つ一括な高品質伝統資産を後ろ盾とし、伝統「法定貨幣」資産管理世界と「暗号数字硬貨」世界の間のギャップを癒す。',
    text20: '先陣と創新者',
    text21: 'もっと見る',
    person: [
      {
        name: 'David Quinn',
        post: '創始者＆最高経営責任者',
        text: 'David Quinnは制規会社の資本マーケットで取引方面において15年以上の従事経験がある。Davidはずっとジブラルタルで制規の株式仲買会社を経営しており、一日の取引量が最高で1億ドルに達することができる。Davidはリーマン・ブラザーズで職業生涯を始め、その後Bear Stearns Cosの取締総経理に就任した。Bear Stearns Cosを離れたあとGlobal Fortune Investment Limited Copyright（GFI）ロンドンの株式取引業務を管理していた。DavidはQ. Arthur数字貨幣取引プラットフォームを設立した。'
      },
      {
        name: 'Steve Kelso',
        post: 'コンサート委員会主席',
        text: 'Steveは発展マーケットと新興マーケットの投資と取引領域において22年の職業経験を有している。彼はヨーロッパで初の変動性金利裁定基金を出し、KBC（DE Shaw基金の前身）は二年以内に7億ドルの投資を引きつけた。Q. Arthurに加入する前、彼は南アフリカのFirstRand傘下の専門資産管理会社アシュバートンインターナショナル（Ashburton International）で最高経営責任者を担当していた。その前に、彼はルネサンスキャピタル（Renaissance Capital）の戦略取引チームの責任者及び投資委員会主席を担当していました。'
      },
      {
        name: 'Chaiyakorn Yingsaeree 博士',
        post: '共同設立者＆最高技術責任者',
        text: 'Chaiyakornは金融量的取引業界で10年以上の経験を有している。彼はロンドン大学（UCL）で金融コンピューター博士学位を取得し、金融計算と算法取引に専念していた。彼は現在イギリスの制規を受けている会社におり、ロンドンに位置し資産管理会社の最高運営責任者を担当している。かつではニューヨークのCitadel投資グループで量的取引の研究員を担当し、アメリカOTC証券マーケットの高頻度マーケットのためにマーケットメーカー及びマーケットメーカー戦略のために価額予測算法の制定を担当していた。'
      },
      {
        name: 'Allan Lane 博士',
        post: '高級顧問',
        text: 'Allan LaneはTwenty20 Investmentsの設立パートナーである。Allanはかつでは投資銀行で複数の高級役職を担当しており、Barclaysグローバル投資者部門固定収益チームとスコットランドローヤル銀行グローバル量的研究部門で主管を担当していたことを含む。彼はかつではフランスパリ銀行（Banque Paribas）とJPモーガンで株式の派生品模型の責任者を担当していた。Allanはオクスフォードとケンブリッジ大学の数学系を卒業し、アメリカワシントン大学で博士学位を取得した。'
      },
      {
        name: 'Irene Bauer 博士',
        post: '高級顧問',
        text: 'Irene はTwenty20 Investmentsのもう一人の設立パートナーである。その前、IreneはずっとBlackRockのiShares部門に在籍し、お客様にETF投資組合解決案を提供していた。彼女がBarclaysグローバル投資者部門で勤務している間、Ireceは主動固定収益の資産配置チームの中で仕事をしていた。Ireceはドイツアウクスブルク大学で数学学位を獲得し、またドイツハイデルベルク大学で数学博士学位を獲得している。'
      }
    ]
  },
  newViewPage: {
    context1: '世界の中心にフォーカスして、未来の動向を見通す',
    context2: '予測不可能な将来では、無数というほどの変革などが起こる。私達は未来を見通して、そのために様々な準備を整えている',
    context3: '最新情報',
    text1: '世界の中心にフォーカスして、未来の動向を見通す',
    text3: '予測不可能な将来では、無数というほどの変革などが起こる。私達は未来を見通して、そのために様々な準備を整えている',
    text4: 'イノベータのアドバイス',
    text5: 'もっと見る',
    text6: '新たな視点',
    text7: 'お客様の場所',
    text8: '配信時間',
    text9: 'ホームページ',
    text10: '前のページ',
    text11: '次のページ',
    text12: '最後のページ',
    text13: 'スキップ',
    text14: '最初のページ'

  },
  faq: {
    title: 'Q＆A',
    issueData: [
      {
        issueName: 'Q1',
        title: '数字硬貨Quinは価値保全面において優勢はありますか？',
        answerName: 'A1',
        text: '我々の数字硬貨Quin対応の建物不動産は世界金融の中心の最高な地理位置にあり、そして長期的な賃貸者はトップな国際銀行であり、代用硬貨を持っているイコールこれらの銀行があなたに賃貸料を支払っている。「金融バブル」になったとしても、紙幣は瞬間的に廃棄される可能性はあり、権益が認められない可能性もあり、しかしQuin所有者が不動産に対する所有権は依然と変わらず、また、ユーザーの資産は将来ある時間帯でもトレサビリティーすることができ、請戻しされ、資産損失を避けることができる。'
      },
      {
        issueName: 'Q2',
        title: 'リスク評価をしたことはある？これらのプロジェクトのビジョンはどう見ている？失敗の可能性はある？',
        answerName: 'A2',
        text: '1971年法定貨幣が金から脱離したときから、ロンドン核心商業不動産の年平均収益は10％に達しており、スーパーリスク回避資産となっており、過去十年間、シティ・オブ・ロンドンの商業不動産の賃貸販売比率は4％より以下になったことがない。同時に、そのほか資産裏書のない暗号数字硬貨がマーケット上に置いての価額の状況を参考にし、資産裏書ありの暗号数字硬貨Quinの値上げ空間は巨大である。それ以外に、全ての不動産の投資は独立側（例：普華永道会計事務所）の詳細な検証と財務監査を経ており、詐欺を避け、プロジェクトのリスクを低減する。'
      },
      {
        issueName: 'Q3',
        title: 'Quinを所持する場合の報いは？',
        answerName: 'A3',
        text: 'Quinの譲渡資産賃貸販売比率は約5％、しかしこの類の資産の信用譲渡は非常に高い資産利益と低い資産原価を獲得することができ、それにより資産収益が12％以上になり、このような巨大な投資収益は、ビジネス銀行では提供ができない。'
      },
      {
        issueName: 'Q4',
        title: 'プロジェクトの公開透明性はどうのように保証している？',
        answerName: 'A4',
        text: 'Q.Arthur社は公式サイトを使いプロジェクトの公示を行い、またグローバルで知名な法律事務所が担保となり、Quinと資産のバンディング関係を確保している。普華永道会計事務所が会計監査し、資産収益の公開透明性を確保する。'
      },
      {
        issueName: 'Q5',
        title: 'Quinプロジェクトはどのように稼いでいる？',
        answerName: 'A5',
        text: 'Quinはインフレ対策、地方分権化の暗号数字硬貨だけではなく、グローバルで最も核心な資産を担保とし、Quinを持つことはイコールシティ・オブ・ロンドンこの類の世界絶対的な中心地域の商業不動産を所持している、これらの不動産の賃貸者はみんな名声の高い世界級銀行、保険、大型基金等金融食物連鎖トップの機構であり、この世界の富を代表しており、しかし彼らはQuin所持者に賃貸料を払っている！'
      },
      {
        issueName: 'Q6',
        title: 'Quinはどうやって現実資産と結びつく？',
        answerName: 'A6',
        text: 'Quinの資金は現実世界の金融不動産に投資され、投資した不動産が多いほど、Quinの価値が高くなる、それと現実資産との結びつきがより緊密になる。'
      },
      {
        issueName: 'Q7',
        title: 'どうやって賃貸料をもらう？',
        answerName: 'A7',
        text: 'これは簡単であり、Q.Arthur社は定期的にQuin所有者のユーザーアカウントに所有資産等比率の配当収益を振込、この配当収益は不動産の賃貸料である。'
      },
      {
        issueName: 'Q8',
        title: 'Quinはどうやって発行している？',
        answerName: 'A8',
        text: 'Quinはブロックチェーンの一つの単独メインチェーン、マルチサイドチェーンのシステムであり、メインチェーンはセーフティーネットが維持し、PoW共同認識メカニズムを採用している。サイドチェーンは異なる種類の具体業務に使われ、業務の参加者が維持し、DpoS共同認識を採用している。これらを頼りにQuinの発行を実現している。第一期の発行金額は1億ユーロに達する予定である。'
      }
    ]
  }
}
export default JP