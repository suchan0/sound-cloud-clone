import styled from 'styled-components';
import React from 'react';

const TemplateBlock = styled.div`
    min-height: 100vh;
    padding: 0 20px;
    min-width: 920px;
    width: 1240px;
    background: white;
    margin: 50px auto;
    @media screen and (max-width: 1239px) {
        width: 1080px;
    }
    @media screen and (max-width: 1079px) {
        width: 960px;
    }
`;

const TemplateRyu = ({ children }) => {
    return <TemplateBlock>{children}</TemplateBlock>;
};

export default TemplateRyu;
