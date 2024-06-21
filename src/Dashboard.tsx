import { Flex, Text } from "@chakra-ui/react";
import PieChart from "./components/PieChart";
import DataGrid from "./components/DataGrid";

const Dashboard = () => {
  return (
    <Flex p="1rem" direction="column" overflow="auto" position="relative">
      <Flex w="100%">
        <Text as="h2">Dashboard</Text>
      </Flex>
      <Flex p="1rem" bg="#fff" minH="80vh" direction="column">
        <Flex> KYC Application Reports</Flex>
        <Flex w="100%" justifyContent="center" mt="1rem">
          <PieChart />
        </Flex>
        <Flex mt="2rem" w="100%">
          <DataGrid />
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Dashboard;
