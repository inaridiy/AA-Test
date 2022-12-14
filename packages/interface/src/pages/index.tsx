import { ConnectButton } from "@/components/ConnectButton";
import { Header } from "@/components/Layouts/Header";
import { HomeLayout } from "@/components/Layouts/HomeLayout";

export default function Home() {
  return (
    <HomeLayout>
      <Header title="Accounts">
        <ConnectButton />
      </Header>
    </HomeLayout>
  );
}
