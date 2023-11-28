import { Gradient } from "../components/Gradient"
import { Icon } from "../components/Icon"
import { TopNav } from "../components/TopNav"

export const ItemsPage: React.FC = () => {
  return (
    <div> 
      <Gradient>
        <TopNav title="账目列表" icon={
            <Icon name="menu" className="w-24px h-24px" />
          } />
      </Gradient>  
    </div>
  )
}