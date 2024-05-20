import PortfolioComponent from "@/components/main/portfolio";
import { Button } from "@/components/ui/button";

const portfolioPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between pt-5 px-5">
      <PortfolioComponent />
    </div>
  );
};

export default portfolioPage;
