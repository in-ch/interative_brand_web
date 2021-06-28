import { createGlobalStyle } from "styled-components";
import reset from "styled-reset"

export const GlobalStyles = createGlobalStyle` 
    ${reset}
    input{
        all:unset;
    }
    *{
        box-size:border-box
    }
    body{
        width:100%;height:100%;overflow:hidden;
    }
`;