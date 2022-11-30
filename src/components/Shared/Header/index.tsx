import * as S from "./Header.style";

const MENU = ["ABOUT", "SHOP", "LEARN", "CONTACT", "LOVE"];

function Header() {
  return (
    <S.Header>
      <S.Slogan>Congratulations! Today is your Habit Birthday!</S.Slogan>
      <S.Wrapper>
        <S.Title>HABIT BIRTHDAY</S.Title>
      </S.Wrapper>
      <S.Navtab>
        <S.Tab>
          {MENU.map((tab, idx) => (
            <li key={idx}>{tab}</li>
          ))}
        </S.Tab>
      </S.Navtab>
    </S.Header>
  );
}

export default Header;
