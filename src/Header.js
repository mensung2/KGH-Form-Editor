import React from "react";
import "./App.css";

const Header = () => {
  return (
    <div
      className="head"
      style={{
        marginTop: "60px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
      }}
    >
      <p style={{ fontSize: "44px" }}>
        켄터키 골든 힐 신청서 이미지 제작 페이지
      </p>
      <p
        style={{
          fontSize: "20px",
          lineHeight: "1.25",
        }}
      >
        이름, 서명, 소속 진영, 이미지 삽입 후 다운로드하여 신청서에 첨부하시길
        바랍니다.
        <br />
        키보드 또는 우측 버튼을 이용하여 이미지 상하 표시 영역을 조정할 수
        있습니다.
      </p>
    </div>
  );
};

export default Header;
