import React from "react";
import { createGlobalStyle } from "styled-components";
import classNames from "clsx";

import IntroSectionWithDropdownNavigationMain from "./style";
import SnapLogo from "./images/logo.svg?react";
import DatabizLogo from "./images/client-databiz.svg";
import AudiophileLogo from "./images/client-audiophile.svg";
import MeetLogo from "./images/client-meet.svg";
import MakerLogo from "./images/client-maker.svg";
import ArrowDown from "./images/icon-arrow-down.svg?react";
import ArrowUp from "./images/icon-arrow-up.svg?react";
import TodoIcon from "./images/icon-todo.svg?react";
import CalendarIcon from "./images/icon-calendar.svg?react";
import RemindersIcon from "./images/icon-reminders.svg?react";
import PlanningIcon from "./images/icon-planning.svg?react";
import MenuIcon from "./images/icon-menu.svg?react";
import CloseIcon from "./images/icon-close-menu.svg?react";
import ImageDesktop from "./images/image-hero-desktop.png";
import ImageMobile from "./images/image-hero-mobile.png";
import "./font.css";

const GlobalStyle = createGlobalStyle`
  html {
        font-size: 18px;
  }
  @media screen and (max-width: 1024px) {
    html {
        font-size: 14px;
    }
  }
`;

interface ToggleItemProps {
  children: React.ReactNode;
}

const ToggleItem = ({ children }: ToggleItemProps) => {
  return (
    <li>
      <div>{children}</div>
    </li>
  );
};

interface ToggleListProps {
  children: React.ReactNode;
  label: string;
}

const ToggleList = ({ children, label }: ToggleListProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const Arrow = isOpen ? ArrowUp : ArrowDown;
  return (
    <li className={classNames({ open: isOpen })}>
      <div className="toggle-label" onClick={toggle}>
        {label} <Arrow />
      </div>
      <ul className="toggle-list">{children}</ul>
    </li>
  );
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <IntroSectionWithDropdownNavigationMain>
      <GlobalStyle />
      <ul className={classNames("menu-mobile", { open: isMenuOpen })}>
        <li>
          <button className="btn-close" onClick={() => setIsMenuOpen(false)}>
            <CloseIcon />
          </button>
        </li>
        <ToggleList label="Features">
          <ToggleItem>
            <TodoIcon /> <span>Todo List</span>
          </ToggleItem>
          <ToggleItem>
            <CalendarIcon /> <span>Calendar</span>
          </ToggleItem>
          <ToggleItem>
            <RemindersIcon /> <span>Reminders</span>
          </ToggleItem>
          <ToggleItem>
            <PlanningIcon /> <span>Planning</span>
          </ToggleItem>
        </ToggleList>

        <ToggleList label="Company">
          <ToggleItem>History</ToggleItem>
          <ToggleItem>Our Team</ToggleItem>
          <ToggleItem>Blog</ToggleItem>
        </ToggleList>
        <li>Careers</li>
        <li>About</li>
        <li className="user-actions">
          <button>Login</button>
          <button className="btn-register">Register</button>
        </li>
      </ul>
      <header>
        <SnapLogo className="logo" />
        <ul className="menu">
          <li>
            Features <ArrowDown className="not-hover" />
            <ArrowUp className="hover-inline" />
            <ul className="toggle-list">
              <li>
                <TodoIcon /> <span>Todo List</span>
              </li>
              <li>
                <CalendarIcon /> <span>Calendar</span>
              </li>
              <li>
                <RemindersIcon /> <span>Reminders</span>
              </li>
              <li>
                <PlanningIcon /> <span>Planning</span>
              </li>
            </ul>
          </li>
          <li>
            Company <ArrowDown className="not-hover" />
            <ArrowUp className="hover-inline" />
            <ul className="toggle-list">
              <li>History</li>
              <li>Our Team</li>
              <li>Blog</li>
            </ul>
          </li>
          <li>Careers</li>
          <li>About</li>
        </ul>
        <div className="user-action">
          <button>Login</button>
          <button className="btn-register">Register</button>
        </div>
        <button className="menu-btn" onClick={() => setIsMenuOpen(true)}>
          <MenuIcon />
        </button>
      </header>

      <main>
        <img src={ImageMobile} alt="Mobile" className="image-mobile" />
        <div className="left-side">
          <h1>Make remote work</h1>
          <p className="text">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="btn-more">Learn more</button>
          <ul className="list-brand">
            <li>
              <img src={DatabizLogo} alt="databiz" />
            </li>
            <li>
              <img src={AudiophileLogo} alt="audiophile" />
            </li>
            <li>
              <img src={MeetLogo} alt="meet" />
            </li>
            <li>
              <img src={MakerLogo} alt="maker" />
            </li>
          </ul>
        </div>
        <img src={ImageDesktop} alt="hero" className="image-desktop" />
      </main>
    </IntroSectionWithDropdownNavigationMain>
  );
};

export default App;
