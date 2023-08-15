import * as S from "./style";
import logo from "@src/presentation/assets/common/logo.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { NAV_ITEMS } from "@src/presentation/constants/Nav/nav.constant";

export default function Nav() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <S.NavContainer>
      <S.NavLogoContainer onClick={() => navigate("/management")}>
        <img src={logo} alt="이미지 없음" />
        <p>ADMIN</p>
      </S.NavLogoContainer>
      <S.NavItemContainer>
        {NAV_ITEMS.map((item) => (
          <S.NavItem
            key={item.id}
            onClick={() => navigate(item.link)}
            isSelect={pathname === item.link}
          >
            <item.img height={50} width={50} />
            <p>{item.title}</p>
          </S.NavItem>
        ))}
      </S.NavItemContainer>
    </S.NavContainer>
  );
}
