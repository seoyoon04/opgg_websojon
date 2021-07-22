import React from "react";
import styled from "styled-components";
import { ChampionTrendItemCss } from "./ChampionTrendHeader";



const ChampionTrendToolbar = styled.div`
    ${ChampionTrendItemCss}
    & > div {
                flex : 1;
                background-color: white;
                border: 1px solid #e9eff4;
                font-size: 14px;
                padding: 10px 0;
                font-weight: bold;
                color: rgba(0, 0, 0, .6);
                cursor: pointer;

                &:not(:first-child) {
                    border-left: none;
                }

                &.select {
                    color: black;
                }
            }
`

export default ChampionTrendToolbar;