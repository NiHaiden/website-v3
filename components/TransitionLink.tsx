"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";

export default function TransitionLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const router = useRouter();

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      if (document.startViewTransition) {
        document.startViewTransition(async () => {
          router.push(href);
          // Give React time to flush the new route
          await new Promise((r) => setTimeout(r, 100));
        });
      } else {
        router.push(href);
      }
    },
    [href, router]
  );

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
