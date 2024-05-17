import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
export default function Home() {
  return (
   <p className="p-5 flex align-middle gap-3">
    <UserButton
    afterSignOutUrl="/"/>
    NAME
   </p>
  );
}
