import styled from "styled-components"

const Container = styled.div`
    width : 100%;
    display : flex;
    justify-content : center;
    padding : 64px 0;
`;
const InnerContainer = styled.div`
    width : 1000px;
`;
const BoxTitle = styled.div`
    font-size : 32px;
    font-weight : 600px;
    padding :12px 0;
`
const SubTitle = styled.div`
    font-size : 24px;
    color : rgba(0,0,0,0.7);
    padding :12px 0;
`
const ImageContent = styled.div`
    background-image : url("https://images.unsplash.com/photo-1682687221213-56e250b36fdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
    background-size : cover;
    background-position : center center;
    width : 100%
    height : 350px;
    border-radius : 20px;
    padding : 64px;
    display : flex;
    margin : 16px 0;
    justify-content : space-between;
    &:hover {
        background : rgb(180,10,10);
    }
`;
const ContentsText = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : flex-start;
`
const ButtonContainer = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : flex-end;
`
const ContentButton = styled.div`
    width : 200px;
    height : 45px;
    background : red;
    color : white;
    border-radius : 10px;
    display : flex;
    justify-content : center;
    align-items : center;
`
export default function Portfolio(){
    return(
        <Container>
            {/*1000px 중앙정렬 */}
            <InnerContainer>
                <div>
                    <BoxTitle>온.오프라인 언제 어디서든</BoxTitle>
                    <SubTitle>간편하고 빠르게 매매/임대차 정보와 투자 인사이트를 받아보세요.</SubTitle>
                </div>

                {
                Array(3).fill("").map((_,i) =><ImageContent>
                    <ContentsText>
                        <div>카카오 비즈 채널</div>
                        <div>선별된 스마트한 핵심투자정보를 받아보세요!</div>
                        <div>
                            <div>세부내용입니다1</div>
                            <div>세부내용입니다2</div>
                            <div>세부내용입니다3</div>
                        </div>
                    </ContentsText>
                    <ButtonContainer>
                        <ContentButton>채널바로가기</ContentButton>
                    </ButtonContainer>
                </ImageContent>
                )}
            </InnerContainer>
        </Container>
    );
}