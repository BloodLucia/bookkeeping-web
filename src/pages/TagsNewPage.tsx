import { Gradient } from "../components/Gradient"
import { TopNav } from "../components/TopNav"

export const TagsNewPage:React.FC = () => {
  return (
    <>
      <Gradient grow-0 shrink-0>
        <TopNav title="新建标签" icon={<BackIcon/>} />
      </Gradient>
      <TagForm type="create" />
    </>
  )
}