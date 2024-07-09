import { twMerge } from "tailwind-merge";
import { usePathfinding } from "../hooks/usePathfinding";
import { MAX_COLS, MAX_ROWS } from "../utils/constants";

export function Grid() {
  const { grid } = usePathfinding();
  return (
    <div
      className={twMerge(
        //Base Classes
        "flex items-center flex-col justify-center border-sky-300",
        //Grid Height
        `lg:min-h-[${MAX_ROWS * 17}px]
        md:min-h-[${MAX_ROWS * 15}px]
        xs:min-h-[${MAX_ROWS * 8}px]
        min-h-[${MAX_ROWS * 7}px]`,
        //Grid Width
        `lg:min-h-[${MAX_COLS * 17}px]
        md:min-h-[${MAX_COLS * 15}px]
        xs:min-h-[${MAX_COLS * 8}px]
        min-h-[${MAX_COLS * 7}px]`
      )}
    >
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((tile, tileIndex) => (
            <div key={tileIndex} className="bg-white h-2 w-2 border"></div>
          ))}
        </div>
      ))}
    </div>
  );
}
