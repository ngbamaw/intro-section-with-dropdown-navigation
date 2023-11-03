import styled from "styled-components";

const IntroSectionWithDropdownNavigationMain = styled.div`
    font-family: "Epilogue", sans-serif;
    font-weight: 500;
    .menu-mobile {
        @media screen and (min-width: 1024px) {
            display: none;
        }
        width: 20rem;
        position: fixed;
        top: 0;
        right: 0;
        height: 100vh;
        transition: transform 0.3s ease-in-out;
        &.open {
            transform: none;
        }
        color: hsl(0, 0%, 41%);
        transform: translateX(20rem);
        background: #fff;
        display: flex;
        flex-direction: column;
        gap: 24px;
        padding: 24px;
        .btn-close {
            padding: 0;
            margin-left: auto;
        }

        li {
            padding-left: 24px;
            display: flex;
            flex-direction: column;
        }
        .toggle-label {
            display: flex;
            gap: 1rem;
            align-items: center;
        }

        & > li {
            padding-left: 0;
        }

        .open {
            .toggle-list {
                overflow: hidden;
                height: fit-content;
                padding-top: 24px;
            }
        }

        .toggle-list {
            overflow: hidden;
            height: 0;
            padding-top: 0;
            gap: 24px;
            display: flex;
            flex-direction: column;
        }

        .user-actions {
            flex-direction: column;
            gap: 2px;
        }

        .btn-register {
            border: 1px solid hsl(0, 0%, 41%);
            color: hsl(0, 0%, 41%);
        }
    }
    header {
        display: flex;
        padding: 30px;
        align-items: center;
        .logo {
            margin-right: 70px;
        }
        .menu-btn {
            display: none;
            @media screen and (max-width: 1024px) {
                display: block;
                height: 100%;
                padding: 0;
            }
        }
        .menu {
            display: flex;
            gap: 2rem;
            color: hsl(0, 0%, 41%);
            display: flex;
            align-items: center;
            padding-left: 12px;
            @media screen and (max-width: 1024px) {
                display: none;
            }

            li {
                position: relative;
                display: flex;
                align-items: center;
                gap: 1rem;
                padding-block: 1rem;
                .hover-inline {
                    display: none;
                }
                &:hover {
                    .toggle-list {
                        display: flex;
                    }
                    color: black;
                    .hover-inline {
                        display: inline;
                    }
                    .not-hover {
                        display: none;
                    }
                }
                .toggle-list {
                    position: absolute;
                    color: hsl(0, 0%, 41%);
                    right: 0;
                    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
                    background-color: hsl(0, 0%, 100%);
                    padding: 1.5rem;
                    display: none;
                    flex-direction: column;
                    gap: 1rem;
                    border-radius: 0.5rem;
                    transform: translateY(calc(50% + 1.5rem));
                    li {
                        display: flex;
                        gap: 1rem;
                        width: max-content;
                        padding: 0;
                    }
                }
            }
        }
        button {
            @media screen and (max-width: 1024px) {
                display: none;
            }
        }
        .btn-register {
            margin-left: 2rem;
            border: 1px solid hsl(0, 0%, 41%);
            color: hsl(0, 0%, 41%);
            &:hover {
                color: hsl(0, 0%, 8%);
                border: 1px solid hsl(0, 0%, 8%);
            }
        }
    }
    button {
        padding: 1rem 2rem;
        border-radius: 1rem;
        background: none;
        border: none;
        font-weight: 500;
        font-family: inherit;
        font-size: 1rem;
        color: hsl(0, 0%, 41%);
        &:hover {
            color: hsl(0, 0%, 8%);
        }
    }
    ul {
        list-style: none;
    }
    .list-brand {
        display: flex;
        gap: 1rem;
    }
    main {
        height: 70vh;
        width: 80%;
        display: flex;
        margin-inline: auto;
        margin-top: 2rem;
        justify-content: center;
        @media screen and (max-width: 1024px) {
            flex-direction: column;
            height: auto;
            width: auto;
        }
        .image-mobile {
            display: none;
            @media screen and (max-width: 1024px) {
                display: block;
                margin-bottom: 2rem;
            }
        }
        .left-side {
            display: flex;
            flex-direction: column;
            height: 100%;
            max-width: 70%;
            padding-right: 10rem;
            padding-top: 4rem;
            justify-content: space-between;
            @media screen and (max-width: 1024px) {
                max-width: none;
                width: 100%;
                padding-right: 0;
                padding-top: 0;
                text-align: center;
                justify-content: center;
                gap: 2rem;
            }
            h1 {
                font-size: 5rem;
                max-width: 45rem;
                @media screen and (max-width: 1024px) {
                    max-width: none;
                    font-size: 2rem;
                }
            }
            .text {
                color: hsl(0, 0%, 41%);
                font-size: 1.2rem;
                max-width: 25em;
                @media screen and (max-width: 1024px) {
                    max-width: none;
                    font-size: 1rem;
                }
            }
            .btn-more {
                background-color: hsl(0, 0%, 8%);
                color: hsl(0, 0%, 98%);
                border: 1px solid hsl(0, 0%, 8%);
                font-weight: 700;
                margin-bottom: 5rem;
                align-self: flex-start;
                &:hover {
                    background-color: white;
                    color: hsl(0, 0%, 8%);
                    border: 1px solid hsl(0, 0%, 8%);
                }
                @media screen and (max-width: 1024px) {
                    margin-bottom: 2rem;
                    align-self: center;
                }
            }
            .list-brand {
                display: flex;
                gap: 7%;
                width: fit-content;

                li {
                    img {
                        width: 100%;
                    }
                }
                @media screen and (max-width: 1024px) {
                    width: 100%;
                    gap: 2rem;
                    justify-content: space-between;
                    padding-inline: 2rem;
                }
            }
        }
        .image-desktop {
            max-width: 40%;
            max-height: 100%;
            align-self: flex-end;
            display: none;
            @media screen and (min-width: 1024px) {
                display: block;
            }
        }
    }
    .user-action {
        margin-left: auto;
    }
`;

export default IntroSectionWithDropdownNavigationMain;
