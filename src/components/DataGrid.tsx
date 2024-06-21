import {
  Flex,
  Text,
  Table,
  Th,
  Thead,
  Tr,
  Tbody,
  Td,
  TableContainer,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { RxDragHandleHorizontal } from "react-icons/rx";
import { RxDragHandleVertical } from "react-icons/rx";
import { FaCheckCircle } from "react-icons/fa";
import { IoCheckmark } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
const DataGrid = () => {
  const [isOpen, setIsOpen] = useState(false);
  const header = ["Created", "Name", "Type", "Risk Score", "Status"];
  const data = [
    {
      Created: { Date: "May 15, 2024", Time: "14:12:27" },
      Name: { Name: "KAROLY-EDWARD RACZ", Email: "sdfgh@dsadasda.com" },
      Type: "aiscan2",
      RiskSkore: "low",
      Status: "Approved",
    },
    {
      Created: { Date: "May 15, 2024", Time: "14:02:06" },
      Name: { Name: "KAROLY-EDWARD RACZ", Email: "dsadas@dsadas.com" },
      Type: "aiscan2",
      RiskSkore: "Not calculated",
      Status: "Customer Proccesing",
    },
    {
      Created: { Date: "May 03, 2024", Time: "08:57:14" },
      Name: { Name: "KAROLY-EDWARD RACZ", Email: "fasfas@dasdas.com" },
      Type: "aiscan2",
      RiskSkore: "low",
      Status: "Approved",
    },
    {
      Created: { Date: "May 03, 2024", Time: "08:33:55" },
      Name: { Name: "KAROLY-EDWARD RACZ", Email: "sfsafas@fsafas.com" },
      Type: "aiscan2",
      RiskSkore: "low",
      Status: "Approved",
    },
    {
      Created: { Date: "May 03, 2024", Time: "08:23:24" },
      Name: { Name: "KAROLY-EDWARD RACZ", Email: "dsada@fdsfas.com" },
      Type: "aiscan2",
      RiskSkore: "low",
      Status: "Approved",
    },
    {
      Created: { Date: "May 01, 2024", Time: "10:45:58" },
      Name: { Name: "ssdghj", Email: "dsafg@fasfa.com" },
      Type: "aiscan2",
      RiskSkore: "Not calculated",
      Status: "User Accepted KYC Invitation",
    },
    {
      Created: { Date: "Mar 22, 2024", Time: "09:57:47" },
      Name: { Name: "KAROLY-EDWARD RACZ", Email: "dasgasge@sdada.com" },
      Type: "aiscan2",
      RiskSkore: "low",
      Status: "Approved",
    },
    {
      Created: { Date: "Mar 22, 2024", Time: "09:53:16" },
      Name: { Name: "KAROLY-EDWARD RACZ", Email: "dafasf@sdsada.com" },
      Type: "aiscan2",
      RiskSkore: "low",
      Status: "Approved",
    },
  ];
  return (
    <TableContainer w="100%" whiteSpace="0">
      <Table variant="simple" w="100%" alignContent="center">
        <Thead>
          <Tr className="table-row">
            {header.map((name: string) => (
              <Th textAlign="center">
                <Text as="h5" color="text.secondary">
                  {name}
                </Text>
              </Th>
            ))}
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item, index) => (
            <Tr borderBottom="1px solid gray" key={index}>
              <Td textAlign="center">
                {
                  <Flex direction="column" gap="0.5rem">
                    <Text fontSize="12px">{item.Created.Date}</Text>
                    <Text fontSize="10px">{item.Created.Time}</Text>
                  </Flex>
                }
              </Td>
              <Td textAlign="center">
                {
                  <Flex direction="column" gap="0.5rem">
                    <Text fontSize="12px">{item.Name.Name}</Text>
                    <Text fontSize="10px">{item.Name.Email}</Text>
                  </Flex>
                }
              </Td>
              <Td textAlign="center">
                <Text fontSize="10px">{item.Type}</Text>
              </Td>
              <Td textAlign="center">
                <Flex alignItems="center" gap="0.5rem" justifyContent="center">
                  {item.RiskSkore === "low" ? <FaCheckCircle /> : null}
                  <Text
                    fontSize="10px"
                    color={item.RiskSkore === "low" ? "green" : "black"}
                  >
                    {item.RiskSkore === "low"
                      ? item.RiskSkore.toUpperCase()
                      : item.RiskSkore}
                  </Text>
                </Flex>
              </Td>
              <Td textAlign="center">
                <Flex justifyContent="center" alignItems="center" gap="0.5rem">
                  {item.Status === "Approved" ? (
                    <IoCheckmark />
                  ) : (
                    <BsThreeDots />
                  )}
                  <Text fontSize="10px">{item.Status}</Text>
                </Flex>
              </Td>
              <Td textAlign="center">
                <IconButton
                  size="xs"
                  aria-label="Expand"
                  onClick={() => setIsOpen(!isOpen)}
                  icon={
                    isOpen ? (
                      <RxDragHandleVertical />
                    ) : (
                      <RxDragHandleHorizontal />
                    )
                  }
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default DataGrid;
