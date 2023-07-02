import { Box, Stack } from "@mui/material";
import Container from "@mui/material/Container";
import React from "react";

export function Footer() {
  return (
    <div className="footer_config">
      <Container>
        <Stack className="main_footer_container">
          <Stack flexDirection={"row"} style={{ height: "242px" }}>
            <Stack className="info" flexDirection={"column"}>
              <Box>
                <img src={"/papay.svg"} />
              </Box>
              <Box className="main_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor Sed ut perspiciatis unde omnis iste
              </Box>
              <Stack className="contact_links">
                <Box>
                  <img src={"/icons/facebook.svg"} />
                </Box>
                <Box>
                  <img src={"/icons/twiter.svg"} />
                </Box>
                <Box>
                  <img src={"/icons/instagram.svg"} />
                </Box>
                <Box>
                  <img src={"/icons/youtube.svg"} />
                </Box>
              </Stack>
            </Stack>
            <Stack className="parts">
              <Box className="part_subject">Bolimlar</Box>
              <Box className="divider "></Box>
              <Box className="targets">
                Bosh Sahifa Oshxonalar Jamiyat Yordam
              </Box>
            </Stack>
            <Stack className="find_us">
              <Box className="find">Bizni top</Box>
              <Box className="divider"></Box>
              <Stack className="details" sx={{ mt: "19.36px " }}>
                <Box className="detail_first">L.</Box>
                <Box className="detail_second">Uzbekistan</Box>
              </Stack>
              <Stack className="details" sx={{ mt: "42px " }}>
                <Box className="detail_first">P.</Box>
                <Box className="detail_second">+998 - 99 266 25 62</Box>
              </Stack>
              <Stack className="details" sx={{ mt: "9 px " }}>
                <Box className="detail_first">E.</Box>
                <Box className="detail_second">Papays@restaurant.com</Box>
              </Stack>
            </Stack>
          </Stack>
          <Box className="liner"></Box>
          <Box className="copyrights">
            Copyright Papays 2022, All right reserved.
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
