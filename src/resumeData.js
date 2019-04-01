let resumeData = {
    "imagebaseurl":"https://rbhatia46.github.io/",
    "name": "Yeongjong Lee",
    "role": "backend developer",
    "linkedinId":"Your LinkedIn Id",
    "skypeid": "Your skypeid",
    "email": "lee@zerobell.xyz",
    "roleDescription": "존나 취직하고 싶어",
    "socialLinks":[
        {
          "name":"email",
          "url":"mailto:lee@zerobell.xyz",
          "className":"fa fa-envelope"
        },
        {
          "name":"github",
          "url":"https://github.com/zerobell-lee",
          "className":"fab fa-github"
        },
        {
          "name":"tistory",
          "url":"https://seolin.tistory.com",
          "className":"fa fa-home"
        }
      ],
    "aboutme":"평생 개발만 하다 죽고 싶은 취준생입니다. 단순 코더가 아니라 새로운 가치를 창출하는 진정한 개발자를 목표로 하고 있습니다.",
    "address":"Seoul, South Korea",
    "website":"https://zerobell.xyz",
    "education":[
      {
        "UniversityName":"Hankuk University of Foreign Studies",
        "specialization":"Japanese Linguistic, Software Convergence",
        "MonthOfPassing":"Aug",
        "YearOfPassing":"2019",
        "Achievements":["2018-1 컴퓨터 프로그래밍1 (C언어) 실습조교로 근무"]
      }
    ],
    "work":[

    ],
    "skillsDescription":"제가 주관적으로 생각하는 성취도입니다.",
    "skills":[
      {
        "skillname":"Python",
        "icon":"fab fa-python"
      },
      {
        "skillname":"Java",
        "icon":"fab fa-java"
      },
      {
        "skillname":"Nodejs",
        "icon":"fab fa-node"
      }
    ],
    "portfolio":[
      {
        "name":"현-미-농",
        "description":"내 친구들 중 누가 더 지옥에 살고 있을까?",
        "imgurl":"images/portfolio/hmn.png",
        "link":"HMN"
      },
      {
        "name":"카카오톡 분석기",
        "description":"우리 언어생활을 고찰하며",
        "imgurl":"images/portfolio/cla.png",
        "link":"ChatLogAnalyzer"
      },
      {
        "name":"LogINN",
        "description":"체크인을 바코드로 편리하게",  
        "imgurl":"images/portfolio/loginn.png",
        "link":"LogINN"
      }
    ],
    "testimonials":[
      {
        "description":"재발인생을날로먹을수잇개해주새요",
        "name":"케장"
      },
      {
        "description":"CSS 시발 존나 어렵다",
        "name":"영종리"
      }
    ],
    "projects": {
      HMN: {
        title: "현미농(현시각 미세먼지 농도)",
        img: '../images/portfolio/hmn.png',
        overview: ['어느 날 친구들 카톡방에서 시작된 "현미농(현시각 미세먼지 농도) 순위" 놀이.',
                  '단순 장난질로 시작했으나, 시간이 갈수록 우리는 이 장난질에 익숙해져 갔다. "너네 지역 지금 난리 났는데? 숨 쉴 수 있음?"',
                  '정신을 차려보니 난 이걸 웹앱으로 만들어 올리고 있었다.'],
        description: ['등록된 유저들의 거주지 정보를 토대로 현 시각의 미세먼지 농도를 얻어와 내림차순으로 표시해주는 웹앱입니다.',
                    '메인 페이지에서는 실시간 정보를 볼 수 있고, 메뉴에서 과거 기록을 추적할 수 있습니다.'],
        stack: [],
        duration: '3일',
        article: [{title: '현미농 웹앱 제작기', url: 'https://seolin.tistory.com/106'}],
        references: [{title: '현-미-농', url: 'https://zerobell.xyz/현미농'}]
      },
      ChatLogAnalyzer: {
        title: "메신저 채팅로그 분석기",
        img: '../images/portfolio/cla.png',
        overview: ["어느 날 단톡방에서 떠들다가 이런 생각이 들었다. '이 중에 누가 제일 시간이 남아도는 놈일까?'",
                  '프로그래밍 걸음마 때 시작해본 프로젝트, 할 줄 아는게 많아질수록 기능도 점점 늘어났고...'
                  ],
        description: ['카카오톡의 채팅 로그를 업로드하면, 로그를 분석한 결과를 표시해주는 앱입니다.',
                    '단순 대화량, 시간대별 대화량, 각 유저별 개인 키워드 등을 표시해줍니다.',
                    '아직 가야할 길이 멉니다.'],
        stack: [],
        duration: '2주일',
        article: [{title: 'github - ChatLogAnalyzer', url: 'https://github.com/zerobell-lee/ChatLogAnalyzer'}],
        references: [{title: '카카오톡 채팅 분석기', url: 'http://zerobell.xyz/kakao'}]
      },
      LogINN: {
        title: "Log-INN",
        img: "../images/portfolio/loginn.png",
        overview: ["새로운 손님이 올 때마다 도어락 비밀번호 재설정..",
                  "원격으로, 무작위로 비밀번호를 설정할 순 없을까?",
                  "들어가는 방법은 바코드로!"],
        description: ["MQTT 프로토콜을 이용한 바코드 스마트도어록 시스템입니다.", 
                      "호스트가 서버상에서 발급 버튼을 누르면 서버는 무작위 비밀번호를 발급하고, 이를 투숙객에게 메일로 전송합니다.",
                    "도어락에 연결된 컨트롤러가 바코드 리더기로 바코드를 읽어들인 후, 도어락을 제어합니다."],
        stack: [],
        duration: '1개월',
        article: [{title: 'github - loginn-rasp', url: 'https://github.com/zerobell-lee/loginn-rasp'},
                  {title: 'github - loginn-web', url: 'https://github.com/zerobell-lee/loginn-web'},
                  {title: 'github - loginn-arduino', url: 'https://github.com/zerobell-lee/loginn-arduino'}],
        references: [{title: 'Youtube - LogINN', url: 'https://www.youtube.com/watch?v=tddKhQaHOvI'}]
      }
    }
  }
  
  export default resumeData