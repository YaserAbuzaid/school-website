import ReactPlayer from "react-player";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="bg-yellow-500 text-white px-6 py-3 rounded-full shadow hover:bg-yellow-600 transition w-[190px] h-[50px] cursor-pointer">
          <span className="text-xl">▶️</span> Watch Campus Tour
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle></AlertDialogTitle>
          <AlertDialogCancel className="w-1 bg-transparent border-none shadow-none text-2xl">
            ❌
          </AlertDialogCancel>

          {/* Responsive iframe */}
          <div className="relative w-full pt-[56.25%] rounded-md overflow-hidden">
          <iframe
  className="absolute top-0 left-0 w-full h-full rounded-md"
  src="https://www.youtube.com/embed/bO4RoQL9H8I?autoplay=1&si=WJbH7PgKvMrfCIsU"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
></iframe>
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter></AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}