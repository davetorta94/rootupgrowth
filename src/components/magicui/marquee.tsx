import React, { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = true,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {

  
  return (
    <>
      <div
        {...props}
        className={cn(
          "group flex [gap:var(--gap)] overflow-hidden p-2 [--duration:40s] [--gap:1rem]",
          {
            "flex-row": !vertical,
            "flex-col": vertical,
          },
          className
        )}
      >
        {Array(repeat)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
                "animate-marquee flex-row": !vertical,
                "animate-marquee-vertical flex-col": vertical,
                "group-hover:[animation-play-state:paused]": pauseOnHover,
                // usar el estado aquí para invertir la dirección
               
              })}
              // si tu CSS no respeta la sintaxis anterior, fuerza inline
             
            >
              {children}
            </div>
          ))}
      </div>

      
    </>
  );
}


/* Version con boton toggle
"use client";

import React, { ComponentPropsWithoutRef, useState } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = true,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  const [isReversedState, setIsReversedState] = useState<boolean>(reverse);

  const reverseSliding = () => {
    setIsReversedState(prev => {
      const next = !prev;
      console.log("isReversed ->", next);
      return next;
    });
  };

  return (
    <>
      <div
        {...props}
        className={cn(
          "group flex [gap:var(--gap)] overflow-hidden p-2 [--duration:40s] [--gap:1rem]",
          {
            "flex-row": !vertical,
            "flex-col": vertical,
          },
          className
        )}
      >
        {Array(repeat)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
                "animate-marquee flex-row": !vertical,
                "animate-marquee-vertical flex-col": vertical,
                "group-hover:[animation-play-state:paused]": pauseOnHover,
                // usar el estado aquí para invertir la dirección
                "[animation-direction:reverse]": isReversedState,
              })}
              // si tu CSS no respeta la sintaxis anterior, fuerza inline
              style={isReversedState ? { animationDirection: "reverse" as const } : undefined}
            >
              {children}
            </div>
          ))}
      </div>

      <button
        onClick={reverseSliding}
        className="mt-4 px-3 py-2 bg-amber-900 text-white rounded"
        aria-pressed={isReversedState}
        type="button"
      >
        Toggle reverse
      </button>
    </>
  );
}
*/