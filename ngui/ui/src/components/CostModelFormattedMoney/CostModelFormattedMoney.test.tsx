import { createRoot } from "react-dom/client";
import TestProvider from "tests/TestProvider";
import CostModelFormattedMoney from "./CostModelFormattedMoney";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const root = createRoot(div);
  root.render(
    <TestProvider>
      <CostModelFormattedMoney value={0} />
    </TestProvider>
  );
  root.unmount();
});
