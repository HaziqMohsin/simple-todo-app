import { Inter } from "next/font/google";
import TodoList from "@/components/TodoList";
import InputForm from "@/components/InputForm";
import { data } from "@/utils/exampleData";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${inter.className} flex min-h-screen flex-col items-center px-4 py-24 md:p-24`}
    >
      <InputForm />
      <div>
        <TodoList />
      </div>
    </main>
  );
}
