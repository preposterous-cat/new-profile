export const metadata = {
  title: "About Page",
  description: "About | Ariel's Page",
};

const AboutLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between px-24 py-14">
      {children}
    </div>
  );
};

export default AboutLayout;
