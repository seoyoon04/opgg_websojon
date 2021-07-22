import React from "react";
import styled, { css } from "styled-components";
import championTier from "../assets/icon-champion-p.png";
import championTier1 from "../assets/icon-champtier-1.png";
import tierStay from "../assets/icon-championtier-stay.png";
import champion32 from "../assets/champion32.png";
import ChampionTrendHeader from "./ChampionTrendHeader";

interface ChampionTrendItemProps {
    championID: number;
    change : number;
    name: string;
    position: string[];
    win: string;
    pick: string;
    tier: number;
}


const ChampionTrendItemWrapper = styled(ChampionTrendHeader)`
        background-color: white;

        & > .rank {
            font-style: italic;
            font-size: 20px;
        }

        & > .champ {
            display: flex;
            align-items: center;
            text-align: left;
            & > .change {
                display: flex;
                align-items: center;
                font-size: 14px;
                line-height: 14px;
                padding: 0 10px;

                & > img {
                margin-right: 2px;
                }
            }
            & > .champ-img {
                width: 32px;
                height: 32px;
                background-image: url(${champion32});
                background-position: 0 0;
            }

            & > .champ-desc {
                font-size: 12px;
                display: flex;
                margin-left: 5px;
                flex-direction: column;
                justify-content: space-between;

                & > :first-child {
                    font-weight : bold;
                }
            }
        }
`

const ChampionTrendItem: React.FC = () => {
    return (
        <ChampionTrendItemWrapper className="list-item champion">
        <div className="rank">1</div>
        <div className="champ">
            <div className="change">
                <img src={tierStay} alt="" />
                0
            </div>
            <div className="champ-img"/>
            <div className="champ-desc">
                <div>아드록스</div>
                <div>탑</div>
            </div>
        </div>
        <div className="win">50.23%</div>
        <div className="pick">14.21%</div>
        <div className="tier">
            <img src={championTier1} alt="" />
        </div>
    </ChampionTrendItemWrapper>  
    )
}

export default ChampionTrendItem