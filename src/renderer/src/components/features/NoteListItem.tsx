import { cn, formatDateFromTimestamp } from "@renderer/utils";
import { NoteInfo } from "@shared/models";
import { ComponentProps, memo } from "react";

type NoteListItemProps = NoteInfo & {
  isActive?: boolean;
} & ComponentProps<"li">;
export const NoteListItem = memo(
  ({
    title,
    id,
    className,
    lastEditTime,
    isActive = false,
    content,
    ...props
  }: NoteListItemProps) => {

    return (
      <li
        data-id={id}
        className={cn(
          className,
          "cursor-pointer px-2.5 py-3 rounded-md transition-colors duration-300",
          { "bg-cyan-700": isActive },
          {"hover:bg-cyan-700": !isActive}
        )}
        {...props}
      >
        <h3 className="font-bold truncate mb-1">{title}</h3>
        <span className="text-sm inline-block w-full truncate font-light text-left">
          {formatDateFromTimestamp(lastEditTime)}
        </span>
      </li>
    );
  }
);
