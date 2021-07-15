import React from "react";
import MobileHeader from "../MobileHeader";
import DesktopHeader from "../DesktopHeader";
import LeftColumn from "../LeftColumn";
import MiddleColumn from "../MiddleColumn";
import RightColumn from "../RightColumn";
import { Container } from "./styles";
import AdBanner from "../AdBanner";

const Layout: React.FC = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });

  return (
    <Container>
      <MobileHeader />
      <DesktopHeader />

      <span>{!loading && <AdBanner />}</span>

      <main>
        <LeftColumn isLoading={loading} />
        <MiddleColumn isLoading={loading} />
        <RightColumn isLoading={loading} />
      </main>
    </Container>
  );
};

export default Layout;
