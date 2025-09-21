import GeneralLayout from "@/components/layouts/general/GeneralLayout";
import { ListFilter } from "lucide-react";
import FilterDropdown from "@/components/features/Updates/FilterDropdown/FilterDropdown";
import { MessageCircleQuestionMark } from "lucide-react";

export const metadata = {
  title: "Updates | ArcManga",
  description: "This website about manga, manhwa, webtoon etc.",
};

export default function Page() {
  return (
    <>
    <GeneralLayout title={"Updates"}>
      {/* Filter Section  */}
      <section className="flex items-center py-4 justify-end gap-2">
        <ListFilter />
        <FilterDropdown />
      </section>

      {true ? (
      <div className="h-full w-full flex flex-col items-center justify-center py-4 gap-4 text-gray-300">
        <MessageCircleQuestionMark size={124} />
        <h3 className="text-center text-xl font-normal">
          You haven't followed any content yet.
        </h3>
      </div> 

      ) : (
  
      <div className="w-full">
          <h2>Test</h2>
      </div>

      )}

    </GeneralLayout>
    </>
  );
}
