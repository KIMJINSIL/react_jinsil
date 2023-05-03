import styled from "styled-components";

const ContainerImage = styled.div`
    width : 100%;
    height : 80vh;
    overflow : hidden;
    position : relative;
    &::after{
      content : "";
      position : absolute;
      top : 0;
      left : 0;
      width : 100%;
      height : 100%;
      background-color : rgba(0,0,20,0.5);
    }
  `;
  const MainImages = styled.img`
    width : 100%;
    height : 100%;
    object-fit : cover;
    object-position : center;
  `;
  const MainTitle = styled.div`
    position : absolute;
    font-weight : 900;
    font-size : 60px;
    transform : translate(-50%, -50%);
    top : 50%;
    left : 50%;
    z-index : 99;
    color : rgba(255,255,255,0.8);
    text-align : center;
    }
  `;
  const SubTitle = styled.div`
    font-size : 30px;
    margin-top : 10px;
    color : rgba(255,255,255,0.7);
  `;

export default function MainImage(){
    return(
        <ContainerImage>
        <MainImages 
            src="https://images.unsplash.com/photo-1682686581663-179efad3cd2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
            alt="메인이미지"/>
        <MainTitle>
          <div>영진직업전문학교</div>
          <SubTitle>취업률 전국 최고</SubTitle>
        </MainTitle>
      </ContainerImage>
    )
}