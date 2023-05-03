import { GlobalStyles } from "./style";
import Header from "./Header";
import MainImage from "./MainImage";

  

function App() {
  return (
    <>
    {/*css리셋 */}
    <GlobalStyles/>

    {/*메뉴*/}
    <Header/>

    {/*메인 이미지*/}
    <MainImage/>
    </>
  );
}

export default App;
