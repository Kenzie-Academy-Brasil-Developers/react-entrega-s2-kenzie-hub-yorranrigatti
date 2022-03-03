import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        outline: 0;
    }
    :root{
        --Color-primary: #FF577F;
        --Color-primary-Focus: #FF427F;
        --Color-primary-Negative: #59323F;

        --Grey-4: #121214;
        --Grey-3: #212529;
        --Grey-2: #343B41;
        --Grey-1: #868E96;
        --Grey-0: #F8F9FA;

        --Sucess: #3FE864;
        --Negative: #E83F5B;
    }
    body{
        background: var(--Grey-4);
        font-family: 'Inter', sans-serif;
        font-size: 1rem;
        padding: 12px;
    }
    button{
        cursor: pointer;
    }
    h1, h2, h3, h4, h5, h6 {
        font-weight:bold;
    }
    a{
        text-decoration:none;
    }
`;

export const ColorPrimary = "#FF577F";
export const ColorPrimaryFocus = "#FF427F";
export const ColorPrimaryNegative = "#59323F";

export const Grey4 = "#121214";
export const Grey3 = "#212529";
export const Grey2 = "#343B41";
export const Grey1 = "#868E96";
export const Grey0 = "#F8F9FA";

export const Sucess = "#3FE864";
export const Negative = "#E83F5B";
