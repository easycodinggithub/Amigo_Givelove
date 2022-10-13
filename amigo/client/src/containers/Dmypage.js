import React from "react";
import "./Dmypage.css";

import Mypageheader from "../components/Mypageheader";

function Dmypage() {
  return (
    <>
      <Mypageheader />
        <div id="dmypage">
            <div id="information">
                <p>회원정보</p>
            </div>
            <div id="indivinfo">
                <div id="infoId">
                    <div class="text">아이디</div>
                    <div class="info">test2</div>
                </div> <br /> <br />
                <div id="infoPw">
                    <div class="text">비밀번호</div>
                    <div class="info">test2</div>
                    <button>비밀번호 변경</button>
                </div> <br />
                <div id="infoName">
                    <div class="text">이름</div>
                    <div class="info">홍길동</div>
                    <button>이름 수정</button>
                </div> <br />
                <div id="infoNum">
                    <div class="text">전화번호</div>
                    <div class="info">givelove@naver.com</div>
                    <button>전화번호 변경</button>
                </div> <br />
            </div>
        </div>
    </>
  );
}

export default Dmypage;
