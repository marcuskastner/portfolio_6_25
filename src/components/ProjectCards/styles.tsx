import styled from "styled-components";

export const ProjectCardSection = styled.section`
  padding: 7.5rem 0 3rem;

  @media screen and (max-width: 1024px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const CardIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #1890ff;
`;

export const CardTitle = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  font-weight: 600;
`;

export const CardText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #444;
`;
