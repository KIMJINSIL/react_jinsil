import { GlobalStyles } from "./styles";
import Header from "./Header";
import MainImage from "./MainImage";
import Introduce from "./Introduce";
import Portfolio from "./Portfolio";

function App() {
  return (
    <>
      {/* css 리셋 */}
      <GlobalStyles />

      {/* 메뉴 */}
      <Header />

      {/* 메인이미지 */}
      <MainImage />
      
      {/* 프로파일*/}
      <Introduce/>
      
      {/* 포트폴리오*/}
      <Portfolio/>
    </>

  );
}

export default App;
