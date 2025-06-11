import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import ProjectContent from "../../content/ProjectContent.json";
import ExperienceContent from "../../content/ExperienceContent.json";
import SkillsContent from "../../content/SkillsContent.json";
import ContactContent from "../../content/ContactContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const ProjectCards = lazy(() => import("../../components/ProjectCards"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        subheader=""
        icon="developer.svg"
        id="intro"
      />
      <ProjectCards content={ProjectContent} id="projects" />
      <ContentBlock
        direction="left"
        id={ExperienceContent.id}
        icon={ExperienceContent.icon}
        title={ExperienceContent.title}
        subheader={ExperienceContent.subheader}
        content={ExperienceContent.content}
      />
      <ContentBlock
        direction="right"
        title={SkillsContent.title}
        subheader=""
        content={SkillsContent.content}
        section={SkillsContent.section}
        icon="graphs.svg"
        id="skills"
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.content}
        id="contact"
      />
    </Container>
  );
};

export default Home;
