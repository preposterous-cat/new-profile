export const metadata = {
  title: "Contact Page",
  description: "Contact Page",
};

const contactLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between lg:px-16 px-10 py-14">
      {children}
    </div>
  );
};

export default contactLayout;
