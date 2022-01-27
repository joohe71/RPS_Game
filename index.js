//버튼
const rock = document.querySelector(".r_btn");
const scissors = document.querySelector(".s_btn");
const paper = document.querySelector(".p_btn");
const reset = document.querySelector(".reset_btn");

//board
const gameMe = document.querySelector(".game_me");
const gameCom = document.querySelector(".game_com");

//점수
const scoreMe = document.querySelector(".score_my");
const scoreCom = document.querySelector(".score_com");

const rps = [rock, scissors, paper];
const bgImg = ["./img/rock.jpg", "./img/scissors.jpg", "./img/p.jpg"];
const number = [0,1,2]

// Computer
function Computer() {
    let computerNum = Math.floor(Math.random() * 3);
    console.log(computerNum);
    
    // 이미지 태그 추가
    const comImg = document.createElement("img");
    comImg.className = 'currCom';

    // 이미지 초기화(변경)
    if (document.querySelector(".currCom")) {
        gameCom.removeChild(gameCom.children[1]);
    }
    comImg.setAttribute("src", bgImg[computerNum]);
    comImg.setAttribute("id", computerNum);
    gameCom.appendChild(comImg);

}

// Me
const MeImg = document.createElement('img');
gameMe.appendChild(MeImg);
function Me(event) {
    MeImg.className = 'currMe'
    if (event.target === rock.querySelector("img")) {
        MeImg.setAttribute("src",bgImg[0]);
        MeImg.setAttribute("id",number[0]);
    }
    else if (event.target === scissors.querySelector("img")) {
        MeImg.setAttribute("src",bgImg[1]);
        MeImg.setAttribute("id",number[1]);
    }
    else if (event.target === paper.querySelector("img")) {
        MeImg.setAttribute("src",bgImg[2]);
        MeImg.setAttribute("id",number[2]);
    }

}

// 점수 비교
function compareMeCom() {
    const currMe1 = document.querySelector(".currMe");
    const currCom1 = document.querySelector(".currCom");
    let scoreM = parseInt(currMe1.id);
    let scoreC = parseInt(currCom1.id);
  
    if (
      (scoreM == 0 && scoreC == 1) ||
      (scoreM == 1 && scoreC == 2) ||
      (scoreM == 2 && scoreC == 0)
    ) {
      scoreMe.innerText = parseInt(scoreMe.innerText) + 1;
    }
    else if (
      (scoreM == 1 && scoreC == 0) ||
      (scoreM == 2 && scoreC == 1) ||
      (scoreM == 0 && scoreC == 2)
    ) {
      scoreCom.innerText = parseInt(scoreCom.innerText) + 1;
    }
  };

// 리셋하기
function resetGame() {
    if(!confirm("게임을 초기화하시겠습니까?")) {
      alert("게임을 이어 진행합니다.");
    }
    else {
      alert("게임을 리셋합니다.");
      scoreMe.innerText = 0;
      scoreCom.innerText = 0;
      const curr1 = document.querySelector(".currMe")
      const currCom1 = document.querySelector(".currCom")
      if (curr1 && currCom1) {
         // 해당 요소가 없을 때 제거가 되면 에러 발생.
         // 추가된 img 태그의 속성값만 삭제
        gameCom.lastChild.removeAttribute("src");
        gameMe.lastChild.removeAttribute("src")}
    }
  }


rock.addEventListener('click',Computer);
scissors.addEventListener('click',Computer);
paper.addEventListener('click',Computer);

rock.addEventListener('click',Me);
scissors.addEventListener('click',Me);
paper.addEventListener('click',Me);

rock.addEventListener('click',compareMeCom);
scissors.addEventListener('click',compareMeCom);
paper.addEventListener('click',compareMeCom);

reset.addEventListener('click',resetGame)