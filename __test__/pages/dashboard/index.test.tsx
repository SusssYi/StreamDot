// Test dashboard page
import DashboardIndexPage from "@/pages/dashboard";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

test("Dashboard page", () => {
      render(<DashboardIndexPage />);
      const heading = screen.getByRole("heading");
      expect(heading).toHaveTextContent("Dashboard");
});
