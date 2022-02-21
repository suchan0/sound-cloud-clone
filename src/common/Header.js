import styled from "styled-components";
import React from "react";
import { Grid, Image, Input, Text } from "../elements";
import { Link } from "react-router-dom";
import Logo from "../static/로고.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCaretDown,
  faEllipsis,
  faEnvelope,
  faMagnifyingGlass,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";

const HeaderBlock = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  background: #333;
  color: #ccc;
  font-size: 0.875rem;

  .input_container {
    flex: 1;
    input {
      width: 100%;
      background: #e5e5e5;
      border: 0;
      padding: 5px 7px;
      border-radius: 4px;
    }
  }
  .search_glass {
    position: absolute;
    right: 2em;
    top: 0.5em;
    color: #333;
  }
`;

const Header = () => {
  return (
    <HeaderBlock>
      <Grid width="65%" margin="0 auto" is_flex="flex">
        <Grid>
          <Grid is_flex="flex">
            <Grid bg="linear-gradient(#f70,#f30)" padding="0.9em">
              <Link to="/">
                <img src={Logo} alt="로고" />
              </Link>
            </Grid>
            <Grid padding="1em 2em" border_right="1px solid #111">
              <Link to="/">Home</Link>
            </Grid>
            <Grid padding="1em 2em" border_right="1px solid #111">
              <Link to="/detail">Stream</Link>
            </Grid>
            <Grid padding="1em 2em" border_right="1px solid #111" s>
              <Link to="/test">Library</Link>
            </Grid>
          </Grid>
        </Grid>

        <form className="input_container">
          <Grid>
            <Grid padding="0 1em">
              <input placeholder="Search" />
              <span className="search_glass">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </span>
            </Grid>
          </Grid>
        </form>

        <Grid>
          <Grid is_flex="flex">
            <Grid padding="0 1em">
              <Text>Upload</Text>
            </Grid>
            <Grid is_flex="flex" padding="0 1em">
              <Image />
              <Text margin="0 1em">야울해</Text>
              <Grid>
                <FontAwesomeIcon icon={faCaretDown} />
              </Grid>
            </Grid>
            <Grid>
              <Grid padding="0 1em">
                <Text size="1.1rem">
                  <FontAwesomeIcon icon={faBell} />
                </Text>
              </Grid>
            </Grid>
            <Grid>
              <Grid padding="0 1em">
                <Text size="1.1rem">
                  <FontAwesomeIcon icon={faEnvelope} />
                </Text>
              </Grid>
            </Grid>
            <Grid>
              <Grid padding="0 1em">
                <Text size="1.6rem">
                  <FontAwesomeIcon icon={faEllipsis} />
                </Text>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </HeaderBlock>
  );
};

export default Header;