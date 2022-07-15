import { Box, Button, Text } from "@chakra-ui/react";
import { AppShell, Page } from "@saas-ui/pro";
import type { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
  return (
    <AppShell
      variant="fullscreen"
      navbar={
        <Box height="16" borderBottomWidth="1px">
          Navbar
        </Box>
      }
      sidebar={
        <Box width="30%" borderRightWidth="1px">
          Sidebar
        </Box>
      }
      footer={
        <Box height="16" borderTopWidth="1px">
          Footer
        </Box>
      }
    >
      <Box as="main">
        <Page
          title="Settings"
          description="Manage your settings"
          variant="settings"
        >
          <Box>
            <Button variant="primary">Text</Button>
          </Box>
          <Text>chakra ui </Text>
        </Page>
      </Box>
    </AppShell>
  );
};

export default Home;
