import { Row } from "antd";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import { NavLink, LogoContainer, FooterContainer } from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = () => {
  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <Container border={true}>
        <Row
          justify="space-between"
          align="middle"
          style={{ paddingTop: "3rem" }}
        >
          <NavLink to="/">
            <LogoContainer>
              <SvgIcon
                src="logo.svg"
                aria-label="homepage"
                width="101px"
                height="64px"
              />
            </LogoContainer>
          </NavLink>
          <FooterContainer>
            <SocialLink
              href="https://github.com/marcuskastner"
              src="github.svg"
            />
            <SocialLink
              href="https://www.linkedin.com/in/marcus-kastner/"
              src="linkedin.svg"
            />
          </FooterContainer>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
