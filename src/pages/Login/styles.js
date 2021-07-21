import styled from "styled-components";
import { mixins } from "../../styles/mixinis";

export const Styled = {
    Error: styled.p`
        margin-top: 4px;
        align-self: center;
        justify-self: center;
        color: ${mixins.colors.red};
        font-family: ${mixins.fonts.semi_bold};
        font-size: ${mixins.typograph.paragraph};
    `
}