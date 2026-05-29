"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
  icon?: React.ReactNode;
}

export function BentoCard({
  children,
  className,
  title,
  description,
  icon,
}: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "bento-card flex flex-col justify-between overflow-hidden",
        className
      )}
    >
      <div className="flex flex-col gap-2">
        {icon && <div className="text-accent">{icon}</div>}
        {title && <h3 className="text-xl font-bold tracking-tight">{title}</h3>}
        {description && (
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        )}
      </div>
      <div className="mt-4 flex-grow">{children}</div>
    </motion.div>
  );
}
