export interface ContentBlockProps {
  icon: string;
  title: string;
  content: string;
  subheader: string;
  section?: {
    title: string;
    content: string;
    icon: string;
  }[];
  button?: (
    | {
        title: string;
        color?: undefined;
        destination: string;
      }
    | {
        title: string;
        color: string;
        destination: string;
      }
  )[];
  id: string;
  direction: "left" | "right";
}
