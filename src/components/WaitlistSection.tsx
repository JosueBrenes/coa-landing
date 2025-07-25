import { useState } from "react";
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

const WaitlistSection = () => {
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
      toast({ description: "You've joined the waitlist!" });
      reset();
    } catch (err) {
      toast({ description: "Failed to join the waitlist", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gaming-primary">
          JOIN THE WAITLIST
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Be the first to know when Citizen of Arcanis launches and get exclusive early access.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="sr-only">Email</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="Enter your email address"
              required 
              {...register("email")}
              className="text-center text-lg py-3"
            />
          </div>
          <Button 
            type="submit" 
            variant="gaming" 
            size="lg"
            disabled={loading}
            className="w-full text-lg py-3"
          >
            {loading ? "JOINING..." : "JOIN NOW"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default WaitlistSection;