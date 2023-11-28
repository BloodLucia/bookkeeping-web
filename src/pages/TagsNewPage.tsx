import { BackIcon } from "../components/BackIcon"
import { Gradient } from "../components/Gradient"
import { TagForm } from "../components/TagForm"
import { TopNav } from "../components/TopNav"

export const TagsNewPage:React.FC = () => {
  return (
    <>
      <Gradient className="grow-0 shrink-0">
        <TopNav title="新建标签" icon={<BackIcon/>} />
      </Gradient>
      <TagForm type="create" />
    </>
  )
}