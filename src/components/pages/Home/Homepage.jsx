import { Typography, Media, Container } from "../../atoms";
import { Button } from "../../molecules";

const Homepage = ({ pages, ...props }) => {
  return (
    <Container.FadeIn>
      <Typography.Title>Les folies de Patrick</Typography.Title>
      <Typography.Subtitle>Mon petit forum</Typography.Subtitle>
      <Typography.Link
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        target="_blank"
      >
        Lien de Mon petit forum
      </Typography.Link>
      <Media.Image src="https://cdn.midjourney.com/824148b5-5310-493d-81f1-32ff342eeb86/0_1.png"></Media.Image>
      <Button.Switch>Button switch</Button.Switch>
      <Media.Video src="https://www.youtube.com/embed/z8N7BDUd-qg?mute=1"></Media.Video>
    </Container.FadeIn>
  );
};

export default Homepage;
