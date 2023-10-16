"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import { Zap } from "lucide-react";
import { useState } from "react";

interface SubscriptionButtonProps {
  isPro: boolean;
}

export const SubscriptionButton = ({
  isPro = false,
}: SubscriptionButtonProps) => {
  const [loading, setLoading] = useState(false);
  const handleClick = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/stripe");
      window.location.href = response.data.url;
    } catch (error: any) {
      console.log("BILLING_ERROR", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Button
      variant={isPro ? "default" : "premium"}
      disabled={loading}
      onClick={handleClick}
    >
      {isPro ? "Manage Subscription" : " Upgrade"}
      {!isPro && <Zap className="w-4 h-4 ml-2" size={20} />}
    </Button>
  );
};
