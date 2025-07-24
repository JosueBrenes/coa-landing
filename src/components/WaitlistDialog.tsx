import { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { app } from "@/firebase";
import { useToast } from "@/hooks/use-toast";

interface WaitlistForm {
  email: string;
}

const WaitlistDialog = ({ children }: { children: React.ReactNode }) => {
  const { register, handleSubmit, reset } = useForm<WaitlistForm>();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: WaitlistForm) => {
    try {
      setLoading(true);
      const db = getFirestore(app);
      await addDoc(collection(db, "waitlist"), {
        email: data.email,
        createdAt: new Date().toISOString(),
      });
      toast({ description: "You\'ve joined the waitlist!" });
      reset();
    } catch (err) {
      toast({ description: "Failed to join the waitlist", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Join the Waitlist</DialogTitle>
          <DialogDescription>
            Enter your email to receive updates about Citizen of Arcanis.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required {...register("email")}/>
          </div>
          <DialogFooter>
            <Button type="submit" variant="gaming" disabled={loading}>
              {loading ? "Joining..." : "Join"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistDialog;
