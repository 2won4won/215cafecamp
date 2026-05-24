const bbqData = [
  {
    id: 1,
    img: "img/picture/imgBelly.jpg",
    ko: "생삼겹살",
    price: 25000,
    ex: " 조리전 2인 기준 450g <br> BBQ 굽는 시간 <br> 25분 <br> 2인 이상 주문 가능"
  },
  {
    id: 2,
    img: "img/picture/imgNeck.jpg",
    ko: "생목살",
    price: 25000,
     ex: " 조리전 2인 기준  450g <br> BBQ 굽는 시간 <br> 25분 <br> 2인 이상 주문 가능"
  },
  {
    id: 3,
    img: "img/picture/imgJowl.jpg",
    ko: "생항정살",
    price: 25000,
    ex: "조리전 2인 기준 500g <br> BBQ 굽는 시간 <br> 20분 <br> 2인 이상 주문 가능"
  },
  {
    id: 4,
    img: "img/picture/imgMeat.jpg",
    ko: "고기만 추가",
    price: 20000,
    ex: " 조리전 1인 기준 200~230g <br> BBQ Side 제외 <br>(소세지 etc.)<br> 추가 주문시 가능  "
  }
];


// const setData = [
//   {
//     id: 1,
//     img: "img/picture/imgJang.jpg",
//     ko: "215Set",
//     price: 7000,
//     ex: "깊고 깔끔한 <br> 된장찌개 <br> 밥,고기와 함께. <br> 청양고추는 선택 가능."
//   }
// ];

// const sideData = [
//   {
//     id: 1,
//     img: "img/picture/imgJang.png",
//     ko: "보글 된찌",
//     price: 7000,
//     ex: "깊고 깔끔한 <br> 된장찌개 <br> 밥,고기와 함께. <br> 청양고추는 선택 가능."
//   },
//   {
//     id: 2,
//     img: "img/picture/imgEgg.jpg",
//     ko: "말아 계란",
//     price: 10000,
//     ex: "신선한 달걀을  <br> 말고 말고 또 말아서 <br> 부드럽고 촉촉한  <br> 단백질 완전체."
//   },
//   {
//     id: 3,
//     img: "img/picture/imgSoba.png",
//     ko: "오싹 메밀",
//     price: 10000,
//     ex: "머리 끝까지 서늘해지는 <br> 그 순간 <br> 당신은 이미 남극 그 어디쯤 <br> 머리 아픔 주의!"
//   },
//   {
//     id: 4,
//     img: "img/picture/imgPizzah.jpg",
//     ko: "원픽 피자",
//     isPizza: true, // 💡 피자 그룹임을 알리는 식별자
//     // 💡 피자 내부에 세부 데이터를 배열로 세분화
//     subItems: [
//       {
//         ko: "원픽피자 + 탄산음료 1개",
//         price: 21000,
//         img: "img/picture/imgPizza.jpg",
//         ex: "#피자세트 <br> #갈릭피자 #페퍼로니피자 #탄산음료 1 <br> #원픽피자와 함께하는 피콜 타임"
//       },
//       {
//         ko: "원픽피자 + 주류 2개",
//         price: 30000,
//         img: "img/picture/imgPizzah.jpg",
//         ex: "#피맥세트 <br> #갈릭피자 #페퍼로니피자 #맥주 #소주 <br> #원픽피자와 함께하는 피맥 타임"
//       }
//     ]
//   },
//   {
//     id: 5,
//     img: "img/picture/imgDdok.jpg",
//     ko: "수혈 떡뽁",
//     price: 15000,
//     ex: "적당히 매콤달달한 <br> 떡볶이 <br> 혈중 농도 풀충전 "
//   },
//   {
//     id: 6,
//     img: "img/picture/imgCarb.png",
//     ko: "든든 탄수",
//     price: 15000,
//     ex: "달달한 고구마, <br> 쫀득 구운 쌀가래떡.<br> 든든하게 먹고 <br> 기분 UP! UP!"
//   },
//   {
//     id: 7,
//     img: "img/picture/imgPupa.jpeg",
//     ko: "번데기",
//     price: 11000,
//     ex: "고단백질 공급, <br> 콜레스테롤 청소.<br> 탄수화물 가볍게, <br> 단백질은 무겁게! "
//   }
// ];

const caffeData = [
  {
    id: 1,
    img: "",
    ko: "에스프레소",
    en: "Espresso",
    price: 6500,
    ex: ""
  },
  {
    id: 2,
    img: "",
    ko: "아메리카노",
    en: "Americano",
    price: 6500,
    ex: ""
  },
  {
    id: 3,
    img: "",
    ko: "카페라떼",
    en: "Cafe Latte",
    price: 7000,
    ex: ""
  },
  {
    id: 4,
    img: "",
    ko: "카푸치노",
    en: "Cappuccino",
    price: 7000,
    ex: ""
  },
  {
    id: 5,
    img: "",
    ko: "바닐라라떼",
    en: "Vanilla Latte",
    price: 7500,
    ex: ""
  },
  {
    id: 6,
    img: "",
    ko: "연유라떼",
    en: "Sua Da Latte",
    price: 7500,
    ex: ""

  }
]
const fruitData = [
  {
    id: 1,
    img: "",
    ko: "썬키스트 레몬",
    en: " Lemon",
    price: 8500,
    ex: "골다공증 예방, 면역력 강화 "
  },
  {
    id: 2,
    img: "",
    ko: "문경 오미자 ",
    en: " Omija",
    price: 8500,
    ex: "피부 미용, 간 해독 작용 "
  }
]

const summerData = [
  {
    id: 1,
    img: "",
    ko: "제주 보리개역",
    en: "JeJU Cereal Power",
    price: 8000,
    ex: "옛 제주식 미숫가루 "
  },
  {
    id: 2,
    img: "",
    ko: "피치 아이스티",
    en: "Peach Iced Tea",
    price: 8000,
    ex: "갈증해소, 수분 보충, 피로 회복"
  }
];

const flowerData = [
  {
    id: 1,
    img: "",
    ko: "아홉번 덕은 차",
    en: "Hurb",
    price: 9000,
    ex: "기력 회복, 소화불량 해소"
  },
  {
    id: 2,
    img: "",
    ko: "느긋한 카모마일",
    en: "ChamoMint",
    price: 8000,
    ex: "심신 진정, 통증 완화, 집중력 향상"
  // },
  // {
  //   id: 3,
  //   img: "",
  //   ko: "대추쌍화탕",
  //   en: "SSangHwaTang",
  //   price: 10000,
  //   ex: ""
  }
];