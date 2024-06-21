import { Flex } from "@chakra-ui/react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  return (
    <Flex>
      <Pie
        data={{
          labels: [
            "Aproved",
            "Rejected",
            "Cancelled",
            "Ready for Review",
            "In Progress",
          ],
          datasets: [
            {
              //   label: "# of Votes",
              data: [11, 1, 1, 10, 54],
              backgroundColor: ["green", "orange", "red", "yellow", "cyan"],
            },
          ],
        }}
      />
    </Flex>
  );
};

export default PieChart;
