const quotes = [
    {
        quote : "때로는 살아있는 것조차도 용기가 될 때가 있다.",
        author : "Seneca"
    },
    {
        quote : "인생은 자전거를 타는 것과 같다. 균형을 잡으려면 움직여야 한다.",
        author : "알버트 아인슈타인"
    },
    {
        quote : "네 믿음은 네 생각이 된다. 네 생각은 네 말이 된다. 네 말은 네 행동이 된다. 네 행동은 네 습관이 된다. 네 습관은 네 가치가 된다. 네 가치는 네 운명이 된다.",
        author : "마하트마 간디"
    },
    {
        quote : "연은 순풍이 아니라 역풍에 가장 높이 난다.",
        author : "윈스턴 처칠"
    }, 
    {
        quote : "작은 계획을 세우지 말라. 작은 계획에는 사람의 피를 끓게할 마법의 힘이 없다. 큰 계획을 세우고, 소망을 원대히 하여 일하라.",
        author : "다니엘 H. 번햄"
    },
    {
        quote : "나는 똑똑한 것이 아니라 단지 문제를 더 오래 연구할 뿐이다.",
        author : "알버트 아인슈타인"
    },
    {
        quote : "난 위험에 대해 그리 많이 생각지 않는다. 난 그저 내가 하고 싶은 것을 할 뿐이다. 앞으로 나아가야한다면, 나아가면 된다.",
        author : "릴리언 카터"
    },
    {
        quote : "만약 당신이 한번도 두렵거나 굴욕적이거나 상처입은 적이 없다면, 그렇다면 당신은 아무런 위험도 감수하지 않은 것이다.",
        author : "줄리아 소렐"
    },
    {
        quote : "사람을 판단하는 최고의 척도는 안락하고 편안한 시기에 보여주는 모습이 아닌,도전하며 논란에 휩싸인 때 보여주는 모습이다.",
        author : "마틴 루터 킹"
    },
    {
        quote : "가장 큰 위험은 위험없는 삶이다.",
        author : "스티븐 코비"
    },
    {
        quote : "열정없이 사느니 차라리 죽는게 낫다.",
        author : "커트 코베인"
    },
    {
        quote : "만족은 결과가 아니라 과정에서 온다.",
        author : "제임스 딘"
    },
    {
        quote : "내 자신에 대한 자신감을 잃으면, 온 세상이 나의 적이 된다.",
        author : "랄프 왈도 에머슨"
    },
    {
        quote : "절대로 고개를 떨구지 말라. 고개를 치켜들고 세상을 똑바로 바라보라.",
        author : "헬렌 켈러"
    },
    {
        quote : "당신이 되고 싶었던 어떤 존재가 되기에는 지금도 결코 늦지 않았다",
        author : "조지 앨리엇"
    },
    {
        quote : "위대한 일을 위해서 대단한 도전이 필요하지 않다. 단지 순간순간의 작은 도전이 모여 위대한 일을 이루어 간다.",
        author : "모션 코치"
    },
    {
        quote : "두려움에 직면하게 되는 모든 경험을 통해 당신은 힘과 용기, 그리고 자신감을 얻게 된다. 그러므로 절대 해낼 수 없을 거로 생각하는 일들을 해야 한다.",
        author : "엘리너 루스벨트"
    },
    {
        quote : "나는 젊었을 때 10번 시도하면 9번 실패했다. 그래서 10배로 노력했다.",
        author : "조지 버나드 쇼"
    },
    {
        quote : "슈팅이 없다면 득점 따윈 100% 불가능하다.",
        author : "웨인 그레츠키"
    },
    {
        quote : "기회란 일출과 같다. 그렇기에 너무 오래 기다리면 놓치게 되는 것이다.",
        author : "윌리엄 아서 워드"
    }

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.floor(Math.random() * quotes.length))]; 

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;