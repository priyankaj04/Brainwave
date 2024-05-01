import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Robot from "@/components/Robot";
// import { getApiLimitCount } from "@/lib/api-limit";
// import { checkSubscription } from "@/lib/subscription";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  // const apiLimitCount = await getApiLimitCount();
  // const isPro = await checkSubscription();
  const isPro = true;

  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:flex-col md:fixed md:w-72 md:inset-y-0 bg-n-8">
        <Sidebar apiLimitCount={5} isPro={isPro} />
      </div>
      <main className="md:pl-72">
        <Navbar />
        {children}
      </main>
      <Robot />
    </div>
  );
};

export default DashboardLayout;
