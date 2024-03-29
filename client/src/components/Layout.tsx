import { Box } from "@mui/material";
import bgMobileLight from "../assets/bg-mobile-light.jpg";
import bgDesktopLight from "../assets/bg-desktop-light.jpg";
import Header from "./Header";

const Layout = () => {
  return (
    <Box>
      <Box
        width="100vw"
        padding="48px 24px 0px 24px"
        sx={{
          backgroundImage: {
            xs: `url(${bgMobileLight})`,
            lg: `url(${bgDesktopLight})`,
          },
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          backgroundSize: {
            xs: "100% 200px",
            lg: "100% 300px",
          },
          height: {
            xs: "200px",
            lg: "300px",
          },
        }}
      >
        <Header />
      </Box>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        soluta et esse iusto recusandae deleniti reiciendis accusamus delectus,
        possimus corrupti fugiat, eveniet impedit! Voluptatem quaerat deserunt
        nemo, perspiciatis vel autem. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Aliquid nisi itaque quia! Eum soluta adipisci, eaque
        ut quas impedit voluptatum officia error possimus obcaecati at,
        molestias aliquid autem corrupti consequuntur. Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Repudiandae aperiam dolorem beatae
        sed sapiente commodi in harum placeat porro facilis dolor amet quod,
        doloremque quibusdam, quasi unde expedita! Quas, ipsa.
      </div>
    </Box>
  );
};

export default Layout;
