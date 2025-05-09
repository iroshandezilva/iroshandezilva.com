import Link from "next/link";
import React from "react";

export default function LeaveDatesCaseSudyPage() {
  return (
    <div>
      <div className="mx-auto flex max-w-5xl">
        <div className="w-1/6">
          <p>
            Leave Dates is an easy-to-use staff leave planner. Keep your team
            organised with our annual leave software.
          </p>
          <div>
            <span>Bootstrap</span>
            <span>16 months</span>
            <Link href="#">Leavedates.com </Link>
          </div>
        </div>
        <div className="flex-1">
          <h1>Low-code platform to measure perceived quality of life.</h1>
        </div>
      </div>
    </div>
  );
}
