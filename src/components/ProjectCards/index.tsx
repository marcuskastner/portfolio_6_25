import { Card, Row, Col } from "antd";
import { Slide } from "react-awesome-reveal";
import { ProjectCardSection, CardIcon, CardTitle, CardText } from "./styles";
import {
  ApiOutlined,
  CodeOutlined,
  LineChartOutlined,
  ToolOutlined,
} from "@ant-design/icons";

interface Project {
  title: string;
  description: string;
  iconKey: string;
}

interface ProjectCardsProps {
  content: Project[];
  id: string;
}

const iconMap: Record<string, JSX.Element> = {
  api: <ApiOutlined />,
  code: <CodeOutlined />,
  chart: <LineChartOutlined />,
  tool: <ToolOutlined />,
};

const ProjectCards = ({ content, id }: ProjectCardsProps) => {
  const projectData = content.map((p) => ({
    ...p,
    icon: iconMap[p.iconKey],
  }));
  return (
    <ProjectCardSection id={id}>
      <Slide direction="up" triggerOnce>
        <Row justify="center">
          <Col span={24} style={{ textAlign: "center" }}>
            <h6>Projects</h6>
          </Col>
        </Row>
        <Row gutter={[32, 32]} justify="center">
          {projectData.map((project, index) => (
            <Col xs={24} sm={24} md={12} key={index}>
              <Card
                bordered={false}
                hoverable
                style={{ height: "100%", padding: "1rem" }}
              >
                <CardIcon>{project.icon}</CardIcon>
                <CardTitle>{project.title}</CardTitle>
                <CardText>{project.description}</CardText>
              </Card>
            </Col>
          ))}
        </Row>
      </Slide>
    </ProjectCardSection>
  );
};

export default ProjectCards;
