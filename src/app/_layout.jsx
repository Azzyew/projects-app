import { Slot } from "expo-router";
import { SafeAreaView } from "react-native";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

export default function Layout() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { refetchInterval: 3000 }
    }
  });

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView className="flex-1 bg-sky-100">
        <Slot />
      </SafeAreaView>
    </QueryClientProvider>
  );
}