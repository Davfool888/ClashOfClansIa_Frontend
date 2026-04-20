import React from "react";
import { Target } from "lucide-react";

export default function DetectionPanel({ count = {}, loading }) {

  const data = Object.entries(count).map(([name, count]) => ({
    name,
    count,
    level: 10,
    confidence: 90,
    icon: Target
  }));

  const totalStructures = data.reduce((sum, item) => sum + item.count, 0);

  if (loading) {
    return (
      <div className="text-gray-400 text-sm">
        Analizando imagen...
      </div>
    );
  }

  return (
    <div className="
      bg-black/40 backdrop-blur-xl
      border border-purple-500/20
      rounded-2xl p-6
      max-w-lg
    ">

      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-100 mb-6">
        Detection Results
      </h2>

      {/* Items */}
      <div className="flex flex-col gap-3">
        {data.map((item, index) => {
          const IconComponent = item.icon;

          return (
            <div
              key={index}
              className="
                bg-white/5
                border border-white/10
                rounded-xl p-4
                transition-all duration-200
                hover:bg-white/10
              "
            >

              <div className="flex items-center gap-4">

                {/* Icon */}
                <div className="
                  bg-purple-500/10
                  border border-purple-500/20
                  p-3 rounded-lg
                  text-purple-400
                ">
                  <IconComponent className="w-5 h-5" strokeWidth={1.5} />
                </div>

                {/* Info */}
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-100">
                    {item.count}x {item.name}
                  </p>
                  <p className="text-xs text-gray-400">
                    Level {item.level}
                  </p>
                </div>

                {/* Confidence */}
                <div className="text-right">
                  <p className="text-xs text-gray-500 uppercase">
                    confidence
                  </p>
                  <p className="text-sm font-semibold text-purple-400">
                    {item.confidence}%
                  </p>
                </div>

              </div>

              {/* Progress */}
              <div className="mt-3 h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-purple-500 rounded-full transition-all"
                  style={{ width: `${item.confidence}%` }}
                />
              </div>

            </div>
          );
        })}
      </div>

      {/* Total */}
      <div className="
        mt-6 p-5 rounded-xl
        bg-white/5
        border border-white/10
        text-center
      ">
        <p className="text-xs text-gray-400 mb-1">
          Total Structures
        </p>
        <p className="text-2xl font-bold text-gray-100">
          {totalStructures}
        </p>
      </div>

    </div>
  );
}