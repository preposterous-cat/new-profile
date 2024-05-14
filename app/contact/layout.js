export const metadata = {
  title: "Contact Page",
  description: "Contact Page",
};

const contactLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between px-24 py-14">
      {children}
    </div>
  );
};

export default contactLayout;
