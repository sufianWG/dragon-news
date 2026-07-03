import { redirect } from "next/navigation";

const defaultCatId = "01";
export default function Home() {
  redirect(`/category/${defaultCatId}`);
}
