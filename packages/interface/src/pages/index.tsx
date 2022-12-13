import { ConnectButton } from "@rainbow-me/rainbowkit";

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
