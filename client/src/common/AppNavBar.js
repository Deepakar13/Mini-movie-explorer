import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { watchlistState } from '../features/movies/slices/watchlistSlice';
import { FaGithub } from 'react-icons/fa';
import { GiPopcorn } from 'react-icons/gi';
import { Badge } from 'reactstrap';
import styled from 'styled-components';

const Nav = styled.nav`
  background: ${(props) => props.theme.gray};
  color: ${(props) => props.theme.light};
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  z-index: 12;
  display: flex;
  align-items: center;
`;

const NavInnerContainer = styled.div`
  max-width: 1100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding: 0 1rem;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const CenterSection = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
`;

const RightSection = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  a {
    text-decoration-color: ${(props) => props.theme.gold};
  }
`;

const NavItem = styled.li`
  padding: 0.75rem;
  color: ${(props) => props.theme.light};
  font-weight: bold;
  letter-spacing: 1px;
  position: relative;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 1.25rem;
  height: 37px;
  width: 42px;
  background: ${(props) => props.theme.dark};
  color: ${(props) => props.theme.gold};
`;

const CustomBadge = styled(Badge)`
  color: ${(props) => props.theme.light};
  background: hsl(46, 80%, 40%);
  padding-right: 0.6em;
  padding-left: 0.55em;
  margin-left: 0.3rem;
  font-size: 0.8rem;
  height: 19px;
  width: 20px;
  line-height: 0.9;
  position: absolute;
  top: 16px;
  right: -7px;
  display: flex;
  justify-content: center;

  span {
    transform: translateX(1px);
  }
`;

const GithubIcon = styled(FaGithub)`
  color: ${(props) => props.theme.light};
  font-size: 1.25rem;
  margin-left: 2rem;
`;

const SearchInput = styled.input`
  padding: 0.4rem 0.75rem;
  border-radius: 5px;
  border: none;
  width: 200px;
  font-size: 0.9rem;
  outline: none;
`;

const AppNavbar = ({ onSearchChange }) => {
  const { watchlist } = useSelector(watchlistState);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (onSearchChange) onSearchChange(value);
  };

  return (
    <Nav>
      <NavInnerContainer>
        <leftSection>
          <Link to='/'>
            <LogoContainer>
              <GiPopcorn />
            </LogoContainer>
          </Link>
        </leftSection>


        <centerSection>
          <SearchInput
            type='text'
            placeholder='Search movies...'
            value={searchTerm}
            onChange={handleSearch}
          />
        </centerSection>

        

        <RightSection>
          <Link to='/'><NavItem>Home</NavItem></Link>
          <Link to='/watchlist'>
            <NavItem>
              Watchlist
              <CustomBadge pill><span>{watchlist.length}</span></CustomBadge>
            </NavItem>
          </Link>
          <NavItem>
            <a
              href='https://github.com/julianvazq/movie-explorer'
              target='_blank'
              rel='noopener noreferrer'
            >
              <GithubIcon />
            </a>
          </NavItem>
        </RightSection>
      </NavInnerContainer>
    </Nav>
  );
};

export default AppNavbar;
