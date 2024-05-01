const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="overflow-auto h-full">
      <div className="w-screen h-full">
        {children}
      </div>
    </main>
  );
};

export default LandingLayout;
