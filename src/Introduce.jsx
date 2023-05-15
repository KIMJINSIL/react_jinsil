import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 70vh;
    background: rgba(0,0,0,0.2);
    display: flex;
    justify-content: center;
`;
const InnerContainer = styled.div`
    width: 1000px;
    height: 200px;
    background: rgba(0,0,0,0.3);
`;
const GridContainer = styled.div`
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr 1fr 1fr;
`;
const MainBox = styled.div`
    background : white;
    height : 500px;
    border-radius : 20px;
    &:hover {
        background : rgb(180,10,10);
    }
`;
export default function Profile(){
    return (
        <Container>
            {/*1000픽셀 중앙정렬 */}
            <InnerContainer>
                {/*그리드*/}
                <GridContainer>
                    {/*박스*/}
                    <MainBox>1</MainBox>
                    <MainBox>2</MainBox>
                    <MainBox>3</MainBox>
                </GridContainer>
            </InnerContainer>
        </Container>
    );
}