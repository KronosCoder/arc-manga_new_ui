import GeneralLayout from "@/components/layouts/general/GeneralLayout";

export const metadata = {
  title: "Library | ArcManga",
  description: "This website about manga, manhwa, webtoon etc.",
};

export default function page() {
  return (
    <GeneralLayout title={'Library'}>
      <div className="">
        <h3>Content</h3>
      </div>
    </GeneralLayout>
  )
}
