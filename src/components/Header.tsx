import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import useMovieSearch from "../features/movie/useMovieSearch";
import React, { useState } from "react";

const Base = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  background: rgb(255, 255, 255);
  text-align: center;
  box-shadow: rgb(0 0 0 / 0%) 0 1px 0 0;
  width: 100%;
  height: 62px;
  z-index: 10;
`;

const Navigation = styled.nav`
  margin: 0 auto;
  max-width: 1200px;
`;

const MenuListWrapper = styled.div``;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
`;

const Menu = styled.li`
  display: flex;
  align-items: center;
  height: 62px;
  flex-shrink: 0;
  &:not(:first-of-type) {
    margin-left: 24px;
  }
`;

const MenuButton = styled.button<{ active?: boolean }>`
  font-size: 15px;
  color: ${({ active }) => (active ? `rgb(53, 53, 53)` : `rgb(126, 126, 126)`)};
  cursor: pointer;
  border: none;
  background: none;
`;

const SearchMenu = styled.li`
  width: 300px;
  display: flex;
  align-items: center;
  height: 62px;
  flex-shrink: 1;
  margin: 0 0 0 auto;
  position: relative;
`;

const StyleLink = styled(Link)`
  text-decoration: none;
`;

const TextLogo = styled.h1`
  font-size: 24px;
  font-weight: 700;
  > span[class="primary"] {
    color: rgb(255, 47, 110);
  }
  > span:not(.primary) {
    color: #222;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
`;

const SearchFormWrapper = styled.div``;

const SearchForm = styled.form``;

const SearchLabel = styled.label`
  background: rgb(245, 245, 247);
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 38px;
  border-radius: 2px;
  padding: 7px 8px;
`;

const SearchInput = styled.input`
  font-size: 14px;
  font-weight: 400;
  background: transparent;
  width: 100%;
  padding: 0 0 0 8px;
  border: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  caret-color: rgb(53, 53, 53);
  line-height: 23px;
`;

const SignIn = styled.button`
  background: transparent;
  color: rgb(116, 116, 123);
  font-size: 14px;
  padding: 0;
  border: 0;
  cursor: pointer;
  margin: 15px 0;
`;

const SignUp = styled.button`
  border-radius: 6px;
  font-weight: 500;
  box-sizing: border-box;
  min-width: 72px;
  height: 32px;
  background: transparent;
  color: rgb(53, 53, 53);
  font-size: 14px;
  border: 1px solid rgba(116, 116, 123, 0.5);
  cursor: pointer;
  margin: 15px 0;
`;

const SearchResultWrapper = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  z-index: 999;
  background-color: #fff;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  max-height: 220px;
  overflow-y: scroll;
`;

const SearchResultList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const SearchResultListItem = styled.li`
  padding: 4px 6px;
  box-sizing: border-box;
  color: #222;
  font-size: 16px;
  width: 100%;
  height: 24px;
  display: flex;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  &:hover {
    background: #eee;
  }
`;

function Header() {
  const [keyword, setKeyword] = useState<string>("");
  const pathname = window.location.pathname;

  const isTv = pathname.indexOf("tv") > -1;
  /**
   * input keyword ?????? ??? ???????????? ??????
   * @param event
   */
  const handleKeyword = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setKeyword(event.target.value);
  };

  const { data: searchResult, isLoading } = useMovieSearch(keyword);

  return (
    <Base>
      <Navigation>
        <MenuListWrapper>
          <MenuList>
            <Menu>
              <StyleLink to="/">
                <TextLogo>
                  <span className="primary">WATCHA</span>
                  <span>PEDIA</span>
                </TextLogo>
              </StyleLink>
            </Menu>
            <Menu>
              <StyleLink to="/">
                <MenuButton>??????</MenuButton>
              </StyleLink>
              <StyleLink to="/tv">
                <MenuButton>TV ????????????</MenuButton>
              </StyleLink>
            </Menu>
            <SearchMenu>
              <SearchContainer>
                <SearchFormWrapper>
                  <SearchForm>
                    <SearchLabel>
                      <AiOutlineSearch />
                      <SearchInput
                        placeholder="?????????, ??????, ?????????, ????????? ??????????????????."
                        onChange={handleKeyword}
                        value={keyword}
                      />
                    </SearchLabel>
                  </SearchForm>
                </SearchFormWrapper>
              </SearchContainer>
              <SearchResultWrapper>
                <SearchResultList>
                  {searchResult?.data.results.map((item) => (
                    <Link key={item.id} to={`/movie/${item.id}`}>
                      <SearchResultListItem>{item.title}</SearchResultListItem>
                    </Link>
                  ))}
                </SearchResultList>
              </SearchResultWrapper>
            </SearchMenu>
            <Menu>
              <SignIn>?????????</SignIn>
            </Menu>
            <Menu>
              <SignUp>????????????</SignUp>
            </Menu>
          </MenuList>
        </MenuListWrapper>
      </Navigation>
    </Base>
  );
}

export default Header;
